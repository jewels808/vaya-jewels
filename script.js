const products = [
	{ id: 1, name: 'Bague Monaco', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Bague Monaco.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 2, name: 'Sipineli Ring', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Sipineli ring.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 3, name: 'Bracelet', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 4, name: 'Bracelet (2)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (2).jpg', description: 'Pricing and product details are available on request.' },
	{ id: 5, name: 'Bracelet (3)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (3).jpg', description: 'Pricing and product details are available on request.' },
	{ id: 6, name: 'Collier et bracelet Clover on or', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover on or.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 7, name: 'Collier et bracelet Clover', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 9, name: 'Parure Tiffany & Co', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Parure Tiffany & Co.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 10, name: 'Necklace Set', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/neckless.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 11, name: 'Parure argentée', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure argentée.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 12, name: 'Parure Dior en acier', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Dior en acier.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 13, name: 'Parure Roberto 2pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 2pcs.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 14, name: 'Parure Roberto 3pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 3pcs.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 15, name: 'Parure Roberto', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto.jpg', description: 'Pricing and product details are available on request.' }
	{ id: 1, name: 'Bague Monaco', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Bague Monaco.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 2, name: 'Sipineli Ring', category: 'rings', label: 'RING', price: 'Price on request', visual: 'visual-ring', image: 'assets/products/rings/Sipineli ring.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 3, name: 'Bracelet', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 4, name: 'Bracelet (2)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (2).jpg', description: 'Pricing and product details are available on request.' },
	{ id: 5, name: 'Bracelet (3)', category: 'bracelets', label: 'BRACELET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/bracelets/bracelet (3).jpg', description: 'Pricing and product details are available on request.' },
	{ id: 6, name: 'Collier et bracelet Clover on or', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover on or.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 7, name: 'Collier et bracelet Clover', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Collier et bracelet Clover.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 9, name: 'Parure Tiffany & Co', category: 'necklaces', label: 'NECKLACE', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/necklaces/Parure Tiffany & Co.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 10, name: 'Necklace Set', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/neckless.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 11, name: 'Parure argentée', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure argentée.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 12, name: 'Parure Dior en acier', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Dior en acier.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 13, name: 'Parure Roberto 2pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 2pcs.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 14, name: 'Parure Roberto 3pcs', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto 3pcs.jpg', description: 'Pricing and product details are available on request.' },
	{ id: 15, name: 'Parure Roberto', category: 'sets', label: 'JEWELRY SET', price: 'Price on request', visual: 'visual-necklace', image: 'assets/products/jewelry sets/Parure Roberto.jpg', description: 'Pricing and product details are available on request.' }
];

const grid = document.querySelector('#product-grid');
const bagCount = document.querySelector('.bag-count');
const bagButton = document.querySelector('.bag-toggle');
const toast = document.querySelector('.toast');
const favoriteIds = new Set();
let bagItems = Number(sessionStorage.getItem('vaya-bag-count') || 0);
bagCount.textContent = bagItems;
bagButton.setAttribute('aria-label', `Shopping bag, ${bagItems} item${bagItems === 1 ? '' : 's'}`);

function visualMarkup(product, label = `VAYA / 0${product.id}`, isModal = false) {
	const image = product.image ? `<img src="${product.image}" alt="${product.name}" loading="${isModal ? 'eager' : 'lazy'}" decoding="async" />` : '';
	const caption = isModal ? `<span>${label}</span>` : '';
	return `<div${isModal ? ' id="modal-visual"' : ''} class="${isModal ? 'modal-visual ' : ''}product-visual ${product.visual}${product.image ? ' has-product-image' : ''}">${image}${caption}</div>`;
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
	const visibleProducts = filter === 'all' ? products : products.filter((product) => product.category === filter);
	if (visibleProducts.length === 0) {
		const categoryName = filter === 'sets' ? 'Jewelry sets' : filter.charAt(0).toUpperCase() + filter.slice(1);
		grid.innerHTML = `<p class="collection-empty" role="status">${categoryName} are coming soon.</p>`;
		return;
	}
	grid.innerHTML = visibleProducts.map((product) => `
		<article class="product-card reveal is-visible" data-category="${product.category}" data-id="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}">
			${visualMarkup(product)}
			<div class="product-info"><div><p class="product-category">${product.label}</p><h3>${product.name}</h3><p class="product-price">${product.price}</p></div><div class="card-actions"><button class="heart-button${favoriteIds.has(product.id) ? ' is-liked' : ''}" type="button" aria-label="${favoriteIds.has(product.id) ? 'Remove' : 'Add'} ${product.name} ${favoriteIds.has(product.id) ? 'from' : 'to'} wishlist" aria-pressed="${favoriteIds.has(product.id)}"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" /></svg></button><button class="add-button" type="button">Add +</button></div></div>
		</article>`).join('');
	grid.querySelectorAll('.product-card').forEach((card) => {
		card.addEventListener('click', (event) => { if (!event.target.closest('button')) openModal(Number(card.dataset.id)); });
		card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal(Number(card.dataset.id)); } });
		card.querySelector('.heart-button').addEventListener('click', (event) => { event.stopPropagation(); const heart = event.currentTarget; const id = Number(card.dataset.id); const liked = favoriteIds.has(id); if (liked) favoriteIds.delete(id); else favoriteIds.add(id); heart.classList.toggle('is-liked', !liked); heart.setAttribute('aria-pressed', !liked); heart.setAttribute('aria-label', `${!liked ? 'Remove' : 'Add'} ${products.find((item) => item.id === id).name} ${!liked ? 'from' : 'to'} wishlist`); showToast(!liked ? 'Added to wishlist' : 'Removed from wishlist'); });
		card.querySelector('.add-button').addEventListener('click', (event) => { event.stopPropagation(); addToBag(products.find((item) => item.id === Number(card.dataset.id)).name); });
	});
}

function addToBag(name) { bagItems += 1; sessionStorage.setItem('vaya-bag-count', bagItems); bagCount.textContent = bagItems; bagButton.setAttribute('aria-label', `Shopping bag, ${bagItems} item${bagItems === 1 ? '' : 's'}`); bagCount.classList.remove('bump'); void bagCount.offsetWidth; bagCount.classList.add('bump'); showToast(`${name} added to bag`); }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200); }

const modal = document.querySelector('#quick-view');
let modalScrollY = 0;
let previousBodyOverflow = '';
let previousDocumentOverflow = '';
let previousBodyPosition = '';
let previousBodyTop = '';
let previousBodyWidth = '';
let previousBodyLeft = '';
let previousBodyRight = '';
function openModal(id) { const product = products.find((item) => item.id === id); document.querySelector('#modal-name').textContent = product.name; document.querySelector('#modal-category').textContent = product.label; document.querySelector('#modal-price').textContent = product.price; document.querySelector('#modal-description').textContent = product.description; const visual = document.querySelector('#modal-visual'); visual.outerHTML = visualMarkup(product, 'VAYA / OBJECT', true); document.querySelector('.quick-modal').scrollTop = 0; modalScrollY = window.scrollY; previousBodyOverflow = document.body.style.overflow; previousDocumentOverflow = document.documentElement.style.overflow; previousBodyPosition = document.body.style.position; previousBodyTop = document.body.style.top; previousBodyWidth = document.body.style.width; previousBodyLeft = document.body.style.left; previousBodyRight = document.body.style.right; document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden'; document.body.style.position = 'fixed'; document.body.style.top = `-${modalScrollY}px`; document.body.style.left = '0'; document.body.style.right = '0'; document.body.style.width = '100%'; modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.querySelector('.modal-add').onclick = () => { addToBag(product.name); closeModal(); }; document.querySelector('.modal-close').focus(); }
function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = previousBodyOverflow; document.documentElement.style.overflow = previousDocumentOverflow; document.body.style.position = previousBodyPosition; document.body.style.top = previousBodyTop; document.body.style.width = previousBodyWidth; document.body.style.left = previousBodyLeft; document.body.style.right = previousBodyRight; const scrollY = modalScrollY; window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: 'instant' })); }
let modalScrollY = 0;
let previousBodyOverflow = '';
let previousDocumentOverflow = '';
let previousBodyPosition = '';
let previousBodyTop = '';
let previousBodyWidth = '';
let previousBodyLeft = '';
let previousBodyRight = '';
function openModal(id) { const product = products.find((item) => item.id === id); document.querySelector('#modal-name').textContent = product.name; document.querySelector('#modal-category').textContent = product.label; document.querySelector('#modal-price').textContent = product.price; document.querySelector('#modal-description').textContent = product.description; const visual = document.querySelector('#modal-visual'); visual.outerHTML = visualMarkup(product, 'VAYA / OBJECT', true); document.querySelector('.quick-modal').scrollTop = 0; modalScrollY = window.scrollY; previousBodyOverflow = document.body.style.overflow; previousDocumentOverflow = document.documentElement.style.overflow; previousBodyPosition = document.body.style.position; previousBodyTop = document.body.style.top; previousBodyWidth = document.body.style.width; previousBodyLeft = document.body.style.left; previousBodyRight = document.body.style.right; document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden'; document.body.style.position = 'fixed'; document.body.style.top = `-${modalScrollY}px`; document.body.style.left = '0'; document.body.style.right = '0'; document.body.style.width = '100%'; modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.querySelector('.modal-add').onclick = () => { addToBag(product.name); closeModal(); }; document.querySelector('.modal-close').focus(); }
function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = previousBodyOverflow; document.documentElement.style.overflow = previousDocumentOverflow; document.body.style.position = previousBodyPosition; document.body.style.top = previousBodyTop; document.body.style.width = previousBodyWidth; document.body.style.left = previousBodyLeft; document.body.style.right = previousBodyRight; const scrollY = modalScrollY; window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: 'instant' })); }

renderProducts();
document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => { const filter = button.dataset.filter; if (button.classList.contains('is-active')) return; document.querySelectorAll('.filter-button').forEach((item) => { item.classList.remove('is-active'); item.setAttribute('aria-selected', 'false'); }); button.classList.add('is-active'); button.setAttribute('aria-selected', 'true'); grid.classList.add('is-filtering'); setTimeout(() => { renderProducts(filter); grid.classList.remove('is-filtering'); }, 260); }));
document.querySelector('.modal-close').addEventListener('click', closeModal); modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
document.querySelector('.wishlist-toggle').addEventListener('click', (event) => { const active = event.currentTarget.classList.toggle('is-liked'); event.currentTarget.setAttribute('aria-pressed', active); showToast(active ? 'Wishlist selected' : 'Wishlist cleared'); });
document.querySelector('.bag-toggle').addEventListener('click', () => showToast(bagItems ? `${bagItems} item${bagItems === 1 ? '' : 's'} in your bag` : 'Your bag is waiting'));
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
