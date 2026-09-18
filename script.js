const products = [
	{ id: 1, name: 'Solace Ring', category: 'rings', label: 'RING', price: '$420', visual: 'visual-ring', image: 'assets/products/solace-ring.jpg', description: 'A softly sculpted band with an unexpected glint of turquoise. Designed to become part of your everyday language.' },
	{ id: 2, name: 'Aster Drop', category: 'earrings', label: 'EARRINGS', price: '$285', visual: 'visual-earrings', image: 'assets/products/aster-drop.png', description: 'Light-catching drops that move with you. A quiet punctuation mark for the moments worth remembering.' },
	{ id: 3, name: 'Arc Pendant', category: 'necklaces', label: 'NECKLACE', price: '$610', visual: 'visual-necklace', image: 'assets/products/arc-pendant.PNG', description: 'An open arc suspended on a fine chain, balancing fluidity and form with effortless clarity.' },
	{ id: 4, name: 'Mira Signet', category: 'rings', label: 'RING', price: '$360', visual: 'visual-ring', image: 'assets/products/mira-signet.jpg', description: 'A modern signet with a tactile, softened edge. Made to hold your own meaning.' },
	{ id: 5, name: 'Halo Chain', category: 'necklaces', label: 'NECKLACE', price: '$540', visual: 'visual-necklace', image: 'assets/products/halo-chain.png', description: 'A luminous chain with a generous silhouette, made for layering or standing beautifully alone.' },
	{ id: 6, name: 'Eclipse Studs', category: 'earrings', label: 'EARRINGS', price: '$240', visual: 'visual-earrings', image: 'assets/products/eclipse-studs.png', description: 'Two small studies in contrast, finished to catch the light from every angle.' }
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
	const image = product.image ? `<img src="${product.image}" alt="${product.name}" />` : '';
	return `<div${isModal ? ' id="modal-visual"' : ''} class="${isModal ? 'modal-visual ' : ''}product-visual ${product.visual}${product.image ? ' has-product-image' : ''}">${image}<span>${label}</span></div>`;
}

function renderProducts(filter = 'all') {
	grid.innerHTML = products.map((product) => `
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
	if (filter !== 'all') grid.querySelectorAll('.product-card').forEach((card) => card.classList.toggle('is-hidden', card.dataset.category !== filter));
}

function addToBag(name) { bagItems += 1; sessionStorage.setItem('vaya-bag-count', bagItems); bagCount.textContent = bagItems; bagButton.setAttribute('aria-label', `Shopping bag, ${bagItems} item${bagItems === 1 ? '' : 's'}`); bagCount.classList.remove('bump'); void bagCount.offsetWidth; bagCount.classList.add('bump'); showToast(`${name} added to bag`); }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200); }

const modal = document.querySelector('#quick-view');
function openModal(id) { const product = products.find((item) => item.id === id); document.querySelector('#modal-name').textContent = product.name; document.querySelector('#modal-category').textContent = product.label; document.querySelector('#modal-price').textContent = product.price; document.querySelector('#modal-description').textContent = product.description; const visual = document.querySelector('#modal-visual'); visual.outerHTML = visualMarkup(product, 'VAYA / OBJECT', true); modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; document.querySelector('.modal-add').onclick = () => { addToBag(product.name); closeModal(); }; document.querySelector('.modal-close').focus(); }
function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

renderProducts();
document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => { const filter = button.dataset.filter; if (button.classList.contains('is-active')) return; document.querySelectorAll('.filter-button').forEach((item) => { item.classList.remove('is-active'); item.setAttribute('aria-selected', 'false'); }); button.classList.add('is-active'); button.setAttribute('aria-selected', 'true'); grid.classList.add('is-filtering'); setTimeout(() => { renderProducts(filter); grid.classList.remove('is-filtering'); }, 260); }));
document.querySelector('.modal-close').addEventListener('click', closeModal); modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
document.querySelector('.wishlist-toggle').addEventListener('click', (event) => { const active = event.currentTarget.classList.toggle('is-liked'); event.currentTarget.setAttribute('aria-pressed', active); showToast(active ? 'Wishlist selected' : 'Wishlist cleared'); });
document.querySelector('.bag-toggle').addEventListener('click', () => showToast(bagItems ? `${bagItems} item${bagItems === 1 ? '' : 's'} in your bag` : 'Your bag is waiting'));
const menuButton = document.querySelector('.menu-toggle'); const mobileNav = document.querySelector('.mobile-nav'); menuButton.addEventListener('click', () => { const open = mobileNav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); mobileNav.setAttribute('aria-hidden', !open); }); mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileNav.classList.remove('is-open'); mobileNav.setAttribute('aria-hidden', 'true'); menuButton.setAttribute('aria-expanded', 'false'); }));
window.addEventListener('scroll', () => document.querySelector('#site-header').classList.toggle('scrolled', window.scrollY > 30), { passive: true });
const hero = document.querySelector('.hero'); const heroArt = document.querySelector('.hero-art'); hero.addEventListener('pointermove', (event) => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 761) return; const bounds = hero.getBoundingClientRect(); const x = ((event.clientX - bounds.left) / bounds.width - .5) * 12; const y = ((event.clientY - bounds.top) / bounds.height - .5) * 8; heroArt.style.setProperty('--mouse-x', `${x}px`); heroArt.style.setProperty('--mouse-y', `${y}px`); }); hero.addEventListener('pointerleave', () => { heroArt.style.setProperty('--mouse-x', '0px'); heroArt.style.setProperty('--mouse-y', '0px'); });
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
