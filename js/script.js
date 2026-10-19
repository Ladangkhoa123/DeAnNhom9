const products = [
  {
    id: "lap-rog-01", category: "laptop", code: "TZ-LP-0241", badge: "HOT", name: "ASUS ROG Zephyrus G14 GA403", price: 45990000, oldPrice: 52990000,
    rating: 4.9, reviews: 128, specs: ["Ryzen 9", "RTX 4070", "32GB / 1TB"],
    image: "image/asus-rog-zephyrus-g14-ga403.jpg", stock: 8,
    description: "Sức mạnh gaming và sáng tạo trong thiết kế mỏng nhẹ, màn hình OLED 3K sống động."
  },
  {
    id: "lap-msi-02", category: "laptop", code: "TZ-LP-0187", badge: "SALE", name: "MSI Katana 15 B13VFK", price: 28990000, oldPrice: 32990000,
    rating: 4.8, reviews: 96, specs: ["Core i7-13620H", "RTX 4060", "16GB / 512GB"],
    image: "image/msi-katana-15-b13vfk.jpg", stock: 12,
    description: "Laptop gaming hiệu năng cao với RTX 4060, sẵn sàng chinh phục mọi tựa game AAA."
  },
  {
    id: "lap-legion-03", category: "laptop", code: "TZ-LP-0203", badge: "BEST SELLER", name: "Lenovo Legion Slim 5 16IRH8", price: 32990000, oldPrice: 36990000,
    rating: 4.9, reviews: 74, specs: ["Core i7-13700H", "RTX 4060", "16GB / 1TB"],
    image: "image/lenovo-legion-slim-5-16irh8.jpg", stock: 6,
    description: "Cân bằng hoàn hảo giữa hiệu năng, tản nhiệt và tính linh hoạt cho game thủ hiện đại."
  },
  {
    id: "lap-acer-04", category: "laptop", code: "TZ-LP-0316", badge: "NEW", name: "Acer Predator Helios Neo 16", price: 35990000, oldPrice: 39990000,
    rating: 4.7, reviews: 53, specs: ["Core i7-14650HX", "RTX 4060", "16GB / 1TB"],
    image: "image/acer-predator-helios-neo-16.jpg", stock: 9,
    description: "Màn hình 240Hz cùng nền tảng Intel thế hệ mới cho trải nghiệm thi đấu mượt mà."
  },
  {
    id: "pc-phantom-01", category: "pc", code: "TZ-PC-0058", badge: "BEST SELLER", name: "TECHZONE Phantom X — RTX 4070 SUPER", price: 42990000, oldPrice: 47990000,
    rating: 5.0, reviews: 82, specs: ["Core i7-14700F", "RTX 4070S", "32GB / 1TB"],
    image: "image/hinhanh.jpg", stock: 5,
    description: "Cỗ máy gaming được đội ngũ TECHZONE tuyển chọn linh kiện và lắp ráp tối ưu."
  },
  {
    id: "pc-nebula-02", category: "pc", code: "TZ-PC-0072", badge: "HOT", name: "TECHZONE Nebula — Ryzen 7 / RTX 4070", price: 38990000, oldPrice: 42990000,
    rating: 4.9, reviews: 61, specs: ["Ryzen 7 7800X3D", "RTX 4070", "32GB / 1TB"],
    image: "image/techzone-nebula-ryzen-7-rtx-4070.jpg", stock: 7,
    description: "Tối ưu cho gaming tốc độ khung hình cao với Ryzen X3D và card đồ họa RTX."
  },
  {
    id: "pc-starter-03", category: "pc", code: "TZ-PC-0104", badge: "SALE", name: "TECHZONE Pulse — Gaming Starter", price: 21990000, oldPrice: 24990000,
    rating: 4.8, reviews: 104, specs: ["Core i5-13400F", "RTX 4060", "16GB / 1TB"],
    image: "image/techzone-pulse-gaming-starter.jpg", stock: 11,
    description: "Cấu hình khởi đầu lý tưởng cho game thủ, cân tốt game eSports và nhiều tựa game AAA."
  },
  {
    id: "gpu-4070-01", category: "component", code: "TZ-VGA-0210", badge: "SALE", name: "MSI GeForce RTX 4070 SUPER 12G", price: 18990000, oldPrice: 20990000,
    rating: 4.9, reviews: 58, specs: ["12GB GDDR6X", "DLSS 3", "2.5 Slot"],
    image: "image/msi-geforce-rtx-4070-super-12g.jpg", stock: 9,
    description: "Đồ họa thế hệ mới với ray tracing và DLSS 3 cho trải nghiệm gaming vượt trội."
  },
  {
    id: "cpu-ryzen-02", category: "component", code: "TZ-CPU-0142", badge: "HOT", name: "AMD Ryzen 7 7800X3D", price: 9990000, oldPrice: 10990000,
    rating: 5.0, reviews: 112, specs: ["8 nhân / 16 luồng", "96MB Cache", "AM5"],
    image: "image/amd-ryzen-7-7800x3d.jpg", stock: 14,
    description: "Bộ xử lý gaming hàng đầu với công nghệ 3D V-Cache, tối ưu cho tốc độ khung hình."
  },
  {
    id: "ram-ddr5-03", category: "component", code: "TZ-RAM-0081", badge: "NEW", name: "G.Skill Trident Z5 Neo RGB 32GB", price: 3290000, oldPrice: 3890000,
    rating: 4.8, reviews: 47, specs: ["DDR5 6000MHz", "32GB (2×16GB)", "RGB"],
    image: "image/gskill-trident-z5-neo-rgb-32gb.jpg", stock: 18,
    description: "Bộ nhớ DDR5 tốc độ cao với ánh sáng RGB tinh tế, tương thích nền tảng AMD mới."
  },
  {
    id: "ssd-990-04", category: "component", code: "TZ-SSD-0096", badge: "SALE", name: "Samsung 990 PRO 1TB NVMe", price: 2790000, oldPrice: 3290000,
    rating: 4.9, reviews: 91, specs: ["PCIe 4.0", "Đọc 7.450 MB/s", "M.2 2280"],
    image: "image/samsung-990-pro-1tb-nvme.jpg", stock: 16,
    description: "SSD hiệu năng cao giúp tải game, khởi động hệ thống và xử lý dữ liệu nhanh chóng."
  },
  {
    id: "monitor-27-01", category: "gear", code: "TZ-MN-0135", badge: "NEW", name: "LG UltraGear 27GP850-B 27” QHD", price: 8990000, oldPrice: 9990000,
    rating: 4.9, reviews: 67, specs: ["QHD 165Hz", "Nano IPS", "1ms GtG"],
    image: "image/lg-ultragear-27gp850-b.jpg", stock: 8,
    description: "Màn hình Nano IPS 2K tần số quét cao, cho hình ảnh sắc nét và chuyển động mượt mà."
  },
  {
    id: "headset-02", category: "gear", code: "TZ-GR-0228", badge: "HOT", name: "HyperX Cloud III Wireless", price: 3690000, oldPrice: 4290000,
    rating: 4.8, reviews: 43, specs: ["Âm thanh 3D", "Pin 120 giờ", "2.4GHz Wireless"],
    image: "image/hyperx-cloud-iii-wireless.jpg", stock: 10,
    description: "Tai nghe gaming không dây thoải mái với âm thanh không gian và thời lượng pin bền bỉ."
  },
  {
    id: "keyboard-03", category: "gear", code: "TZ-GR-0194", badge: "SALE", name: "Logitech G PRO X TKL LIGHTSPEED", price: 3490000, oldPrice: 3990000,
    rating: 4.9, reviews: 39, specs: ["Wireless LIGHTSPEED", "Switch GX", "RGB LIGHTSYNC"],
    image: "image/logitech-g-pro-x-tkl-lightspeed.jpg", stock: 13,
    description: "Bàn phím không dây thiết kế gọn cho thi đấu, độ trễ thấp và ánh sáng RGB tùy chỉnh."
  },
  {
    id: "mouse-04", category: "gear", code: "TZ-GR-0312", badge: "BEST SELLER", name: "Logitech G PRO X SUPERLIGHT 2", price: 2990000, oldPrice: 3490000,
    rating: 4.9, reviews: 55, specs: ["60g siêu nhẹ", "HERO 2 32K", "LIGHTSPEED"],
    image: "image/logitech-g-pro-x-superlight-2.jpg", stock: 17,
    description: "Chuột gaming siêu nhẹ với cảm biến HERO 2 chính xác cho những pha xử lý tốc độ."
  }
];

const categoryNames = { laptop: "Laptop Gaming", pc: "PC Gaming", component: "Linh kiện PC", gear: "Màn hình & Gear" };
const icon = {
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>'
};

const cart = new Map();
const wishlist = new Set();
const state = { filter: "all", query: "", sort: "featured", wishlistOnly: false };
const numberFormat = new Intl.NumberFormat("vi-VN");
const findProduct = (id) => products.find((product) => product.id === id);
const storageKey = "techzone-state-v1";
const savedState = loadPersistentState();
const formatPrice = (price) => `${numberFormat.format(price)}₫`;
const discountPercent = (product) => Math.round((1 - product.price / product.oldPrice) * 100);
const categoryLabel = (category) => categoryNames[category] || "Sản phẩm công nghệ";

function loadPersistentState() {
  let serialized;
  try {
    serialized = localStorage.getItem(storageKey);
  } catch (error) {
    console.error("Không thể đọc dữ liệu TECHZONE từ localStorage:", error);
    return null;
  }
  if (!serialized) return null;

  try {
    const stored = JSON.parse(serialized);
    if (!stored || typeof stored !== "object" || Array.isArray(stored)) {
      throw new TypeError("Dữ liệu TECHZONE đã lưu không hợp lệ.");
    }
    return stored;
  } catch (error) {
    console.error("Không thể phân tích dữ liệu TECHZONE đã lưu:", error);
    return null;
  }
}

function savePersistentState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      cart: [...cart.entries()],
      wishlist: [...wishlist],
      state
    }));
  } catch (error) {
    console.error("Không thể lưu dữ liệu TECHZONE vào localStorage:", error);
  }
}

if (Array.isArray(savedState?.cart)) {
  savedState.cart.forEach((entry) => {
    if (!Array.isArray(entry) || entry.length !== 2) return;
    const [id, quantity] = entry;
    if (findProduct(id) && Number.isSafeInteger(quantity) && quantity > 0) cart.set(id, quantity);
  });
}
if (Array.isArray(savedState?.wishlist)) {
  savedState.wishlist.forEach((id) => {
    if (findProduct(id)) wishlist.add(id);
  });
}
if (savedState?.state && typeof savedState.state === "object") {
  const savedFilter = savedState.state.filter;
  if (["all", ...Object.keys(categoryNames)].includes(savedFilter)) state.filter = savedFilter;
  if (typeof savedState.state.query === "string") state.query = savedState.state.query;
  if (["featured", "price-asc", "price-desc", "discount"].includes(savedState.state.sort)) {
    state.sort = savedState.state.sort;
  }
  if (typeof savedState.state.wishlistOnly === "boolean") state.wishlistOnly = savedState.state.wishlistOnly;
}

function imageMarkup(product) {
  const fallback = product.category === "laptop" ? "▱" : product.category === "pc" ? "▣" : "◈";
  return `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="image-fallback" hidden>${fallback}</span>`;
}

function productCard(product, options = {}) {
  const sale = options.sale === true;
  const badgeClass = product.badge === "NEW" ? "badge-new" : product.badge === "HOT" ? "badge-hot" : "";
  return `<article class="product-card${sale ? " flash-card" : ""}" data-product="${product.id}">
    <div class="product-media">
      <span class="product-badge ${badgeClass}">${product.badge}</span>
      <button class="wish-button${wishlist.has(product.id) ? " is-active" : ""}" data-action="wishlist" data-id="${product.id}" aria-label="${wishlist.has(product.id) ? "Bỏ yêu thích" : "Thêm vào yêu thích"}">${icon.heart}</button>
      ${imageMarkup(product)}
      <button class="quick-button" data-action="quick-view" data-id="${product.id}">Xem nhanh</button>
    </div>
    <div class="product-info">
      <span class="product-code">${product.code}</span>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-specs">${product.specs.map((spec) => `<span>${spec}</span>`).join("")}</div>
      <div class="product-rating"><span class="stars">★★★★★</span><b>${product.rating.toFixed(1)}</b><span>(${product.reviews})</span></div>
      <div class="product-pricing"><strong class="current-price">${formatPrice(product.price)}</strong><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="discount">-${discountPercent(product)}%</span></div>
      ${sale ? `<div class="flash-stock"><div class="stock-copy"><span>Đã bán <strong>${product.stock * 7}</strong></span><span>Còn <strong>${product.stock} sp</strong></span></div><div class="stock-progress"><i style="width:${Math.min(91, 100 - product.stock * 3)}%"></i></div></div>` : ""}
      <div class="product-card-bottom"><span class="stock-note"><span>●</span> Còn hàng · Chính hãng</span><button class="add-cart-button" data-action="add-cart" data-id="${product.id}" aria-label="Thêm ${product.name} vào giỏ hàng">${icon.cart}</button></div>
    </div>
  </article>`;
}

function renderInitialGrids() {
  document.querySelector("#flash-grid").innerHTML = [products[4], products[1], products[7], products[9]].map((product) => productCard(product, { sale: true })).join("");
  document.querySelector("#laptop-grid").innerHTML = products.filter((product) => product.category === "laptop").slice(0, 4).map((product) => productCard(product)).join("");
  document.querySelector("#pc-grid").innerHTML = products.filter((product) => product.category === "pc").map((product) => productCard(product)).join("");
  document.querySelector("#component-grid").innerHTML = products.filter((product) => product.category === "component").map((product) => productCard(product)).join("");
  document.querySelector("#gear-grid").innerHTML = products.filter((product) => product.category === "gear").map((product) => productCard(product)).join("");
  renderFeatured();
}

function renderFeatured() {
  let items = products.slice();
  if (state.filter !== "all") items = items.filter((product) => product.category === state.filter);
  if (state.query) {
    const query = state.query.toLocaleLowerCase("vi");
    items = items.filter((product) => `${product.name} ${product.code} ${product.specs.join(" ")} ${categoryLabel(product.category)}`.toLocaleLowerCase("vi").includes(query));
  }
  if (state.wishlistOnly) items = items.filter((product) => wishlist.has(product.id));
  if (state.sort === "price-asc") items.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") items.sort((a, b) => b.price - a.price);
  if (state.sort === "discount") items.sort((a, b) => discountPercent(b) - discountPercent(a));
  const grid = document.querySelector("#featured-grid");
  grid.innerHTML = items.map((product) => productCard(product)).join("");
  document.querySelector("#empty-state").hidden = items.length > 0;
  document.querySelector("#search-results").textContent = state.wishlistOnly
    ? `Đang xem ${items.length} sản phẩm yêu thích`
    : state.query ? `Tìm thấy ${items.length} sản phẩm` : "";
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === state.filter));
}

function showToast(message) {
  const region = document.querySelector("#toast-region");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">✓</span><span>${message}</span>`;
  region.append(toast);
  window.setTimeout(() => {
    toast.classList.add("toast-out");
    window.setTimeout(() => toast.remove(), 260);
  }, 2600);
}

function updateCounts() {
  document.querySelector("#cart-count").textContent = [...cart.values()].reduce((total, quantity) => total + quantity, 0);
  document.querySelector("#wishlist-count").textContent = wishlist.size;
  document.querySelector("#drawer-item-count").textContent = `(${[...cart.values()].reduce((total, quantity) => total + quantity, 0)})`;
}

function renderCart() {
  const items = [...cart.entries()];
  const cartItems = document.querySelector("#cart-items");
  const isEmpty = items.length === 0;
  document.querySelector("#cart-empty").hidden = !isEmpty;
  document.querySelector("#cart-summary").hidden = isEmpty;
  cartItems.innerHTML = items.map(([id, quantity]) => {
    const product = findProduct(id);
    return `<div class="cart-line" data-cart-line="${id}">
      <div class="cart-line-image">${imageMarkup(product)}</div>
      <div class="cart-line-info"><strong>${product.name}</strong><small>${product.code}</small>
        <div class="quantity-control"><button data-action="quantity" data-id="${id}" data-delta="-1" aria-label="Giảm số lượng">−</button><span>${quantity}</span><button data-action="quantity" data-id="${id}" data-delta="1" aria-label="Tăng số lượng">+</button></div>
      </div>
      <div class="cart-line-price"><strong>${formatPrice(product.price * quantity)}</strong><button class="remove-item" data-action="remove-cart" data-id="${id}">Xóa</button></div>
    </div>`;
  }).join("");
  const total = items.reduce((sum, [id, quantity]) => sum + findProduct(id).price * quantity, 0);
  document.querySelector("#cart-subtotal").textContent = formatPrice(total);
  document.querySelector("#cart-total").textContent = formatPrice(total);
  updateCounts();
}

function setCartOpen(open) {
  const drawer = document.querySelector("#cart-drawer");
  const overlay = document.querySelector("#overlay");
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  overlay.classList.toggle("is-visible", open);
  document.body.classList.toggle("drawer-open", open);
  if (open) document.querySelector("#cart-close").focus();
}

function addToCart(id) {
  const product = findProduct(id);
  if (!product) return;
  cart.set(id, (cart.get(id) || 0) + 1);
  savePersistentState();
  renderCart();
  showToast(`Đã thêm ${product.name} vào giỏ hàng`);
}

function toggleWishlist(id) {
  const product = findProduct(id);
  if (!product) return;
  const added = !wishlist.has(id);
  if (added) wishlist.add(id);
  else wishlist.delete(id);
  savePersistentState();
  document.querySelectorAll(`.wish-button[data-id="${id}"]`).forEach((button) => {
    button.classList.toggle("is-active", added);
    button.setAttribute("aria-label", added ? "Bỏ yêu thích" : "Thêm vào yêu thích");
  });
  updateCounts();
  if (state.wishlistOnly) renderFeatured();
  showToast(added ? "Đã thêm vào danh sách yêu thích" : "Đã bỏ khỏi danh sách yêu thích");
}

function openQuickView(id) {
  const product = findProduct(id);
  if (!product) return;
  const dialog = document.querySelector("#quick-view");
  document.querySelector("#quick-view-content").innerHTML = `
    <div class="quick-view-image">${imageMarkup(product)}</div>
    <div class="quick-view-details"><span class="product-code">${product.code} · ${categoryLabel(product.category)}</span>
      <h2>${product.name}</h2><div class="product-rating"><span class="stars">★★★★★</span><b>${product.rating.toFixed(1)}</b><span>(${product.reviews} đánh giá)</span></div>
      <p>${product.description}</p><div class="product-specs">${product.specs.map((spec) => `<span>${spec}</span>`).join("")}</div>
      <div class="product-pricing"><strong class="current-price">${formatPrice(product.price)}</strong><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="discount">-${discountPercent(product)}%</span></div>
      <button class="button button-primary" data-action="add-cart" data-id="${product.id}">Thêm vào giỏ hàng <span>→</span></button>
    </div>`;
  if (!dialog.open) dialog.showModal();
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]");
    if (action) {
      const { id, action: actionName } = action.dataset;
      if (actionName === "add-cart") addToCart(id);
      if (actionName === "wishlist") toggleWishlist(id);
      if (actionName === "quick-view") openQuickView(id);
      if (actionName === "quantity") {
        const next = (cart.get(id) || 0) + Number(action.dataset.delta);
        if (next <= 0) cart.delete(id);
        else cart.set(id, next);
        savePersistentState();
        renderCart();
      }
      if (actionName === "remove-cart") {
        cart.delete(id);
        savePersistentState();
        renderCart();
        showToast("Đã xóa sản phẩm khỏi giỏ hàng");
      }
    }
    if (!event.target.closest(".category-nav")) {
      document.querySelector(".category-nav").classList.remove("menu-open");
      document.querySelector("#category-trigger").setAttribute("aria-expanded", "false");
    }
  });

  document.querySelector("#category-trigger").addEventListener("click", (event) => {
    event.stopPropagation();
    const nav = document.querySelector(".category-nav");
    const open = !nav.classList.contains("menu-open");
    nav.classList.toggle("menu-open", open);
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelector("#mobile-menu-toggle").addEventListener("click", (event) => {
    const nav = document.querySelector("#nav-wrap");
    const open = nav.classList.toggle("mobile-open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".main-nav > a, .mega-menu a").forEach((link) => link.addEventListener("click", () => {
    document.querySelector("#nav-wrap").classList.remove("mobile-open");
    document.querySelector("#mobile-menu-toggle").setAttribute("aria-expanded", "false");
  }));
  document.querySelector("#cart-open").addEventListener("click", () => setCartOpen(true));
  document.querySelector("#cart-close").addEventListener("click", () => setCartOpen(false));
  document.querySelector("#overlay").addEventListener("click", () => setCartOpen(false));
  document.querySelector("#continue-shopping").addEventListener("click", () => setCartOpen(false));
  document.querySelector("#modal-close").addEventListener("click", () => document.querySelector("#quick-view").close());
  document.querySelector("#quick-view").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });

  const searchInput = document.querySelector("#search-input");
  searchInput.value = state.query;
  document.querySelector("#product-sort").value = state.sort;
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    state.wishlistOnly = false;
    savePersistentState();
    renderFeatured();
  });
  document.querySelector("#search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#featured").scrollIntoView({ behavior: "smooth" });
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === "Escape") {
      document.querySelector(".category-nav").classList.remove("menu-open");
      document.querySelector("#category-trigger").setAttribute("aria-expanded", "false");
      document.querySelector("#nav-wrap").classList.remove("mobile-open");
      setCartOpen(false);
    }
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => chip.addEventListener("click", () => {
    state.filter = chip.dataset.filter;
    state.wishlistOnly = false;
    savePersistentState();
    renderFeatured();
  }));
  document.querySelector("#product-sort").addEventListener("change", (event) => {
    state.sort = event.target.value;
    savePersistentState();
    renderFeatured();
  });
  document.querySelector("#clear-search").addEventListener("click", () => {
    state.query = "";
    state.filter = "all";
    state.wishlistOnly = false;
    searchInput.value = "";
    savePersistentState();
    renderFeatured();
  });
  document.querySelector("#wishlist-shortcut").addEventListener("click", () => {
    state.wishlistOnly = !state.wishlistOnly;
    state.filter = "all";
    savePersistentState();
    document.querySelector("#featured").scrollIntoView({ behavior: "smooth" });
    renderFeatured();
    if (state.wishlistOnly && wishlist.size === 0) showToast("Danh sách yêu thích của bạn đang trống");
  });
  document.querySelectorAll(".sort-control").forEach((button) => button.addEventListener("click", () => {
    const sectionId = button.dataset.sort === "laptop" ? "#laptop-grid" : "#pc-grid";
    const grid = document.querySelector(sectionId);
    const cards = [...grid.querySelectorAll(".product-card")];
    const ascending = button.dataset.order !== "asc";
    cards.sort((a, b) => {
      const first = findProduct(a.dataset.product);
      const second = findProduct(b.dataset.product);
      return ascending ? first.price - second.price : second.price - first.price;
    });
    cards.forEach((card) => grid.append(card));
    button.dataset.order = ascending ? "asc" : "desc";
    button.innerHTML = `${ascending ? "Giá: thấp đến cao" : "Giá: cao đến thấp"} <span>⌄</span>`;
  }));

  document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Cảm ơn bạn! TECHZONE sẽ gửi tin mới nhất đến inbox.");
    event.currentTarget.reset();
  });
  document.querySelector("#checkout-button").addEventListener("click", () => showToast("Đây là bản demo giao diện — chức năng đặt hàng chưa được kết nối."));
}

const slides = [
  {
    title: "Hiệu năng<br>không giới hạn<span>.</span>",
    description: "Nâng cấp góc gaming của bạn với những cỗ máy được sinh ra để bứt phá.",
    image: "image/hinhanh.jpg",
    alt: "Bộ PC gaming RGB cao cấp", label: "Phantom X · RTX 4070 Ti", cta: "Khám phá bộ sưu tập", href: "#pc-gaming", discount: "−15%"
  },
  {
    title: "Chơi theo<br>cách của bạn<span>.</span>",
    description: "Laptop gaming thế hệ mới — gọn nhẹ để đi xa, mạnh mẽ để bứt tốc.",
    image: "image/asus-rog-zephyrus-g14-ga403.jpg",
    alt: "Laptop gaming hiệu năng cao", label: "ROG Zephyrus · RTX 4070", cta: "Khám phá laptop", href: "#laptop", discount: "−13%"
  },
  {
    title: "Build chất.<br>Chiến hết mình<span>.</span>",
    description: "Linh kiện chính hãng, cấu hình tối ưu — sẵn sàng cho mọi cuộc chơi.",
    image: "image/msi-geforce-rtx-4070-super-12g.jpg",
    alt: "Linh kiện và bộ PC gaming hiện đại", label: "RTX 4070 SUPER · 12GB", cta: "Xem linh kiện", href: "#components", discount: "−10%"
  }
];
let activeSlide = 0;
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  const slide = slides[activeSlide];
  const image = document.querySelector("#hero-image");
  const copy = document.querySelector(".hero-copy");
  copy.classList.add("slide-changing");
  image.style.opacity = "0";
  window.setTimeout(() => {
    document.querySelector("#hero-title").innerHTML = slide.title;
    document.querySelector("#hero-description").textContent = slide.description;
    image.src = slide.image;
    image.alt = slide.alt;
    document.querySelector("#hero-cta").innerHTML = `${slide.cta} <span>↗</span>`;
    document.querySelector("#hero-cta").href = slide.href;
    document.querySelector(".hero-product-tag strong").textContent = slide.label;
    document.querySelector(".hero-product-tag > b").textContent = slide.discount;
    document.querySelector("#slide-current").textContent = `0${activeSlide + 1}`;
    image.style.opacity = "";
    copy.classList.remove("slide-changing");
  }, 170);
}

function setupCarousel() {
  document.querySelector("#hero-next").addEventListener("click", () => showSlide(activeSlide + 1));
  document.querySelector("#hero-prev").addEventListener("click", () => showSlide(activeSlide - 1));
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => showSlide(activeSlide + 1), 7000);
  }
}

function setupCountdown() {
  let remaining = 8 * 3600 + 24 * 60 + 51;
  const update = () => {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;
    document.querySelector("#countdown-hours").textContent = String(hours).padStart(2, "0");
    document.querySelector("#countdown-minutes").textContent = String(minutes).padStart(2, "0");
    document.querySelector("#countdown-seconds").textContent = String(seconds).padStart(2, "0");
    remaining = remaining > 0 ? remaining - 1 : 8 * 3600;
  };
  update();
  window.setInterval(update, 1000);
}

function setupScrollReveal() {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll(".category-card, .product-card, .news-card, .promo-banner, .hero-feature");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  targets.forEach((target) => {
    target.classList.add("will-reveal");
    observer.observe(target);
  });
}

renderInitialGrids();
renderCart();
setupInteractions();
setupCarousel();
setupCountdown();
setupScrollReveal();
