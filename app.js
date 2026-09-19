// --- STATE & MOCK STORE DATA ---
const catalogueProducts = [
{
  id: 'p-1',
  name: 'Luxe Modal Silk Hijab',
  category: 'Modal Silk',
  description: 'Lustrous, featherlight modal silk with a natural drape and pin-secure grip.',
  price: 899,
  images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80'],
  colors: [
    { name: 'Bridal Crimson', hex: '#5C1D24' },
    { name: 'Champagne Gold', hex: '#C5A059' },
    { name: 'Emerald Velvet', hex: '#1B4D3E' }
  ]
},
{
  id: 'p-2',
  name: 'Ethereal Premium Georgette',
  category: 'Georgette',
  description: 'Breathable, fine-grained texture georgette designed for non-slip everyday wear.',
  price: 699,
  images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80'],
  colors: [
    { name: 'Desert Rose', hex: '#C08081' },
    { name: 'Mocha Tan', hex: '#A07855' },
    { name: 'Midnight Onyx', hex: '#1A1A1A' }
  ]
},
{
  id: 'p-3',
  name: 'Organic Cotton Everyday Scarf',
  category: 'Cotton Jersey',
  description: 'Ultra-soft, stretchable organic jersey for complete opacity without pins.',
  price: 549,
  images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'],
  colors: [
    { name: 'Ivory Cream', hex: '#F5F2EB' },
    { name: 'Slate Grey', hex: '#708090' }
  ]
}
];

const sampleProducts = [
{
  id: 'hamper-1',
  name: 'Royal Nikah Keepsake Chest',
  description: 'Gold-embossed keepsake hamper featuring 3 premium Modal Silk hijabs and an embellished pin set.',
  price: 3499,
  product_type: 'hamper',
  is_active: true,
  is_customizable: false,
  images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'],
  colors: [
    { name: 'Bridal Crimson', hex: '#5C1D24' },
    { name: 'Imperial Gold', hex: '#C5A059' }
  ],
  hamper_items: [
    { included_item_name: 'Modal Silk Hijab - Crimson' },
    { included_item_name: 'Modal Silk Hijab - Champagne' },
    { included_item_name: 'Pearl Encrusted Safety Pins' },
    { included_item_name: 'Custom Calligraphy Card' }
  ]
},
{
  id: 'hamper-2',
  name: 'Bespoke Personalized Hamper Chest',
  description: 'Build your own custom gift box by selecting any 2 to 4 items from our signature collection.',
  price: 2999,
  product_type: 'hamper',
  is_active: true,
  is_customizable: true,
  images: ['https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80'],
  colors: [
    { name: 'Rosewood', hex: '#8B4513' },
    { name: 'Classic Gold', hex: '#C5A059' }
  ],
  hamper_items: [
    { included_item_name: 'Premium Chiffon Hijab - Desert Rose' },
    { included_item_name: 'Luxe Modal Silk Scarf - Ivory' },
    { included_item_name: 'Organic Cotton Jersey Scarf - Mocha' },
    { included_item_name: 'Satin Silk Scrunchie Trio' },
    { included_item_name: 'Gold Magnetic Hijab Pins Set' },
    { included_item_name: 'Rose Scented Drawer Sachet' }
  ]
}
];

const faqEntries = [
{
  q: 'How long does domestic and international delivery take?',
  a: 'Domestic orders across India typically arrive within 3-5 business days via Express Courier. International tracked orders take 7-10 business days depending on destination.'
},
{
  q: 'Can I add a personalized gift message to my hamper order?',
  a: 'Yes! During checkout, you can enter your custom message into the notes box, and our team will hand-write it onto a wax-sealed gold card inside the box.'
},
{
  q: 'Are the fabrics opaque and non-slip?',
  a: 'Absolutely. Every fabric chosen by Noor Saba Momin undergoes rigorous testing for pin-hold stability, opacity, and breathability.'
}
];

const howToOrderSteps = [
{
  step_number: 1,
  title: 'Browse & Choose Your Palette',
  description: 'Explore our georgettes, satins, and modal scarves, or build your custom gift hamper with your favourite picks.'
},
{
  step_number: 2,
  title: 'Order On-Site or via WhatsApp / DM',
  description: 'Add to your on-site bag for immediate checkout, or tap the WhatsApp button to chat directly with Noor Saba Momin.'
},
{
  step_number: 3,
  title: 'Handcrafted Packaging & Fast Dispatch',
  description: 'We pack your pieces into our botanical gold chests with wax-sealed notes and send live tracking straight to your phone.'
}
];

const instagramReels = [
{ title: 'Silk Draping Tutorial', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80', views: '124K views' },
{ title: 'Nikah Gift Packing', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', views: '89K views' },
{ title: 'New Georgette Swatches', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80', views: '95K views' },
{ title: 'Pinless Hijab Styles', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=400&q=80', views: '142K views' }
];

const initialTestimonials = [
{ name: 'Amina F.', text: 'The Modal Silk drape is unmatched! Received my Nikah hamper in 3 days with a gorgeous wax-sealed card.', rating: 5 },
{ name: 'Zainab R.', text: 'Super fast dispatch and the georgette doesn’t slip at all even without pins. Absolutely in love!', rating: 5 },
{ name: 'Farah M.', text: 'The custom hamper builder let me pick exact colors for my sisters graduation gift. 10/10 presentation!', rating: 5 }
];

// App State
let cart = [];
let activeHamperModal = null;
let selectedHamperItems = [];
let reviewRating = 5;
let selectedHamperColors = {};
let selectedProductColors = {};
let activeCategory = 'All';
let searchQuery = '';
let testimonials = [...initialTestimonials];

// Store Local Handling
const store = {
addOrder(orderData) {
  const id = Math.floor(100000 + Math.random() * 900000).toString();
  const newOrder = { id, ...orderData, created_at: new Date().toISOString() };
  console.log('Order Saved:', newOrder);
  return newOrder;
},
addTestimonial(reviewData) {
  testimonials.unshift({
    name: reviewData.customer_name,
    text: reviewData.review_text,
    rating: reviewData.rating
  });
  renderTestimonials();
}
};

// --- NAVIGATION & UI HELPERS ---
function navigateToSection(id) {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
const drawer = document.getElementById('mobile-drawer');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
if (drawer.classList.contains('hidden')) {
  drawer.classList.remove('hidden');
  menuIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
} else {
  drawer.classList.add('hidden');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}
}

// --- QUICK VIEW MODAL CONTROLLER ---
function openQuickViewModal(productId) {
const product = catalogueProducts.find(p => p.id === productId);
if (!product) return;

const selectedColor = selectedProductColors[product.id] || product.colors[0];
const container = document.getElementById('quickview-modal-content');

container.innerHTML = `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div class="aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 border border-[#E8E1D5] shadow-xs">
      <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover" />
    </div>

    <div class="space-y-4">
      <div>
        <span class="px-2.5 py-0.5 rounded-full bg-[#FAF7F0] border border-[#E8E1D5] text-[10px] font-bold text-[#5C1D24] uppercase tracking-wider">
          ${product.category}
        </span>
        <h3 class="font-serif text-xl sm:text-2xl font-semibold text-[#1E1E1E] mt-2">${product.name}</h3>
        <p class="font-serif text-lg font-bold text-[#5C1D24] mt-1">₹${product.price.toLocaleString()}</p>
      </div>

      <p class="text-xs text-zinc-600 font-light leading-relaxed">${product.description}</p>

      <div class="space-y-1.5 pt-2 border-t border-[#F2EDE4]">
        <span class="text-xs text-zinc-500 font-medium block">Available Shades:</span>
        <div class="flex items-center gap-2 flex-wrap">
          ${product.colors.map(col => `
            <button
              onclick="selectProductColor('${product.id}', '${col.name}', '${col.hex}'); openQuickViewModal('${product.id}');"
              title="${col.name}"
              class="w-6 h-6 rounded-full cursor-pointer transition-transform ${selectedColor.name === col.name ? 'ring-2 ring-[#5C1D24] ring-offset-2 scale-110' : 'border border-black/20'}"
              style="background-color: ${col.hex}"
            ></button>
          `).join('')}
        </div>
        <span class="text-xs text-zinc-700 font-medium block mt-1">Selected: <strong>${selectedColor.name}</strong></span>
      </div>

      <div class="pt-4 flex flex-col gap-2">
        <button
          onclick="addCatalogueToCart('${product.id}'); closeQuickViewModal();"
          class="w-full py-2.5 rounded-full bg-[#5C1D24] hover:bg-[#47151a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <i data-lucide="shopping-bag" class="w-4 h-4 text-[#E6CA85]"></i>
          <span>Add Shade to Bag</span>
        </button>
      </div>
    </div>
  </div>
`;

document.getElementById('modal-quickview').classList.remove('hidden');
lucide.createIcons();
}

function closeQuickViewModal() {
document.getElementById('modal-quickview').classList.add('hidden');
}

// --- RENDER FUNCTIONS ---

function renderCatalogue() {
const gridContainer = document.getElementById('product-grid-container');
const categoriesContainer = document.getElementById('category-tabs-container');
if (!gridContainer) return;

// Extract Categories
const categories = ['All', ...new Set(catalogueProducts.map(p => p.category))];

// Render Category Buttons
if (categoriesContainer) {
  categoriesContainer.innerHTML = categories.map(cat => `
    <button
      onclick="setCategory('${cat}')"
      class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
        activeCategory === cat
          ? 'bg-[#5C1D24] text-white shadow-xs'
          : 'bg-white text-zinc-700 hover:bg-[#FAF7F0] border border-[#E8E1D5]'
      }"
    >
      ${cat}
    </button>
  `).join('');
}

// Filter Logic
const filtered = catalogueProducts.filter(p => {
  const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
  const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
});

if (filtered.length === 0) {
  gridContainer.innerHTML = `
    <div class="text-center py-12 bg-white rounded-xl border border-[#E8E1D5]">
      <p class="text-xs sm:text-sm text-zinc-500">No items match your search criteria.</p>
    </div>
  `;
  return;
}

gridContainer.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6";
gridContainer.innerHTML = filtered.map(product => {
  const selectedColor = selectedProductColors[product.id] || product.colors[0];
  return `
    <div class="bg-white rounded-xl border border-[#E8E1D5] overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between p-3.5 sm:p-4 space-y-3">
      <div class="space-y-3">
        <div class="aspect-[4/5] rounded-lg overflow-hidden bg-zinc-100 border border-[#E8E1D5] relative group">
          <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500" />
          
          <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] sm:text-[10px] font-bold text-[#5C1D24] border border-[#E8E1D5]">
            ${product.category}
          </span>

          <!-- QUICK VIEW BUTTON -->
          <button
            onclick="openQuickViewModal('${product.id}')"
            class="absolute bottom-2.5 left-2.5 right-2.5 py-1.5 bg-white/90 backdrop-blur-xs text-[#1E1E1E] hover:bg-[#5C1D24] hover:text-white text-[11px] font-semibold rounded-md border border-[#E8E1D5] shadow-xs opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            <span>Quick View</span>
          </button>
        </div>

        <div>
          <h3 class="font-serif text-sm sm:text-base font-semibold text-[#1E1E1E]">${product.name}</h3>
          <p class="text-xs text-zinc-500 line-clamp-2 mt-0.5 font-light">${product.description}</p>
        </div>

        <div class="space-y-1">
          <span class="text-[10px] text-zinc-400 font-medium block">Select Shade:</span>
          <div class="flex items-center gap-1.5 flex-wrap">
            ${product.colors.map(col => `
              <button
                onclick="selectProductColor('${product.id}', '${col.name}', '${col.hex}')"
                title="${col.name}"
                class="w-4 h-4 rounded-full cursor-pointer transition-transform ${selectedColor.name === col.name ? 'ring-2 ring-[#5C1D24] ring-offset-1 scale-110' : 'border border-black/20'}"
                style="background-color: ${col.hex}"
              ></button>
            `).join('')}
            <span class="text-[10px] sm:text-[11px] text-zinc-600 font-medium ml-1 truncate">${selectedColor.name}</span>
          </div>
        </div>
      </div>

      <div class="pt-2 border-t border-[#F2EDE4] flex items-center justify-between gap-2">
        <div>
          <span class="text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-400 block">Price</span>
          <p class="font-serif text-sm sm:text-base font-bold text-[#5C1D24]">₹${product.price.toLocaleString()}</p>
        </div>
        
        <div class="flex items-center gap-1.5">
          <button
            onclick="addCatalogueToCart('${product.id}')"
            class="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#5C1D24] hover:bg-[#47151a] text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
          >
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#E6CA85]"></i>
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  `;
}).join('');

lucide.createIcons();
}

function setCategory(cat) {
activeCategory = cat;
renderCatalogue();
}

function handleSearch(e) {
searchQuery = e.target.value;
renderCatalogue();
}

function selectProductColor(productId, colorName, hex) {
selectedProductColors[productId] = { name: colorName, hex };
renderCatalogue();
}

function addCatalogueToCart(productId) {
const product = catalogueProducts.find(p => p.id === productId);
if (!product) return;
const color = selectedProductColors[productId]?.name || product.colors[0].name;

cart.push({
  product: product,
  quantity: 1,
  selected_color: color
});

updateCartUI();
openCartDrawer();
}

function renderHampers() {
const container = document.getElementById('hampers-grid');
if (!container) return;

container.innerHTML = sampleProducts.map(hamper => {
  const isCustom = hamper.is_customizable;
  const availableColors = hamper.colors || [];
  const activeColor = selectedHamperColors[hamper.id] || (availableColors.length > 0 ? availableColors[0] : null);

  return `
    <div id="${isCustom ? 'section-custom-hamper' : ''}" class="rounded-xl bg-white border p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 relative shadow-2xs hover:shadow-md ${
      isCustom ? 'border-[#C5A059] ring-1 ring-[#C5A059]/30 bg-gradient-to-br from-white via-[#FAF8F2] to-white' : 'border-[#E8E1D5]'
    }">
      ${isCustom ? `
        <div class="absolute -top-3 left-4 sm:left-6 bg-[#C5A059] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
          <i data-lucide="sparkles" class="w-2.5 h-2.5 text-white"></i>
          <span>Interactive Customizer</span>
        </div>
      ` : `
        <div class="absolute -top-3 left-4 sm:left-6 bg-[#5C1D24] text-[#FAF7F0] px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider shadow-xs">
          Curated Signature Box
        </div>
      `}

      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center pt-1">
          <div class="sm:col-span-5 aspect-square rounded-lg overflow-hidden bg-zinc-100 border border-[#E8E1D5] shadow-xs">
            <img src="${hamper.images[0]}" alt="${hamper.name}" class="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500" />
          </div>

          <div class="sm:col-span-7 space-y-1.5">
            <h3 class="font-serif text-base sm:text-xl font-medium text-[#1E1E1E] leading-snug">${hamper.name}</h3>
            <p class="text-xs text-zinc-600 font-light leading-relaxed">${hamper.description}</p>

            ${availableColors.length > 0 ? `
              <div class="pt-1 space-y-1">
                <span class="text-[10px] text-zinc-500 font-medium block">Theme Palette:</span>
                <div class="flex items-center gap-1.5">
                  ${availableColors.map(color => `
                    <button
                      onclick="selectHamperColor('${hamper.id}', '${color.name}', '${color.hex}')"
                      title="${color.name}"
                      class="w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${activeColor?.name === color.name ? 'ring-2 ring-[#5C1D24] ring-offset-1 scale-110' : 'border border-black/15'}"
                      style="background-color: ${color.hex}"
                    ></button>
                  `).join('')}
                  ${activeColor ? `<span class="text-[10px] text-zinc-600 font-medium ml-1 truncate">${activeColor.name}</span>` : ''}
                </div>
              </div>
            ` : ''}

            <div class="pt-1.5">
              <span class="text-[9px] sm:text-[10px] text-zinc-400 font-light block uppercase">Price</span>
              <p class="font-serif text-lg sm:text-xl font-bold text-[#5C1D24]">₹${hamper.price.toLocaleString()}</p>
            </div>
          </div>
        </div>

        ${hamper.hamper_items && hamper.hamper_items.length > 0 ? `
          <div class="pt-3 border-t border-[#F2EDE4] space-y-2">
            <h4 class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
              <i data-lucide="heart-handshake" class="w-3 h-3"></i>
              <span>${isCustom ? 'Items Available to Pick & Combine:' : 'What’s Included Inside The Chest:'}</span>
            </h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-700">
              ${hamper.hamper_items.map(item => `
                <li class="flex items-start gap-1.5 bg-[#FAF7F0] px-2 py-1 rounded border border-[#EFE8DC] text-[10px] sm:text-[11px]">
                  <i data-lucide="check" class="w-3 h-3 text-[#C5A059] mt-0.5 flex-shrink-0"></i>
                  <span class="line-clamp-1">${item.included_item_name}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>

      <div class="pt-4 mt-4 border-t border-[#F2EDE4] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-500">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#C5A059]"></i>
          <span>Free Gold Wax-Sealed Gift Card</span>
        </div>

        ${isCustom ? `
          <button onclick="openHamperCustomizer('${hamper.id}')" class="w-full sm:w-auto px-4.5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b08d47] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Start Customizing</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        ` : `
          <button onclick="addDirectHamperToCart('${hamper.id}')" class="w-full sm:w-auto px-4.5 py-2.5 rounded-full bg-[#5C1D24] hover:bg-[#47151a] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer">
            <i data-lucide="gift" class="w-3.5 h-3.5 text-[#E6CA85]"></i>
            <span>Add Hamper to Bag</span>
          </button>
        `}
      </div>
    </div>
  `;
}).join('');

lucide.createIcons();
}

function selectHamperColor(hamperId, colorName, hex) {
selectedHamperColors[hamperId] = { name: colorName, hex };
renderHampers();
}

function renderHowToOrder() {
const container = document.getElementById('how-to-order-steps');
if (!container) return;

const icons = ['shopping-bag', 'message-circle', 'truck'];

container.innerHTML = howToOrderSteps.map((step, idx) => `
  <div class="bg-white rounded-xl p-4 sm:p-6 border border-[#E8E1D5] shadow-2xs relative flex flex-col justify-between space-y-4 hover:shadow-sm transition-shadow">
    <div class="flex items-center justify-between">
      <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5C1D24] text-[#FAF7F0] font-serif font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs">
        ${step.step_number}
      </span>
      <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF7F0] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
        <i data-lucide="${icons[idx % icons.length]}" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
      </div>
    </div>

    <div class="space-y-1.5">
      <h3 class="font-serif text-sm sm:text-base lg:text-lg font-medium text-[#1E1E1E]">${step.title}</h3>
      <p class="text-xs text-zinc-600 font-light leading-relaxed">${step.description}</p>
    </div>

    <div class="pt-2 border-t border-[#F2EDE4] text-[10px] sm:text-[11px] font-medium text-[#C5A059]">
      Step ${step.step_number} of 3
    </div>
  </div>
`).join('');

lucide.createIcons();
}

function renderInstagramReels() {
const container = document.getElementById('instagram-reel-grid');
if (!container) return;

container.innerHTML = instagramReels.map(reel => `
  <div class="relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-[#E8E1D5] shadow-2xs">
    <img src="${reel.image}" alt="${reel.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
      <div class="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#E6CA85] font-semibold mb-0.5">
        <i data-lucide="play" class="w-3 h-3 fill-[#E6CA85]"></i>
        <span>${reel.views}</span>
      </div>
      <h4 class="font-serif text-xs sm:text-sm font-medium line-clamp-1">${reel.title}</h4>
    </div>
  </div>
`).join('');

lucide.createIcons();
}

function renderTestimonials() {
const container = document.getElementById('testimonials-grid');
if (!container) return;

container.innerHTML = testimonials.map(item => `
  <div class="bg-white p-4 sm:p-4.5 rounded-xl border border-[#E8E1D5] shadow-2xs space-y-2 flex flex-col justify-between">
    <div class="space-y-2">
      <div class="flex gap-1 text-[#C5A059]">
        ${Array.from({ length: item.rating }).map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-[#C5A059]"></i>`).join('')}
      </div>
      <p class="text-xs text-zinc-600 font-light leading-relaxed font-sans">"${item.text}"</p>
    </div>
    <div class="pt-2 border-t border-[#F2EDE4] flex items-center justify-between text-[10px] sm:text-[11px]">
      <span class="font-semibold text-zinc-800">${item.name}</span>
      <span class="text-emerald-700 font-medium flex items-center gap-0.5"><i data-lucide="check-circle" class="w-3 h-3"></i> Verified Buyer</span>
    </div>
  </div>
`).join('');

lucide.createIcons();
}

function renderFaq() {
const container = document.getElementById('faq-accordion');
if (!container) return;

container.innerHTML = faqEntries.map((faq, index) => `
  <div class="bg-white rounded-lg border border-[#E8E1D5] overflow-hidden transition-all shadow-2xs">
    <button onclick="toggleFaq(${index})" class="w-full px-4 sm:px-5 py-3 text-left flex items-center justify-between gap-3 hover:bg-[#FAF7F0] transition-colors cursor-pointer">
      <span class="font-serif text-xs sm:text-sm font-medium text-[#1E1E1E]">${faq.q}</span>
      <i id="faq-icon-${index}" data-lucide="chevron-down" class="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 transition-transform duration-200 ${index === 0 ? 'rotate-180' : ''}"></i>
    </button>
    <div id="faq-ans-${index}" class="px-4 sm:px-5 pb-4 pt-1 text-xs text-zinc-600 leading-relaxed font-light border-t border-[#F2EDE4] bg-[#FAF8F4]/50 ${index === 0 ? '' : 'hidden'}">
      ${faq.a}
    </div>
  </div>
`).join('');

lucide.createIcons();
}

function toggleFaq(index) {
const ansEl = document.getElementById(`faq-ans-${index}`);
const iconEl = document.getElementById(`faq-icon-${index}`);
if (ansEl.classList.contains('hidden')) {
  ansEl.classList.remove('hidden');
  iconEl.classList.add('rotate-180');
} else {
  ansEl.classList.add('hidden');
  iconEl.classList.remove('rotate-180');
}
}

// --- CART DRAWER CONTROLLER ---

function updateCartUI() {
const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
const FREE_SHIPPING_THRESHOLD = 2499;
const progressToFreeShipping = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

document.getElementById('floating-cart-count').innerText = totalCount;
document.getElementById('cart-item-badge').innerText = totalCount;
document.getElementById('cart-badge').innerText = totalCount;

// Free shipping bar
const msgEl = document.getElementById('free-shipping-message');
if (remainingForFree > 0) {
  msgEl.innerHTML = `Add <strong class="text-[#5C1D24]">₹${remainingForFree.toLocaleString()}</strong> more for free delivery!`;
} else {
  msgEl.innerHTML = `<span class="text-emerald-700 flex items-center gap-1 font-semibold"><i data-lucide="sparkles" class="w-3 h-3"></i> Free Express Delivery Unlocked!</span>`;
}
document.getElementById('free-shipping-bar').style.width = `${progressToFreeShipping}%`;

// Render Cart Items
const container = document.getElementById('cart-items-container');
const footer = document.getElementById('cart-footer');

if (cart.length === 0) {
  footer.classList.add('hidden');
  container.innerHTML = `
    <div class="text-center py-16 space-y-3">
      <div class="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#E8E1D5] flex items-center justify-center mx-auto text-[#C5A059]">
        <i data-lucide="shopping-bag" class="w-6 h-6"></i>
      </div>
      <h3 class="font-serif text-base text-zinc-700">Your shopping bag is empty</h3>
      <p class="text-[11px] text-zinc-500 max-w-xs mx-auto">
        Explore our luxury georgettes or build a bespoke gift hamper.
      </p>
      <button onclick="closeCartDrawer()" class="px-5 py-2 rounded-full bg-[#5C1D24] text-white text-xs font-medium hover:bg-[#47151a] cursor-pointer">
        Start Shopping
      </button>
    </div>
  `;
} else {
  footer.classList.remove('hidden');
  container.innerHTML = cart.map((item, index) => {
    const imgSrc = (item.selected_color && item.product.colors?.find(c => c.name === item.selected_color)?.image) || item.product.images[0];
    return `
      <div class="p-3 rounded-lg bg-white border border-[#E8E1D5] shadow-2xs flex gap-2.5 relative group">
        <img src="${imgSrc}" alt="${item.product.name}" class="w-14 sm:w-16 h-18 sm:h-20 rounded-md object-cover bg-zinc-100 flex-shrink-0 border border-[#E8E1D5]" />
        <div class="flex-1 flex flex-col justify-between">
          <div class="space-y-0.5">
            <div class="flex items-start justify-between gap-1.5">
              <h4 class="font-serif text-xs sm:text-sm font-medium text-[#1E1E1E] line-clamp-1">${item.product.name}</h4>
              <button onclick="removeCartItem(${index})" class="text-zinc-400 hover:text-red-600 transition-colors p-0.5 cursor-pointer" title="Remove item">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            ${item.selected_color ? `
              <div class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#FAF7F0] border border-[#E8E1D5] text-[9px] sm:text-[10px] text-[#5C1D24] font-medium">
                <span>Shade:</span>
                <strong>${item.selected_color}</strong>
              </div>
            ` : ''}

            ${item.selected_custom_items && item.selected_custom_items.length > 0 ? `
              <div class="text-[9px] sm:text-[10px] bg-[#FAF8F3] p-1.5 rounded border border-[#EFE8DC] space-y-0.5 mt-1">
                <span class="text-[#C5A059] font-semibold block">Bespoke Inclusions:</span>
                <p class="text-zinc-600 leading-tight line-clamp-2">${item.selected_custom_items.join(', ')}</p>
              </div>
            ` : ''}

            <p class="font-serif text-xs sm:text-sm font-bold text-[#5C1D24]">₹${item.product.price.toLocaleString()}</p>
          </div>

          <div class="flex items-center justify-between pt-1.5">
            <div class="flex items-center border border-[#E8E1D5] rounded bg-[#FAF7F0] overflow-hidden">
              <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})" class="px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-200 cursor-pointer">
                <i data-lucide="minus" class="w-2.5 h-2.5"></i>
              </button>
              <span class="px-2 text-[10px] sm:text-[11px] font-semibold text-zinc-800">${item.quantity}</span>
              <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})" class="px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-200 cursor-pointer">
                <i data-lucide="plus" class="w-2.5 h-2.5"></i>
              </button>
            </div>
            <span class="text-xs font-bold text-zinc-800">₹${(item.product.price * item.quantity).toLocaleString()}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 150;
  document.getElementById('cart-subtotal').innerText = `₹${subtotal.toLocaleString()}`;
  document.getElementById('cart-shipping').innerText = shippingFee === 0 ? 'FREE' : '₹150';
  document.getElementById('cart-total').innerText = `₹${(subtotal + shippingFee).toLocaleString()}`;
}

lucide.createIcons();
}

function updateCartQuantity(index, newQty) {
if (newQty <= 0) {
  cart.splice(index, 1);
} else {
  cart[index].quantity = newQty;
}
updateCartUI();
}

function removeCartItem(index) {
cart.splice(index, 1);
updateCartUI();
}

function addDirectHamperToCart(hamperId) {
const hamper = sampleProducts.find(p => p.id === hamperId);
if (!hamper) return;
const color = selectedHamperColors[hamperId]?.name;

cart.push({
  product: hamper,
  quantity: 1,
  selected_color: color
});

updateCartUI();
openCartDrawer();
}

function openCartDrawer() {
document.getElementById('modal-cart-drawer').classList.remove('hidden');
}

function closeCartDrawer() {
document.getElementById('modal-cart-drawer').classList.add('hidden');
}

// --- BUILD YOUR OWN HAMPER MODAL CONTROLLER ---

function openHamperCustomizer(hamperId) {
const hamper = sampleProducts.find(p => p.id === hamperId);
if (!hamper) return;

activeHamperModal = hamper;
selectedHamperItems = [];

document.getElementById('hamper-modal-img').src = hamper.images[0];
document.getElementById('hamper-modal-name').innerText = hamper.name;
document.getElementById('hamper-modal-desc').innerText = hamper.description;
document.getElementById('hamper-modal-price').innerText = `Total Set Price: ₹${hamper.price.toLocaleString()}`;

renderHamperModalPool();
updateHamperModalSelections();

document.getElementById('modal-hamper').classList.remove('hidden');
}

function closeHamperModal() {
activeHamperModal = null;
selectedHamperItems = [];
document.getElementById('modal-hamper').classList.add('hidden');
}

function renderHamperModalPool() {
if (!activeHamperModal) return;
const pool = activeHamperModal.hamper_items || [];
const container = document.getElementById('hamper-pool-grid');

container.innerHTML = pool.map((item, idx) => {
  const isChecked = selectedHamperItems.includes(item.included_item_name);
  return `
    <div
      onclick="toggleHamperModalItem('${item.included_item_name}')"
      class="p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
        isChecked ? 'border-[#C5A059] bg-[#FAF6EC] shadow-2xs' : 'border-[#E8E1D5] bg-white hover:border-[#C5A059]/50 hover:bg-[#FAF7F0]'
      }"
    >
      <div class="flex items-center gap-2 sm:gap-2.5">
        <div class="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center border transition-colors ${
          isChecked ? 'bg-[#5C1D24] border-[#5C1D24] text-white' : 'border-zinc-300 bg-white'
        }">
          ${isChecked ? '<i data-lucide="check" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>' : ''}
        </div>
        <span class="text-xs font-medium text-zinc-800">${item.included_item_name}</span>
      </div>
    </div>
  `;
}).join('');

lucide.createIcons();
}

function toggleHamperModalItem(itemName) {
const errEl = document.getElementById('hamper-modal-error');
errEl.classList.add('hidden');

if (selectedHamperItems.includes(itemName)) {
  selectedHamperItems = selectedHamperItems.filter(i => i !== itemName);
} else {
  if (selectedHamperItems.length >= 4) {
    document.getElementById('hamper-modal-error-text').innerText = 'You have reached the maximum of 4 items for this bespoke set.';
    errEl.classList.remove('hidden');
    return;
  }
  selectedHamperItems.push(itemName);
}

renderHamperModalPool();
updateHamperModalSelections();
}

function updateHamperModalSelections() {
const counterEl = document.getElementById('hamper-counter');
counterEl.innerText = `${selectedHamperItems.length} / 4`;
if (selectedHamperItems.length >= 2) {
  counterEl.className = 'text-xs sm:text-sm font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-100 text-emerald-800';
} else {
  counterEl.className = 'text-xs sm:text-sm font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-100 text-amber-800';
}

const previewEl = document.getElementById('hamper-preview-pills');
if (selectedHamperItems.length === 0) {
  previewEl.innerHTML = `<p class="text-xs text-zinc-400 italic">No items selected yet. Click any items above to curate your chest.</p>`;
} else {
  previewEl.innerHTML = selectedHamperItems.map(name => `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] sm:text-xs text-zinc-800 font-medium shadow-2xs">
      <i data-lucide="check" class="w-3 h-3 text-[#C5A059]"></i>
      <span>${name}</span>
      <button onclick="event.stopPropagation(); toggleHamperModalItem('${name}')" class="text-zinc-400 hover:text-red-600 ml-1 cursor-pointer">
        <i data-lucide="x" class="w-3 h-3"></i>
      </button>
    </span>
  `).join('');
}

const statusEl = document.getElementById('hamper-footer-status');
if (selectedHamperItems.length < 2) {
  statusEl.innerHTML = `<span>Select ${2 - selectedHamperItems.length} more to continue</span>`;
} else {
  statusEl.innerHTML = `<span class="text-emerald-700 font-medium">Ready to pack in gold gift box!</span>`;
}

lucide.createIcons();
}

// --- CHECKOUT MODAL CONTROLLER ---

function openCheckoutModal() {
if (cart.length === 0) return;

const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
const shipping = subtotal >= 2499 ? 0 : 150;
const total = subtotal + shipping;

document.getElementById('checkout-item-count').innerText = `Order Items (${cart.length})`;
document.getElementById('checkout-total-price').innerText = `Total: ₹${total.toLocaleString()}`;

const listContainer = document.getElementById('checkout-item-list');
listContainer.innerHTML = cart.map(item => `
  <div class="flex justify-between items-center text-[10px] sm:text-[11px]">
    <div class="flex items-center gap-1.5">
      <span class="line-clamp-1 font-medium">${item.product.name} × ${item.quantity}</span>
      ${item.selected_color ? `<span class="px-1.5 py-0.2 bg-white border border-[#E8E1D5] rounded text-[9px] text-[#5C1D24] font-semibold">${item.selected_color}</span>` : ''}
    </div>
    <span class="font-semibold text-zinc-800">₹${(item.product.price * item.quantity).toLocaleString()}</span>
  </div>
`).join('');

document.getElementById('checkout-form').classList.remove('hidden');
document.getElementById('checkout-success-view').classList.add('hidden');
document.getElementById('modal-checkout').classList.remove('hidden');
closeCartDrawer();
}

function closeCheckoutModal() {
document.getElementById('modal-checkout').classList.add('hidden');
}

// --- REVIEWS MODAL CONTROLLER ---

function openReviewModal() {
reviewRating = 5;
renderReviewStars();
document.getElementById('review-form').classList.remove('hidden');
document.getElementById('review-success-view').classList.add('hidden');
document.getElementById('modal-review').classList.remove('hidden');
}

function closeReviewModal() {
document.getElementById('modal-review').classList.add('hidden');
}

function renderReviewStars() {
const container = document.getElementById('review-star-rating');
container.innerHTML = [1, 2, 3, 4, 5].map(star => `
  <button type="button" onclick="setReviewRating(${star})" class="focus:outline-none cursor-pointer p-0.5">
    <i data-lucide="star" class="w-5 h-5 sm:w-6 sm:h-6 ${star <= reviewRating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-zinc-300'}"></i>
  </button>
`).join('');
lucide.createIcons();
}

function setReviewRating(r) {
reviewRating = r;
renderReviewStars();
}

// --- INITIALIZATION & EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
renderCatalogue();
renderHampers();
renderHowToOrder();
renderInstagramReels();
renderTestimonials();
renderFaq();
updateCartUI();

// Floating & Hero Buttons
document.getElementById('btn-open-cart-floating').addEventListener('click', openCartDrawer);
document.getElementById('cart-drawer-backdrop').addEventListener('click', closeCartDrawer);
document.getElementById('btn-close-cart').addEventListener('click', closeCartDrawer);
document.getElementById('btn-proceed-checkout').addEventListener('click', openCheckoutModal);

document.getElementById('hero-cta-shop').addEventListener('click', () => {
  document.getElementById('section-shop')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hero-cta-custom-hamper').addEventListener('click', () => {
  document.getElementById('section-custom-hamper')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hero-card-view-btn').addEventListener('click', () => {
  document.getElementById('section-hampers')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-start-shopping').addEventListener('click', () => {
  document.getElementById('section-shop')?.scrollIntoView({ behavior: 'smooth' });
});

// Hamper Modal Listeners
document.getElementById('btn-close-hamper-modal').addEventListener('click', closeHamperModal);
document.getElementById('btn-cancel-hamper-modal').addEventListener('click', closeHamperModal);
document.getElementById('btn-confirm-custom-hamper').addEventListener('click', () => {
  if (!activeHamperModal) return;
  if (selectedHamperItems.length < 2) {
    const errEl = document.getElementById('hamper-modal-error');
    document.getElementById('hamper-modal-error-text').innerText = 'Please select at least 2 items to complete your hamper.';
    errEl.classList.remove('hidden');
    return;
  }

  cart.push({
    product: activeHamperModal,
    quantity: 1,
    selected_custom_items: [...selectedHamperItems]
  });

  closeHamperModal();
  updateCartUI();
  openCartDrawer();
});

// Checkout Modal Listeners
document.getElementById('btn-close-checkout-modal').addEventListener('click', closeCheckoutModal);
document.getElementById('btn-continue-shopping').addEventListener('click', closeCheckoutModal);

document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const ig = document.getElementById('cust-ig').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const notes = document.getElementById('cust-notes').value.trim();
  const errEl = document.getElementById('checkout-error-msg');

  errEl.classList.add('hidden');

  if (!name) {
    errEl.innerText = 'Please provide your full name.';
    errEl.classList.remove('hidden');
    return;
  }
  if (!phone || phone.length < 8) {
    errEl.innerText = 'Please enter a valid phone number for tracking.';
    errEl.classList.remove('hidden');
    return;
  }
  if (!address || address.length < 10) {
    errEl.innerText = 'Please enter your full delivery address.';
    errEl.classList.remove('hidden');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 2499 ? 0 : 150;
  const totalAmount = subtotal + shipping;

  const orderItems = cart.map(item => ({
    product_id: item.product.id,
    name: item.product.name,
    qty: item.quantity,
    price: item.product.price,
    selected_color: item.selected_color,
    selected_custom_items: item.selected_custom_items
  }));

  const newOrder = store.addOrder({
    customer_name: name,
    customer_phone: phone,
    customer_instagram_handle: ig || undefined,
    order_items: orderItems,
    total_amount: totalAmount,
    order_source: 'website',
    shipping_address: address,
    notes: notes || undefined,
    status: 'new'
  });

  // Confetti celebration
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#5C1D24', '#FAF7F0']
    });
  }

  // Success View Populate
  document.getElementById('success-order-id').innerText = `Order ID: #${newOrder.id}`;
  document.getElementById('success-order-name').innerText = `Thank you, ${newOrder.customer_name}!`;
  document.getElementById('success-items-count').innerText = `Items (${newOrder.order_items.length})`;
  document.getElementById('success-items-total').innerText = `Amount: ₹${newOrder.total_amount.toLocaleString()}`;
  document.getElementById('success-shipping-address').innerText = `Shipping Address: ${newOrder.shipping_address}`;

  document.getElementById('success-items-list').innerHTML = newOrder.order_items.map(it => `
    <div class="flex justify-between">
      <span class="line-clamp-1">${it.name} (x${it.qty})</span>
      <span class="font-medium">₹${(it.price * it.qty).toLocaleString()}</span>
    </div>
  `).join('');

  document.getElementById('success-wa-link').href = `https://wa.me/?text=Hi%20N.S%20Collection%2C%20I%20just%20placed%20order%20%23${newOrder.id}%20for%20%E2%82%B9${newOrder.total_amount}%20on%20the%20website!`;

  // Reset Cart
  cart = [];
  updateCartUI();

  document.getElementById('checkout-form').classList.add('hidden');
  document.getElementById('checkout-success-view').classList.remove('hidden');
});

// Review Modal Listeners
document.getElementById('btn-open-review-floating').addEventListener('click', openReviewModal);
document.getElementById('btn-close-review-modal').addEventListener('click', closeReviewModal);
document.getElementById('btn-close-review-success').addEventListener('click', closeReviewModal);

document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('review-name').value.trim();
  const text = document.getElementById('review-text').value.trim();

  if (!name || !text) return;

  store.addTestimonial({
    customer_name: name,
    review_text: text,
    rating: reviewRating,
    is_approved: false,
    is_featured: false
  });

  document.getElementById('review-form').classList.add('hidden');
  document.getElementById('review-success-view').classList.remove('hidden');
});
});
