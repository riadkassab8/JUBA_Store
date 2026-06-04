const imgUrl = (photoId, width = 1000) =>
  `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

// Product data keeps hover sources category-safe for scalable grids.
const products = [
  {
    id: 0,
    name: "Essential White T-Shirt",
    price: "450",
    cat: "Top Wear",
    img: imgUrl("12025472"),
    hoverImage: imgUrl("12025472", 1200),
    imageVariants: [imgUrl("12025472", 1200)],
    badge: "NEW",
    rating: 4.8,
    reviews: 126,
    stock: "In stock - 18 pieces",
    fabric: "240 GSM brushed cotton jersey with reinforced neckline.",
    description:
      "A clean everyday tee with a structured shoulder, soft hand feel, and a premium streetwear drape.",
  },
  {
    id: 1,
    name: "Shadow Black T-Shirt",
    price: "520",
    cat: "Top Wear",
    img: imgUrl("8532616"),
    hoverProductId: 0,
    hoverImage: imgUrl("8532616", 1200),
    imageVariants: [imgUrl("8532616", 1200)],
    badge: "BESTSELLER",
    rating: 4.7,
    reviews: 1422,
    stock: "In stock - 27 pieces",
    fabric: "Soft compact cotton with a clean black dye finish.",
    description:
      "A sharp black tee for daily styling, made to hold its shape through repeated wear.",
  },
  {
    id: 2,
    name: "Cream Knit Top",
    price: "680",
    cat: "Top Wear",
    img: imgUrl("6046231"),
    hoverProductId: 1,
    hoverImage: imgUrl("6046231", 1200),
    imageVariants: [imgUrl("6046231", 1200)],
    badge: "SOFT TOUCH",
    rating: 4.6,
    reviews: 88,
    stock: "In stock - 14 pieces",
    fabric: "Fine knit cotton blend with ribbed hem and sleeve finish.",
    description:
      "A lightweight knit top with an elevated texture and a relaxed premium silhouette.",
  },
  {
    id: 3,
    name: "Phantom Luxury Sneaker",
    price: "1,200",
    cat: "Footwear",
    img: imgUrl("1461048"),
    hoverProductId: 4,
    hoverImage: imgUrl("1461048", 1200),
    imageVariants: [imgUrl("1461048", 1200)],
    badge: "TRENDING",
    rating: 4.9,
    reviews: 211,
    stock: "Low stock - 12 pairs",
    fabric:
      "Layered vegan leather upper, cushioned EVA midsole, rubber grip sole.",
    description:
      "A sculptural sneaker built for long city days, finished with a bold profile and a soft, secure interior.",
  },
  {
    id: 4,
    name: "Cloud High-Top Sneakers",
    price: "1,350",
    cat: "Footwear",
    img: imgUrl("20350010"),
    hoverProductId: 5,
    hoverImage: imgUrl("20350010", 1200),
    imageVariants: [imgUrl("20350010", 1200)],
    badge: "LIMITED",
    rating: 4.8,
    reviews: 164,
    stock: "In stock - 16 pairs",
    fabric:
      "Premium synthetic leather panels with padded collar and lace-up support.",
    description:
      "A high-top sneaker with clean contrast panels and a polished streetwear profile.",
  },
  {
    id: 5,
    name: "Studio Runner Sneakers",
    price: "980",
    cat: "Footwear",
    img: imgUrl("4252969"),
    hoverProductId: 3,
    hoverImage: imgUrl("4252969", 1200),
    imageVariants: [imgUrl("4252969", 1200)],
    badge: "HOT",
    rating: 4.5,
    reviews: 73,
    stock: "In stock - 31 pairs",
    fabric: "Mesh textile upper, lightweight foam sole, lace-up fit.",
    description:
      "A crisp runner silhouette designed for easy styling with denim, joggers, and summer fits.",
  },
  {
    id: 6,
    name: "Black Leather Jacket",
    price: "2,100",
    cat: "Jackets",
    img: imgUrl("6044143"),
    hoverProductId: 7,
    hoverImage: imgUrl("6044143", 1200),
    imageVariants: [imgUrl("6044143", 1200)],
    badge: "PREMIUM",
    rating: 4.9,
    reviews: 96,
    stock: "Low stock - 7 pieces",
    fabric:
      "Soft faux leather shell with smooth lining and metal zipper detail.",
    description:
      "A clean black jacket built around sharp lines, texture, and a timeless evening profile.",
  },
  {
    id: 7,
    name: "White Studio Hoodie",
    price: "990",
    cat: "Jackets",
    img: imgUrl("8217419"),
    hoverProductId: 6,
    hoverImage: imgUrl("8217419", 1200),
    imageVariants: [imgUrl("8217419", 1200)],
    badge: "COZY",
    rating: 4.6,
    reviews: 117,
    stock: "In stock - 19 pieces",
    fabric: "Heavy fleece cotton blend with soft brushed interior.",
    description:
      "A clean hoodie for layered fits, made with a relaxed cut and warm studio texture.",
  },
  {
    id: 8,
    name: "Urban Zip Jacket",
    price: "1,650",
    cat: "Jackets",
    img: imgUrl("626547"),
    hoverProductId: 6,
    hoverImage: imgUrl("626547", 1200),
    imageVariants: [imgUrl("626547", 1200)],
    badge: "DROP",
    rating: 4.7,
    reviews: 65,
    stock: "In stock - 11 pieces",
    fabric: "Structured woven shell with matte finish and comfort lining.",
    description:
      "A monochrome outerwear piece with a strong urban line and easy layering weight.",
  },
  {
    id: 9,
    name: "Safari Kids Set",
    price: "750",
    cat: "Kids",
    img: imgUrl("5693888"),
    hoverProductId: 10,
    hoverImage: imgUrl("5693888", 1200),
    imageVariants: [imgUrl("5693888", 1200)],
    badge: "HOT",
    rating: 4.6,
    reviews: 97,
    stock: "In stock - 23 sets",
    fabric:
      "Breathable cotton blend with flexible seams for everyday movement.",
    description:
      "A playful coordinated kids set with soft textures, easy layering, and colors designed for daily wear.",
  },
  {
    id: 10,
    name: "Wardrobe Play Dress",
    price: "690",
    cat: "Kids",
    img: imgUrl("8083839"),
    hoverProductId: 9,
    hoverImage: imgUrl("8083839", 1200),
    imageVariants: [imgUrl("8083839", 1200)],
    badge: "NEW",
    rating: 4.5,
    reviews: 54,
    stock: "In stock - 20 pieces",
    fabric: "Lightweight cotton layers with flexible seams and soft finishing.",
    description:
      "A bright playful kids outfit for weekend styling, made for movement and comfort.",
  },
  {
    id: 11,
    name: "Mini Street Layer",
    price: "820",
    cat: "Kids",
    img: imgUrl("28771909"),
    hoverProductId: 9,
    hoverImage: imgUrl("28771909", 1200),
    imageVariants: [imgUrl("28771909", 1200)],
    badge: "COMFY",
    rating: 4.7,
    reviews: 61,
    stock: "In stock - 13 pieces",
    fabric: "Soft cotton blend with easy-care finish and relaxed fit.",
    description:
      "A modern kids layer with everyday durability, cheerful styling, and simple comfort.",
  },
];

const grid = document.getElementById("product-grid");
const wishlistKey = "jubaWishlist";
let activeCategory = "All";
let selectedSize = "M";
let wishlist = JSON.parse(localStorage.getItem(wishlistKey) || "[]");
const productsById = new Map(products.map((product) => [product.id, product]));
const productsByCategory = products.reduce((index, product) => {
  const category = product.cat.trim().toLowerCase();
  if (!index.has(category)) {
    index.set(category, []);
  }
  index.get(category).push(product);
  return index;
}, new Map());

function saveWishlist() {
  localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
}

function getStars(rating) {
  const filled = Math.round(rating);
  return "★★★★★".slice(0, filled) + "☆☆☆☆☆".slice(filled);
}

function getSameProductHoverImage(product) {
  const variant = product.imageVariants?.find(
    (image) => image && image !== product.img,
  );
  return variant || product.hoverImage || product.img;
}

function getSameCategoryHoverProduct(product) {
  const category = product.cat.trim().toLowerCase();
  const categoryProducts = productsByCategory.get(category) || [];
  const preferredHoverProduct = productsById.get(product.hoverProductId);

  if (
    preferredHoverProduct &&
    preferredHoverProduct.cat.trim().toLowerCase() === category
  ) {
    return preferredHoverProduct;
  }

  return categoryProducts.find(
    (candidate) => candidate.id !== product.id && candidate.img,
  );
}

function resolveHoverImage(product) {
  const sameProductImage = getSameProductHoverImage(product);
  const sameCategoryProduct = getSameCategoryHoverProduct(product);

  if (sameProductImage && sameProductImage !== product.img) {
    return sameProductImage;
  }

  if (
    sameCategoryProduct &&
    sameCategoryProduct.cat.trim().toLowerCase() ===
      product.cat.trim().toLowerCase()
  ) {
    return sameCategoryProduct.img;
  }

  return product.hoverImage || product.img;
}

function productCardTemplate(product) {
  const wished = wishlist.includes(product.id);
  const hoverImage = resolveHoverImage(product);

  return `
        <div class="product-card" data-category="${product.cat}" onclick="openQuickView(${product.id})">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
          <button class="wishlist-btn ${wished ? "active" : ""}" onclick="toggleWishlist(event, ${product.id})" aria-label="Toggle wishlist">
            ${wished ? "♥" : "♡"}
          </button>
          <div class="product-img-container">
            <img src="${product.img}" alt="${product.name}" class="product-img main">
            <img src="${hoverImage}" alt="${product.name}" class="product-img hover">
            <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart('${product.name}', '${product.price}')">
              أضف للسلة
            </button>
          </div>
          <div class="product-info">
            <div class="product-cat">${product.cat}</div>
            <div class="product-name">${product.name}</div>
            <div class="rating-row">
              <span class="stars">${getStars(product.rating)} ${product.rating}</span>
              <span class="review-count">${product.reviews} reviews</span>
            </div>
            <div class="product-price">${product.price} جنيه</div>
          </div>
        </div>
      `;
}

function renderProducts() {
  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.cat === activeCategory);

  grid.innerHTML = visibleProducts.map(productCardTemplate).join("");
}

function toggleWishlist(event, productId) {
  event.stopPropagation();
  wishlist = wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
  saveWishlist();
  renderProducts();
}

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    document
      .querySelectorAll(".filter-tab")
      .forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderProducts();
  });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.cat.toLowerCase().includes(searchTerm)
    );
    
    const grid = document.getElementById("product-grid");
    if (filteredProducts.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-secondary); text-align:center; grid-column:1/-1; padding:40px;">لا توجد نتائج</p>';
    } else {
      grid.innerHTML = filteredProducts.map(productCardTemplate).join("");
    }
  });
}

function openQuickView(productId) {
  const product = products.find((item) => item.id === productId);
  const modal = document.getElementById("quick-view-modal");
  selectedSize = "M";
  modal.innerHTML = `
        <button class="modal-close" onclick="closeQuickView()" aria-label="Close quick view">✕</button>
        <div class="quick-modal" role="dialog" aria-modal="true" aria-label="${product.name}">
          <img src="${product.img}" alt="${product.name}">
          <div class="quick-info">
            <div class="product-cat">${product.cat}</div>
            <h2 style="font-size:42px; line-height:1; margin:8px 0 14px;">${product.name}</h2>
            <div class="rating-row" style="justify-content:flex-start;">
              <span class="stars">${getStars(product.rating)} ${product.rating}</span>
              <span class="review-count">${product.reviews} reviews</span>
            </div>
            <div class="product-price" style="font-size:34px; color:var(--accent); margin:16px 0;">${product.price} جنيه</div>
            <p style="color:var(--text-secondary); margin-bottom:24px;">${product.description}</p>
            <strong>Choose size</strong>
            <div class="size-options">
              ${["S", "M", "L", "XL", "XXL"].map((size) => `<button class="size-btn ${size === selectedSize ? "active" : ""}" onclick="selectSize(this, '${size}')">${size}</button>`).join("")}
            </div>
            <button class="nav-btn" onclick="toggleSizeChart()" style="font-size:14px; color:var(--accent); margin-bottom:10px;">Size chart</button>
            <div class="size-chart" id="size-chart">
              <div><strong>Size</strong><strong>Chest</strong><strong>Length</strong></div>
              <div><span>S</span><span>50 cm</span><span>68 cm</span></div>
              <div><span>M</span><span>54 cm</span><span>72 cm</span></div>
              <div><span>L</span><span>58 cm</span><span>76 cm</span></div>
              <div><span>XL</span><span>62 cm</span><span>80 cm</span></div>
            </div>
            <div class="detail-row"><strong>Fabric</strong>${product.fabric}</div>
            <div class="detail-row"><strong>Stock</strong>${product.stock}</div>
            <button class="btn btn-primary" style="width:100%; margin-top:24px;" onclick="addSelectedProductToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function selectSize(button, size) {
  selectedSize = size;
  button.parentElement
    .querySelectorAll(".size-btn")
    .forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

function toggleSizeChart() {
  document.getElementById("size-chart").classList.toggle("show");
}

function addSelectedProductToCart(productId) {
  const product = products.find((item) => item.id === productId);
  closeQuickView();
  addToCart(`${product.name} - ${selectedSize}`, product.price);
}

renderProducts();

// Cart Logic with Quantity Management
let cart = [];

function toggleCart() {
  document.getElementById("cart-drawer").classList.toggle("open");
  document.getElementById("cart-overlay").classList.toggle("show");
}

function addToCart(name, price, img = "") {
  // Check if item already exists
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price: parseFloat(price.toString().replace(/,/g, "")),
      quantity: 1,
      img: img || "images/studioproduc_tshirt_1779480129994.png",
    });
  }

  updateCartUI();
  toggleCart();
}

function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    updateCartUI();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    container.innerHTML = `
          <div class="cart-empty">
            <div class="cart-empty-icon">🛒</div>
            <p>السلة فارغة حالياً</p>
          </div>
        `;
    totalEl.textContent = "0 جنيه";
    return;
  }

  container.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price.toLocaleString()} جنيه</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart(${index})" title="حذف">🗑️</button>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalEl.textContent = `${total.toLocaleString()} جنيه`;
}

function checkoutToWhatsApp() {
  if (cart.length === 0) {
    alert("السلة فارغة! أضف منتجات أولاً");
    return;
  }

  // رقم الواتساب (غير الرقم ده برقمك)
  const phoneNumber = "201098277229"; // ضع رقمك هنا بدون + أو 00

  // إنشاء رسالة الطلب
  let message = "*🛍️ طلب جديد من JUBA STORE*\n\n";
  message += "*المنتجات:*\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   الكمية: ${item.quantity}\n`;
    message += `   السعر: ${item.price.toLocaleString()} جنيه\n`;
    message += `   الإجمالي: ${(item.price * item.quantity).toLocaleString()} جنيه\n\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `*💰 الإجمالي الكلي: ${total.toLocaleString()} جنيه*\n\n`;
  message += "_شكراً لاختيارك JUBA STORE_ ✨";

  // تشفير الرسالة للـ URL
  const encodedMessage = encodeURIComponent(message);

  // فتح واتساب
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");

  // تفريغ السلة بعد الإرسال
  cart = [];
  updateCartUI();
  toggleCart();
}

function startCountdown() {
  const endKey = "jubaFlashDealEnds";
  const dayMs = 24 * 60 * 60 * 1000;
  let endTime = Number(localStorage.getItem(endKey));
  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + dayMs;
    localStorage.setItem(endKey, String(endTime));
  }

  function tick() {
    let remaining = endTime - Date.now();
    if (remaining <= 0) {
      endTime = Date.now() + dayMs;
      localStorage.setItem(endKey, String(endTime));
      remaining = dayMs;
    }

    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    document.getElementById("count-hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    document.getElementById("count-minutes").textContent = String(
      minutes,
    ).padStart(2, "0");
    document.getElementById("count-seconds").textContent = String(
      seconds,
    ).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

function closePromoPopup(remember) {
  const popup = document.getElementById("promo-popup");
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
  if (remember) {
    localStorage.setItem("jubaPromoSeen", "true");
  }
}

function showPromoPopup() {
  if (localStorage.getItem("jubaPromoSeen")) return;
  setTimeout(() => {
    const popup = document.getElementById("promo-popup");
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
  }, 1200);
}

function startSocialProof() {
  const toast = document.getElementById("social-toast");
  const messages = [
    "أحمد من القاهرة اشترى Essential White T-Shirt منذ 3 دقائق",
    "Mona from Giza added Phantom Luxury Sneaker to her wishlist",
    "Karim from Alexandria ordered Black Leather Jacket 8 minutes ago",
    "Sara from Mansoura bought Safari Kids Set today",
  ];
  let index = 0;

  function showToast() {
    toast.textContent = messages[index];
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 5200);
    index = (index + 1) % messages.length;
  }

  setTimeout(showToast, 1800);
  setInterval(showToast, 8000);
}

document
  .getElementById("quick-view-modal")
  .addEventListener("click", (event) => {
    if (event.target.id === "quick-view-modal") closeQuickView();
  });

document.getElementById("promo-popup").addEventListener("click", (event) => {
  if (event.target.id === "promo-popup") closePromoPopup(true);
});

startCountdown();
showPromoPopup();
startSocialProof();

// JUBA Hero 3D Animation with Scroll
function initJubaHero3D() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const tshirt = document.querySelector("#tshirt-3d");
  const jubaTitle = document.querySelector(".juba-brand-hero h1");

  // Mouse parallax effect
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(tshirt, {
      rotateY: x,
      rotateX: -y,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  // Scroll animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".cinematic-hero",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
    })
    .to(tshirt, {
      rotateY: 360,
      rotateX: 15,
      scale: 1.2,
      z: 200,
      duration: 1,
    })
    .to(
      jubaTitle,
      {
        scale: 0.8,
        opacity: 0.3,
        x: -100,
        duration: 1,
      },
      0,
    )
    .to(
      ".hero-glow",
      {
        scale: 1.5,
        opacity: 0.3,
        duration: 1,
      },
      0,
    );

  // Floating animation
  gsap.to(tshirt, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Title pulse
  gsap.to(jubaTitle, {
    textShadow: "0 0 120px rgba(210, 255, 0, 0.5)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

initJubaHero3D();

// Product Card 3D Hover Effects
function initProductCards3D() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const imgContainer = card.querySelector('.product-img-container');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      const mouseXPercent = (x / rect.width) * 100;
      const mouseYPercent = (y / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
      card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Loading Screen
window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hidden");
  }, 2500);
});

// Smooth Scroll for Navigation
document.querySelectorAll(".nav-link, .nav-brand").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId && targetId !== "#") {
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active link
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));
        if (this.classList.contains("nav-link")) {
          this.classList.add("active");
        }
      }
    }
  });
});

// Active Link on Scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Initialize after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductCards3D);
} else {
  initProductCards3D();
}
