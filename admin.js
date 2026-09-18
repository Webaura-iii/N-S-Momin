// ================= DATA STATE ================= //
const siteContent = {
  ig_followers_count: '48.5K'
};

const categories = [
  { id: 'cat-chiffon', name: 'Chiffon Hijabs' },
  { id: 'cat-[#5C1D24]', name: 'Silk Scarves' },
  { id: 'cat-[#5C1D24]-hamper', name: 'Gift Hampers' }
];

const products = [
  {
    id: 'prod-1',
    name: 'Champagne Silk Crêpe Hijab',
    description: 'Ultra-soft, lightweight silk crêpe with a subtle luster and nonslip drape for long hours.',
    price: 1250,
    category_id: 'cat-chiffon',
    stock_quantity: 8,
    is_active: true,
    is_featured: true,
    product_type: 'single',
    is_customizable: false,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Champagne', hex: '#F3E5AB', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dusty Rose', hex: '#DCAE96', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Royal Maroon Velvet Edged Wrap',
    description: 'Hand-sewn velvet border detail over premium breathable georgette texture.',
    price: 1850,
    category_id: 'cat-[#5C1D24]',
    stock_quantity: 15,
    is_active: true,
    is_featured: true,
    product_type: 'single',
    is_customizable: false,
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Maroon', hex: '#5C1D24', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Bridal Heritage Gift Chest',
    description: 'Bespoke gift box containing 3 silk hijabs, magnetic pins, and personalized greeting card.',
    price: 4990,
    category_id: 'cat-[#5C1D24]-hamper',
    stock_quantity: 4,
    is_active: true,
    is_featured: true,
    product_type: 'hamper',
    is_customizable: true,
    images: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80'
    ],
    colors: []
  }
];

const testimonials = [
  {
    id: 't-1',
    customer_name: 'Amina Zainab',
    review_text: 'The texture and opacity of the Champagne Silk hijab is unlike anything I have bought before. Doesn’t slip at all!',
    rating: 5,
    is_approved: true
  },
  {
    id: 't-2',
    customer_name: 'Fatima Al-Sayed',
    review_text: 'Ordered the bridal gift chest for my sister. The packaging and handwritten note made it feel so special.',
    rating: 5,
    is_approved: true
  },
  {
    id: 't-3',
    customer_name: 'Sana Khan',
    review_text: 'Extremely fast delivery and premium quality fabrics. Noor Saba’s customer service is top notch!',
    rating: 5,
    is_approved: true
  }
];

const instagramReel = [
  {
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80',
    caption: 'Textured Champagne Silk in natural golden hour light ✨'
  },
  {
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80',
    caption: 'Behind the scenes: Packing bespoke bridal chests 🎁'
  },
  {
    img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=500&q=80',
    caption: 'The signature maroon drape • Pin-free comfort'
  },
  {
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80',
    caption: 'Ivory Satin & Gold Magnetic Clasp pairing'
  }
];

// App State
let selectedCategory = 'all';
let searchQuery = '';
let selectedColorsMap = {}; // { productId: ProductColor }
let cartCount = 0;
let activeModalProduct = null;
let modalActiveImageIndex = 0;
let modalSelectedColor = null;

// ================= INITIALIZATION ================= //
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  renderCategoryTabs();
  renderProducts();
  renderSocialProof();
  lucide.createIcons();
});

// ================= NAVIGATION & INTERACTION ================= //
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

function handleLinkClick(sectionId) {
  navigateToSection(sectionId);
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer.classList.contains('hidden')) {
    toggleMobileMenu();
  }
}

function navigateToSection(sectionId) {
  const elem = document.getElementById(sectionId);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}

function openAdminPanel() {
  alert('Redirecting to Owner Admin Panel...');
}

function toggleCartModal() {
  alert(`Shopping bag contains ${cartCount} items.`);
}

function handleSubscribe(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const btn = document.getElementById('newsletter-btn');
  if (!input.value) return;

  btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i><span>Subscribed</span>`;
  lucide.createIcons();
  setTimeout(() => {
    btn.innerHTML = `<span>Join</span>`;
    input.value = '';
  }, 3000);
}

// ================= SHOP RENDER FUNCTIONS ================= //
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs-container');
  const activeCount = products.filter(p => p.is_active).length;

  let html = `
    <button
      onclick="selectCategory('all')"
      class="px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
        selectedCategory === 'all'
          ? 'bg-[#5C1D24] text-white shadow-xs'
          : 'bg-white text-zinc-700 hover:bg-[#FAF7F0] border border-[#E8E1D5]'
      }"
    >
      All (${activeCount})
    </button>
  `;

  categories.forEach(cat => {
    const count = products.filter(p => p.is_active && p.category_id === cat.id).length;
    html += `
      <button
        onclick="selectCategory('${cat.id}')"
        class="px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
          selectedCategory === cat.id
            ? 'bg-[#5C1D24] text-white shadow-xs'
            : 'bg-white text-zinc-700 hover:bg-[#FAF7F0] border border-[#E8E1D5]'
        }"
      >
        ${cat.name} (${count})
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectCategory(catId) {
  selectedCategory = catId;
  renderCategoryTabs();
  renderProducts();
}

function handleSearch(e) {
  searchQuery = e.target.value;
  renderProducts();
}

function selectColorVariant(productId, colorObj, event) {
  event.stopPropagation();
  selectedColorsMap[productId] = colorObj;
  renderProducts();
}

function renderProducts() {
  const gridContainer = document.getElementById('product-grid-container');

  const filtered = products.filter(item => {
    if (!item.is_active) return false;
    const matchesCategory = selectedCategory === 'all' || item.category_id === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="text-center py-12 bg-[#FAF7F0] rounded-xl border border-dashed border-[#E8E1D5] max-w-md mx-auto">
        <i data-lucide="alert-circle" class="w-8 h-8 text-[#C5A059] mx-auto mb-2"></i>
        <h3 class="font-serif text-base font-medium text-zinc-800">No items found</h3>
        <p class="text-[11px] text-zinc-500 mt-0.5 mb-3">Try selecting another category or clearing search.</p>
        <button
          onclick="resetShopFilters()"
          class="px-3.5 py-1.5 bg-[#5C1D24] text-white text-xs rounded-full cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let html = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">`;

  filtered.forEach(product => {
    const isOutOfStock = product.stock_quantity <= 0;
    const isLowStock = product.stock_quantity > 0 && product.stock_quantity <= 10;
    const categoryObj = categories.find(c => c.id === product.category_id);

    const availableColors = product.colors || [];
    const activeColor = selectedColorsMap[product.id] || (availableColors.length > 0 ? availableColors[0] : null);
    const displayImage = (activeColor && activeColor.image) ? activeColor.image : (product.images[0] || '');

    html += `
      <div class="group bg-white rounded-lg overflow-hidden border border-[#E8E1D5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-md transition-all duration-250 flex flex-col">
        <!-- Image Container -->
        <div class="relative aspect-[3/4] bg-zinc-100 overflow-hidden cursor-pointer" onclick="openQuickView('${product.id}')">
          <img src="${displayImage}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500" />
          
          <div class="absolute top-2.5 left-2.5 flex flex-col gap-1">
            ${product.is_featured ? `<span class="px-2 py-0.5 rounded bg-[#FAF7F0]/95 backdrop-blur-xs border border-[#C5A059]/40 text-[#5C1D24] font-semibold text-[9px] tracking-wider uppercase shadow-xs">Signature Drop</span>` : ''}
            ${product.product_type === 'hamper' ? `<span class="px-2 py-0.5 rounded bg-[#5C1D24] text-[#FAF7F0] font-semibold text-[9px] tracking-wider uppercase shadow-xs">Hamper Set</span>` : ''}
          </div>

          ${isOutOfStock ? `<div class="absolute top-2.5 right-2.5 bg-red-600/90 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded">Sold Out</div>` : ''}
          ${!isOutOfStock && isLowStock ? `<div class="absolute top-2.5 right-2.5 bg-amber-500/90 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded">Only ${product.stock_quantity} left</div>` : ''}

          <div class="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span class="px-2.5 py-1 bg-white/95 text-zinc-800 text-[11px] font-medium rounded-full shadow-xs flex items-center gap-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <i data-lucide="eye" class="w-3 h-3 text-[#5C1D24]"></i> Quick View
            </span>
          </div>
        </div>

        <!-- Card Content Details -->
        <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
          <div class="space-y-1.5">
            ${categoryObj ? `<span class="text-[10px] font-medium uppercase tracking-wider text-[#C5A059] block">${categoryObj.name}</span>` : ''}
            <h3 onclick="openQuickView('${product.id}')" class="font-serif text-[15px] font-medium text-[#1E1E1E] group-hover:text-[#5C1D24] transition-colors line-clamp-1 cursor-pointer leading-snug" title="${product.name}">${product.name}</h3>
            <p class="text-[11px] text-zinc-500 line-clamp-2 font-light leading-relaxed">${product.description}</p>

            ${availableColors.length > 0 ? `
              <div class="pt-1 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  ${availableColors.map(col => {
                    const isSelected = activeColor && activeColor.name === col.name;
                    return `
                      <button
                        type="button"
                        onclick="selectColorVariant('${product.id}', ${JSON.stringify(col).replace(/"/g, '&quot;')}, event)"
                        title="${col.name}"
                        class="w-3.5 h-3.5 rounded-full transition-transform cursor-pointer relative ${
                          isSelected ? 'ring-2 ring-[#5C1D24] ring-offset-1 scale-110 shadow-xs' : 'hover:scale-110 border border-black/15'
                        }"
                        style="background-color: ${col.hex}"
                      ></button>
                    `;
                  }).join('')}
                </div>
                ${activeColor ? `<span class="text-[10px] text-zinc-500 font-medium truncate max-w-[110px]">${activeColor.name}</span>` : ''}
              </div>
            ` : ''}
          </div>

          <div class="pt-2 border-t border-[#F2EDE4] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-zinc-400 font-light block leading-none">Price</span>
              <p class="font-serif text-base font-bold text-[#1E1E1E] mt-0.5">₹${product.price.toLocaleString()}</p>
            </div>

            ${product.is_customizable ? `
              <button onclick="openCustomizer('${product.id}')" class="px-3 py-1.5 rounded-md bg-[#FAF7F0] border border-[#C5A059] text-[#5C1D24] hover:bg-[#F3EDE2] text-xs font-semibold flex items-center gap-1 transition-all shadow-xs cursor-pointer">
                <i data-lucide="sparkles" class="w-3 h-3 text-[#C5A059]"></i>
                <span>Customize</span>
              </button>
            ` : `
              <button
                ${isOutOfStock ? 'disabled' : ''}
                id="add-btn-${product.id}"
                onclick="addToCart('${product.id}')"
                class="px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all shadow-xs cursor-pointer ${
                  isOutOfStock ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed' : 'bg-[#5C1D24] text-white hover:bg-[#451419]'
                }"
              >
                <i data-lucide="shopping-bag" class="w-3 h-3 text-[#E6CA85]"></i>
                <span>Add to Bag</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  gridContainer.innerHTML = html;
  lucide.createIcons();
}

function resetShopFilters() {
  selectedCategory = 'all';
  searchQuery = '';
  document.getElementById('shop-search-input').value = '';
  renderCategoryTabs();
  renderProducts();
}

function addToCart(productId) {
  cartCount++;
  const badge = document.getElementById('cart-badge');
  badge.textContent = cartCount;
  badge.classList.remove('hidden');

  const btn = document.getElementById(`add-btn-${productId}`);
  if (btn) {
    const origHTML = btn.innerHTML;
    btn.className = "px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all shadow-xs cursor-pointer bg-emerald-700 text-white";
    btn.innerHTML = `<i data-lucide="check" class="w-3 h-3"></i><span>Added</span>`;
    lucide.createIcons();

    setTimeout(() => {
      btn.className = "px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all shadow-xs cursor-pointer bg-[#5C1D24] text-white hover:bg-[#451419]";
      btn.innerHTML = origHTML;
      lucide.createIcons();
    }, 1400);
  }
}

function openCustomizer(productId) {
  alert(`Opening Custom Hamper Builder for product ID: ${productId}`);
}

// ================= QUICK VIEW MODAL ================= //
function openQuickView(productId) {
  activeModalProduct = products.find(p => p.id === productId);
  if (!activeModalProduct) return;

  if (activeModalProduct.colors && activeModalProduct.colors.length > 0) {
    modalSelectedColor = activeModalProduct.colors[0];
  } else {
    modalSelectedColor = null;
  }
  modalActiveImageIndex = 0;

  renderQuickViewModal();
  document.getElementById('quickview-modal').classList.remove('hidden');
}

function closeQuickView() {
  document.getElementById('quickview-modal').classList.add('hidden');
  activeModalProduct = null;
}

function setModalActiveImage(idx) {
  modalActiveImageIndex = idx;
  renderQuickViewModal();
}

function selectModalColor(colorObj) {
  modalSelectedColor = colorObj;
  if (colorObj.image) {
    const idx = activeModalProduct.images.indexOf(colorObj.image);
    if (idx >= 0) modalActiveImageIndex = idx;
  }
  renderQuickViewModal();
}

function renderQuickViewModal() {
  const modal = document.getElementById('quickview-modal');
  if (!activeModalProduct) return;

  const category = categories.find(c => c.id === activeModalProduct.category_id);
  const currentImage = (modalSelectedColor?.image && modalActiveImageIndex === 0)
    ? modalSelectedColor.image
    : activeModalProduct.images[modalActiveImageIndex] || activeModalProduct.images[0];

  modal.innerHTML = `
    <div class="bg-[#FDFBF7] w-full max-w-2xl rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden relative">
      <button onclick="closeQuickView()" class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/90 text-zinc-500 hover:text-zinc-900 shadow-xs cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="p-4 sm:p-5 bg-[#FAF7F0] flex flex-col justify-between space-y-2.5">
          <div class="aspect-[3/4] rounded-lg overflow-hidden bg-zinc-200 border border-[#E8E1D5]">
            <img src="${currentImage}" alt="${activeModalProduct.name}" class="w-full h-full object-cover" />
          </div>

          ${activeModalProduct.images.length > 1 ? `
            <div class="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              ${activeModalProduct.images.map((img, i) => `
                <button
                  onclick="setModalActiveImage(${i})"
                  class="w-12 h-14 rounded-md overflow-hidden border cursor-pointer flex-shrink-0 ${modalActiveImageIndex === i ? 'border-[#C5A059] ring-1 ring-[#C5A059]' : 'border-transparent opacity-60'}"
                >
                  <img src="${img}" alt="" class="w-full h-full object-cover" />
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="p-4 sm:p-5 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            ${category ? `<span class="text-[10px] font-semibold tracking-wider uppercase text-[#C5A059] block">${category.name}</span>` : ''}
            <h2 class="font-serif text-xl sm:text-2xl font-medium text-[#1E1E1E] leading-snug">${activeModalProduct.name}</h2>
            <p class="font-serif text-xl font-bold text-[#5C1D24]">₹${activeModalProduct.price.toLocaleString()}</p>
            <p class="text-xs text-zinc-600 font-light leading-relaxed">${activeModalProduct.description}</p>

            ${activeModalProduct.colors && activeModalProduct.colors.length > 0 ? `
              <div class="pt-2 border-t border-[#E8E1D5] space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-zinc-600 font-medium">Select Shade:</span>
                  <span class="text-[#5C1D24] font-semibold">${modalSelectedColor?.name || ''}</span>
                </div>
                <div class="flex items-center gap-2 pt-0.5">
                  ${activeModalProduct.colors.map(color => {
                    const isSelected = modalSelectedColor?.name === color.name;
                    return `
                      <button
                        type="button"
                        onclick="selectModalColor(${JSON.stringify(color).replace(/"/g, '&quot;')})"
                        class="w-5 h-5 rounded-full transition-transform cursor-pointer relative ${isSelected ? 'ring-2 ring-[#5C1D24] ring-offset-2 scale-110 shadow-xs' : 'hover:scale-110 border border-black/15'}"
                        style="background-color: ${color.hex}"
                      ></button>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}

            <div class="pt-2 border-t border-[#E8E1D5] space-y-1.5 text-[11px] text-zinc-600">
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#C5A059]"></i>
                <span>Pin-safe, non-slip textured finish</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="globe" class="w-3.5 h-3.5 text-[#C5A059]"></i>
                <span>Express domestic & worldwide tracking</span>
              </div>
            </div>
          </div>

          <div class="space-y-2 pt-3 border-t border-[#E8E1D5]">
            ${activeModalProduct.is_customizable ? `
              <button onclick="closeQuickView(); openCustomizer('${activeModalProduct.id}');" class="w-full py-2.5 bg-[#C5A059] hover:bg-[#b08d47] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>Build Custom Hamper</span>
              </button>
            ` : `
              <button
                ${activeModalProduct.stock_quantity <= 0 ? 'disabled' : ''}
                onclick="addToCart('${activeModalProduct.id}')"
                class="w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer ${
                  activeModalProduct.stock_quantity <= 0 ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed' : 'bg-[#5C1D24] hover:bg-[#47151a] text-white'
                }"
              >
                <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#E6CA85]"></i>
                <span>Add to Shopping Bag</span>
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;

  lucide.createIcons();
}

// ================= SOCIAL PROOF / REVIEWS RENDER ================= //
function renderSocialProof() {
  // Update Ig follower count
  document.getElementById('ig-follower-text').textContent = `Follow on Instagram (${siteContent.ig_followers_count})`;

  // Render Instagram Reel
  const reelContainer = document.getElementById('instagram-reel-grid');
  reelContainer.innerHTML = instagramReel.map(item => `
    <a
      href="https://instagram.com/noor_saba_momin"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative aspect-square rounded-lg overflow-hidden bg-zinc-100 border border-[#E8E1D5] shadow-xs block"
    >
      <img src="${item.img}" alt="N.S Collection Instagram Post" class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white text-xs">
        <div class="flex items-center gap-1 mb-0.5 text-[#E6CA85] font-semibold text-[11px]">
          <i data-lucide="instagram" class="w-3 h-3"></i>
          <span>@noor_saba_momin</span>
        </div>
        <p class="line-clamp-2 text-[10px] text-zinc-200 font-light">${item.caption}</p>
      </div>
    </a>
  `).join('');

  // Render Testimonials
  const testimonialsContainer = document.getElementById('testimonials-grid');
  const approved = testimonials.filter(t => t.is_approved);

  testimonialsContainer.innerHTML = approved.map(review => `
    <div class="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E1D5] shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between space-y-3">
      <div class="space-y-2">
        <div class="flex items-center gap-0.5 text-[#C5A059]">
          ${[...Array(5)].map((_, i) => `
            <i data-lucide="star" class="w-3.5 h-3.5 ${i < review.rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-zinc-200'}"></i>
          `).join('')}
        </div>
        <p class="font-serif italic text-zinc-700 text-xs sm:text-[13px] leading-relaxed">
          "${review.review_text}"
        </p>
      </div>

      <div class="pt-2 border-t border-[#F2EDE4] flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span class="font-sans font-medium text-xs text-[#1E1E1E]">${review.customer_name}</span>
          <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-600" title="Verified Customer"></i>
        </div>
        <span class="text-[10px] text-zinc-400">Verified Order</span>
      </div>
    </div>
  `).join('');
}

function openLeaveReviewModal() {
  alert('Review submission form modal requested.');
}