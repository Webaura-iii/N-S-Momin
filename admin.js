// Application Central State
const appState = {
  authenticated: false,
  adminUser: {
    name: 'Noor Saba Momin',
    email: 'admin@nscollection.com',
    password: 'admin123'
  },
  activeTab: 'dashboard',
  filters: {
    productSearch: '',
    productCategory: 'All',
    productType: 'All',
    productStatus: 'All',
    orderSearch: '',
    orderStatus: 'All',
    orderChannel: 'All'
  },
  categories: [
    { id: 'cat-1', name: 'Modal Silk', slug: 'modal-silk', description: 'Textured luxury modal silk scarves' },
    { id: 'cat-2', name: 'Premium Chiffon', slug: 'premium-chiffon', description: 'Lightweight flowy chiffon hijabs' },
    { id: 'cat-3', name: 'Luxe Satin', slug: 'luxe-satin', description: 'Glossy finish event satin wraps' },
    { id: 'cat-4', name: 'Everyday Ribbed Jersey', slug: 'everyday-ribbed-jersey', description: 'Stretch breathable everyday wear' },
    { id: 'cat-5', name: 'Curated Hampers', slug: 'curated-hampers', description: 'Bespoke celebration and bridal gift boxes' }
  ],
  products: [
    {
      id: 'prod-1',
      name: 'Champagne Gold Textured Silk Hijab',
      slug: '/champagne-gold-textured-silk-hijab',
      category: 'Modal Silk',
      type: 'Hijab',
      price: 899,
      stock: 24,
      status: 'Active',
      featured: true,
      swatches: ['#D4AF37', '#222222', '#5C1D24'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prod-2',
      name: 'Rich Maroon Pure Chiffon Georgette',
      slug: '/rich-maroon-pure-chiffon-georgette',
      category: 'Premium Chiffon',
      type: 'Hijab',
      price: 649,
      stock: 18,
      status: 'Active',
      featured: true,
      swatches: ['#5C1D24', '#222222'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prod-3',
      name: 'Ivory Cream Luxe Satin Wrap',
      slug: '/ivory-cream-luxe-satin-wrap',
      category: 'Luxe Satin',
      type: 'Hijab',
      price: 999,
      stock: 11,
      status: 'Active',
      featured: true,
      swatches: ['#F5F5DC'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prod-4',
      name: 'Smokey Charcoal Premium Jersey',
      slug: '/smokey-charcoal-premium-jersey',
      category: 'Everyday Ribbed Jersey',
      type: 'Hijab',
      price: 549,
      stock: 35,
      status: 'Active',
      featured: false,
      swatches: ['#333333'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prod-5',
      name: 'Dusty Rose Fine Georgette',
      slug: '/dusty-rose-fine-georgette',
      category: 'Premium Chiffon',
      type: 'Hijab',
      price: 649,
      stock: 8,
      status: 'Active',
      featured: false,
      swatches: ['#DCAE96'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prod-6',
      name: 'The Royal Sovereign Bridal Hamper',
      slug: '/the-royal-sovereign-bridal-hamper',
      category: 'Curated Hampers',
      type: 'Hamper Set',
      price: 3499,
      stock: 10,
      status: 'Active',
      featured: true,
      swatches: ['#5C1D24', '#D4AF37'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'
    }
  ],
  orders: [
    {
      id: 'ord-2259',
      date: '16/09/2026',
      time: '12:20:31',
      customer: 'Mubashshera Khan',
      phone: '9359682596',
      address: 'Khadka Road',
      source: 'Website',
      items: 'Ivory Cream Luxe Satin Wrap (x1)',
      items_detail: [{ name: 'Ivory Cream Luxe Satin Wrap', qty: 1, price: 999 }],
      total: 1149,
      status: 'New'
    },
    {
      id: 'ord-1002',
      date: '16/09/2026',
      time: '10:14:05',
      customer: 'Farheen Ansari',
      phone: '+91 91370 88219',
      handle: '@farheen_a',
      source: 'Website',
      items: 'Bespoke "Build Your Own" Hijab Hamper (x1)',
      items_detail: [{ name: 'Bespoke "Build Your Own" Hijab Hamper', qty: 1, price: 2499 }],
      total: 2499,
      status: 'New'
    },
    {
      id: 'ord-1001',
      date: '15/09/2026',
      time: '18:45:12',
      customer: 'Sabrina Siddiqui',
      phone: '+91 98201 44512',
      handle: '@sabrina_glam',
      source: 'WhatsApp',
      items: 'Champagne Gold Textured Silk Hijab (x2)',
      items_detail: [{ name: 'Champagne Gold Textured Silk Hijab', qty: 2, price: 899 }],
      total: 1798,
      status: 'Confirmed'
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Amina Farooqui',
      date: '14/02/2026',
      stars: 5,
      text: '"Ordered the bespoke hamper for my sister\'s Nikah. The presentation with the botanical gold seal took everyone\'s breath away. The silk fabric quality is truly unmatched!"',
      approved: true,
      featured: true
    },
    {
      id: 'rev-2',
      author: 'Zahra K.',
      date: '18/02/2026',
      stars: 5,
      text: '"I discovered N.S Collection on Instagram via @noor_saba_momin and was blown away by how quick the global delivery was. The champagne textured modal stays in place all day without slipping!"',
      approved: true,
      featured: true
    },
    {
      id: 'rev-3',
      author: 'Maryam Siddiqui',
      date: '22/02/2026',
      stars: 5,
      text: '"The best modest fashion purchase I have made this year. The colours are rich, elegant, and the packaging makes you feel so cherished."',
      approved: true,
      featured: true
    }
  ],
  faqs: [
    {
      q: 'How does the Build-Your-Own Hamper work?',
      a: 'Choose our Bespoke Hamper product and select your favourite 3 hijabs along with complimentary accessories (magnetic clips & undercaps) from our pool. We pack each piece into our signature gold laurel keepsake box with a personalized note.'
    },
    {
      q: 'Can I order directly through WhatsApp or Instagram DM?',
      a: 'Yes! While you can checkout seamlessly here on the website, we also welcome orders directly via WhatsApp or DM (@noor_saba_momin). Our team confirms your shades and tracking immediately.'
    },
    {
      q: 'What is your shipping timeline for international orders?',
      a: 'We ship globally with premium tracked couriers. International parcels typically reach your doorstep within 5 to 8 business days.'
    },
    {
      q: 'Are your fabrics slip-resistant and breathable?',
      a: 'All our georgette, chiffon, and modal textiles are carefully sampled for breathability, lightweight drape, and pin-stability so you stay comfortable from dawn to dusk.'
    }
  ]
};

// Mobile Sidebar Helper Functions
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar-container');
  const backdrop = document.getElementById('mobile-sidebar-backdrop');
  if (sidebar && backdrop) {
    const isOpen = !sidebar.classList.contains('-translate-x-full');
    if (isOpen) {
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    } else {
      sidebar.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
    }
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar-container');
  const backdrop = document.getElementById('mobile-sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  checkSession();
  setupNavigation();
});

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Session Check
function checkSession() {
  const session = localStorage.getItem('ns_admin_session');
  if (session === 'true') {
    appState.authenticated = true;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('admin-app').classList.remove('hidden');
    document.getElementById('admin-user-display').textContent = appState.adminUser.name;
    updateBadge();
    switchTab('dashboard');
  } else {
    appState.authenticated = false;
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('admin-app').classList.add('hidden');
  }
  refreshIcons();
}

// Authentication Handlers
function handleLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email').value.trim();
  const passInput = document.getElementById('login-password').value.trim();
  const errorBox = document.getElementById('login-error');

  if (emailInput === appState.adminUser.email && passInput === appState.adminUser.password) {
    localStorage.setItem('ns_admin_session', 'true');
    errorBox.classList.add('hidden');
    checkSession();
  } else {
    errorBox.textContent = 'Invalid credentials. Please enter valid owner credentials.';
    errorBox.classList.remove('hidden');
  }
}

function handleLogout() {
  localStorage.removeItem('ns_admin_session');
  checkSession();
}

// Navigation Controls
function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      switchTab(tab);
      closeMobileSidebar();
    });
  });
}

function updateBadge() {
  const newOrders = appState.orders.filter(o => o.status === 'New').length;
  const badge = document.getElementById('nav-order-badge');
  if (badge) badge.textContent = newOrders;
}

function switchTab(tabName) {
  appState.activeTab = tabName;

  const titles = {
    dashboard: 'Dashboard',
    products: 'Products & Hampers',
    orders: 'Orders Management',
    reviews: 'Customer Testimonials',
    site_content: 'Site Content Editor',
    settings: 'Settings & Backups'
  };
  document.getElementById('breadcrumb-title').textContent = titles[tabName] || 'Dashboard';

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    const isTarget = btn.getAttribute('data-tab') === tabName;
    if (isTarget) {
      btn.className = 'nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-[#5C1D24] text-white shadow-xs cursor-pointer';
    } else {
      btn.className = 'nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-zinc-700 hover:bg-[#EFE8DA] transition-colors cursor-pointer';
    }
  });

  renderTabContent();
}

// Render Router
function renderTabContent() {
  const container = document.getElementById('tab-content');
  updateBadge();
  
  if (appState.activeTab === 'dashboard') {
    container.innerHTML = renderDashboard();
  } else if (appState.activeTab === 'products') {
    container.innerHTML = renderProducts();
  } else if (appState.activeTab === 'orders') {
    container.innerHTML = renderOrders();
  } else if (appState.activeTab === 'reviews') {
    container.innerHTML = renderReviews();
  } else if (appState.activeTab === 'site_content') {
    container.innerHTML = renderSiteContent();
  } else if (appState.activeTab === 'settings') {
    container.innerHTML = renderSettings();
  }

  refreshIcons();
}

/* ==========================================================================
   VIEW 1: DASHBOARD
   ========================================================================== */
function renderDashboard() {
  const pendingOrders = appState.orders.filter(o => o.status === 'New').length;
  const lowStock = appState.products.filter(p => p.stock <= 10).length;
  const confirmedRev = appState.orders
    .filter(o => o.status === 'Confirmed' || o.status === 'Shipped')
    .reduce((sum, o) => sum + o.total, 0);

  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <span class="text-[10px] font-bold tracking-widest uppercase text-[#C5A059]">Overview &amp; Store Pulse</span>
        <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900 mt-1">Admin Workspace</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Real-time synchronization active with Firestore database</p>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button onclick="openManualOrderModal()" class="flex-1 sm:flex-none justify-center px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer">
          <i data-lucide="message-square" class="w-4 h-4"></i>
          <span>Log Order</span>
        </button>
        <button onclick="openAddProductModal()" class="flex-1 sm:flex-none justify-center px-4 py-2.5 rounded-xl bg-[#5C1D24] hover:bg-[#47161c] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Product</span>
        </button>
      </div>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-2xl border border-[#EAE3D2] flex justify-between items-start">
        <div>
          <span class="text-xs font-medium text-zinc-500">Catalog Inventory</span>
          <p class="font-serif text-3xl font-bold text-zinc-900 mt-2">${appState.products.length}</p>
          <p class="text-[11px] text-emerald-700 font-medium mt-1">${appState.products.filter(p=>p.status==='Active').length} Active <span class="text-zinc-400">•</span> 0 Draft</p>
        </div>
        <div class="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
          <i data-lucide="package" class="w-5 h-5"></i>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-[#EAE3D2] flex justify-between items-start">
        <div>
          <span class="text-xs font-medium text-zinc-500">New Pending Orders</span>
          <p class="font-serif text-3xl font-bold text-amber-600 mt-2">${pendingOrders}</p>
          <p class="text-[11px] text-zinc-500 mt-1">${appState.orders.length} Total orders recorded</p>
        </div>
        <div class="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-100 relative">
          <i data-lucide="shopping-cart" class="w-5 h-5"></i>
          <span class="w-2 h-2 rounded-full bg-amber-500 absolute top-2 right-2"></span>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-[#EAE3D2] flex justify-between items-start">
        <div>
          <span class="text-xs font-medium text-zinc-500">Low-Stock Items</span>
          <p class="font-serif text-3xl font-bold text-rose-700 mt-2">${lowStock}</p>
          <p class="text-[11px] text-zinc-500 mt-1">Items with &le; 10 units in stock</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-100">
          <i data-lucide="alert-triangle" class="w-5 h-5"></i>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-[#EAE3D2] flex justify-between items-start">
        <div>
          <span class="text-xs font-medium text-zinc-500">Confirmed Revenue</span>
          <p class="font-serif text-3xl font-bold text-emerald-700 mt-2">₹${confirmedRev.toLocaleString()}</p>
          <p class="text-[11px] text-zinc-500 mt-1">From confirmed &amp; fulfilled sales</p>
        </div>
        <div class="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
          <i data-lucide="indian-rupee" class="w-5 h-5"></i>
        </div>
      </div>
    </div>

    <!-- Recent Orders Table -->
    <div class="bg-white rounded-2xl border border-[#EAE3D2] p-4 sm:p-6 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 class="font-serif text-xl font-normal text-zinc-900">Recent Orders</h3>
          <p class="text-xs text-zinc-500">Real-time feed across Website, WhatsApp, and Instagram orders</p>
        </div>
        <button onclick="switchTab('orders')" class="text-xs font-semibold text-[#5C1D24] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto">
          <span>View All Orders</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <div class="overflow-x-auto -mx-4 sm:mx-0">
        <div class="inline-block min-w-full align-middle">
          <table class="min-w-full text-left text-xs text-zinc-700">
            <thead class="bg-[#FAF7F2] text-zinc-500 uppercase text-[10px] tracking-wider border-y border-[#EAE3D2]">
              <tr>
                <th class="py-3 px-4">ORDER ID</th>
                <th class="py-3 px-4">CUSTOMER</th>
                <th class="py-3 px-4">SOURCE</th>
                <th class="py-3 px-4">ITEMS</th>
                <th class="py-3 px-4">TOTAL</th>
                <th class="py-3 px-4">STATUS</th>
                <th class="py-3 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EAE3D2]">
              ${appState.orders.map(order => `
                <tr class="hover:bg-[#FAF7F2]">
                  <td class="py-3.5 px-4 font-mono font-bold text-zinc-900 whitespace-nowrap">#${order.id}</td>
                  <td class="py-3.5 px-4 font-semibold text-zinc-900 whitespace-nowrap">
                    ${order.customer}
                    <br/><span class="text-[10px] text-zinc-400 font-normal">${order.phone}</span>
                  </td>
                  <td class="py-3.5 px-4 whitespace-nowrap">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${order.source === 'Website' ? 'bg-zinc-100 text-zinc-700 border border-zinc-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}">
                      ${order.source}
                    </span>
                  </td>
                  <td class="py-3.5 px-4 text-zinc-600 min-w-[180px]">${order.items}</td>
                  <td class="py-3.5 px-4 font-serif font-bold text-zinc-900 whitespace-nowrap">₹${order.total.toLocaleString()}</td>
                  <td class="py-3.5 px-4 whitespace-nowrap">
                    <select onchange="updateOrderStatus('${order.id}', this.value)" class="text-[11px] font-semibold py-1 px-2 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 cursor-pointer">
                      <option value="New" ${order.status === 'New' ? 'selected' : ''}>New</option>
                      <option value="Confirmed" ${order.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                      <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    </select>
                  </td>
                  <td class="py-3.5 px-4 text-right whitespace-nowrap">
                    <button onclick="openOrderDetailsModal('${order.id}')" class="px-3 py-1.5 rounded-lg border border-[#EAE3D2] hover:bg-[#FAF7F2] text-xs font-medium text-zinc-700 cursor-pointer">
                      View Details
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   VIEW 2: PRODUCTS
   ========================================================================== */
function renderProducts() {
  const filteredProducts = appState.products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(appState.filters.productSearch.toLowerCase()) || 
                        p.slug.toLowerCase().includes(appState.filters.productSearch.toLowerCase());
    const matchCategory = appState.filters.productCategory === 'All' || p.category === appState.filters.productCategory;
    const matchType = appState.filters.productType === 'All' || p.type === appState.filters.productType;
    const matchStatus = appState.filters.productStatus === 'All' || p.status === appState.filters.productStatus;
    return matchSearch && matchCategory && matchType && matchStatus;
  });

  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900">Products &amp; Hampers Catalog</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Manage your hijabs, luxury scarves, and bespoke celebration hamper sets</p>
      </div>
      <button onclick="openAddProductModal()" class="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-[#5C1D24] hover:bg-[#47161c] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Add New Product / Hamper</span>
      </button>
    </div>

    <!-- Filters Bar -->
    <div class="bg-white p-4 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
      <div class="relative flex-1 min-w-[200px]">
        <i data-lucide="search" class="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
        <input type="text" value="${appState.filters.productSearch}" oninput="updateProductFilter('productSearch', this.value)" placeholder="Search title, slug..." class="w-full pl-9 pr-3.5 py-2 text-xs" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-auto">
        <select onchange="updateProductFilter('productCategory', this.value)" class="text-xs py-2 px-3 cursor-pointer">
          <option value="All">All Categories</option>
          ${appState.categories.map(c => `<option value="${c.name}" ${appState.filters.productCategory === c.name ? 'selected' : ''}>${c.name}</option>`).join('')}
        </select>
        <select onchange="updateProductFilter('productType', this.value)" class="text-xs py-2 px-3 cursor-pointer">
          <option value="All">All Product Types</option>
          <option value="Hijab" ${appState.filters.productType === 'Hijab' ? 'selected' : ''}>Hijab</option>
          <option value="Hamper Set" ${appState.filters.productType === 'Hamper Set' ? 'selected' : ''}>Hamper Set</option>
        </select>
        <select onchange="updateProductFilter('productStatus', this.value)" class="text-xs py-2 px-3 cursor-pointer">
          <option value="All">All Statuses</option>
          <option value="Active" ${appState.filters.productStatus === 'Active' ? 'selected' : ''}>Active</option>
          <option value="Draft" ${appState.filters.productStatus === 'Draft' ? 'selected' : ''}>Draft</option>
        </select>
      </div>
    </div>

    <!-- Product Table -->
    <div class="bg-white rounded-2xl border border-[#EAE3D2] overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-zinc-700">
          <thead class="bg-[#FAF7F2] text-zinc-500 uppercase text-[10px] tracking-wider border-b border-[#EAE3D2]">
            <tr>
              <th class="py-3 px-4 w-8"><input type="checkbox" onclick="toggleSelectAllProducts(this)" /></th>
              <th class="py-3 px-4">ITEM</th>
              <th class="py-3 px-4">CATEGORY</th>
              <th class="py-3 px-4">TYPE</th>
              <th class="py-3 px-4">PRICE</th>
              <th class="py-3 px-4">STOCK</th>
              <th class="py-3 px-4">STATUS</th>
              <th class="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#EAE3D2]">
            ${filteredProducts.length === 0 ? `
              <tr><td colspan="8" class="text-center py-8 text-zinc-400">No products matching the criteria found.</td></tr>
            ` : filteredProducts.map(p => `
              <tr class="hover:bg-[#FAF7F2]">
                <td class="py-3.5 px-4"><input type="checkbox" class="product-checkbox" value="${p.id}" /></td>
                <td class="py-3.5 px-4 min-w-[200px]">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#EAE3D2] shrink-0 overflow-hidden relative">
                      <img src="${p.image || (p.images && p.images[0]) || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=100&q=80'}" class="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span class="font-semibold text-zinc-900">${p.name}</span>
                      <p class="text-[10px] text-zinc-400">${p.slug}</p>
                      <div class="flex items-center gap-1 mt-1">
                        ${(p.swatches || []).map(hex => `<span class="w-2.5 h-2.5 rounded-full border border-black/10 inline-block" style="background-color: ${hex}"></span>`).join('')}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="py-3.5 px-4 text-zinc-600 whitespace-nowrap">${p.category}</td>
                <td class="py-3.5 px-4 whitespace-nowrap">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold ${p.type === 'Hamper Set' ? 'bg-amber-100 text-amber-900' : 'bg-zinc-100 text-zinc-600'}">
                    ${p.type}
                  </span>
                </td>
                <td class="py-3.5 px-4 font-serif font-bold text-zinc-900 whitespace-nowrap">₹${p.price}</td>
                <td class="py-3.5 px-4 font-medium whitespace-nowrap ${p.stock <= 10 ? 'text-amber-600 font-bold' : ''}">${p.stock}</td>
                <td class="py-3.5 px-4 whitespace-nowrap">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'}">
                    ${p.status}
                  </span>
                  ${p.featured ? '<p class="text-[9px] font-bold uppercase text-amber-800 tracking-wider mt-0.5">FEATURED</p>' : ''}
                </td>
                <td class="py-3.5 px-4 text-right whitespace-nowrap space-x-1">
                  <button onclick="openEditProductModal('${p.id}')" title="Edit Product Details" class="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-700 cursor-pointer"><i data-lucide="pencil" class="w-4 h-4"></i></button>
                  <button onclick="toggleProductFeatured('${p.id}')" title="Toggle Featured" class="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-600 cursor-pointer"><i data-lucide="star" class="w-4 h-4 ${p.featured ? 'fill-amber-500 text-amber-500' : ''}"></i></button>
                  <button onclick="deleteProduct('${p.id}')" title="Delete Product" class="p-1.5 hover:bg-zinc-100 rounded-lg text-rose-600 cursor-pointer"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function updateProductFilter(key, val) {
  appState.filters[key] = val;
  renderTabContent();
}

function toggleSelectAllProducts(master) {
  document.querySelectorAll('.product-checkbox').forEach(cb => cb.checked = master.checked);
}

function toggleProductFeatured(prodId) {
  const prod = appState.products.find(p => p.id === prodId);
  if (prod) {
    prod.featured = !prod.featured;
    renderTabContent();
  }
}

function deleteProduct(prodId) {
  if (confirm('Are you sure you want to delete this product from inventory?')) {
    appState.products = appState.products.filter(p => p.id !== prodId);
    renderTabContent();
  }
}

/* ==========================================================================
   VIEW 3: ORDERS
   ========================================================================== */
function renderOrders() {
  const filteredOrders = appState.orders.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(appState.filters.orderSearch.toLowerCase()) ||
                        o.customer.toLowerCase().includes(appState.filters.orderSearch.toLowerCase()) ||
                        o.phone.includes(appState.filters.orderSearch);
    const matchStatus = appState.filters.orderStatus === 'All' || o.status === appState.filters.orderStatus;
    const matchChannel = appState.filters.orderChannel === 'All' || o.source === appState.filters.orderChannel;
    return matchSearch && matchStatus && matchChannel;
  });

  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900">Orders Management</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Track, update, and manually log orders received across Website, WhatsApp, and Instagram DMs</p>
      </div>
      <button onclick="openManualOrderModal()" class="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Manual Order</span>
      </button>
    </div>

    <!-- Filters Bar -->
    <div class="bg-white p-4 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
      <div class="relative flex-1 min-w-[200px]">
        <i data-lucide="search" class="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
        <input type="text" value="${appState.filters.orderSearch}" oninput="updateOrderFilter('orderSearch', this.value)" placeholder="Search order #, customer, phone..." class="w-full pl-9 pr-3.5 py-2 text-xs" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-auto">
        <select onchange="updateOrderFilter('orderStatus', this.value)" class="text-xs py-2 px-3 cursor-pointer">
          <option value="All">All Order Statuses</option>
          <option value="New" ${appState.filters.orderStatus === 'New' ? 'selected' : ''}>New</option>
          <option value="Confirmed" ${appState.filters.orderStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="Shipped" ${appState.filters.orderStatus === 'Shipped' ? 'selected' : ''}>Shipped</option>
        </select>
        <select onchange="updateOrderFilter('orderChannel', this.value)" class="text-xs py-2 px-3 cursor-pointer">
          <option value="All">All Order Channels</option>
          <option value="Website" ${appState.filters.orderChannel === 'Website' ? 'selected' : ''}>Website</option>
          <option value="WhatsApp" ${appState.filters.orderChannel === 'WhatsApp' ? 'selected' : ''}>WhatsApp</option>
          <option value="Instagram" ${appState.filters.orderChannel === 'Instagram' ? 'selected' : ''}>Instagram</option>
        </select>
      </div>
    </div>

    <!-- Full Orders Table -->
    <div class="bg-white rounded-2xl border border-[#EAE3D2] overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-zinc-700">
          <thead class="bg-[#FAF7F2] text-zinc-500 uppercase text-[10px] tracking-wider border-b border-[#EAE3D2]">
            <tr>
              <th class="py-3 px-4">ORDER ID</th>
              <th class="py-3 px-4">CUSTOMER INFO</th>
              <th class="py-3 px-4">CHANNEL</th>
              <th class="py-3 px-4">PURCHASED ITEMS</th>
              <th class="py-3 px-4">TOTAL AMOUNT</th>
              <th class="py-3 px-4">STATUS</th>
              <th class="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#EAE3D2]">
            ${filteredOrders.length === 0 ? `
              <tr><td colspan="7" class="text-center py-8 text-zinc-400">No orders match the selected filters.</td></tr>
            ` : filteredOrders.map(order => `
              <tr class="hover:bg-[#FAF7F2]">
                <td class="py-3.5 px-4 font-mono font-bold text-zinc-900 whitespace-nowrap">
                  #${order.id}
                  <br/><span class="text-[10px] font-normal text-zinc-400">${order.date}</span>
                </td>
                <td class="py-3.5 px-4 whitespace-nowrap">
                  <span class="font-semibold text-zinc-900">${order.customer}</span>
                  <br/><span class="text-[10px] text-zinc-500">${order.phone}</span>${order.handle ? `<br/><span class="text-[10px] text-rose-700 font-medium">${order.handle}</span>` : ''}
                </td>
                <td class="py-3.5 px-4 whitespace-nowrap">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${order.source === 'Website' ? 'bg-zinc-100 text-zinc-700 border border-zinc-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}">
                    ${order.source} Storefront
                  </span>
                </td>
                <td class="py-3.5 px-4 text-zinc-600 min-w-[200px]">• ${order.items}</td>
                <td class="py-3.5 px-4 font-serif font-bold text-zinc-900 whitespace-nowrap">₹${order.total.toLocaleString()}</td>
                <td class="py-3.5 px-4 whitespace-nowrap">
                  <select onchange="updateOrderStatus('${order.id}', this.value)" class="text-[11px] font-semibold py-1 px-2 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 cursor-pointer">
                    <option value="New" ${order.status === 'New' ? 'selected' : ''}>New</option>
                    <option value="Confirmed" ${order.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                  </select>
                </td>
                <td class="py-3.5 px-4 text-right whitespace-nowrap">
                  <button onclick="openOrderDetailsModal('${order.id}')" class="px-3 py-1.5 rounded-lg border border-[#EAE3D2] hover:bg-[#FAF7F2] text-xs font-medium text-zinc-700 cursor-pointer flex items-center gap-1.5 ml-auto">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                    <span>Details</span>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function updateOrderFilter(key, val) {
  appState.filters[key] = val;
  renderTabContent();
}

/* ==========================================================================
   VIEW 4: REVIEWS
   ========================================================================== */
function renderReviews() {
  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900">Customer Reviews &amp; Social Proof</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Moderate submitted reviews, manage featured storefront testimonials, and log feedback received via DM or text</p>
      </div>
      <button onclick="openAddReviewModal()" class="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-[#5C1D24] hover:bg-[#47161c] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Add DM/Text Review</span>
      </button>
    </div>

    <!-- Reviews Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${appState.reviews.map(rev => `
        <div class="bg-white p-5 rounded-2xl border border-[#EAE3D2] flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1 text-amber-500">
                ${'<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i>'.repeat(rev.stars)}
              </div>
              <div class="flex items-center gap-1">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${rev.approved ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'}">${rev.approved ? 'Approved' : 'Hidden'}</span>
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${rev.featured ? 'bg-amber-100 text-amber-900' : 'bg-zinc-100 text-zinc-600'}">${rev.featured ? 'Featured' : 'Standard'}</span>
              </div>
            </div>
            <p class="text-xs text-zinc-600 font-serif italic leading-relaxed">${rev.text}</p>
          </div>

          <div class="pt-3 border-t border-[#EAE3D2]">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-zinc-900">${rev.author}</span>
              <span class="text-[10px] text-zinc-400">${rev.date}</span>
            </div>
            <div class="flex items-center justify-between mt-3">
              <div class="flex items-center gap-1">
                <button onclick="toggleReviewApproval('${rev.id}')" class="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-medium rounded-lg cursor-pointer">${rev.approved ? 'Hide' : 'Approve'}</button>
                <button onclick="toggleReviewFeatured('${rev.id}')" class="px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 text-[10px] font-semibold rounded-lg cursor-pointer">${rev.featured ? 'Unfeature' : 'Feature'}</button>
              </div>
              <button onclick="deleteReview('${rev.id}')" class="text-zinc-400 hover:text-red-700 cursor-pointer"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleReviewApproval(revId) {
  const rev = appState.reviews.find(r => r.id === revId);
  if (rev) { rev.approved = !rev.approved; renderTabContent(); }
}

function toggleReviewFeatured(revId) {
  const rev = appState.reviews.find(r => r.id === revId);
  if (rev) { rev.featured = !rev.featured; renderTabContent(); }
}

function deleteReview(revId) {
  if (confirm('Delete this review?')) {
    appState.reviews = appState.reviews.filter(r => r.id !== revId);
    renderTabContent();
  }
}

/* ==========================================================================
   VIEW 5: SITE CONTENT
   ========================================================================== */
function renderSiteContent() {
  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900">Site Content &amp; Homepage Editor</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Modify promotional banners, hero imagery, FAQs, and social statistics</p>
      </div>
      <button onclick="alert('Site content successfully published!')" class="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-[#5C1D24] hover:bg-[#47161c] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
        <i data-lucide="save" class="w-4 h-4"></i>
        <span>Publish Changes</span>
      </button>
    </div>

    <!-- Announcement Bar -->
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-4">
      <div class="flex items-center gap-2 text-xs font-semibold text-[#5C1D24]">
        <i data-lucide="sparkles" class="w-4 h-4 text-[#C5A059]"></i>
        <span>Top Promotional Announcement Bar</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-medium text-zinc-700 mb-1">Announcement Text</label>
          <input type="text" class="w-full" value="Complimentary Luxury Gift Box on Orders Above ₹2,999" />
        </div>
        <div>
          <label class="block text-xs font-medium text-zinc-700 mb-1">Action Link Target</label>
          <input type="text" class="w-full" value="#section-hampers" />
        </div>
      </div>
    </div>

    <!-- FAQ Section Editor -->
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-4">
      <div class="flex items-center gap-2 text-xs font-semibold text-[#5C1D24]">
        <i data-lucide="help-circle" class="w-4 h-4 text-[#C5A059]"></i>
        <span>Frequently Asked Questions (${appState.faqs.length})</span>
      </div>

      <!-- Add New FAQ -->
      <form onsubmit="handleAddFaq(event)" class="p-4 bg-[#FAF7F2] rounded-xl border border-[#EAE3D2] space-y-3">
        <span class="text-xs font-semibold text-zinc-800">Add New FAQ Accordion:</span>
        <input id="faq-question" type="text" required placeholder="Question (e.g. Do you ship internationally?)" class="w-full bg-white" />
        <textarea id="faq-answer" rows="2" required placeholder="Answer explanation..." class="w-full bg-white"></textarea>
        <button type="submit" class="px-4 py-2 bg-[#5C1D24] text-white text-xs font-semibold rounded-lg hover:bg-[#47161c] cursor-pointer">Append FAQ</button>
      </form>

      <!-- FAQ Accordion List -->
      <div class="space-y-3 pt-2">
        ${appState.faqs.map((faq, idx) => `
          <div class="p-4 rounded-xl border border-[#EAE3D2] bg-white flex justify-between items-start gap-4">
            <div class="space-y-1">
              <h4 class="text-xs font-semibold text-zinc-900">${faq.q}</h4>
              <p class="text-xs text-zinc-500">${faq.a}</p>
            </div>
            <button onclick="removeFaq(${idx})" class="text-xs text-zinc-400 hover:text-red-700 shrink-0 cursor-pointer">Remove</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function handleAddFaq(e) {
  e.preventDefault();
  const q = document.getElementById('faq-question').value.trim();
  const a = document.getElementById('faq-answer').value.trim();
  if (q && a) {
    appState.faqs.push({ q, a });
    renderTabContent();
  }
}

function removeFaq(idx) {
  appState.faqs.splice(idx, 1);
  renderTabContent();
}

/* ==========================================================================
   VIEW 6: SETTINGS
   ========================================================================== */
function renderSettings() {
  return `
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-2">
      <h2 class="font-serif text-2xl sm:text-3xl font-normal text-zinc-900">Settings &amp; Configuration</h2>
      <p class="text-xs text-zinc-500">Manage store category defaults, security credentials, and JSON backups</p>
    </div>

    <!-- Category Manager -->
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-4">
      <h3 class="font-serif text-xl font-normal text-zinc-900">Manage Product Categories</h3>
      
      <form onsubmit="handleAddCategory(event)" class="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE3D2]">
        <input id="cat-name-input" type="text" placeholder="Category Name" required class="bg-white" />
        <input id="cat-slug-input" type="text" placeholder="Slug (optional)" class="bg-white" />
        <button type="submit" class="px-4 py-2 bg-[#5C1D24] text-white text-xs font-semibold rounded-xl hover:bg-[#47161c] cursor-pointer">+ Add Category</button>
      </form>

      <div class="border border-[#EAE3D2] rounded-xl divide-y divide-[#EAE3D2]">
        ${appState.categories.map(c => `
          <div class="p-3.5 flex justify-between items-center hover:bg-[#FAF7F2]">
            <div>
              <p class="text-xs font-semibold text-zinc-900">${c.name}</p>
              <span class="text-[10px] text-zinc-400 font-mono">slug: /${c.slug}</span>
            </div>
            <button onclick="removeCategory('${c.id}')" class="text-xs text-zinc-400 hover:text-rose-600 cursor-pointer"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- JSON Backups -->
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-4">
      <h3 class="font-serif text-xl font-normal text-zinc-900">Database Backup &amp; Migration</h3>
      <p class="text-xs text-zinc-500">Export state snapshot to JSON for local backups or migration</p>
      <button onclick="exportJSONBackup()" class="px-4 py-2.5 bg-[#FAF7F2] border border-[#EAE3D2] text-xs font-semibold rounded-xl hover:bg-[#EFE8DA] cursor-pointer flex items-center gap-2">
        <i data-lucide="download" class="w-4 h-4"></i>
        <span>Download Complete JSON Backup</span>
      </button>
    </div>

    <!-- Password Update Card -->
    <div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#EAE3D2] space-y-4 max-w-lg">
      <h3 class="font-serif text-xl font-normal text-zinc-900">Update Admin Credentials</h3>
      <form onsubmit="handlePasswordUpdate(event)" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-zinc-700 mb-1">New Password</label>
          <input id="new-admin-pass" type="password" required minlength="6" class="w-full bg-[#FAF7F2]" placeholder="Minimum 6 characters" />
        </div>
        <button type="submit" class="px-4 py-2.5 bg-[#5C1D24] text-white text-xs font-semibold rounded-xl hover:bg-[#47161c] cursor-pointer">Update Password</button>
      </form>
    </div>
  `;
}

function handleAddCategory(e) {
  e.preventDefault();
  const name = document.getElementById('cat-name-input').value.trim();
  const slugInput = document.getElementById('cat-slug-input').value.trim();
  if (name) {
    const slug = slugInput || name.toLowerCase().replace(/\s+/g, '-');
    appState.categories.push({ id: `cat-${Date.now()}`, name, slug, description: '' });
    renderTabContent();
  }
}

function removeCategory(catId) {
  appState.categories = appState.categories.filter(c => c.id !== catId);
  renderTabContent();
}

function exportJSONBackup() {
  const data = JSON.stringify(appState, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ns-collection-backup-${Date.now()}.json`;
  a.click();
}

function handlePasswordUpdate(e) {
  e.preventDefault();
  const newPass = document.getElementById('new-admin-pass').value.trim();
  if (newPass) {
    appState.adminUser.password = newPass;
    alert('Admin password updated successfully!');
    document.getElementById('new-admin-pass').value = '';
  }
}

/* ==========================================================================
   MODAL HANDLERS & IMAGE/COLOR HELPERS
   ========================================================================== */

let modalVariants = [];
let modalImages = [];

// Intelligent color name resolver so clients only need to write color names (no RGB/Hex needed)
function getColorHexFromName(name) {
  if (!name) return '#D4AF37';
  const n = name.toLowerCase().trim();
  const colorMap = {
    'champagne gold': '#D4AF37',
    'gold': '#FFD700',
    'maroon': '#5C1D24',
    'rich maroon': '#5C1D24',
    'burgundy': '#800020',
    'wine': '#722F37',
    'ivory': '#FFFFF0',
    'ivory cream': '#FDFBF7',
    'cream': '#FFFDD0',
    'beige': '#F5F5DC',
    'nude': '#E3BC9A',
    'dusty rose': '#DCAE96',
    'rose': '#FF007F',
    'pink': '#FFC0CB',
    'blush': '#DE5D83',
    'black': '#222222',
    'onyx black': '#111111',
    'charcoal': '#36454F',
    'smokey charcoal': '#333333',
    'grey': '#808080',
    'gray': '#808080',
    'silver': '#C0C0C0',
    'navy': '#000080',
    'royal navy': '#1A2B4C',
    'blue': '#0000FF',
    'sky blue': '#87CEEB',
    'sage': '#9CAF88',
    'sage mist': '#9CAF88',
    'green': '#008000',
    'emerald': '#50C878',
    'olive': '#808000',
    'mint': '#98FF98',
    'brown': '#964B00',
    'taupe': '#483C32',
    'chocolate': '#7B3F00',
    'purple': '#800080',
    'lavender': '#E6E6FA',
    'plum': '#8E4585',
    'red': '#FF0000',
    'white': '#FFFFFF'
  };

  for (const key in colorMap) {
    if (n.includes(key)) {
      return colorMap[key];
    }
  }
  return '#C5A059'; // Default luxury accent fallback
}

function handleVariantNameInput(val) {
  const hex = getColorHexFromName(val);
  const hexInput = document.getElementById('variant-input-hex');
  const hexText = document.getElementById('variant-input-hex-text');
  if (hexInput) hexInput.value = hex;
  if (hexText) hexText.value = hex;
}

// Image selection from device handlers
function handleImageFilesSelected(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      modalImages.push({
        name: file.name,
        url: uploadEvent.target.result
      });
      updateModalImageView();
    };
    reader.readAsDataURL(file);
  });
}

function renderModalImagePreviews() {
  if (modalImages.length === 0) {
    return `<div class="col-span-full text-center py-3 text-[11px] text-zinc-400 italic">No images selected yet. Click above to upload product photos from your device.</div>`;
  }
  return modalImages.map((img, idx) => `
    <div class="relative group rounded-xl border border-[#EAE3D2] bg-white p-2 flex items-center gap-2">
      <img src="${img.url}" class="w-10 h-10 rounded-lg object-cover shrink-0" />
      <div class="min-w-0 flex-1">
        <p class="text-[10px] font-semibold text-zinc-800 truncate">${img.name}</p>
        <span class="text-[9px] text-emerald-700 font-medium">Ready</span>
      </div>
      <button type="button" onclick="removeModalImage(${idx})" class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] shadow hover:bg-rose-700 cursor-pointer">×</button>
    </div>
  `).join('');
}

function removeModalImage(index) {
  modalImages.splice(index, 1);
  updateModalImageView();
}

function updateModalImageView() {
  const previewList = document.getElementById('modal-image-preview-list');
  const countBadge = document.getElementById('image-count-badge');
  if (previewList) previewList.innerHTML = renderModalImagePreviews();
  if (countBadge) countBadge.textContent = `${modalImages.length} images`;
  refreshIcons();
}

// Helper function to build Product Form Markup (Shared between Add and Edit)
function getProductFormHTML(isEdit = false, prod = {}) {
  const categoriesList = appState.categories.map(c => 
    `<option value="${c.name}" ${prod.category === c.name ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 modal-backdrop">
      <div class="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl border border-[#EAE3D2] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div class="px-4 sm:px-6 py-4 border-b border-[#EAE3D2] flex justify-between items-center bg-white">
          <h3 class="font-serif text-lg sm:text-xl font-normal text-zinc-900">${isEdit ? 'Edit Product Details' : 'Add New Product or Hamper'}</h3>
          <button onclick="closeModal()" class="text-zinc-400 hover:text-zinc-700 cursor-pointer"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>

        <form onsubmit="${isEdit ? `handleUpdateProduct(event, '${prod.id}')` : 'handleCreateProduct(event)'}" class="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          <!-- Title & Slug -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">Title / Name *</label>
              <input id="prod-title" type="text" required value="${prod.name || ''}" placeholder="e.g. Royal Sovereign Bridal Chest" class="w-full bg-white" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">URL Slug</label>
              <input id="prod-slug" type="text" value="${prod.slug || ''}" placeholder="auto-generated-from-name" class="w-full bg-white" />
            </div>
          </div>

          <!-- Category, Type, Price, Stock -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">Category</label>
              <select id="prod-category" class="w-full bg-white cursor-pointer">
                ${categoriesList}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">Type</label>
              <select id="prod-type" class="w-full bg-white cursor-pointer">
                <option value="Single Hijab" ${prod.type === 'Single Hijab' || prod.type === 'Hijab' ? 'selected' : ''}>Single Hijab</option>
                <option value="Hamper Set" ${prod.type === 'Hamper Set' ? 'selected' : ''}>Hamper Set</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">Price (₹) *</label>
              <input id="prod-price" type="number" required value="${prod.price !== undefined ? prod.price : 899}" class="w-full bg-white" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">Stock Units</label>
              <input id="prod-stock" type="number" required value="${prod.stock !== undefined ? prod.stock : 25}" class="w-full bg-white" />
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Description</label>
            <textarea id="prod-description" rows="3" placeholder="Detailed texture, opacity, drape notes..." class="w-full bg-white">${prod.description || ''}</textarea>
          </div>

          <!-- Product Images Upload Area -->
          <div class="p-3 sm:p-4 rounded-xl border border-[#EAE3D2] bg-[#FAF7F2] space-y-3">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <div>
                <label class="block text-xs font-bold text-zinc-800">Product Images (Select from Device) *</label>
                <p class="text-[11px] text-zinc-500">Click below to browse and select multiple product photos from your device.</p>
              </div>
              <span id="image-count-badge" class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 text-[10px] font-bold self-start sm:self-auto">${modalImages.length} images</span>
            </div>

            <input type="file" id="prod-file-input" multiple accept="image/*" class="hidden" onchange="handleImageFilesSelected(event)" />

            <div onclick="document.getElementById('prod-file-input').click()" class="border-2 border-dashed border-[#D8D0C0] bg-white rounded-xl p-4 sm:p-6 text-center space-y-2 hover:border-[#C5A059] transition-colors cursor-pointer">
              <div class="w-10 h-10 rounded-full bg-rose-50 text-[#5C1D24] flex items-center justify-center mx-auto">
                <i data-lucide="upload-cloud" class="w-5 h-5"></i>
              </div>
              <p class="text-xs font-semibold text-[#5C1D24]">Click to select images from device <span class="font-normal text-zinc-600 hidden sm:inline">or drag &amp; drop files here</span></p>
              <p class="text-[10px] text-zinc-400">Supports JPEG, PNG, WEBP • Automatically compressed &amp; optimized</p>
            </div>

            <!-- Image Thumbnails Grid -->
            <div id="modal-image-preview-list" class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              ${renderModalImagePreviews()}
            </div>
          </div>

          <!-- Color & Style Variants (Auto RGB/Hex from Name) -->
          <div class="p-3 sm:p-4 rounded-xl border border-[#EAE3D2] bg-white space-y-3">
            <div class="flex items-center gap-2 text-xs font-bold text-[#5C1D24]">
              <i data-lucide="palette" class="w-4 h-4 text-[#C5A059]"></i>
              <span class="uppercase">Color &amp; Style Variants (<span id="variant-count">${modalVariants.length}</span>)</span>
            </div>
            <p class="text-[11px] text-zinc-500">Simply type the color name (e.g. "Champagne Gold", "Maroon", "Sage"); the color swatch is set automatically without needing RGB/Hex codes.</p>

            <div>
              <span class="text-[10px] font-semibold text-zinc-500 block mb-1.5">Quick Preset Shades:</span>
              <div class="flex flex-wrap gap-1.5">
                <button type="button" onclick="addPresetVariant('Champagne Gold', '#D4AF37')" class="px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 flex items-center gap-1.5 hover:border-[#C5A059]">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span> Champagne Gold
                </button>
                <button type="button" onclick="addPresetVariant('Rich Maroon', '#5C1D24')" class="px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 flex items-center gap-1.5 hover:border-[#C5A059]">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#5C1D24]"></span> Rich Maroon
                </button>
                <button type="button" onclick="addPresetVariant('Dusty Rose', '#DCAE96')" class="px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 flex items-center gap-1.5 hover:border-[#C5A059]">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#DCAE96]"></span> Dusty Rose
                </button>
                <button type="button" onclick="addPresetVariant('Onyx Black', '#222222')" class="px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 flex items-center gap-1.5 hover:border-[#C5A059]">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#222222]"></span> Onyx Black
                </button>
                <button type="button" onclick="addPresetVariant('Sage Mist', '#9CAF88')" class="px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 flex items-center gap-1.5 hover:border-[#C5A059]">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#9CAF88]"></span> Sage Mist
                </button>
              </div>
            </div>

            <!-- Manual Variant Input Bar -->
            <div class="p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE3D2] grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
              <div class="sm:col-span-9">
                <label class="block text-[10px] font-semibold text-zinc-600 mb-0.5">Variant Name (Type color name naturally)</label>
                <input id="variant-input-name" type="text" placeholder="e.g. Emerald Green, Navy Blue, Rose Pink..." oninput="handleVariantNameInput(this.value)" class="w-full bg-white text-xs" />
              </div>
              <div class="hidden">
                <input id="variant-input-hex" type="color" value="#D4AF37" />
                <input id="variant-input-hex-text" type="text" value="#D4AF37" />
              </div>
              <div class="sm:col-span-3 flex items-end">
                <button type="button" onclick="addCustomVariant()" class="w-full py-2 bg-[#5C1D24] text-white text-xs font-semibold rounded-lg hover:bg-[#47161c]">
                  + Add Shade
                </button>
              </div>
            </div>

            <!-- Variant List -->
            <div id="modal-variant-list" class="space-y-1.5">
              ${renderModalVariantList()}
            </div>
          </div>

          <!-- Store Settings Checkboxes -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE3D2] text-xs font-semibold text-zinc-800 cursor-pointer">
              <input id="prod-active" type="checkbox" ${prod.status === 'Draft' ? '' : 'checked'} class="rounded text-[#5C1D24]" />
              <span>Active on Store</span>
            </label>
            <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE3D2] text-xs font-semibold text-zinc-800 cursor-pointer">
              <input id="prod-featured" type="checkbox" ${prod.featured ? 'checked' : ''} class="rounded text-[#5C1D24]" />
              <span>Featured Drop</span>
            </label>
            <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE3D2] text-xs font-semibold text-zinc-800 cursor-pointer">
              <input id="prod-customizable" type="checkbox" ${prod.customizable ? 'checked' : ''} class="rounded text-[#5C1D24]" />
              <span>Customizable Hamper</span>
            </label>
          </div>

          <!-- Form Actions -->
          <div class="px-4 sm:px-6 py-3 border-t border-[#EAE3D2] bg-white flex justify-end gap-2 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 mt-4">
            <button type="button" onclick="closeModal()" class="px-4 py-2 border border-[#EAE3D2] text-xs font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 cursor-pointer">Cancel</button>
            <button type="submit" class="px-5 py-2 bg-[#5C1D24] text-white text-xs font-semibold rounded-xl hover:bg-[#47161c] cursor-pointer">
              ${isEdit ? 'Save Changes' : 'Create Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderModalVariantList() {
  if (modalVariants.length === 0) {
    return `<p class="text-[11px] text-zinc-400 italic text-center py-2">No variants added yet. Type a color name above to add color shades.</p>`;
  }
  return modalVariants.map((v, i) => `
    <div class="p-2 rounded-lg bg-[#FAF7F2] border border-[#EAE3D2] flex justify-between items-center text-xs">
      <div class="flex items-center gap-2">
        <span class="w-3.5 h-3.5 rounded-full border border-black/10 inline-block" style="background-color: ${v.hex}"></span>
        <span class="font-semibold text-zinc-800">${v.name}</span>
      </div>
      <button type="button" onclick="removeModalVariant(${i})" class="text-zinc-400 hover:text-rose-600 cursor-pointer">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');
}

function addPresetVariant(name, hex) {
  if (!modalVariants.some(v => v.name === name)) {
    modalVariants.push({ name, hex });
    updateModalVariantView();
  }
}

function addCustomVariant() {
  const nameInput = document.getElementById('variant-input-name');
  const name = nameInput.value.trim();

  if (name) {
    const hex = getColorHexFromName(name);
    modalVariants.push({ name, hex });
    nameInput.value = '';
    updateModalVariantView();
  }
}

function removeModalVariant(index) {
  modalVariants.splice(index, 1);
  updateModalVariantView();
}

function updateModalVariantView() {
  const listEl = document.getElementById('modal-variant-list');
  const countEl = document.getElementById('variant-count');
  if (listEl) listEl.innerHTML = renderModalVariantList();
  if (countEl) countEl.textContent = modalVariants.length;
  refreshIcons();
}

// Open Add Product Modal
function openAddProductModal() {
  modalVariants = [];
  modalImages = [];
  document.getElementById('modal-container').innerHTML = getProductFormHTML(false);
  refreshIcons();
}

// Handle Add Product Submit
function handleCreateProduct(e) {
  e.preventDefault();
  const name = document.getElementById('prod-title').value.trim();
  const slugInput = document.getElementById('prod-slug').value.trim();
  const category = document.getElementById('prod-category').value;
  const type = document.getElementById('prod-type').value;
  const price = parseFloat(document.getElementById('prod-price').value);
  const stock = parseInt(document.getElementById('prod-stock').value, 10);
  const description = document.getElementById('prod-description').value.trim();
  const isActive = document.getElementById('prod-active').checked;
  const isFeatured = document.getElementById('prod-featured').checked;
  const isCustomizable = document.getElementById('prod-customizable').checked;

  const primaryImage = modalImages.length > 0 ? modalImages[0].url : 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80';

  const newProd = {
    id: `prod-${Date.now()}`,
    name,
    slug: slugInput || `/${name.toLowerCase().replace(/\s+/g, '-')}`,
    category,
    type,
    price,
    stock,
    description,
    status: isActive ? 'Active' : 'Draft',
    featured: isFeatured,
    customizable: isCustomizable,
    swatches: modalVariants.map(v => v.hex),
    image: primaryImage,
    images: modalImages.map(img => img.url)
  };

  appState.products.unshift(newProd);
  closeModal();
  renderTabContent();
}

// Open Edit Product Modal
function openEditProductModal(prodId) {
  const prod = appState.products.find(p => p.id === prodId);
  if (!prod) return;

  modalVariants = (prod.swatches || []).map(hex => ({ name: 'Color Shade', hex }));
  modalImages = prod.images && prod.images.length > 0 
    ? prod.images.map((url, i) => ({ name: `Photo ${i+1}`, url }))
    : [{ name: 'Product Photo', url: prod.image || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80' }];

  document.getElementById('modal-container').innerHTML = getProductFormHTML(true, prod);
  updateModalImageView();
  refreshIcons();
}

// Handle Edit Product Submit
function handleUpdateProduct(e, prodId) {
  e.preventDefault();
  const prod = appState.products.find(p => p.id === prodId);
  if (!prod) return;

  prod.name = document.getElementById('prod-title').value.trim();
  prod.slug = document.getElementById('prod-slug').value.trim() || `/${prod.name.toLowerCase().replace(/\s+/g, '-')}`;
  prod.category = document.getElementById('prod-category').value;
  prod.type = document.getElementById('prod-type').value;
  prod.price = parseFloat(document.getElementById('prod-price').value);
  prod.stock = parseInt(document.getElementById('prod-stock').value, 10);
  prod.description = document.getElementById('prod-description').value.trim();
  prod.status = document.getElementById('prod-active').checked ? 'Active' : 'Draft';
  prod.featured = document.getElementById('prod-featured').checked;
  prod.customizable = document.getElementById('prod-customizable').checked;
  prod.swatches = modalVariants.map(v => v.hex);

  if (modalImages.length > 0) {
    prod.image = modalImages[0].url;
    prod.images = modalImages.map(img => img.url);
  }

  closeModal();
  renderTabContent();
}

// Order Details Modal
function openOrderDetailsModal(orderId) {
  const order = appState.orders.find(o => o.id === orderId) || appState.orders[0];

  const modalHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-end modal-backdrop">
      <div class="bg-[#FAF7F2] w-full max-w-md h-full border-l border-[#EAE3D2] shadow-2xl flex flex-col justify-between overflow-hidden">
        <div>
          <div class="p-4 sm:p-6 border-b border-[#EAE3D2] flex justify-between items-start bg-white">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">ORDER DETAILS</span>
              <h3 class="font-serif text-2xl font-bold text-[#5C1D24] mt-0.5">#${order.id}</h3>
            </div>
            <button onclick="closeModal()" class="text-zinc-400 hover:text-zinc-700 cursor-pointer"><i data-lucide="x" class="w-5 h-5"></i></button>
          </div>

          <div class="p-4 sm:p-6 space-y-4 overflow-y-auto">
            <div class="p-4 rounded-2xl border border-[#EAE3D2] bg-white flex justify-between items-center">
              <div>
                <span class="text-[10px] font-medium text-zinc-400">Current Status</span>
                <p class="text-sm font-bold text-zinc-900 mt-0.5">${order.status}</p>
              </div>
              <select onchange="updateOrderStatus('${order.id}', this.value)" class="text-xs font-semibold py-1.5 px-3 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 cursor-pointer">
                <option value="New" ${order.status === 'New' ? 'selected' : ''}>New</option>
                <option value="Confirmed" ${order.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
              </select>
            </div>

            <div class="p-4 rounded-2xl border border-[#EAE3D2] bg-white space-y-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">CUSTOMER &amp; SHIPPING INFO</span>
              <div class="text-xs space-y-1 text-zinc-700">
                <p><strong>Name:</strong> ${order.customer}</p>
                <p><strong>Phone:</strong> ${order.phone}</p>
                <p><strong>Channel:</strong> ${order.source.toUpperCase()}</p>
                <p><strong>Address:</strong> ${order.address || 'Khadka Road'}</p>
              </div>
              <a href="https://wa.me/${order.phone.replace(/[^0-9]/g, '')}" target="_blank" class="mt-3 w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                <span>WhatsApp Customer</span>
              </a>
            </div>

            <div class="p-4 rounded-2xl border border-[#EAE3D2] bg-white space-y-3">
              <div class="flex justify-between items-center border-b border-[#EAE3D2] pb-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">PURCHASED ITEMS</span>
                <span class="font-serif font-bold text-xs text-[#5C1D24]">Total: ₹${order.total.toLocaleString()}</span>
              </div>
              <div class="space-y-2">
                ${order.items_detail.map(item => `
                  <div class="flex justify-between text-xs">
                    <div>
                      <span class="font-semibold text-zinc-900">${item.name}</span>
                      <p class="text-[10px] text-zinc-400">Qty: ${item.qty} &times; ₹${item.price}</p>
                    </div>
                    <span class="font-serif font-bold text-zinc-900">₹${item.qty * item.price}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = modalHTML;
  refreshIcons();
}

// Manual Order Modal
function openManualOrderModal() {
  const modalHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 modal-backdrop">
      <div class="bg-[#FAF7F2] w-full max-w-lg rounded-2xl border border-[#EAE3D2] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div class="px-4 sm:px-6 py-4 border-b border-[#EAE3D2] flex justify-between items-center bg-white">
          <h3 class="font-serif text-lg sm:text-xl font-normal text-zinc-900">Log Manual WhatsApp / DM Order</h3>
          <button onclick="closeModal()" class="text-zinc-400 hover:text-zinc-700 cursor-pointer"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form onsubmit="handleCreateManualOrder(event)" class="p-4 sm:p-6 space-y-3 overflow-y-auto">
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Customer Name *</label>
            <input id="ord-cust-name" type="text" required placeholder="e.g. Ayesha Patel" class="w-full bg-white" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">WhatsApp / Phone Number *</label>
            <input id="ord-cust-phone" type="text" required placeholder="+91 98200 00000" class="w-full bg-white" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Channel Source</label>
            <select id="ord-cust-source" class="w-full bg-white cursor-pointer">
              <option value="WhatsApp">WhatsApp Direct</option>
              <option value="Instagram">Instagram DM (@noor_saba_momin)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Items Summary *</label>
            <input id="ord-cust-items" type="text" required placeholder="e.g. Champagne Silk (x1)" class="w-full bg-white" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Total Amount (₹) *</label>
            <input id="ord-cust-total" type="number" required value="1798" class="w-full bg-white" />
          </div>
          <div class="pt-4 flex justify-end gap-2">
            <button type="button" onclick="closeModal()" class="px-4 py-2 border border-[#EAE3D2] text-xs font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 cursor-pointer">Cancel</button>
            <button type="submit" class="px-5 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-xl hover:bg-[#20bd5a] cursor-pointer">Save &amp; Log Order</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = modalHTML;
  refreshIcons();
}

function handleCreateManualOrder(e) {
  e.preventDefault();
  const customer = document.getElementById('ord-cust-name').value.trim();
  const phone = document.getElementById('ord-cust-phone').value.trim();
  const source = document.getElementById('ord-cust-source').value;
  const items = document.getElementById('ord-cust-items').value.trim();
  const total = parseFloat(document.getElementById('ord-cust-total').value);

  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
  const timeStr = now.toTimeString().split(' ')[0];

  const newOrder = {
    id: `ord-${Math.floor(1000 + Math.random() * 9000)}`,
    date: dateStr,
    time: timeStr,
    customer,
    phone,
    source,
    items,
    items_detail: [{ name: items, qty: 1, price: total }],
    total,
    status: 'New'
  };

  appState.orders.unshift(newOrder);
  closeModal();
  renderTabContent();
}

// Add Review Modal
function openAddReviewModal() {
  const modalHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 modal-backdrop">
      <div class="bg-[#FAF7F2] w-full max-w-md rounded-2xl border border-[#EAE3D2] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div class="px-4 sm:px-6 py-4 border-b border-[#EAE3D2] flex justify-between items-center bg-white">
          <h3 class="font-serif text-lg sm:text-xl font-normal text-zinc-900">Add DM / Text Review</h3>
          <button onclick="closeModal()" class="text-zinc-400 hover:text-zinc-700 cursor-pointer"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form onsubmit="handleCreateReview(event)" class="p-4 sm:p-6 space-y-3 overflow-y-auto">
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Author Name *</label>
            <input id="rev-author" type="text" required placeholder="e.g. Saniya Merchant" class="w-full bg-white" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Star Rating</label>
            <select id="rev-stars" class="w-full bg-white cursor-pointer">
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-zinc-700 mb-1">Feedback Quote *</label>
            <textarea id="rev-text" rows="3" required placeholder="Paste testimonial received on DM..." class="w-full bg-white"></textarea>
          </div>
          <div class="pt-3 flex justify-end gap-2">
            <button type="button" onclick="closeModal()" class="px-4 py-2 border border-[#EAE3D2] text-xs font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 cursor-pointer">Cancel</button>
            <button type="submit" class="px-5 py-2 bg-[#5C1D24] text-white text-xs font-semibold rounded-xl hover:bg-[#47161c] cursor-pointer">Publish Review</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = modalHTML;
  refreshIcons();
}

function handleCreateReview(e) {
  e.preventDefault();
  const author = document.getElementById('rev-author').value.trim();
  const stars = parseInt(document.getElementById('rev-stars').value, 10);
  const text = document.getElementById('rev-text').value.trim();

  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

  appState.reviews.unshift({
    id: `rev-${Date.now()}`,
    author,
    date: dateStr,
    stars,
    text: `"${text}"`,
    approved: true,
    featured: true
  });

  closeModal();
  renderTabContent();
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

function updateOrderStatus(orderId, newStatus) {
  const order = appState.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    renderTabContent();
  }
}
