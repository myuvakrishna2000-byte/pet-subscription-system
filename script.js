/**
 * PetJoy - Complete Automated Pet Subscription System
 * 100% Pure Client-Side JavaScript (Consolidated Single File)
 */

// ================= 1. INITIAL MOCK DATA =================
const INITIAL_DATA = {
  products: [
    {
      id: "prod-1",
      name: "Royal Canin Maxi Adult Dry Dog Food",
      category: "food",
      petType: "dog",
      price: 54.99,
      rating: 4.9,
      reviewsCount: 184,
      stock: 45,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80",
      description: "Formulated with high-quality proteins and balanced dietary fibers for optimal digestive security in large adult dogs.",
      features: ["High digestibility", "Bone & joint support", "Omega-3 fatty acids for skin & coat"]
    },
    {
      id: "prod-2",
      name: "Blue Buffalo Wilderness Grain-Free Salmon",
      category: "food",
      petType: "dog",
      price: 48.50,
      rating: 4.8,
      reviewsCount: 142,
      stock: 38,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&auto=format&fit=crop&q=80",
      description: "High-protein recipe inspired by the wild diet of wolves, featuring real deboned salmon and LifeSource Bits.",
      features: ["100% grain-free", "Real deboned salmon #1 ingredient", "No poultry by-products"]
    },
    {
      id: "prod-3",
      name: "Hill's Science Diet Indoor Cat Chicken Recipe",
      category: "food",
      petType: "cat",
      price: 39.99,
      rating: 4.9,
      reviewsCount: 210,
      stock: 60,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
      description: "Specially balanced nutrition designed for indoor cats, providing healthy digestion and easy litter clean-up.",
      features: ["Natural fiber supports digestion", "High quality lean protein", "Veterinarian recommended"]
    },
    {
      id: "prod-4",
      name: "Whiskas Purrfectly Wet Food Pouches (12-Pack)",
      category: "food",
      petType: "cat",
      price: 24.99,
      rating: 4.7,
      reviewsCount: 98,
      stock: 52,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&auto=format&fit=crop&q=80",
      description: "Succulent cuts of real tender tuna and salmon in savory gravy, sealed in flavor-lock pouches.",
      features: ["Easy single-serve pouches", "Promotes hydration", "Zinc for healthy skin"]
    },
    {
      id: "prod-5",
      name: "Greenies Original Dental Dog Treats (Regular)",
      category: "food",
      petType: "dog",
      price: 18.99,
      rating: 4.9,
      reviewsCount: 320,
      stock: 80,
      image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&auto=format&fit=crop&q=80",
      description: "Veterinary Oral Health Council accepted chewy dental treats that clean teeth and freshen breath down to the gumline.",
      features: ["Clinically proven plaque control", "Easy to digest", "Made with natural vitamins & minerals"]
    },
    {
      id: "prod-6",
      name: "Temptations Classic Catnip Fever Treats",
      category: "food",
      petType: "cat",
      price: 8.99,
      rating: 4.8,
      reviewsCount: 165,
      stock: 95,
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
      description: "Crunchy on the outside with a soft, savory center packed with irresistible chicken and catnip flavor.",
      features: ["Under 2 calories per treat", "100% nutritionally complete", "Resealable stay-fresh pouch"]
    },
    {
      id: "prod-7",
      name: "KONG Classic Ultra-Durable Rubber Chew Toy",
      category: "toys",
      petType: "dog",
      price: 14.99,
      rating: 4.9,
      reviewsCount: 412,
      stock: 70,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80",
      description: "The gold standard of dog toys for over 40 years. Ultra-resilient natural red rubber formula with an erratic bounce.",
      features: ["Stuffable with treats or peanut butter", "Mentally stimulating", "Durable for average chewers"]
    },
    {
      id: "prod-8",
      name: "Chuckit! Ultra Ball High-Bounce (2-Pack)",
      category: "toys",
      petType: "dog",
      price: 11.99,
      rating: 4.8,
      reviewsCount: 189,
      stock: 55,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=80",
      description: "High-bounce, buoyant, and easy-to-clean rubber ball designed for intense games of fetch in the yard or lake.",
      features: ["Floats in water", "Compatible with Chuckit Launchers", "High visibility bright orange & blue"]
    },
    {
      id: "prod-9",
      name: "Nina Ottosson Interactive Dog Brick Puzzle",
      category: "toys",
      petType: "dog",
      price: 22.99,
      rating: 4.7,
      reviewsCount: 115,
      stock: 30,
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80",
      description: "Level 2 intermediate mental stimulation game where dogs flip, slide, and open compartments to discover hidden treats.",
      features: ["Fights boredom & anxiety", "Easy to wash with soap & warm water", "Safe food-grade composite"]
    },
    {
      id: "prod-10",
      name: "SmartyKat Loco Motion Electronic Spinning Wand",
      category: "toys",
      petType: "cat",
      price: 19.99,
      rating: 4.6,
      reviewsCount: 134,
      stock: 42,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80",
      description: "Unpredictable moving wand with real feathers peeks out under a durable nylon mat, triggering natural hunting instincts.",
      features: ["Adjustable speed dial", "Auto shut-off timer", "Keeps indoor cats agile and active"]
    },
    {
      id: "prod-11",
      name: "Yeowww! Organic Catnip Yellow Banana Toy",
      category: "toys",
      petType: "cat",
      price: 8.99,
      rating: 4.9,
      reviewsCount: 260,
      stock: 85,
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&auto=format&fit=crop&q=80",
      description: "Stuffed 100% with organically grown American catnip. No cotton fillers, plastic, or chemicals.",
      features: ["100% pure organic leaf & flower top", "Heavy-duty cotton twill fabric", "Hand-sewn in USA"]
    },
    {
      id: "prod-12",
      name: "Ruffwear Front Range Ergonomic Padded Harness",
      category: "accessories",
      petType: "dog",
      price: 44.95,
      rating: 4.9,
      reviewsCount: 310,
      stock: 25,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80",
      description: "All-day adventure harness with foam-padded chest panel, 4 points of adjustment, and dual leash clips.",
      features: ["Reflective safety trim", "No-pull front chest leash ring", "ID tag storage pocket"]
    },
    {
      id: "prod-13",
      name: "Hertzko Self-Cleaning Slicker Grooming Brush",
      category: "accessories",
      petType: "dog",
      price: 17.99,
      rating: 4.8,
      reviewsCount: 195,
      stock: 50,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80",
      description: "Gentle wire bristles penetrate deep into coat without scratching skin. 1-click button retracts bristles for instant fur disposal.",
      features: ["Patented 1-click bristle retraction", "Increases blood circulation", "Suitable for both dogs and cats"]
    },
    {
      id: "prod-14",
      name: "URPOWER Stainless Steel No-Spill Double Bowls",
      category: "accessories",
      petType: "dog",
      price: 23.99,
      rating: 4.7,
      reviewsCount: 140,
      stock: 35,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
      description: "Rust-resistant stainless steel food and water bowls housed in a skid-proof silicone mat that catches all drips and spills.",
      features: ["Dishwasher safe", "Extra wide silicone anti-slip base", "Food grade rust-free stainless steel"]
    },
    {
      id: "prod-15",
      name: "Earth Rated Extra-Thick Lavender Poop Bags (270 Ct)",
      category: "accessories",
      petType: "dog",
      price: 13.99,
      rating: 4.9,
      reviewsCount: 450,
      stock: 110,
      image: "https://images.unsplash.com/photo-1527526029430-319f10814151?w=600&auto=format&fit=crop&q=80",
      description: "100% leak-proof extra-thick bags with soothing lavender scent. Core made from 100% recycled materials.",
      features: ["Extra thick and 100% leak-proof", "Fresh lavender scent masks odor", "Recycled carton packaging"]
    },
    {
      id: "prod-16",
      name: "Bedsure Orthopedic Memory Foam Pet Bed",
      category: "accessories",
      petType: "dog",
      price: 39.99,
      rating: 4.8,
      reviewsCount: 178,
      stock: 20,
      image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&auto=format&fit=crop&q=80",
      description: "Egg-crate orthopedic foam relieves joint aches and promotes restful sleep. Removable, machine-washable plush cover.",
      features: ["High density egg-crate foam", "Waterproof inner lining", "Non-skid bottom"]
    }
  ],
  curatedBoxes: [
    {
      id: "box-puppy-starter",
      name: "Puppy Growth & Adventure Box",
      petType: "dog",
      tag: "Most Popular",
      description: "Everything your growing pup needs: nutritious food, teething chew toys, grooming slicker, and dental health treats.",
      regularPrice: 79.99,
      subPrice: 64.99,
      discountPercent: 18,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "box-feline-gourmet",
      name: "Feline Gourmet & Play Club",
      petType: "cat",
      tag: "Best for Cats",
      description: "Pamper your cat with premium poultry kibble, wet tuna gravy pouches, electronic spinning toy, and organic catnip.",
      regularPrice: 62.99,
      subPrice: 49.99,
      discountPercent: 20,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "box-power-chewer",
      name: "Heavy Chewer Canine Power Box",
      petType: "dog",
      tag: "Tough & Durable",
      description: "Built for active and aggressive chewers: Royal Canin kibble, KONG rubber toy, Chuckit ultra balls, and high-protein treats.",
      regularPrice: 85.99,
      subPrice: 69.99,
      discountPercent: 19,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "box-senior-care",
      name: "Senior Pet Wellness & Comfort Box",
      petType: "dog",
      tag: "Gentle Care",
      description: "Tailored for golden years: gentle digestion treats, brain-stimulating puzzle game, soft grooming brush, and wellness essentials.",
      regularPrice: 68.99,
      subPrice: 54.99,
      discountPercent: 20,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80"
    }
  ],
  users: [
    {
      id: "usr-1",
      email: "user@petjoy.com",
      name: "Sarah Miller",
      role: "customer",
      address: "742 Evergreen Terrace, Springfield, OR 97477"
    },
    {
      id: "usr-admin",
      email: "admin@petjoy.com",
      name: "Administrator / Evaluator",
      role: "admin"
    }
  ],
  subscriptions: [
    {
      id: "SUB-1001",
      userId: "usr-1",
      petName: "Max",
      petSpecies: "dog",
      boxName: "Max's Custom Healthy Feast & Play Box",
      frequency: "monthly",
      frequencyDays: 30,
      status: "active",
      createdAt: new Date(Date.now() - 25 * 86400000).toISOString(),
      lastBilledDate: new Date(Date.now() - 25 * 86400000).toISOString(),
      nextDeliveryDate: new Date(Date.now() + 5 * 86400000).toISOString(),
      subtotal: 87.97,
      discountPercent: 15,
      recurringAmount: 74.77,
      items: [
        { productId: "prod-1", name: "Royal Canin Maxi Adult Dry Dog Food", category: "food", quantity: 1, unitPrice: 54.99 },
        { productId: "prod-7", name: "KONG Classic Ultra-Durable Rubber Chew Toy", category: "toys", quantity: 1, unitPrice: 14.99 },
        { productId: "prod-5", name: "Greenies Original Dental Dog Treats", category: "food", quantity: 1, unitPrice: 18.99 }
      ],
      shippingAddress: "742 Evergreen Terrace, Springfield, OR 97477",
      autoRenew: true,
      renewalCount: 2
    },
    {
      id: "SUB-1002",
      userId: "usr-1",
      petName: "Luna",
      petSpecies: "cat",
      boxName: "Feline Gourmet & Play Club",
      frequency: "biweekly",
      frequencyDays: 14,
      status: "active",
      createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
      lastBilledDate: new Date(Date.now() - 10 * 86400000).toISOString(),
      nextDeliveryDate: new Date(Date.now() + 4 * 86400000).toISOString(),
      subtotal: 62.99,
      discountPercent: 20,
      recurringAmount: 49.99,
      items: [
        { productId: "prod-3", name: "Hill's Science Diet Indoor Cat Chicken Recipe", category: "food", quantity: 1, unitPrice: 39.99 },
        { productId: "prod-10", name: "SmartyKat Loco Motion Electronic Spinning Wand", category: "toys", quantity: 1, unitPrice: 19.99 },
        { productId: "prod-11", name: "Yeowww! Organic Catnip Yellow Banana Toy", category: "toys", quantity: 1, unitPrice: 8.99 }
      ],
      shippingAddress: "742 Evergreen Terrace, Springfield, OR 97477",
      autoRenew: true,
      renewalCount: 1
    }
  ],
  orders: [
    {
      id: "ORD-7081",
      subscriptionId: "SUB-1001",
      userId: "usr-1",
      date: new Date(Date.now() - 25 * 86400000).toISOString(),
      total: 74.77,
      status: "Delivered",
      trackingNumber: "TRK-98234821-US",
      items: [
        { name: "Royal Canin Maxi Adult Dry Dog Food", quantity: 1, price: 54.99 },
        { name: "KONG Classic Ultra-Durable Rubber Chew Toy", quantity: 1, price: 14.99 },
        { name: "Greenies Original Dental Dog Treats", quantity: 1, price: 18.99 }
      ],
      timeline: [
        { step: "Subscription Billed", time: "Oct 15, 10:05 AM", done: true },
        { step: "Box Packed at Fulfillment Center", time: "Oct 15, 03:20 PM", done: true },
        { step: "Dispatched via PawsExpress", time: "Oct 16, 09:00 AM", done: true },
        { step: "Delivered at Front Porch", time: "Oct 18, 02:45 PM", done: true }
      ]
    },
    {
      id: "ORD-7082",
      subscriptionId: "SUB-1002",
      userId: "usr-1",
      date: new Date(Date.now() - 10 * 86400000).toISOString(),
      total: 49.99,
      status: "Out for Delivery",
      trackingNumber: "TRK-49210294-US",
      items: [
        { name: "Hill's Science Diet Indoor Cat Chicken Recipe", quantity: 1, price: 39.99 },
        { name: "SmartyKat Loco Motion Electronic Spinning Wand", quantity: 1, price: 19.99 },
        { name: "Yeowww! Organic Catnip Yellow Banana Toy", quantity: 1, price: 8.99 }
      ],
      timeline: [
        { step: "Subscription Billed", time: "Oct 28, 09:35 AM", done: true },
        { step: "Box Packed at Fulfillment Center", time: "Oct 28, 04:10 PM", done: true },
        { step: "Dispatched via PawsExpress", time: "Oct 29, 08:30 AM", done: true },
        { step: "Out for Delivery with Courier", time: "Today, 08:15 AM", done: false }
      ]
    }
  ],
  logs: [
    {
      id: "LOG-1",
      timestamp: new Date(Date.now() - 25 * 86400000).toISOString(),
      trigger: "Cron Scheduler",
      message: "Automated renewal cycle executed. 1 subscription billed. Order ORD-7081 created.",
      status: "SUCCESS"
    },
    {
      id: "LOG-2",
      timestamp: new Date(Date.now() - 10 * 86400000).toISOString(),
      trigger: "Cron Scheduler",
      message: "Automated renewal cycle executed. 1 subscription billed. Order ORD-7082 created.",
      status: "SUCCESS"
    }
  ]
};

// ================= 2. CLIENT-SIDE STORAGE ENGINE =================
class PetStorage {
  static KEY = 'petjoy_app_store_v1';

  static getStore() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Storage read failed:', e);
    }
    // Seed initial store
    localStorage.setItem(this.KEY, JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  static saveStore(store) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(store));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
  }

  static resetToDefaults() {
    localStorage.setItem(this.KEY, JSON.stringify(INITIAL_DATA));
    localStorage.removeItem('petjoy_builder_box_items');
    showToast('Reset all data to default demo state!', 'success');
  }

  // Products
  static getProducts(filters = {}) {
    const store = this.getStore();
    let prods = store.products || [];

    if (filters.category && filters.category !== 'all') {
      prods = prods.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.petType && filters.petType !== 'all') {
      prods = prods.filter(p => p.petType.toLowerCase() === filters.petType.toLowerCase());
    }
    if (filters.q && filters.q.trim()) {
      const q = filters.q.toLowerCase().trim();
      prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return prods;
  }

  static getProductById(id) {
    return this.getProducts().find(p => p.id === id) || null;
  }

  static saveProduct(data) {
    const store = this.getStore();
    if (data.id) {
      const idx = store.products.findIndex(p => p.id === data.id);
      if (idx !== -1) {
        store.products[idx] = { ...store.products[idx], ...data };
        this.saveStore(store);
        return store.products[idx];
      }
    }
    const newProd = {
      id: 'prod-' + (store.products.length + 1) + '-' + Math.floor(Math.random() * 1000),
      name: data.name || 'Untitled Pet Item',
      category: data.category || 'food',
      petType: data.petType || 'dog',
      price: parseFloat(data.price) || 19.99,
      rating: 5.0,
      reviewsCount: 1,
      stock: parseInt(data.stock, 10) || 50,
      image: data.image || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80',
      description: data.description || 'Premium vet-approved pet product.',
      features: ['High quality guarantee', 'Safe for pets']
    };
    store.products.unshift(newProd);
    this.saveStore(store);
    return newProd;
  }

  static deleteProduct(id) {
    const store = this.getStore();
    store.products = store.products.filter(p => p.id !== id);
    this.saveStore(store);
    return true;
  }

  static getCuratedBoxes() {
    return this.getStore().curatedBoxes || [];
  }

  // Subscriptions
  static getSubscriptions(userId) {
    const store = this.getStore();
    let subs = store.subscriptions || [];
    if (userId) subs = subs.filter(s => s.userId === userId);
    return subs;
  }

  static createSubscription(subData) {
    const store = this.getStore();
    const now = new Date();
    const days = subData.frequencyDays || (subData.frequency === 'weekly' ? 7 : subData.frequency === 'biweekly' ? 14 : 30);
    const nextDate = new Date(now.getTime() + days * 86400000);

    const subId = 'SUB-' + Math.floor(1000 + Math.random() * 9000);
    const newSub = {
      id: subId,
      userId: subData.userId || 'usr-1',
      petName: subData.petName || 'My Pet',
      petSpecies: subData.petSpecies || 'dog',
      boxName: subData.boxName || `${subData.petName}'s Subscription Box`,
      frequency: subData.frequency || 'monthly',
      frequencyDays: days,
      status: 'active',
      createdAt: now.toISOString(),
      lastBilledDate: now.toISOString(),
      nextDeliveryDate: nextDate.toISOString(),
      subtotal: parseFloat(subData.subtotal) || 59.99,
      discountPercent: parseInt(subData.discountPercent, 10) || 15,
      recurringAmount: parseFloat(subData.recurringAmount) || 49.99,
      items: subData.items || [],
      shippingAddress: subData.shippingAddress || '742 Evergreen Terrace, Springfield, OR 97477',
      autoRenew: true,
      renewalCount: 1
    };

    store.subscriptions.unshift(newSub);

    // Initial Order
    const ordId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    const firstOrder = {
      id: ordId,
      subscriptionId: subId,
      userId: newSub.userId,
      date: now.toISOString(),
      total: newSub.recurringAmount,
      status: 'Processing',
      trackingNumber: 'TRK-' + Math.floor(10000000 + Math.random() * 90000000) + '-US',
      items: newSub.items.map(it => ({
        name: it.name,
        quantity: it.quantity || 1,
        price: it.unitPrice || 19.99
      })),
      timeline: [
        { step: 'Subscription Activated & Initial Order Placed', time: now.toLocaleString(), done: true },
        { step: 'Box Packed at Fulfillment Center', time: 'In Progress', done: false },
        { step: 'Dispatched via PawsExpress', time: 'Scheduled tomorrow', done: false },
        { step: 'Delivered', time: 'Estimated in 2-3 days', done: false }
      ]
    };

    store.orders.unshift(firstOrder);

    store.logs.unshift({
      id: 'LOG-' + Date.now(),
      timestamp: now.toISOString(),
      trigger: 'Customer Portal',
      message: `New subscription ${subId} activated for ${newSub.petName}. Order ${ordId} created.`,
      status: 'SUCCESS'
    });

    this.saveStore(store);
    return { success: true, subscription: newSub, order: firstOrder };
  }

  static updateSubscription(id, patch) {
    const store = this.getStore();
    const idx = store.subscriptions.findIndex(s => s.id === id);
    if (idx !== -1) {
      if (patch.action === 'skip') {
        const curDate = new Date(store.subscriptions[idx].nextDeliveryDate);
        const days = store.subscriptions[idx].frequencyDays || 30;
        store.subscriptions[idx].nextDeliveryDate = new Date(curDate.getTime() + days * 86400000).toISOString();
      } else {
        Object.assign(store.subscriptions[idx], patch);
      }
      this.saveStore(store);
      return store.subscriptions[idx];
    }
    return null;
  }

  static cancelSubscription(id) {
    const store = this.getStore();
    const idx = store.subscriptions.findIndex(s => s.id === id);
    if (idx !== -1) {
      store.subscriptions[idx].status = 'cancelled';
      store.subscriptions[idx].autoRenew = false;
      this.saveStore(store);
      return true;
    }
    return false;
  }

  // Orders
  static getOrders(userId) {
    const store = this.getStore();
    let orders = store.orders || [];
    if (userId) orders = orders.filter(o => o.userId === userId);
    return orders;
  }

  static updateOrder(id, patch) {
    const store = this.getStore();
    const idx = store.orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      Object.assign(store.orders[idx], patch);
      this.saveStore(store);
      return store.orders[idx];
    }
    return null;
  }

  // Automation Daemon
  static triggerAutomation(forceAll = false) {
    const store = this.getStore();
    const now = new Date();
    let renewedCount = 0;
    const newOrders = [];

    store.subscriptions.forEach(sub => {
      if (sub.status !== 'active') return;

      const nextDate = new Date(sub.nextDeliveryDate);
      if (forceAll || nextDate <= now) {
        renewedCount++;
        sub.renewalCount = (sub.renewalCount || 0) + 1;
        sub.lastBilledDate = now.toISOString();

        const days = sub.frequencyDays || 30;
        sub.nextDeliveryDate = new Date(now.getTime() + days * 86400000).toISOString();

        const ordId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
        const newOrder = {
          id: ordId,
          subscriptionId: sub.id,
          userId: sub.userId,
          date: now.toISOString(),
          total: sub.recurringAmount,
          status: 'Processing',
          trackingNumber: 'TRK-' + Math.floor(10000000 + Math.random() * 90000000) + '-US',
          items: sub.items.map(it => ({
            name: it.name,
            quantity: it.quantity || 1,
            price: it.unitPrice || 19.99
          })),
          timeline: [
            { step: 'Automated Subscription Billed', time: now.toLocaleString(), done: true },
            { step: 'Box Packed at Fulfillment Center', time: 'Estimated today', done: false },
            { step: 'Dispatched via PawsExpress', time: 'Estimated tomorrow', done: false },
            { step: 'Delivered', time: 'Estimated in 2-3 days', done: false }
          ]
        };

        store.orders.unshift(newOrder);
        newOrders.push(newOrder);
      }
    });

    const logEntry = {
      id: 'LOG-' + Date.now(),
      timestamp: now.toISOString(),
      trigger: forceAll ? 'Manual Test Simulator' : 'Automated Cron Scheduler',
      message: `Processed subscription engine. ${renewedCount} subscription(s) renewed and billed.`,
      status: 'SUCCESS',
      renewedCount
    };
    store.logs.unshift(logEntry);

    this.saveStore(store);
    return {
      success: true,
      message: `Automated engine executed! Renewed ${renewedCount} subscription(s).`,
      result: { renewedCount, newOrders, logEntry }
    };
  }

  // Analytics
  static getAnalytics() {
    const store = this.getStore();
    const subs = store.subscriptions || [];
    const orders = store.orders || [];

    const activeSubs = subs.filter(s => s.status === 'active');
    const pausedSubs = subs.filter(s => s.status === 'paused');
    const cancelledSubs = subs.filter(s => s.status === 'cancelled');

    const mrr = activeSubs.reduce((sum, s) => {
      let val = s.recurringAmount;
      if (s.frequency === 'weekly') val = s.recurringAmount * 4.3;
      else if (s.frequency === 'biweekly') val = s.recurringAmount * 2.15;
      return sum + val;
    }, 0);

    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const churnRate = subs.length > 0 ? ((cancelledSubs.length / subs.length) * 100).toFixed(1) : 0;

    return {
      totalSubscribers: subs.length,
      activeSubscriptions: activeSubs.length,
      pausedSubscriptions: pausedSubs.length,
      cancelledSubscriptions: cancelledSubs.length,
      mrr: parseFloat(mrr.toFixed(2)),
      totalRevenue: parseFloat(totalRevenue.toFixed(2)),
      churnRate: parseFloat(churnRate),
      totalOrders: orders.length,
      recentLogs: (store.logs || []).slice(0, 15)
    };
  }

  // Box Builder Items
  static getBoxItems() {
    try {
      const raw = localStorage.getItem('petjoy_builder_box_items');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static setBoxItems(items) {
    localStorage.setItem('petjoy_builder_box_items', JSON.stringify(items));
  }

  static clearBoxItems() {
    localStorage.removeItem('petjoy_builder_box_items');
  }

  // Auth User
  static getCurrentUser() {
    try {
      const saved = localStorage.getItem('petjoy_auth_user');
      if (saved) return JSON.parse(saved);
    } catch {}
    const defaultUser = {
      id: 'usr-1',
      email: 'user@petjoy.com',
      name: 'Sarah Miller',
      role: 'customer',
      address: '742 Evergreen Terrace, Springfield, OR 97477'
    };
    this.setCurrentUser(defaultUser);
    return defaultUser;
  }

  static setCurrentUser(user) {
    localStorage.setItem('petjoy_auth_user', JSON.stringify(user));
  }
}

// Global Toast helper
window.showToast = function (message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// ================= 3. NAVIGATION ROUTER =================
let currentView = 'home';

function navigate(viewName) {
  currentView = viewName;
  window.location.hash = '#' + viewName;

  // Hide all views
  document.querySelectorAll('.page-view').forEach(v => v.style.display = 'none');

  // Show target view
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.style.display = 'block';

  // Update navbar links
  document.querySelectorAll('.nav-link').forEach(link => {
    const isTarget = link.getAttribute('data-view') === viewName;
    link.classList.toggle('active', isTarget);
  });

  // Call View Init functions
  if (viewName === 'home') loadHomeCuratedBoxes();
  if (viewName === 'catalog') { loadCatalogProducts(); updateBoxBar(); }
  if (viewName === 'builder') initBoxBuilder();
  if (viewName === 'subscriptions') loadCustomerDashboard();
  if (viewName === 'admin') loadAdminData();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hash change listener
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  if (hash !== currentView) navigate(hash);
});

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  PetStorage.getStore(); // Ensure store exists
  syncUserBadge();

  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash);

  // Background cron scheduler tick (every 60s)
  setInterval(() => {
    try {
      const res = PetStorage.triggerAutomation(false);
      if (res && res.result && res.result.renewedCount > 0) {
        showToast(`⚡ Automated Cron: Renewed ${res.result.renewedCount} scheduled subscription(s)!`, 'info');
        if (currentView === 'subscriptions') loadCustomerDashboard();
        if (currentView === 'admin') loadAdminData();
      }
    } catch (e) {
      console.warn('Background cron tick:', e);
    }
  }, 60000);
});

function syncUserBadge() {
  const user = PetStorage.getCurrentUser();
  const userNameEl = document.getElementById('navUserName');
  const userBadgeEl = document.getElementById('userNavSection');

  if (userNameEl && user) userNameEl.textContent = user.name || user.email;

  if (userBadgeEl && user) {
    if (user.role === 'admin') {
      userBadgeEl.style.background = 'var(--amber-light)';
      userBadgeEl.style.color = '#b45309';
      userBadgeEl.querySelector('span:first-child').textContent = '🛡️';
    } else {
      userBadgeEl.style.background = 'var(--slate-100)';
      userBadgeEl.style.color = 'var(--slate-800)';
      userBadgeEl.querySelector('span:first-child').textContent = '👤';
    }
  }
}

// ================= 4. HOMEPAGE LOGIC =================
function loadHomeCuratedBoxes() {
  const boxes = PetStorage.getCuratedBoxes();
  const container = document.getElementById('curatedBoxesGrid');
  if (container && boxes) {
    container.innerHTML = boxes.map(box => `
      <div class="box-card ${box.tag === 'Most Popular' ? 'featured' : ''}">
        ${box.tag ? `<div class="box-tag">${box.tag}</div>` : ''}
        <div class="box-header">
          <span class="badge ${box.petType === 'dog' ? 'badge-primary' : 'badge-accent'}">
            ${box.petType === 'dog' ? '🐶 Dog Box' : '🐱 Cat Box'}
          </span>
          <h3 style="margin-top: 0.5rem; font-size: 1.35rem;">${box.name}</h3>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.3rem;">${box.description}</p>
          
          <div class="box-price-wrap">
            <span class="box-price">$${box.subPrice.toFixed(2)}</span>
            <span class="box-regular-price">$${box.regularPrice.toFixed(2)}</span>
            <span class="badge badge-emerald">Save ${box.discountPercent}%</span>
          </div>
        </div>

        <ul class="box-features-list">
          <li><span>✅</span> Balanced Food + Treats pack</li>
          <li><span>✅</span> 2 Heavy-duty / Interactive toys</li>
          <li><span>✅</span> Essential pet grooming accessory</li>
          <li><span>✅</span> Free automated shipping schedule</li>
        </ul>

        <div style="padding: 1.5rem; padding-top: 0;">
          <button onclick="subscribeToCuratedBox('${box.id}')" class="btn btn-primary" style="width: 100%;">
            Subscribe & Save 🐾
          </button>
        </div>
      </div>
    `).join('');
  }
}

function subscribeToCuratedBox(boxId) {
  const boxes = PetStorage.getCuratedBoxes();
  const box = boxes.find(b => b.id === boxId);
  if (!box) return;

  const user = PetStorage.getCurrentUser();
  const res = PetStorage.createSubscription({
    userId: user ? user.id : 'usr-1',
    petName: box.petType === 'dog' ? 'Max' : 'Luna',
    petSpecies: box.petType,
    boxName: box.name,
    frequency: 'monthly',
    frequencyDays: 30,
    subtotal: box.regularPrice,
    discountPercent: box.discountPercent,
    recurringAmount: box.subPrice,
    items: [
      { name: `${box.name} - Core Nutrition Pack`, category: 'food', unitPrice: box.subPrice * 0.5, quantity: 1 },
      { name: `${box.name} - Playtime Toy Assortment`, category: 'toys', unitPrice: box.subPrice * 0.3, quantity: 1 },
      { name: `${box.name} - Care & Gear Accessory`, category: 'accessories', unitPrice: box.subPrice * 0.2, quantity: 1 }
    ]
  });

  if (res && res.success) {
    showToast(`🎉 Subscribed to ${box.name}! Next delivery scheduled.`, 'success');
    setTimeout(() => navigate('subscriptions'), 800);
  }
}

// ================= 5. CATALOG LOGIC =================
let catalogPet = 'all';
let catalogCategory = 'all';
let catalogSearch = '';
let selectedModalProduct = null;
let selectedModalFreq = 'weekly';
let selectedModalDiscount = 15;

function loadCatalogProducts() {
  const filters = {};
  if (catalogPet !== 'all') filters.petType = catalogPet;
  if (catalogCategory !== 'all') filters.category = catalogCategory;
  if (catalogSearch.trim()) filters.q = catalogSearch.trim();

  const products = PetStorage.getProducts(filters);
  const container = document.getElementById('productsGrid');
  const noFound = document.getElementById('noProductsFound');

  if (!products || products.length === 0) {
    container.innerHTML = '';
    noFound.style.display = 'block';
    return;
  }

  noFound.style.display = 'none';
  const boxItems = PetStorage.getBoxItems();

  container.innerHTML = products.map(prod => {
    const isAdded = boxItems.some(i => i.id === prod.id);
    const subPrice = (prod.price * 0.85).toFixed(2);

    return `
      <div class="product-card" id="card-${prod.id}">
        <div class="product-thumb">
          <img src="${prod.image}" alt="${prod.name}" class="product-img">
          <span class="product-pet-badge">
            ${prod.petType === 'dog' ? '🐶 Dog' : '🐱 Cat'}
          </span>
          <span class="product-category-badge">
            ${prod.category === 'food' ? '🍖 Food' : prod.category === 'toys' ? '🧸 Toy' : '🦺 Gear'}
          </span>
        </div>

        <div class="product-body">
          <h3 class="product-title">${prod.name}</h3>
          <p class="product-desc">${prod.description}</p>
          
          <div class="product-rating">
            <span>⭐ ${prod.rating}</span>
            <span style="color: var(--slate-400); font-size: 0.8rem;">(${prod.reviewsCount} reviews)</span>
          </div>

          <div class="product-footer">
            <div>
              <div class="product-price">$${prod.price.toFixed(2)}</div>
              <span class="sub-discount-hint">or $${subPrice}/mo (Save 15%)</span>
            </div>

            <div style="display: flex; gap: 0.4rem;">
              <button onclick="toggleBoxItem('${prod.id}')" id="btn-box-${prod.id}" class="btn ${isAdded ? 'btn-primary' : 'btn-outline'} btn-sm">
                ${isAdded ? '✓ Added' : '+ Box'}
              </button>
              <button onclick="openQuickSubscribe('${prod.id}')" class="btn btn-accent btn-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setPetFilter(pet) {
  catalogPet = pet;
  document.querySelectorAll('#filterPetGroup .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-val') === pet);
  });
  loadCatalogProducts();
}

function setCategoryFilter(category) {
  catalogCategory = category;
  document.querySelectorAll('#filterCatGroup .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-val') === category);
  });
  loadCatalogProducts();
}

function onSearchChange() {
  catalogSearch = document.getElementById('searchInput').value;
  loadCatalogProducts();
}

function resetFilters() {
  catalogPet = 'all';
  catalogCategory = 'all';
  catalogSearch = '';
  document.getElementById('searchInput').value = '';
  setPetFilter('all');
  setCategoryFilter('all');
}

function toggleBoxItem(prodId) {
  const prod = PetStorage.getProductById(prodId);
  if (!prod) return;

  let items = PetStorage.getBoxItems();
  const exists = items.some(i => i.id === prodId);

  if (exists) {
    items = items.filter(i => i.id !== prodId);
    showToast(`Removed "${prod.name}" from custom box.`);
  } else {
    items.push({
      id: prod.id,
      name: prod.name,
      category: prod.category,
      petType: prod.petType,
      unitPrice: prod.price,
      quantity: 1,
      image: prod.image
    });
    showToast(`Added "${prod.name}" to custom box! 🎁`, 'success');
  }

  PetStorage.setBoxItems(items);

  const btn = document.getElementById(`btn-box-${prodId}`);
  if (btn) {
    if (!exists) {
      btn.className = 'btn btn-primary btn-sm';
      btn.textContent = '✓ Added';
    } else {
      btn.className = 'btn btn-outline btn-sm';
      btn.textContent = '+ Box';
    }
  }

  updateBoxBar();
}

function updateBoxBar() {
  const items = PetStorage.getBoxItems();
  const bar = document.getElementById('floatingBoxBar');
  const countEl = document.getElementById('boxItemCount');
  if (bar && countEl) {
    if (items.length > 0) {
      bar.style.display = 'flex';
      countEl.textContent = `${items.length} item(s) selected`;
    } else {
      bar.style.display = 'none';
    }
  }
}

function openQuickSubscribe(prodId) {
  const prod = PetStorage.getProductById(prodId);
  if (!prod) return;

  selectedModalProduct = prod;
  selectedModalFreq = 'weekly';
  selectedModalDiscount = 15;

  document.getElementById('modalProductTitle').textContent = `Quick Subscribe: ${prod.name}`;
  document.getElementById('modalProductName').textContent = prod.name;
  document.getElementById('modalProductImg').src = prod.image;
  document.getElementById('modalRegPrice').textContent = `$${prod.price.toFixed(2)}`;
  
  updateModalPrice();
  document.getElementById('quickSubModal').classList.add('active');
}

function closeSubModal() {
  document.getElementById('quickSubModal').classList.remove('active');
}

function selectModalFreq(element, freq, discount) {
  document.querySelectorAll('#quickSubModal .freq-card').forEach(c => c.classList.remove('selected'));
  element.classList.add('selected');
  selectedModalFreq = freq;
  selectedModalDiscount = discount;
  updateModalPrice();
}

function updateModalPrice() {
  if (!selectedModalProduct) return;
  const discounted = selectedModalProduct.price * (1 - selectedModalDiscount / 100);
  document.getElementById('modalSubPrice').textContent = `$${discounted.toFixed(2)}`;
  document.getElementById('modalDiscountBadge').textContent = `Save ${selectedModalDiscount}%`;
}

function confirmQuickSubscription() {
  if (!selectedModalProduct) return;

  const petName = document.getElementById('modalPetName').value || 'My Pet';
  const address = document.getElementById('modalAddress').value || '742 Evergreen Terrace, Springfield, OR 97477';
  const user = PetStorage.getCurrentUser();
  const recurring = selectedModalProduct.price * (1 - selectedModalDiscount / 100);

  const res = PetStorage.createSubscription({
    userId: user ? user.id : 'usr-1',
    petName: petName,
    petSpecies: selectedModalProduct.petType,
    boxName: `${petName}'s ${selectedModalProduct.name} Subscription`,
    frequency: selectedModalFreq,
    frequencyDays: selectedModalFreq === 'weekly' ? 7 : selectedModalFreq === 'biweekly' ? 14 : 30,
    subtotal: selectedModalProduct.price,
    discountPercent: selectedModalDiscount,
    recurringAmount: parseFloat(recurring.toFixed(2)),
    shippingAddress: address,
    items: [
      {
        productId: selectedModalProduct.id,
        name: selectedModalProduct.name,
        category: selectedModalProduct.category,
        quantity: 1,
        unitPrice: selectedModalProduct.price
      }
    ]
  });

  closeSubModal();

  if (res && res.success) {
    showToast(`🎉 Subscription created! First automated delivery in progress.`, 'success');
    setTimeout(() => navigate('subscriptions'), 800);
  }
}

// ================= 6. BOX BUILDER WIZARD LOGIC =================
let wizardState = {
  currentStep: 1,
  petSpecies: 'dog',
  petName: 'Max',
  breed: 'Golden Retriever',
  age: 3,
  diet: 'Standard',
  selectedItems: [],
  frequency: 'weekly',
  frequencyDays: 7,
  discountPercent: 15,
  shippingAddress: '742 Evergreen Terrace, Springfield, OR 97477'
};

function initBoxBuilder() {
  const savedItems = PetStorage.getBoxItems();
  if (savedItems && savedItems.length > 0) {
    wizardState.selectedItems = savedItems;
  } else if (wizardState.selectedItems.length === 0) {
    const prods = PetStorage.getProducts({ petType: wizardState.petSpecies });
    const f = prods.find(p => p.category === 'food');
    const t = prods.find(p => p.category === 'toys');
    const a = prods.find(p => p.category === 'accessories');
    if (f) addItemToState(f);
    if (t) addItemToState(t);
    if (a) addItemToState(a);
  }

  renderSelectionLists();
  updateSummaryCard();
}

function addItemToState(prod) {
  if (!wizardState.selectedItems.some(i => i.id === prod.id)) {
    wizardState.selectedItems.push({
      id: prod.id,
      name: prod.name,
      category: prod.category,
      unitPrice: prod.price,
      quantity: 1,
      image: prod.image
    });
  }
}

function goToStep(stepNumber) {
  if (stepNumber > 1) {
    const nameInput = document.getElementById('builderPetName').value.trim();
    if (!nameInput) {
      showToast("Please enter your pet's name.", 'error');
      return;
    }
    wizardState.petName = nameInput;
    wizardState.breed = document.getElementById('builderBreed').value.trim() || 'Mixed';
    wizardState.age = parseInt(document.getElementById('builderAge').value, 10) || 2;
    wizardState.diet = document.getElementById('builderDiet').value;
  }

  if (stepNumber > 2 && wizardState.selectedItems.length === 0) {
    showToast('Please select at least 1 item for your subscription box.', 'error');
    return;
  }

  for (let i = 1; i <= 4; i++) {
    const container = document.getElementById(`step${i}Container`);
    if (container) container.style.display = (i === stepNumber) ? 'block' : 'none';

    const pstep = document.getElementById(`pstep-${i}`);
    if (pstep) {
      pstep.classList.remove('active', 'completed');
      if (i < stepNumber) pstep.classList.add('completed');
      if (i === stepNumber) pstep.classList.add('active');
    }
  }

  wizardState.currentStep = stepNumber;
  if (stepNumber === 4) populateStep4Review();

  updateSummaryCard();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function onPetTypeChange(species) {
  wizardState.petSpecies = species;
  document.getElementById('sidePetSpeciesIcon').textContent = species === 'dog' ? '🐶' : '🐱';

  const lblDog = document.getElementById('lblDog');
  const lblCat = document.getElementById('lblCat');
  if (lblDog && lblCat) {
    if (species === 'dog') {
      lblDog.style.borderColor = 'var(--primary)';
      lblDog.style.background = 'var(--primary-light)';
      lblCat.style.borderColor = 'var(--slate-300)';
      lblCat.style.background = 'transparent';
      document.getElementById('builderPetName').value = 'Max';
      document.getElementById('builderBreed').value = 'Golden Retriever';
    } else {
      lblCat.style.borderColor = 'var(--primary)';
      lblCat.style.background = 'var(--primary-light)';
      lblDog.style.borderColor = 'var(--slate-300)';
      lblDog.style.background = 'transparent';
      document.getElementById('builderPetName').value = 'Luna';
      document.getElementById('builderBreed').value = 'British Shorthair';
    }
  }

  wizardState.selectedItems = [];
  const prods = PetStorage.getProducts({ petType: species });
  const f = prods.find(p => p.category === 'food');
  const t = prods.find(p => p.category === 'toys');
  const a = prods.find(p => p.category === 'accessories');
  if (f) addItemToState(f);
  if (t) addItemToState(t);
  if (a) addItemToState(a);

  renderSelectionLists();
  updateSummaryCard();
}

function renderSelectionLists() {
  const prods = PetStorage.getProducts({ petType: wizardState.petSpecies });
  const foodContainer = document.getElementById('foodSelectionList');
  const toysContainer = document.getElementById('toysSelectionList');
  const accContainer = document.getElementById('accessoriesSelectionList');

  foodContainer.innerHTML = renderItemCards(prods.filter(p => p.category === 'food'));
  toysContainer.innerHTML = renderItemCards(prods.filter(p => p.category === 'toys'));
  accContainer.innerHTML = renderItemCards(prods.filter(p => p.category === 'accessories'));

  updateSelectedCountBadge();
}

function renderItemCards(productList) {
  return productList.map(prod => {
    const isSelected = wizardState.selectedItems.some(i => i.id === prod.id);
    return `
      <div class="item-select-card ${isSelected ? 'selected' : ''}" id="select-card-${prod.id}" onclick="toggleSelectItem('${prod.id}')">
        <img src="${prod.image}" alt="${prod.name}">
        <div style="flex: 1;">
          <div style="font-weight: 700; font-size: 0.95rem;">${prod.name}</div>
          <div class="text-muted" style="font-size: 0.8rem;">${prod.features ? prod.features[0] : 'Premium quality'}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; font-size: 1.05rem;">$${prod.price.toFixed(2)}</div>
          <span class="badge ${isSelected ? 'badge-primary' : 'badge-slate'}" id="badge-sel-${prod.id}">
            ${isSelected ? '✓ Included' : '+ Select'}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function toggleSelectItem(prodId) {
  const prod = PetStorage.getProductById(prodId);
  if (!prod) return;

  const idx = wizardState.selectedItems.findIndex(i => i.id === prodId);
  const card = document.getElementById(`select-card-${prodId}`);
  const badge = document.getElementById(`badge-sel-${prodId}`);

  if (idx !== -1) {
    wizardState.selectedItems.splice(idx, 1);
    if (card) card.classList.remove('selected');
    if (badge) { badge.className = 'badge'; badge.textContent = '+ Select'; }
    showToast(`Removed "${prod.name}"`);
  } else {
    wizardState.selectedItems.push({
      id: prod.id,
      name: prod.name,
      category: prod.category,
      unitPrice: prod.price,
      quantity: 1,
      image: prod.image
    });
    if (card) card.classList.add('selected');
    if (badge) { badge.className = 'badge badge-primary'; badge.textContent = '✓ Included'; }
    showToast(`Added "${prod.name}" to box!`, 'success');
  }

  PetStorage.setBoxItems(wizardState.selectedItems);
  updateSelectedCountBadge();
  updateSummaryCard();
}

function updateSelectedCountBadge() {
  const badge = document.getElementById('selectedCountBadge');
  if (badge) badge.textContent = `${wizardState.selectedItems.length} items in box`;
}

function selectFrequency(element, freq, discount) {
  document.querySelectorAll('#step3Container .freq-card').forEach(c => c.classList.remove('selected'));
  element.classList.add('selected');

  wizardState.frequency = freq;
  wizardState.frequencyDays = freq === 'weekly' ? 7 : freq === 'biweekly' ? 14 : 30;
  wizardState.discountPercent = discount;

  updateSummaryCard();
}

function updateSummaryCard() {
  const name = wizardState.petName || 'My Pet';
  document.getElementById('sideBoxName').textContent = `${name}'s Custom Box`;
  document.getElementById('sidePetMeta').textContent = 
    `${wizardState.petSpecies === 'dog' ? 'Dog' : 'Cat'} • ${wizardState.age} yrs • ${wizardState.breed}`;

  const sideList = document.getElementById('sideItemsList');
  if (sideList) {
    if (wizardState.selectedItems.length === 0) {
      sideList.innerHTML = `<p class="text-muted" style="font-size: 0.85rem; font-style: italic;">No items added yet. Click items in Step 2 to add.</p>`;
    } else {
      sideList.innerHTML = wizardState.selectedItems.map(it => `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 190px;">
            ${it.category === 'food' ? '🍖' : it.category === 'toys' ? '🧸' : '🦺'} ${it.name}
          </span>
          <span style="font-weight: 600;">$${it.unitPrice.toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  const subtotal = wizardState.selectedItems.reduce((sum, item) => sum + (item.unitPrice * (item.quantity || 1)), 0);
  const discountVal = subtotal * (wizardState.discountPercent / 100);
  const taxable = subtotal - discountVal;
  const tax = taxable * 0.05;
  const recurringTotal = taxable + tax;

  wizardState.calculatedSubtotal = subtotal;
  wizardState.calculatedDiscount = discountVal;
  wizardState.calculatedRecurring = recurringTotal;

  document.getElementById('sideSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('sideDiscount').textContent = `-$${discountVal.toFixed(2)} (${wizardState.discountPercent}%)`;
  document.getElementById('sideTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('sideRecurringTotal').textContent = `$${recurringTotal.toFixed(2)}`;

  const freqText = wizardState.frequency === 'weekly' ? '7 days' : wizardState.frequency === 'biweekly' ? '14 days' : '30 days';
  document.getElementById('sideRenewalNotice').textContent = `Auto-bills every ${freqText}. Cancel or pause anytime.`;
}

function populateStep4Review() {
  document.getElementById('confirmPetSummary').textContent = 
    `${wizardState.petName} (${wizardState.petSpecies === 'dog' ? 'Dog' : 'Cat'}, ${wizardState.age} yrs - ${wizardState.breed})`;

  const freqName = wizardState.frequency === 'weekly' ? 'Weekly (Every 7 Days)' : 
                   wizardState.frequency === 'biweekly' ? 'Bi-Weekly (Every 14 Days)' : 'Monthly (Every 30 Days)';
  document.getElementById('confirmScheduleSummary').textContent = freqName;

  const address = document.getElementById('builderShippingAddress').value;
  wizardState.shippingAddress = address;
  document.getElementById('confirmAddressSummary').textContent = address;

  const listContainer = document.getElementById('confirmItemsList');
  listContainer.innerHTML = wizardState.selectedItems.map(it => `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--slate-200);">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <img src="${it.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: var(--radius-sm);" alt="item">
        <div>
          <div style="font-weight: 700; font-size: 0.95rem;">${it.name}</div>
          <span class="badge ${it.category === 'food' ? 'badge-primary' : it.category === 'toys' ? 'badge-accent' : 'badge-emerald'}">
            ${it.category}
          </span>
        </div>
      </div>
      <div style="font-weight: 700;">$${it.unitPrice.toFixed(2)}</div>
    </div>
  `).join('');
}

function activateCustomSubscription() {
  const user = PetStorage.getCurrentUser();
  const subData = {
    userId: user ? user.id : 'usr-1',
    petName: wizardState.petName,
    petSpecies: wizardState.petSpecies,
    boxName: `${wizardState.petName}'s Custom Subscription Box`,
    frequency: wizardState.frequency,
    frequencyDays: wizardState.frequencyDays,
    subtotal: wizardState.calculatedSubtotal,
    discountPercent: wizardState.discountPercent,
    recurringAmount: parseFloat(wizardState.calculatedRecurring.toFixed(2)),
    shippingAddress: wizardState.shippingAddress,
    items: wizardState.selectedItems.map(it => ({
      productId: it.id,
      name: it.name,
      category: it.category,
      quantity: it.quantity || 1,
      unitPrice: it.unitPrice
    }))
  };

  const res = PetStorage.createSubscription(subData);
  if (res && res.success) {
    PetStorage.clearBoxItems();
    showToast(`🎉 Subscription created for ${wizardState.petName}! Redirecting...`, 'success');
    setTimeout(() => navigate('subscriptions'), 800);
  }
}

// ================= 7. CUSTOMER PORTAL LOGIC =================
let activeEditingSubId = null;
let newSelectedFreq = 'monthly';
let newSelectedDiscount = 5;

function loadCustomerDashboard() {
  const user = PetStorage.getCurrentUser();
  const userId = user ? user.id : 'usr-1';

  const greeting = document.getElementById('portalGreeting');
  if (greeting && user) {
    greeting.textContent = `${user.name ? user.name.split(' ')[0] : 'My'}'s Recurring Pet Subscriptions`;
  }

  const subs = PetStorage.getSubscriptions(userId);
  const orders = PetStorage.getOrders(userId);

  renderSubscriptions(subs || []);
  renderOrders(orders || []);
}

function renderSubscriptions(subs) {
  const container = document.getElementById('subscriptionsContainer');
  const countBadge = document.getElementById('subsCount');
  const emptyNotice = document.getElementById('noSubscriptionsNotice');

  if (countBadge) countBadge.textContent = subs.length;

  if (subs.length === 0) {
    container.innerHTML = '';
    emptyNotice.style.display = 'block';
    return;
  }

  emptyNotice.style.display = 'none';

  container.innerHTML = subs.map(sub => {
    const nextDate = new Date(sub.nextDeliveryDate);
    const dateFormatted = isNaN(nextDate.getTime()) ? 'In 7 days' : nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    let statusClass = 'badge-emerald';
    let statusIcon = '●';
    if (sub.status === 'paused') { statusClass = 'badge-amber'; statusIcon = '⏸'; }
    else if (sub.status === 'cancelled') { statusClass = 'badge-rose'; statusIcon = '✕'; }

    const freqText = sub.frequency === 'weekly' ? 'Weekly (7 Days)' : 
                     sub.frequency === 'biweekly' ? 'Bi-Weekly (14 Days)' : 'Monthly (30 Days)';

    return `
      <div class="sub-card">
        <div class="sub-header">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
              <span style="font-size: 1.3rem;">${sub.petSpecies === 'dog' ? '🐶' : '🐱'}</span>
              <h3 style="font-size: 1.25rem;">${sub.boxName}</h3>
              <span class="badge ${statusClass}">${statusIcon} ${sub.status.toUpperCase()}</span>
            </div>
            <p class="text-muted" style="font-size: 0.85rem;">
              For <strong>${sub.petName}</strong> • Renews automatically on <strong>${freqText}</strong> schedule
            </p>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary);">
              $${sub.recurringAmount.toFixed(2)} <span style="font-size: 0.85rem; font-weight: normal; color: var(--slate-600);">/ cycle</span>
            </div>
            <span class="badge badge-emerald">Save ${sub.discountPercent}% recurring</span>
          </div>
        </div>

        <div class="sub-next-delivery">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.5rem;">📅</span>
            <div>
              <div style="font-size: 0.85rem; color: var(--slate-600); font-weight: 600;">Next Automated Renewal & Dispatch:</div>
              <strong style="font-size: 1.05rem; color: var(--dark);">${sub.status === 'paused' ? 'Paused (No upcoming charges)' : dateFormatted}</strong>
            </div>
          </div>
          <div class="text-muted" style="font-size: 0.85rem;">
            Ship to: <strong>${sub.shippingAddress || '742 Evergreen Terrace'}</strong>
          </div>
        </div>

        <h4 style="font-size: 0.95rem; margin-bottom: 0.6rem; color: var(--slate-700);">Contents in this Box (${sub.items.length} items):</h4>
        <div class="items-thumbnail-list">
          ${sub.items.map(it => `
            <div class="item-thumb-card">
              <div style="font-size: 1.6rem; margin-bottom: 0.2rem;">
                ${it.category === 'food' ? '🍖' : it.category === 'toys' ? '🧸' : '🦺'}
              </div>
              <div class="item-thumb-title" title="${it.name}">${it.name}</div>
              <div style="font-size: 0.75rem; color: var(--slate-500);">$${(it.unitPrice || 19.99).toFixed(2)}</div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--slate-100); flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${sub.status === 'active' ? `
              <button onclick="togglePauseSubscription('${sub.id}', 'pause')" class="btn btn-outline btn-sm">
                ⏸️ Pause Subscription
              </button>
              <button onclick="skipNextDelivery('${sub.id}')" class="btn btn-outline btn-sm">
                ⏭️ Skip Next Cycle
              </button>
            ` : sub.status === 'paused' ? `
              <button onclick="togglePauseSubscription('${sub.id}', 'resume')" class="btn btn-primary btn-sm">
                ▶️ Resume Subscription
              </button>
            ` : ''}

            ${sub.status !== 'cancelled' ? `
              <button onclick="openEditFreqModal('${sub.id}', '${sub.frequency}')" class="btn btn-outline btn-sm">
                🗓️ Change Frequency
              </button>
            ` : ''}
          </div>

          <div>
            ${sub.status !== 'cancelled' ? `
              <button onclick="cancelSubscription('${sub.id}')" class="btn btn-outline btn-sm" style="color: var(--rose); border-color: var(--rose-light);">
                Cancel Box
              </button>
            ` : '<span class="text-muted" style="font-size: 0.85rem;">Cancelled</span>'}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderOrders(orders) {
  const container = document.getElementById('ordersContainer');
  const countBadge = document.getElementById('ordersCount');
  if (countBadge) countBadge.textContent = orders.length;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; background: var(--white); padding: 3rem; border-radius: var(--radius-lg); border: 1px dashed var(--slate-300);">
        <h4>No order history yet</h4>
        <p class="text-muted">When your subscriptions renew automatically, fulfillment orders appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => {
    const ordDate = new Date(ord.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeline = ord.timeline || [
      { step: 'Subscription Billed', time: ordDate, done: true },
      { step: 'Box Packed', time: 'In Progress', done: ord.status !== 'Processing' },
      { step: 'Dispatched via PawsExpress', time: ord.status === 'Delivered' ? 'Completed' : 'Pending', done: ord.status === 'Delivered' },
      { step: 'Delivered', time: ord.status === 'Delivered' ? 'Completed' : 'Pending', done: ord.status === 'Delivered' }
    ];

    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <span style="font-weight: 700; font-size: 1.1rem;">Order #${ord.id}</span>
            <span class="text-muted" style="margin-left: 0.5rem; font-size: 0.85rem;">Placed on ${ordDate}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span class="badge ${ord.status === 'Delivered' ? 'badge-emerald' : ord.status === 'Out for Delivery' ? 'badge-primary' : 'badge-amber'}">
              🚚 ${ord.status}
            </span>
            <button onclick="openInvoiceModal('${ord.id}')" class="btn btn-outline btn-sm">
              📄 View Invoice
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem;">
          <div class="text-muted" style="font-size: 0.9rem;">
            Tracking Number: <strong style="color: var(--dark);">${ord.trackingNumber || 'TRK-98218-US'}</strong>
          </div>
          <div style="font-weight: 800; font-size: 1.15rem; color: var(--dark);">
            Total: $${ord.total.toFixed(2)}
          </div>
        </div>

        <div class="timeline-track">
          ${timeline.map((step, idx) => `
            <div class="timeline-step ${step.done ? 'done' : ''}">
              <div class="timeline-dot">${step.done ? '✓' : idx + 1}</div>
              <div class="timeline-label">${step.step}</div>
              <div style="font-size: 0.7rem; color: var(--slate-500);">${step.time || ''}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function switchDashboardTab(tab) {
  const subsContent = document.getElementById('subsTabContent');
  const ordersContent = document.getElementById('ordersTabContent');
  const tabBtnSubs = document.getElementById('tabBtnSubs');
  const tabBtnOrders = document.getElementById('tabBtnOrders');

  if (tab === 'subs') {
    subsContent.style.display = 'block';
    ordersContent.style.display = 'none';
    tabBtnSubs.style.borderBottom = '3px solid var(--primary)';
    tabBtnSubs.style.color = 'var(--primary)';
    tabBtnOrders.style.borderBottom = 'none';
    tabBtnOrders.style.color = 'var(--slate-600)';
  } else {
    subsContent.style.display = 'none';
    ordersContent.style.display = 'block';
    tabBtnOrders.style.borderBottom = '3px solid var(--primary)';
    tabBtnOrders.style.color = 'var(--primary)';
    tabBtnSubs.style.borderBottom = 'none';
    tabBtnSubs.style.color = 'var(--slate-600)';
  }
}

function togglePauseSubscription(subId, action) {
  const newStatus = action === 'pause' ? 'paused' : 'active';
  const res = PetStorage.updateSubscription(subId, { status: newStatus });
  if (res) {
    showToast(action === 'pause' ? '⏸️ Subscription paused.' : '▶️ Subscription resumed!', 'success');
    loadCustomerDashboard();
  }
}

function skipNextDelivery(subId) {
  const res = PetStorage.updateSubscription(subId, { action: 'skip' });
  if (res) {
    showToast('⏭️ Next scheduled delivery cycle skipped by 1 interval.', 'success');
    loadCustomerDashboard();
  }
}

function cancelSubscription(subId) {
  if (confirm('Are you sure you want to cancel this recurring pet box?')) {
    const res = PetStorage.cancelSubscription(subId);
    if (res) {
      showToast('Subscription cancelled.', 'info');
      loadCustomerDashboard();
    }
  }
}

function openEditFreqModal(subId, curFreq) {
  activeEditingSubId = subId;
  newSelectedFreq = curFreq;
  setEditFreq(curFreq, curFreq === 'weekly' ? 15 : curFreq === 'biweekly' ? 10 : 5);
  document.getElementById('editFreqModal').classList.add('active');
}

function closeFreqModal() {
  document.getElementById('editFreqModal').classList.remove('active');
}

function setEditFreq(freq, discount) {
  newSelectedFreq = freq;
  newSelectedDiscount = discount;

  document.querySelectorAll('#editFreqModal .freq-card').forEach(c => c.classList.remove('selected'));
  if (freq === 'weekly') document.getElementById('freqOptionWeekly').classList.add('selected');
  if (freq === 'biweekly') document.getElementById('freqOptionBiweekly').classList.add('selected');
  if (freq === 'monthly') document.getElementById('freqOptionMonthly').classList.add('selected');
}

function confirmFrequencyUpdate() {
  if (!activeEditingSubId) return;

  const days = newSelectedFreq === 'weekly' ? 7 : newSelectedFreq === 'biweekly' ? 14 : 30;
  const res = PetStorage.updateSubscription(activeEditingSubId, {
    frequency: newSelectedFreq,
    frequencyDays: days,
    discountPercent: newSelectedDiscount
  });

  closeFreqModal();

  if (res) {
    showToast('Delivery frequency schedule updated successfully!', 'success');
    loadCustomerDashboard();
  }
}

function triggerRenewalSimulation() {
  showToast('⚡ Running Automated Subscription Billing & Renewal Engine...', 'info');
  const res = PetStorage.triggerAutomation(true);
  if (res && res.success) {
    showToast(`🎉 Success: ${res.message}`, 'success');
    loadCustomerDashboard();
    switchDashboardTab('orders');
  }
}

function openInvoiceModal(orderId) {
  const user = PetStorage.getCurrentUser();
  const orders = PetStorage.getOrders(user ? user.id : 'usr-1');
  const ord = orders.find(o => o.id === orderId);
  if (!ord) return;

  const modalBody = document.getElementById('invoiceModalContent');
  const items = ord.items || [];
  const subtotal = items.reduce((s, it) => s + ((it.price || 19.99) * (it.quantity || 1)), 0);
  const tax = subtotal * 0.05;

  modalBody.innerHTML = `
    <div style="display: flex; justify-content: space-between; border-bottom: 2px solid var(--slate-200); padding-bottom: 1.25rem; margin-bottom: 1.25rem;">
      <div>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--dark);">🐾 PetJoy Inc.</div>
        <div class="text-muted" style="font-size: 0.85rem;">Automated Pet Subscription Engine</div>
        <div class="text-muted" style="font-size: 0.85rem;">Support: hello@petjoy.com</div>
      </div>
      <div style="text-align: right;">
        <h3 style="color: var(--primary);">INVOICE</h3>
        <div style="font-size: 0.9rem; font-weight: 700;">#${ord.id}</div>
        <div class="text-muted" style="font-size: 0.8rem;">Date: ${new Date(ord.date).toLocaleDateString()}</div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 0.9rem;">
      <div>
        <strong>Billed To:</strong><br>
        ${user ? user.name : 'Sarah Miller'}<br>
        742 Evergreen Terrace<br>
        Springfield, OR 97477
      </div>
      <div style="text-align: right;">
        <strong>Subscription ID:</strong> ${ord.subscriptionId || 'SUB-1001'}<br>
        <strong>Payment Method:</strong> Visa ending in 4242<br>
        <strong>Status:</strong> <span class="badge badge-emerald">PAID</span>
      </div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem;">
      <thead>
        <tr style="background: var(--slate-100); text-align: left;">
          <th style="padding: 0.6rem;">Item Description</th>
          <th style="padding: 0.6rem; text-align: center;">Qty</th>
          <th style="padding: 0.6rem; text-align: right;">Unit Price</th>
          <th style="padding: 0.6rem; text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(it => `
          <tr style="border-bottom: 1px solid var(--slate-200);">
            <td style="padding: 0.6rem;">${it.name}</td>
            <td style="padding: 0.6rem; text-align: center;">${it.quantity || 1}</td>
            <td style="padding: 0.6rem; text-align: right;">$${(it.price || 19.99).toFixed(2)}</td>
            <td style="padding: 0.6rem; text-align: right;">$${((it.price || 19.99) * (it.quantity || 1)).toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="margin-left: auto; max-width: 260px; font-size: 0.9rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
        <span>Subtotal:</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem; color: var(--emerald);">
        <span>Subscription Savings:</span>
        <span>-$${Math.max(0, subtotal - ord.total + tax).toFixed(2)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
        <span>Sales Tax (5%):</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.15rem; border-top: 2px solid var(--slate-200); padding-top: 0.5rem; margin-top: 0.5rem;">
        <span>Total Paid:</span>
        <span style="color: var(--primary);">$${ord.total.toFixed(2)}</span>
      </div>
    </div>
  `;

  document.getElementById('invoiceModal').classList.add('active');
}

function closeInvoiceModal() {
  document.getElementById('invoiceModal').classList.remove('active');
}

// ================= 8. ADMIN DASHBOARD LOGIC =================
function loadAdminData() {
  loadAnalytics();
  loadAdminSubscriptions();
  loadAdminProducts();
  loadAdminOrders();
}

function loadAnalytics() {
  const data = PetStorage.getAnalytics();
  if (!data) return;

  document.getElementById('metricMrr').textContent = `$${data.mrr.toFixed(2)}`;
  document.getElementById('metricActiveSubs').textContent = data.activeSubscriptions;
  document.getElementById('metricTotalOrders').textContent = data.totalOrders;
  document.getElementById('metricChurn').textContent = `${data.churnRate}%`;

  const terminal = document.getElementById('engineLogsTerminal');
  const logs = data.recentLogs || [];
  
  if (logs.length === 0) {
    terminal.innerHTML = `<div>[${new Date().toLocaleTimeString()}] System online. Subscription daemon running at 60s interval.</div>`;
  } else {
    terminal.innerHTML = logs.map(l => {
      const timeStr = new Date(l.timestamp).toLocaleTimeString();
      const statusColor = l.status === 'SUCCESS' ? '#4ade80' : '#f87171';
      return `<div><span style="color: #94a3b8;">[${timeStr}]</span> <span style="color: ${statusColor};">[${l.trigger}]</span> ${l.message}</div>`;
    }).join('');
  }
}

function loadAdminSubscriptions() {
  const subs = PetStorage.getSubscriptions();
  const tableBody = document.getElementById('adminSubsTableBody');
  const countBadge = document.getElementById('tabCountSubs');
  if (countBadge) countBadge.textContent = subs.length;

  tableBody.innerHTML = subs.map(sub => {
    const nextDate = new Date(sub.nextDeliveryDate);
    const dateFormatted = isNaN(nextDate.getTime()) ? 'Pending' : nextDate.toLocaleDateString();

    let badgeClass = 'badge-emerald';
    if (sub.status === 'paused') badgeClass = 'badge-amber';
    if (sub.status === 'cancelled') badgeClass = 'badge-rose';

    return `
      <tr>
        <td><strong>#${sub.id}</strong></td>
        <td>
          <div style="font-weight: 700;">${sub.petName}</div>
          <div class="text-muted" style="font-size: 0.8rem;">${sub.petSpecies === 'dog' ? '🐶 Dog' : '🐱 Cat'} • User: ${sub.userId}</div>
        </td>
        <td>${sub.boxName}</td>
        <td><span class="badge badge-primary">${sub.frequency}</span></td>
        <td style="font-weight: 700; color: var(--dark);">$${sub.recurringAmount.toFixed(2)}</td>
        <td>${dateFormatted}</td>
        <td><span class="badge ${badgeClass}">${sub.status.toUpperCase()}</span></td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            ${sub.status === 'active' ? `
              <button onclick="adminToggleSub('${sub.id}', 'paused')" class="btn btn-outline btn-sm" title="Pause">⏸️</button>
            ` : sub.status === 'paused' ? `
              <button onclick="adminToggleSub('${sub.id}', 'active')" class="btn btn-outline btn-sm" title="Resume">▶️</button>
            ` : ''}
            ${sub.status !== 'cancelled' ? `
              <button onclick="adminCancelSub('${sub.id}')" class="btn btn-outline btn-sm" style="color: var(--rose);" title="Cancel">✕</button>
            ` : '-'}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function loadAdminProducts() {
  const prods = PetStorage.getProducts();
  const tableBody = document.getElementById('adminProductsTableBody');
  const countBadge = document.getElementById('tabCountProds');
  if (countBadge) countBadge.textContent = prods.length;

  tableBody.innerHTML = prods.map(p => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${p.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: var(--radius-sm);" alt="p">
          <div>
            <strong style="display: block; font-size: 0.95rem;">${p.name}</strong>
            <span class="text-muted" style="font-size: 0.75rem;">ID: ${p.id}</span>
          </div>
        </div>
      </td>
      <td>
        <span class="badge ${p.category === 'food' ? 'badge-primary' : p.category === 'toys' ? 'badge-accent' : 'badge-emerald'}">
          ${p.category}
        </span>
      </td>
      <td>${p.petType === 'dog' ? '🐶 Dog' : '🐱 Cat'}</td>
      <td style="font-weight: 700;">$${p.price.toFixed(2)}</td>
      <td>
        <span class="badge ${p.stock < 30 ? 'badge-amber' : 'badge-emerald'}">${p.stock} units</span>
      </td>
      <td>⭐ ${p.rating}</td>
      <td>
        <div style="display: flex; gap: 0.4rem;">
          <button onclick="openEditProductModal('${p.id}')" class="btn btn-outline btn-sm">Edit</button>
          <button onclick="deleteProduct('${p.id}')" class="btn btn-outline btn-sm" style="color: var(--rose);">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function loadAdminOrders() {
  const orders = PetStorage.getOrders();
  const tableBody = document.getElementById('adminFulfillmentTableBody');
  const countBadge = document.getElementById('tabCountOrders');
  if (countBadge) countBadge.textContent = orders.length;

  tableBody.innerHTML = orders.map(ord => {
    let nextStatus = '';
    let btnText = '';
    if (ord.status === 'Processing') {
      nextStatus = 'Packed';
      btnText = 'Mark Packed 📦';
    } else if (ord.status === 'Packed') {
      nextStatus = 'Out for Delivery';
      btnText = 'Dispatch 🚚';
    } else if (ord.status === 'Out for Delivery') {
      nextStatus = 'Delivered';
      btnText = 'Mark Delivered ✅';
    }

    const itemsSummary = (ord.items || []).map(i => `${i.quantity || 1}x ${i.name}`).join(', ');

    return `
      <tr>
        <td><strong>#${ord.id}</strong></td>
        <td><span class="badge badge-primary">${ord.subscriptionId || 'One-Time'}</span></td>
        <td>${new Date(ord.date).toLocaleDateString()}</td>
        <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsSummary}">
          ${itemsSummary}
        </td>
        <td style="font-weight: 800; color: var(--dark);">$${ord.total.toFixed(2)}</td>
        <td><code style="font-size: 0.8rem; background: var(--slate-100); padding: 0.2rem 0.4rem; border-radius: 4px;">${ord.trackingNumber || 'N/A'}</code></td>
        <td>
          <span class="badge ${ord.status === 'Delivered' ? 'badge-emerald' : ord.status === 'Out for Delivery' ? 'badge-primary' : 'badge-amber'}">
            ${ord.status}
          </span>
        </td>
        <td>
          ${nextStatus ? `
            <button onclick="advanceOrderStatus('${ord.id}', '${nextStatus}')" class="btn btn-primary btn-sm">
              ${btnText}
            </button>
          ` : '<span class="text-muted" style="font-size: 0.85rem;">Completed</span>'}
        </td>
      </tr>
    `;
  }).join('');
}

function switchAdminTab(tab) {
  document.getElementById('panelSubs').style.display = (tab === 'subs') ? 'block' : 'none';
  document.getElementById('panelProducts').style.display = (tab === 'products') ? 'block' : 'none';
  document.getElementById('panelFulfillment').style.display = (tab === 'fulfillment') ? 'block' : 'none';

  document.getElementById('btnTabSubs').classList.toggle('active', tab === 'subs');
  document.getElementById('btnTabProducts').classList.toggle('active', tab === 'products');
  document.getElementById('btnTabFulfillment').classList.toggle('active', tab === 'fulfillment');
}

function triggerEngineRun() {
  const btn = document.getElementById('btnTriggerEngine');
  btn.disabled = true;
  btn.textContent = '⏳ Executing Engine Cycle...';

  setTimeout(() => {
    const res = PetStorage.triggerAutomation(true);
    btn.disabled = false;
    btn.textContent = '▶️ Run Automated Renewal Engine Now';

    if (res && res.success) {
      showToast(`⚡ Automated Engine executed! Processed renewals.`, 'success');
      loadAdminData();
    }
  }, 400);
}

function advanceOrderStatus(orderId, newStatus) {
  const res = PetStorage.updateOrder(orderId, { status: newStatus });
  if (res) {
    showToast(`Order #${orderId} advanced to "${newStatus}"!`, 'success');
    loadAdminOrders();
  }
}

function adminToggleSub(subId, newStatus) {
  const res = PetStorage.updateSubscription(subId, { status: newStatus });
  if (res) {
    showToast(`Subscription #${subId} updated to ${newStatus}.`, 'info');
    loadAdminSubscriptions();
    loadAnalytics();
  }
}

function adminCancelSub(subId) {
  if (confirm(`Cancel subscription #${subId}?`)) {
    const res = PetStorage.cancelSubscription(subId);
    if (res) {
      showToast(`Subscription #${subId} cancelled.`, 'info');
      loadAdminSubscriptions();
      loadAnalytics();
    }
  }
}

function openAddProductModal() {
  document.getElementById('productModalTitle').textContent = 'Add New Catalog Item';
  document.getElementById('editProductId').value = '';
  document.getElementById('modalProdName').value = '';
  document.getElementById('modalProdCategory').value = 'food';
  document.getElementById('modalProdPetType').value = 'dog';
  document.getElementById('modalProdPrice').value = '19.99';
  document.getElementById('modalProdStock').value = '50';
  document.getElementById('modalProdImage').value = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80';
  document.getElementById('modalProdDesc').value = '';

  document.getElementById('productModal').classList.add('active');
}

function openEditProductModal(prodId) {
  const prod = PetStorage.getProductById(prodId);
  if (!prod) return;

  document.getElementById('productModalTitle').textContent = `Edit Item: ${prod.name}`;
  document.getElementById('editProductId').value = prod.id;
  document.getElementById('modalProdName').value = prod.name;
  document.getElementById('modalProdCategory').value = prod.category;
  document.getElementById('modalProdPetType').value = prod.petType;
  document.getElementById('modalProdPrice').value = prod.price;
  document.getElementById('modalProdStock').value = prod.stock;
  document.getElementById('modalProdImage').value = prod.image;
  document.getElementById('modalProdDesc').value = prod.description;

  document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
}

function saveProduct() {
  const id = document.getElementById('editProductId').value;
  const name = document.getElementById('modalProdName').value.trim();
  const category = document.getElementById('modalProdCategory').value;
  const petType = document.getElementById('modalProdPetType').value;
  const price = parseFloat(document.getElementById('modalProdPrice').value) || 19.99;
  const stock = parseInt(document.getElementById('modalProdStock').value, 10) || 50;
  const image = document.getElementById('modalProdImage').value.trim() || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80';
  const description = document.getElementById('modalProdDesc').value.trim();

  if (!name) {
    showToast('Please enter a product name.', 'error');
    return;
  }

  const payload = { id, name, category, petType, price, stock, image, description };
  PetStorage.saveProduct(payload);
  showToast(id ? `Updated product "${name}"` : `Created product "${name}"`, 'success');

  closeProductModal();
  loadAdminProducts();
}

function deleteProduct(prodId) {
  if (confirm('Delete this product from catalog?')) {
    PetStorage.deleteProduct(prodId);
    showToast('Product deleted.', 'info');
    loadAdminProducts();
  }
}

function resetDataModal() {
  if (confirm('Reset all catalog, subscriptions, orders, and logs to initial demo state?')) {
    PetStorage.resetToDefaults();
    loadAdminData();
    if (currentView === 'subscriptions') loadCustomerDashboard();
    if (currentView === 'catalog') loadCatalogProducts();
    if (currentView === 'home') loadHomeCuratedBoxes();
  }
}

// ================= 9. ROLE SWITCHER MODAL =================
function openRoleModal() {
  document.getElementById('roleModal').classList.add('active');
}

function closeRoleModal() {
  document.getElementById('roleModal').classList.remove('active');
}

function loginAsCustomer() {
  const customer = {
    id: 'usr-1',
    email: 'user@petjoy.com',
    name: 'Sarah Miller',
    role: 'customer',
    address: '742 Evergreen Terrace, Springfield, OR 97477'
  };
  PetStorage.setCurrentUser(customer);
  syncUserBadge();
  closeRoleModal();
  showToast('Switched to Customer: Sarah Miller', 'success');
  navigate('subscriptions');
}

function loginAsAdmin() {
  const admin = {
    id: 'usr-admin',
    email: 'admin@petjoy.com',
    name: 'Administrator / Evaluator',
    role: 'admin'
  };
  PetStorage.setCurrentUser(admin);
  syncUserBadge();
  closeRoleModal();
  showToast('Switched to Administrator / Evaluator', 'success');
  navigate('admin');
}

function handleManualLogin(e) {
  e.preventDefault();
  const email = document.getElementById('inputEmail').value.trim();
  if (email.includes('admin')) {
    loginAsAdmin();
  } else {
    loginAsCustomer();
  }
}
