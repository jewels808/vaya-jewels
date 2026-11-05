import { createElement, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SegmentedControl } from 'glisse';
import 'glisse/styles.css';

const products = [
	{ id: 1, name: 'Bague Monaco', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Bague Monaco.avif', description: 'Pricing and product details are available on request.' },
	{ id: 2, name: 'Sipineli Ring', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Sipineli ring.avif', description: 'Pricing and product details are available on request.' },
	{ id: 3, name: 'Bracelet', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet.avif', description: 'Pricing and product details are available on request.' },
	{ id: 4, name: 'Bracelet (2)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (2).avif', description: 'Pricing and product details are available on request.' },
	{ id: 5, name: 'Bracelet (3)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (3).avif', description: 'Pricing and product details are available on request.' },
	{ id: 6, name: 'Collier et bracelet Clover on or', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover on or.avif', description: 'Pricing and product details are available on request.' },
	{ id: 7, name: 'Collier et bracelet Clover', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover.avif', description: 'Pricing and product details are available on request.' },
	{ id: 9, name: 'Parure Tiffany & Co', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Parure Tiffany & Co.avif', description: 'Pricing and product details are available on request.' },
	{ id: 10, name: 'Necklace Set', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/neckless.avif', description: 'Pricing and product details are available on request.' },
	{ id: 11, name: 'Parure argentée', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure argentée.avif', description: 'Pricing and product details are available on request.' },
	{ id: 12, name: 'Parure Dior en acier', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Dior en acier.avif', description: 'Pricing and product details are available on request.' },
	{ id: 13, name: 'Parure Roberto 2pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 2pcs.avif', description: 'Pricing and product details are available on request.' },
	{ id: 14, name: 'Parure Roberto 3pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 3pcs.avif', description: 'Pricing and product details are available on request.' },
	{ id: 15, name: 'Parure Roberto', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto.avif', description: 'Pricing and product details are available on request.' }
];

const grid = document.querySelector('#product-grid');
const bagCount = document.querySelector('.bag-count');
const bagButton = document.querySelector('.bag-toggle');
const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const toast = document.querySelector('.toast');
const favoriteIds = new Set();
const storedBagItems = JSON.parse(sessionStorage.getItem('vaya-bag-items') || '[]');
let bagItems = Array.isArray(storedBagItems) ? storedBagItems.filter((item) => products.some((product) => product.id === item.id) && Number.isSafeInteger(item.quantity) && item.quantity >= 0) : [];

function setTheme(theme, persist = false) {
	const isDark = theme === 'dark';
	document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
	themeButton.setAttribute('aria-pressed', String(isDark));
	themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
	themeButton.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
	themeColor.content = isDark ? '#10121a' : '#f3f0e9';
	if (persist) {
		try {
			localStorage.setItem('vaya-theme', isDark ? 'dark' : 'light');
		} catch {
			showToast('Theme changed, but could not be saved for next time.');
		}
	}
}

setTheme(document.documentElement.dataset.theme, false);
themeButton.addEventListener('click', () => {
	setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

function getBagItemCount() {
	return bagItems.reduce((total, item) => total + item.quantity, 0);
}

function updateBagCount() {
	const itemCount = getBagItemCount();
	bagCount.textContent = itemCount;
	bagButton.setAttribute('aria-label', `Shopping bag, ${itemCount} item${itemCount === 1 ? '' : 's'}`);
	bagButton.setAttribute('aria-expanded', bagModal.classList.contains('is-open'));
}

function saveBag() {
	sessionStorage.setItem('vaya-bag-items', JSON.stringify(bagItems));
	updateBagCount();
}

function renderBag() {
	const bagList = document.querySelector('#bag-items');
	const itemCount = getBagItemCount();
	document.querySelector('#bag-summary').textContent = `${itemCount} ${itemCount === 1 ? 'piece' : 'pieces'} in your bag`;
	if (bagItems.length === 0) {
		bagList.innerHTML = '<div class="bag-empty"><span class="bag-empty-mark" aria-hidden="true">✳</span><h3>Your bag is taking a moment.</h3><p>Explore the collection and add something meaningful.</p><button class="text-button bag-empty-browse" type="button">Explore collection <span>↗</span></button></div>';
		bagList.querySelector('.bag-empty-browse').addEventListener('click', closeBag);
		return;
	}
	bagList.innerHTML = bagItems.map((item) => {
		const product = products.find((entry) => entry.id === item.id);
		return `<article class="bag-item${item.quantity === 0 ? ' is-zero' : ''}" data-id="${product.id}">
			<div class="bag-item-image">${product.image ? `<img src="${product.image}" alt="" loading="lazy" decoding="async" />` : ''}</div>
			<div class="bag-item-details"><p class="product-category">${product.label}</p><h3>${product.name}</h3><p class="bag-item-price">${product.price}</p></div>
			<div class="bag-quantity-stack" aria-label="Quantity controls for ${product.name}">
				<button class="bag-qty-button bag-qty-down" type="button" aria-label="Decrease quantity for ${product.name}"${item.quantity === 0 ? ' disabled' : ''}>−</button>
				<span class="bag-quantity-value">${item.quantity}</span>
				<button class="bag-qty-button bag-qty-up" type="button" aria-label="Increase quantity for ${product.name}">+</button>
			</div>
			<button class="bag-remove" type="button" aria-label="Remove ${product.name} from bag">×</button>
		</article>`;
	}).join('');
	bagList.querySelectorAll('.bag-item').forEach((row) => {
		const id = Number(row.dataset.id);
		const quantityValue = row.querySelector('.bag-quantity-value');
		const updateQuantity = (nextQuantity) => {
			const item = bagItems.find((entry) => entry.id === id);
			if (!item) return;
			const safeQuantity = Math.max(0, Number.isFinite(nextQuantity) ? Math.round(nextQuantity) : item.quantity);
			item.quantity = safeQuantity;
			saveBag();
			quantityValue.textContent = safeQuantity;
			row.classList.toggle('is-zero', safeQuantity === 0);
			row.querySelector('.bag-qty-down').disabled = safeQuantity === 0;
			const itemCount = getBagItemCount();
			document.querySelector('#bag-summary').textContent = `${itemCount} ${itemCount === 1 ? 'piece' : 'pieces'} in your bag`;
		};
		row.querySelector('.bag-qty-down').addEventListener('click', () => {
			const item = bagItems.find((entry) => entry.id === id);
			if (!item) return;
			updateQuantity(item.quantity - 1);
		});
		row.querySelector('.bag-qty-up').addEventListener('click', () => {
			const item = bagItems.find((entry) => entry.id === id);
			if (!item) return;
			updateQuantity(item.quantity + 1);
		});
		row.querySelector('.bag-remove').addEventListener('click', () => {
			bagItems = bagItems.filter((item) => item.id !== id);
			saveBag();
			renderBag();
			showToast('Item removed from bag');
		});
	});
}

function visualMarkup(product, label = `VAYA / 0${product.id}`, isModal = false) {
	const image = product.image ? `<img src="${product.image}" alt="${product.name}" loading="${isModal ? 'eager' : 'lazy'}" decoding="async" />` : '';
	const caption = isModal ? `<span>${label}</span>` : '';
	return `<div${isModal ? ' id="modal-visual"' : ''} class="${isModal ? 'modal-visual ' : ''}product-visual ${product.visual}${product.image ? ' has-product-image' : ''}">${image}${caption}</div>`;
}

function renderProducts(filter = 'all') {
	const visibleProducts = filter === 'all' ? products : products.filter((product) => product.category === filter);
	if (visibleProducts.length === 0) {
		const categoryName = filter === 'sets' ? 'Jewelry sets' : filter.charAt(0).toUpperCase() + filter.slice(1);
		grid.innerHTML = `<p class="collection-empty" role="status">${categoryName} are coming soon.</p>`;
		return;
	}
	grid.innerHTML = visibleProducts.map((product) => `
		<article class="product-card reveal is-visible" data-category="${product.category}" data-id="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}">
			${visualMarkup(product)}
			<div class="product-info"><div><p class="product-category">${product.label}</p><h3>${product.name}</h3><p class="product-price">${product.price}</p></div><div class="card-actions"><button class="heart-button${favoriteIds.has(product.id) ? ' is-liked' : ''}" type="button" aria-label="${favoriteIds.has(product.id) ? 'Remove' : 'Add'} ${product.name} ${favoriteIds.has(product.id) ? 'from' : 'to'} wishlist" aria-pressed="${favoriteIds.has(product.id)}"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" /></svg></button><button class="add-button" type="button" aria-label="Order ${product.name}">Order +</button></div></div>
		</article>`).join('');
	grid.querySelectorAll('.product-card').forEach((card) => {
		card.addEventListener('click', (event) => { if (!event.target.closest('button')) openModal(Number(card.dataset.id)); });
		card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal(Number(card.dataset.id)); } });
		card.querySelector('.heart-button').addEventListener('click', (event) => { event.stopPropagation(); const heart = event.currentTarget; const id = Number(card.dataset.id); const liked = favoriteIds.has(id); if (liked) favoriteIds.delete(id); else favoriteIds.add(id); heart.classList.toggle('is-liked', !liked); heart.setAttribute('aria-pressed', !liked); heart.setAttribute('aria-label', `${!liked ? 'Remove' : 'Add'} ${products.find((item) => item.id === id).name} ${!liked ? 'from' : 'to'} wishlist`); showToast(!liked ? 'Added to wishlist' : 'Removed from wishlist'); });
		card.querySelector('.add-button').addEventListener('click', (event) => { event.stopPropagation(); addToBag(products.find((item) => item.id === Number(card.dataset.id))); });
	});
}

function addToBag(product) {
	const item = bagItems.find((entry) => entry.id === product.id);
	if (item) item.quantity += 1;
	else bagItems.push({ id: product.id, quantity: 1 });
	saveBag();
	bagCount.classList.remove('bump');
	void bagCount.offsetWidth;
	bagCount.classList.add('bump');
	showToast(`${product.name} added to bag`);
}
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200); }

const modal = document.querySelector('#quick-view');
const bagModal = document.querySelector('#bag-view');
updateBagCount();
let modalScrollY = 0;
let returnFocusElement = null;
let previousBodyOverflow = '';
let previousDocumentOverflow = '';
let previousBodyPosition = '';
let previousBodyTop = '';
let previousBodyWidth = '';
let previousBodyLeft = '';
let previousBodyRight = '';
function lockPage() { modalScrollY = window.scrollY; previousBodyOverflow = document.body.style.overflow; previousDocumentOverflow = document.documentElement.style.overflow; previousBodyPosition = document.body.style.position; previousBodyTop = document.body.style.top; previousBodyWidth = document.body.style.width; previousBodyLeft = document.body.style.left; previousBodyRight = document.body.style.right; document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden'; document.body.style.position = 'fixed'; document.body.style.top = `-${modalScrollY}px`; document.body.style.left = '0'; document.body.style.right = '0'; document.body.style.width = '100%'; }
function unlockPage() { document.body.style.overflow = previousBodyOverflow; document.documentElement.style.overflow = previousDocumentOverflow; document.body.style.position = previousBodyPosition; document.body.style.top = previousBodyTop; document.body.style.width = previousBodyWidth; document.body.style.left = previousBodyLeft; document.body.style.right = previousBodyRight; const scrollY = modalScrollY; window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: 'instant' })); if (returnFocusElement) returnFocusElement.focus(); }
function openModal(id) { const product = products.find((item) => item.id === id); document.querySelector('#modal-name').textContent = product.name; document.querySelector('#modal-category').textContent = product.label; document.querySelector('#modal-price').textContent = product.price; document.querySelector('#modal-description').textContent = product.description; const visual = document.querySelector('#modal-visual'); visual.outerHTML = visualMarkup(product, 'VAYA / OBJECT', true); document.querySelector('.quick-modal').scrollTop = 0; returnFocusElement = document.activeElement; lockPage(); modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.querySelector('.modal-add').onclick = () => { addToBag(product); closeModal(); }; document.querySelector('.modal-close').focus(); }
function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); unlockPage(); }
function openBag() { renderBag(); returnFocusElement = bagButton; lockPage(); bagModal.classList.add('is-open'); bagModal.setAttribute('aria-hidden', 'false'); bagButton.setAttribute('aria-expanded', 'true'); document.querySelector('.bag-close').focus(); }
function closeBag() { bagModal.classList.remove('is-open'); bagModal.setAttribute('aria-hidden', 'true'); bagButton.setAttribute('aria-expanded', 'false'); unlockPage(); }

renderProducts();
function FilterControls() {
	const [filter, setFilter] = useState('all');
	const items = [
		{ value: 'all', label: 'All pieces' },
		{ value: 'rings', label: 'Rings' },
		{ value: 'necklaces', label: 'Necklaces' },
		{ value: 'bracelets', label: 'Bracelets' },
		{
			value: 'sets',
			label: createElement('span', { className: 'filter-label' }, 'Jewelry sets')
		}
	];
	return createElement(SegmentedControl, {
		'aria-label': 'Filter collection',
		items,
		value: filter,
		onValueChange: (nextFilter) => {
			setFilter(nextFilter);
			grid.classList.add('is-filtering');
			setTimeout(() => {
				renderProducts(nextFilter);
				grid.classList.remove('is-filtering');
			}, 260);
		}
	});
}
createRoot(document.querySelector('#collection-filter-track')).render(createElement(FilterControls));
document.querySelector('.modal-close').addEventListener('click', closeModal); modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); }); document.querySelector('.bag-close').addEventListener('click', closeBag); document.querySelector('.bag-continue').addEventListener('click', closeBag); bagModal.addEventListener('click', (event) => { if (event.target === bagModal) closeBag(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); else if (event.key === 'Escape' && bagModal.classList.contains('is-open')) closeBag(); });
document.querySelector('.wishlist-toggle').addEventListener('click', (event) => { const active = event.currentTarget.classList.toggle('is-liked'); event.currentTarget.setAttribute('aria-pressed', active); showToast(active ? 'Wishlist selected' : 'Wishlist cleared'); });
bagButton.addEventListener('click', openBag);
const menuButton = document.querySelector('.menu-toggle'); const mobileNav = document.querySelector('.mobile-nav'); const siteHeader = document.querySelector('#site-header'); menuButton.addEventListener('click', () => { const open = mobileNav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); mobileNav.setAttribute('aria-hidden', !open); if (open) siteHeader.classList.remove('is-hidden'); }); mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileNav.classList.remove('is-open'); mobileNav.setAttribute('aria-hidden', 'true'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); siteHeader.classList.remove('is-hidden'); }));
let previousScrollY = window.scrollY;
let scrollFrameId = null;
window.addEventListener('scroll', () => {
	if (scrollFrameId !== null) return;
	scrollFrameId = window.requestAnimationFrame(() => {
		const currentScrollY = window.scrollY;
		const scrollDelta = currentScrollY - previousScrollY;
		siteHeader.classList.toggle('scrolled', currentScrollY > 30);
		if (currentScrollY < 80 || mobileNav.classList.contains('is-open') || modal.classList.contains('is-open') || siteHeader.contains(document.activeElement)) {
			siteHeader.classList.remove('is-hidden');
		} else if (scrollDelta > 6 && currentScrollY > 160) {
			siteHeader.classList.add('is-hidden');
		} else if (scrollDelta < -6) {
			siteHeader.classList.remove('is-hidden');
		}
		previousScrollY = currentScrollY;
		scrollFrameId = null;
	});
}, { passive: true });
const hero = document.querySelector('.hero'); const heroArt = document.querySelector('.hero-art'); let pointerFrameId = null; let pointerX = 0; let pointerY = 0; hero.addEventListener('pointermove', (event) => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 761) return; pointerX = event.clientX; pointerY = event.clientY; if (pointerFrameId !== null) return; pointerFrameId = window.requestAnimationFrame(() => { const bounds = hero.getBoundingClientRect(); const x = ((pointerX - bounds.left) / bounds.width - .5) * 12; const y = ((pointerY - bounds.top) / bounds.height - .5) * 8; heroArt.style.setProperty('--mouse-x', `${x}px`); heroArt.style.setProperty('--mouse-y', `${y}px`); pointerFrameId = null; }); }); hero.addEventListener('pointerleave', () => { if (pointerFrameId !== null) window.cancelAnimationFrame(pointerFrameId); pointerFrameId = null; heroArt.style.setProperty('--mouse-x', '0px'); heroArt.style.setProperty('--mouse-y', '0px'); });
const heroAnimationObserver = new IntersectionObserver(([entry]) => hero.classList.toggle('is-animation-visible', entry.isIntersecting), { threshold: .01 });
heroAnimationObserver.observe(hero);
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
