// --- SHARED PRODUCT DATA ---
const products = [
    {
        id: 1,
        name: "Blue MITL Shirt V1",
        price: 100.00,
        originalPrice: 100.00,
        rating: 3.5,
        image: "images/product-1.jpg",
        images: ["images/product-1.jpg", "images/product-1-2.jpg","images/product-1.jpg","images/product-1-2.jpg"],
        category: "shirts",
        description: "Comfortable blue MITL shirt made from premium cotton. Features the official student council design. Perfect for everyday wear and campus events.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue"],
        details: ["100% Premium Cotton", "Machine washable", "Official student council design", "Regular fit"],
        featured: true,
        latest: false
    },
    {
        id: 2,
        name: "Blue MITL Shirt V2",
        price: 110.00,
        originalPrice: 110.00,
        rating: 4.5,
        image: "images/product-2.jpg",
        images: ["images/product-2.jpg", "images/product-2-2.jpg", "images/product-2.jpg", "images/product-2-2.jpg"],
        category: "shirts",
        description: "Updated version of the popular blue MITL shirt with improved fabric and enhanced comfort features.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue"],
        details: ["Improved cotton blend", "Machine washable", "Enhanced comfort", "Better fit"],
        featured: true,
        latest: false
    },
    {
        id: 3,
        name: "Red MITL Shirt V1",
        price: 100.00,
        originalPrice: 120.00,
        rating: 4.0,
        image: "images/product-3.jpg",
        images: ["images/product-3.jpg", "images/product-3-2.jpg", "images/product-3.jpg", "images/product-3-2.jpg"],
        category: "shirts",
        description: "Vibrant red MITL shirt with the official logo. Made from breathable fabric for all-day comfort.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        details: ["100% Cotton", "Machine washable", "Official MITL logo", "Breathable fabric"],
        featured: true,
        latest: false,
        onSale: true
    },
    {
        id: 4,
        name: "Red MITL Shirt V2",
        price: 148.00,
        originalPrice: 160.00,
        rating: 3.0,
        image: "images/product-4.jpg",
        images: ["images/product-4.jpg", "images/product-4-2.jpg", "images/product-4.jpg", "images/product-4-2.jpg"],
        category: "shirts",
        description: "Second edition red MITL shirt with enhanced design and premium fabric quality.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        details: ["Premium cotton blend", "Machine washable", "Enhanced design", "Better durability"],
        featured: true,
        latest: false,
        onSale: true
    },
    {
        id: 5,
        name: "White MITL Shirt V1",
        price: 150.00,
        originalPrice: 150.00,
        rating: 3.5,
        image: "images/product-5.jpg",
        images: ["images/product-5.jpg", "images/product-5-2.jpg", "images/product-5.jpg", "images/product-5-2.jpg"],
        category: "shirts",
        description: "Classic white MITL shirt perfect for everyday wear. Features subtle student council branding.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        details: ["100% Cotton", "Machine washable", "Subtle branding", "Comfortable fit"],
        featured: false,
        latest: true
    },
    {
        id: 6,
        name: "White MITL Shirt V2",
        price: 110.00,
        originalPrice: 125.00,
        rating: 4.5,
        image: "images/product-6.jpg",
        images: ["images/product-6.jpg", "images/product-6-2.jpg", "images/product-6.jpg", "images/product-6-2.jpg"],
        category: "shirts",
        description: "Updated white MITL shirt with improved fabric quality and enhanced comfort features.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        details: ["Improved cotton blend", "Machine washable", "Enhanced comfort", "Better fit"],
        featured: false,
        latest: true,
        onSale: true
    },
    {
        id: 7,
        name: "Mapua Laguna Lanyard Blue",
        price: 80.00,
        originalPrice: 80.00,
        rating: 4.0,
        image: "images/product-7.jpg",
        images: ["images/product-7.jpg", "", "", ""],
        category: "accessories",
        description: "Durable blue lanyard with Mapua Laguna branding. Perfect for holding IDs and keys.",
        sizes: ["Standard"],
        colors: ["Blue"],
        details: ["Durable woven material", "Metal clip", "Official Mapua Laguna branding", "Adjustable length"],
        featured: false,
        latest: true
    },
    {
        id: 8,
        name: "Mapua Laguna Lanyard Red",
        price: 70.00,
        originalPrice: 70.00,
        rating: 3.0,
        image: "images/product-8.jpg",
        images: ["images/product-8.jpg", "", "", ""],
        category: "accessories",
        description: "Red version of the popular Mapua Laguna lanyard with the same durable quality.",
        sizes: ["Standard"],
        colors: ["Red"],
        details: ["Durable woven material", "Metal clip", "Official branding", "Adjustable length"],
        featured: false,
        latest: true
    },
    {
        id: 9,
        name: "Mapua Laguna Pin V1",
        price: 50.00,
        originalPrice: 50.00,
        rating: 3.5,
        image: "images/product-9.jpg",
        images: ["images/product-9.jpg", "", "", ""],
        category: "pins",
        description: "Limited edition Mapua Laguna pin featuring the official colors and logo. Perfect for showing your Cardinal pride.",
        sizes: ["One Size"],
        colors: ["Red", "White"],
        details: ["Premium enamel finish", "Metal backing with secure clasp", "Official Mapua Laguna branding", "2.5cm diameter"]
    },
    {
        id: 10,
        name: "Mapua Laguna Pin V2",
        price: 48.00,
        originalPrice: 60.00,
        rating: 4.5,
        image: "images/product-10.jpg",
        images: ["images/product-10.jpg", "", "", ""],
        category: "pins",
        description: "Second edition Mapua Laguna pin with enhanced design and premium enamel finish.",
        sizes: ["One Size"],
        colors: ["Red", "White", "Gold"],
        details: ["Enhanced enamel design", "Metal backing", "Premium finish", "3cm diameter"],
        onSale: true
    },
    {
        id: 11,
        name: "Mapua Laguna Pin V3",
        price: 75.00,
        originalPrice: 75.00,
        rating: 4.0,
        image: "images/product-11.jpg",
        images: ["images/product-11.jpg", "", "", ""],
        category: "pins",
        description: "Third edition Mapua Laguna pin with modern design elements and premium finish.",
        sizes: ["One Size"],
        colors: ["Red", "Black", "Silver"],
        details: ["Modern design", "Premium metallic finish", "Official branding", "2.8cm diameter"]
    },
    {
        id: 12,
        name: "Mapua Laguna Pin V4",
        price: 25.00,
        originalPrice: 30.00,
        rating: 3.0,
        image: "images/product-12.jpg",
        images: ["images/product-12.jpg", "", "", ""],
        category: "pins",
        description: "Fourth edition Mapua Laguna pin with special edition design and premium materials.",
        sizes: ["One Size"],
        colors: ["Black", "Red", "Blue"],
        details: ["Special edition design", "Premium materials", "Official branding", "Collector's item"],
        onSale: true
    }
];

// --- ACCOUNT MANAGEMENT SYSTEM ---
class AccountManager {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.users = this.getUsers();
        this.adminUsers = ['admin@mitl.edu', 'test@mitl.edu', 'avah821@yahoo.com']; // Add admin emails here
    }

    getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveCurrentUser() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }

    register(fullName, email, password) {
        if (this.users.find(user => user.email === email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: Date.now(),
            fullName,
            email,
            password,
            createdAt: new Date().toISOString(),
            isAdmin: this.adminUsers.includes(email)
        };

        this.users.push(newUser);
        this.saveUsers();

        this.currentUser = newUser;
        this.saveCurrentUser();

        return { success: true, message: 'Registration successful!' };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            const updatedUser = this.ensureAdminStatus(user);
            this.currentUser = updatedUser;
            this.saveCurrentUser();
            return { success: true, message: 'Login successful!' };
        } else {
            return { success: false, message: 'Invalid email or password' };
        }
    }

    logout() {
        this.currentUser = null;
        this.saveCurrentUser();
        return { success: true, message: 'Logged out successfully' };
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    isAdmin() {
        return this.currentUser && 
               (this.currentUser.isAdmin === true || 
                this.adminUsers.includes(this.currentUser.email));
    }

    getUserDisplayName() {
        return this.currentUser ? this.currentUser.fullName : 'Guest';
    }

    // Add this method to ensure admin status is properly set
    ensureAdminStatus(user) {
        if (this.adminUsers.includes(user.email) && user.isAdmin !== true) {
            user.isAdmin = true;
            this.saveUsers();
        }
        return user;
    }
}

// Initialize Account Manager globally
const accountManager = new AccountManager();

// --- SHARED UTILITIES ---
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function menutoggle() {
    var menuItems = document.getElementById("MenuItems");
    if (menuItems) {
        if (menuItems.style.maxHeight === "0px" || !menuItems.style.maxHeight) {
            menuItems.style.maxHeight = "200px";
        } else {
            menuItems.style.maxHeight = "0px";
        }
    }
}

// --- ACCOUNT PAGE FUNCTIONS ---
function register() {
    var RegForm = document.getElementById("RegForm");
    var LoginForm = document.getElementById("LoginForm");
    var Indicator = document.getElementById("Indicator");
    
    if (RegForm && LoginForm && Indicator) {
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }
}

function login() {
    var RegForm = document.getElementById("RegForm");
    var LoginForm = document.getElementById("LoginForm");
    var Indicator = document.getElementById("Indicator");
    
    if (RegForm && LoginForm && Indicator) {
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }
}

// --- ORDER MANAGEMENT SYSTEM ---
// --- ORDER MANAGEMENT SYSTEM ---
class OrderManager {
    constructor() {
        this.orders = this.getOrders();
    }

    getOrders() {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    }

    saveOrders() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }

    createOrder(cartItems, total, userInfo = null) {
        const order = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            items: [...cartItems],
            subtotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            tax: total * 0.12,
            total: total,
            user: userInfo || this.getUserInfo(),
            status: 'completed'
        };

        this.orders.unshift(order);
        this.saveOrders();
        
        return order;
    }

    getUserInfo() {
        const currentUser = accountManager ? accountManager.getCurrentUser() : null;
        if (currentUser) {
            return {
                name: currentUser.fullName,
                email: currentUser.email,
                type: 'registered'
            };
        } else {
            return {
                name: 'Guest',
                email: 'guest@example.com',
                type: 'guest'
            };
        }
    }

    getOrdersCSV() {
        if (this.orders.length === 0) {
            return "No orders available";
        }

        let csv = 'Order ID,Date,Customer Name,Customer Email,Customer Type,Product Name,Size,Color,Quantity,Unit Price,Total Price,Order Total,Status\n';
        
        this.orders.forEach(order => {
            order.items.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                const orderDate = new Date(order.timestamp).toLocaleString();
                const orderTotal = index === 0 ? order.total.toFixed(2) : '';
                
                csv += `"${order.id}","${orderDate}","${order.user.name}","${order.user.email}","${order.user.type}","${item.name}","${item.size}","${item.color}","${item.quantity}","${item.price.toFixed(2)}","${itemTotal.toFixed(2)}","${orderTotal}","${order.status}"\n`;
            });
        });

        return csv;
    }

    downloadCSV() {
        const csv = this.getOrdersCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `orders_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    getOrderStats() {
        const totalOrders = this.orders.length;
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.total, 0);
        const totalItemsSold = this.orders.reduce((sum, order) => 
            sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0
        );

        return {
            totalOrders,
            totalRevenue,
            totalItemsSold
        };
    }

    clearAllOrders() {
        return new Promise((resolve) => {
            // Create confirmation dialog
            const dialog = document.createElement('div');
            dialog.className = 'confirmation-dialog';
            dialog.innerHTML = `
                <div class="confirmation-content">
                    <h3>⚠️ Clear All Orders?</h3>
                    <p>This action will permanently delete all ${this.orders.length} orders and cannot be undone. Are you sure you want to proceed?</p>
                    <div class="confirmation-buttons">
                        <button class="btn confirm-btn" id="confirmClear">Yes, Clear All Orders</button>
                        <button class="btn cancel-btn" id="cancelClear">Cancel</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(dialog);
            
            // Add event listeners
            document.getElementById('confirmClear').addEventListener('click', () => {
                this.orders = [];
                this.saveOrders();
                document.body.removeChild(dialog);
                resolve(true);
                
                // Show success message
                this.showMessage('All orders have been cleared successfully!', 'success');
            });
            
            document.getElementById('cancelClear').addEventListener('click', () => {
                document.body.removeChild(dialog);
                resolve(false);
            });
            
            // Close on background click
            dialog.addEventListener('click', (e) => {
                if (e.target === dialog) {
                    document.body.removeChild(dialog);
                    resolve(false);
                }
            });
        });
    }

    showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessage = document.querySelector('.order-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `order-message order-message-${type}`;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 600;
            z-index: 1001;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;
        
        if (type === 'success') {
            messageDiv.style.background = '#28a745';
        } else if (type === 'error') {
            messageDiv.style.background = '#dc3545';
        } else {
            messageDiv.style.background = '#17a2b8';
        }
        
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 3000);
    }
}

// Initialize Order Manager globally
const orderManager = new OrderManager();

// --- CART MANAGEMENT SYSTEM ---
class CartManager {
    constructor() {
        this.cart = this.getCart();
    }

    init() {
        this.updateCartCount();
        
        const cartContainer = document.getElementById('cart-container');
        if (cartContainer) {
            this.renderCart();
        }

        if (document.getElementById('admin-orders-container')) {
            if (accountManager.isAdmin()) {
                this.renderAdminOrders();
            } else {
                this.renderAccessDenied();
            }
        }
    }

    getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
        
        if (document.getElementById('cart-container')) {
            this.renderCart();
        }
    }

    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
    }

    addToCart(product) {
        const existingItemIndex = this.cart.findIndex(item => 
            item.id === product.id && 
            item.size === product.size && 
            item.color === product.color
        );

        if (existingItemIndex !== -1) {
            this.cart[existingItemIndex].quantity += product.quantity;
        } else {
            this.cart.push(product);
        }

        this.saveCart();
        alert('Product added to cart!');
        return true;
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
    }

    updateQuantity(index, change) {
        const newQuantity = this.cart[index].quantity + change;
        
        if (newQuantity < 1) {
            this.removeFromCart(index);
        } else if (newQuantity > 10) {
            alert('Maximum quantity is 10');
        } else {
            this.cart[index].quantity = newQuantity;
            this.saveCart();
        }
    }

    clearCart() {
        if (confirm('Are you sure you want to clear your cart?')) {
            this.cart = [];
            this.saveCart();
        }
    }

    calculateSubtotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    calculateTotal() {
        const subtotal = this.calculateSubtotal();
        const tax = subtotal * 0.12;
        return subtotal + tax;
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        if (confirm('Proceed to checkout?')) {
            const total = this.calculateTotal();
            orderManager.createOrder(this.cart, total);
            alert('Thank you for your order! Your total is ₱' + total.toFixed(2));
            this.cart = [];
            this.saveCart();
        }
    }

    renderCart() {
        const container = document.getElementById('cart-container');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <h2>Your Cart is Empty</h2>
                    <p>Add some products to your cart!</p>
                    <a href="products.html" class="btn">Continue Shopping</a>
                </div>
            `;
            return;
        }

        let cartHTML = `
            <h2 class="title">Shopping Cart</h2>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
        `;

        this.cart.forEach((item, index) => {
            const itemSubtotal = item.price * item.quantity;
            cartHTML += `
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="${item.image}" onerror="this.src='images/product-1.jpg'">
                            <div>
                                <p><strong>${item.name}</strong></p>
                                <small>Size: ${item.size}</small><br>
                                <small>Color: ${item.color}</small><br>
                                <small>Price: ₱${item.price.toFixed(2)}</small><br>
                                <a href="#" class="remove-btn" onclick="cartManager.removeFromCart(${index})">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="cartManager.updateQuantity(${index}, -1)">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="cartManager.updateQuantity(${index}, 1)">+</button>
                        </div>
                    </td>
                    <td>₱${itemSubtotal.toFixed(2)}</td>
                </tr>
            `;
        });

        const subtotal = this.calculateSubtotal();
        const tax = subtotal * 0.12;
        const total = subtotal + tax;

        cartHTML += `
            </table>
            <div class="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>₱${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax (12%)</td>
                        <td>₱${tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>₱${total.toFixed(2)}</strong></td>
                    </tr>
                </table>
            </div>
            <div class="cart-actions">
                <button class="btn clear-btn" onclick="cartManager.clearCart()">Clear Cart</button>
                <button class="btn checkout-btn" onclick="cartManager.checkout()">Proceed to Checkout</button>
            </div>
        `;

        container.innerHTML = cartHTML;
    }

    renderAdminOrders() {
        const container = document.getElementById('admin-orders-container');
        if (!container) return;

        const stats = orderManager.getOrderStats();
        const hasOrders = orderManager.orders.length > 0;
        
        if (!hasOrders) {
            container.innerHTML = `
                <div class="empty-cart">
                    <h2>No Orders Yet</h2>
                    <p>No orders have been placed yet.</p>
                    <div class="admin-stats">
                        <div class="stat-card">
                            <h3>Total Orders</h3>
                            <p class="stat-number">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Revenue</h3>
                            <p class="stat-number">₱0.00</p>
                        </div>
                        <div class="stat-card">
                            <h3>Items Sold</h3>
                            <p class="stat-number">0</p>
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button class="btn download-btn" disabled>
                            <i class="fa fa-download"></i> Export to Excel (No Data)
                        </button>
                        <button class="btn clear-orders-btn" disabled>
                            <i class="fa fa-trash"></i> Clear All Orders (No Data)
                        </button>
                    </div>
                </div>
            `;
            return;
        }

        let ordersHTML = `
            <div class="admin-header">
                <h2 class="title">Order Management - Admin Panel</h2>
            </div>
            <div class="admin-stats">
                <div class="stat-card">
                    <h3>Total Orders</h3>
                    <p class="stat-number">${stats.totalOrders}</p>
                </div>
                <div class="stat-card">
                    <h3>Total Revenue</h3>
                    <p class="stat-number">₱${stats.totalRevenue.toFixed(2)}</p>
                </div>
                <div class="stat-card">
                    <h3>Items Sold</h3>
                    <p class="stat-number">${stats.totalItemsSold}</p>
                </div>
            </div>
            <div class="orders-list">
        `;

        orderManager.orders.forEach(order => {
            const orderDate = new Date(order.timestamp).toLocaleString();
            ordersHTML += `
                <div class="order-card">
                    <div class="order-header">
                        <div class="order-info">
                            <h3>Order #${order.id}</h3>
                            <p class="order-date">${orderDate}</p>
                            <p class="customer-info">
                                <strong>Customer:</strong> ${order.user.name} (${order.user.email}) - ${order.user.type}
                            </p>
                        </div>
                        <div class="order-total">
                            <strong>Total: ₱${order.total.toFixed(2)}</strong>
                            <span class="status-badge ${order.status}">${order.status}</span>
                        </div>
                    </div>
                    <div class="order-items">
                        <table class="order-items-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

            order.items.forEach(item => {
                const itemSubtotal = item.price * item.quantity;
                ordersHTML += `
                    <tr>
                        <td>
                            <div class="item-info">
                                <img src="${item.image}" onerror="this.src='images/product-1.jpg'" class="item-image">
                                <span>${item.name}</span>
                            </div>
                        </td>
                        <td>${item.size}</td>
                        <td>${item.color}</td>
                        <td>${item.quantity}</td>
                        <td>₱${item.price.toFixed(2)}</td>
                        <td>₱${itemSubtotal.toFixed(2)}</td>
                    </tr>
                `;
            });

            ordersHTML += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        });

        ordersHTML += `
            </div>
            <div class="admin-actions">
                <button class="btn download-btn" onclick="orderManager.downloadCSV()">
                    <i class="fa fa-download"></i> Export to Excel
                </button>
                <button class="btn clear-orders-btn" onclick="orderManager.clearAllOrders().then(refreshed => { if (refreshed) cartManager.renderAdminOrders(); })">
                    <i class="fa fa-trash"></i> Clear All Orders
                </button>
            </div>
        `;

        container.innerHTML = ordersHTML;
    }

    renderAccessDenied() {
        const container = document.getElementById('admin-orders-container');
        if (!container) return;

        container.innerHTML = `
            <div class="empty-cart">
                <h2>Access Denied</h2>
                <p>You do not have permission to view this page.</p>
                <p>Only administrators can access the order management system.</p>
                <a href="index.html" class="btn">Return to Home</a>
            </div>
        `;
    }
}

// Initialize Cart Manager globally
const cartManager = new CartManager();

// --- PRODUCT RENDERING FUNCTIONS ---
function renderProductCards(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'col-4';
        
        let starsHTML = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<i class="fa fa-star-half-o"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa fa-star-o"></i>';
        }
        
        let priceHTML = '';
        if (product.onSale && product.price < product.originalPrice) {
            priceHTML = `
                <p><span style="text-decoration: line-through; color: #999; margin-right: 5px;">₱${product.originalPrice.toFixed(2)}</span> 
                <span style="color: #670606; font-weight: bold;">₱${product.price.toFixed(2)}</span></p>
            `;
        } else {
            priceHTML = `<p>₱${product.price.toFixed(2)}</p>`;
        }
        
        const productLink = `product-details.html?id=${product.id}`;
        
        productElement.innerHTML = `
            <a href="${productLink}"><img src="${product.image}" alt="${product.name}" onerror="this.src='images/product-1.jpg'"></a>
            <a href="${productLink}"><h4>${product.name}</h4></a>
            <div class="rating">
                ${starsHTML}
            </div>
            ${priceHTML}
        `;
        
        container.appendChild(productElement);
    });
}

function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'sale':
            sortedProducts.sort((a, b) => {
                const discountA = a.onSale ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
                const discountB = b.onSale ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
                return discountB - discountA;
            });
            break;
        default:
            sortedProducts.sort((a, b) => a.id - b.id);
            break;
    }
    
    renderProductCards(sortedProducts, 'products-container');
}

function initializeImageGallery(product) {
    var productImg = document.getElementById("productImg");
    var smallImg = document.getElementsByClassName("small-img");
    
    if (!productImg || smallImg.length === 0) return;

    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].onclick = function() {
            const imageIndex = parseInt(this.getAttribute('data-index'));
            const imageSrc = (product.images && product.images[imageIndex] && product.images[imageIndex] !== "") 
                             ? product.images[imageIndex] 
                             : product.image;
            productImg.src = imageSrc;
        }
    }
}

function renderProductDetails(product) {
    const container = document.getElementById('product-details');
    if (!container) {
        console.error('Product details container not found');
        return;
    }
    
    if (!product) {
        container.innerHTML = `
            <div class="error-message">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn">Back to Products</a>
            </div>
        `;
        return;
    }

    let starsHTML = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fa fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fa fa-star-half-o"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="fa fa-star-o"></i>';
    }
    
    let smallImagesHTML = '';
    const productImages = product.images || [];
    const allImages = [...productImages];
    if (!allImages.includes(product.image)) {
        allImages.unshift(product.image);
    }
    
    for (let i = 0; i < 4; i++) {
        const imageSrc = allImages[i] || product.image;
        smallImagesHTML += `
            <div class="small-img-col">
                <img src="${imageSrc}" width="100%" class="small-img" data-index="${i}" onerror="this.src='images/product-1.jpg'">
            </div>
        `;
    }
    
    let sizesHTML = '';
    const sizes = product.sizes || ['S', 'M', 'L', 'XL'];
    sizes.forEach(size => {
        sizesHTML += `<option value="${size}">${size}</option>`;
    });
    
    let colorsHTML = '';
    const colors = product.colors || ['Default'];
    colors.forEach(color => {
        colorsHTML += `<option value="${color}">${color}</option>`;
    });
    
    let detailsHTML = '';
    const details = product.details || ['No details available'];
    details.forEach(detail => {
        detailsHTML += `<li>${detail}</li>`;
    });
    
    let priceHTML = '';
    if (product.onSale && product.price < product.originalPrice) {
        priceHTML = `
            <h4>
                <span style="text-decoration: line-through; color: #999; margin-right: 10px;">₱${product.originalPrice.toFixed(2)}</span>
                <span style="color: #670606; font-weight: bold;">₱${product.price.toFixed(2)}</span>
                <span style="background: #670606; color: white; padding: 2px 8px; border-radius: 3px; font-size: 14px; margin-left: 10px;">SALE</span>
            </h4>
        `;
    } else {
        priceHTML = `<h4>₱${product.price.toFixed(2)}</h4>`;
    }
    
    container.innerHTML = `
        <div class="row">
            <div class="col-2">
                <img src="${product.image}" width="100%" id="productImg" onerror="this.src='images/product-1.jpg'">
                <div class="small-img-row">
                    ${smallImagesHTML}
                </div>
            </div>
            <div class="col-2">
                <p>Home / ${product.category || 'Uncategorized'} / ${product.name}</p>
                <h1>${product.name}</h1>
                <div class="rating">
                    ${starsHTML}
                    <span style="color: #666; margin-left: 10px;">${product.rating}/5.0</span>
                </div>
                ${priceHTML}
                <div style="margin: 20px 0;">
                    <label for="size-select" style="display: block; margin-bottom: 5px; font-weight: bold;">Size:</label>
                    <select id="size-select">
                        <option value="">Select Size</option>
                        ${sizesHTML}
                    </select>
                </div>
                <div style="margin: 20px 0;">
                    <label for="color-select" style="display: block; margin-bottom: 5px; font-weight: bold;">Color:</label>
                    <select id="color-select">
                        <option value="">Select Color</option>
                        ${colorsHTML}
                    </select>
                </div>
                <div style="margin: 20px 0;">
                    <label for="quantity" style="display: block; margin-bottom: 5px; font-weight: bold;">Quantity:</label>
                    <input type="number" id="quantity" value="1" min="1" max="10">
                </div>
                <button class="btn" id="addToCartBtn">Add to Cart</button>
                <h3>Product Details <i class="fa fa-indent"></i></h3>
                <br>
                <p>${product.description || 'No description available.'}</p>
                <ul>
                    ${detailsHTML}
                </ul>
            </div>
        </div>
    `;
    
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const sizeSelect = document.getElementById('size-select');
            const colorSelect = document.getElementById('color-select');
            const quantityInput = document.getElementById('quantity');
            
            const size = sizeSelect ? sizeSelect.value : 'M';
            const color = colorSelect ? colorSelect.value : 'Default';
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            
            if (sizeSelect && !size) {
                alert('Please select a size');
                return;
            }
            if (colorSelect && !color) {
                alert('Please select a color');
                return;
            }
            if (quantity < 1 || quantity > 10) {
                alert('Please enter a valid quantity (1-10)');
                return;
            }
            
            const productToAdd = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: size,
                color: color,
                quantity: quantity
            };
            cartManager.addToCart(productToAdd);
        });
    }
    
    initializeImageGallery(product);
}

function renderRelatedProducts(currentProductId) {
    const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 4);
    renderProductCards(relatedProducts, 'related-products');
}

// --- ACCOUNT FORM HANDLERS ---
function handleLogin(event) {
    event.preventDefault();
    
    const inputs = event.target.querySelectorAll('input');
    const email = inputs[0].value;
    const password = inputs[1].value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    const result = accountManager.login(email, password);
    
    if (result.success) {
        alert(result.message);
        // Update navigation and redirect
        updateNavigation();
        window.location.href = 'index.html';
    } else {
        alert(result.message);
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;
    
    if (!fullName || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password.length < 4) {
        alert('Password must be at least 4 characters long');
        return;
    }
    
    const result = accountManager.register(fullName, email, password);
    
    if (result.success) {
        alert(result.message);
        // Update navigation and redirect
        updateNavigation();
        window.location.href = 'index.html';
    } else {
        alert(result.message);
    }
}

// --- NAVIGATION MANAGEMENT ---
function updateNavigation() {
    // Update account link text
    const accountLink = document.querySelector('a[href="account.html"]');
    if (accountLink && accountManager.isLoggedIn()) {
        accountLink.textContent = accountManager.getUserDisplayName();
    }

    // Add or update admin orders link in navigation
    const menuItems = document.getElementById('MenuItems');
    if (menuItems) {
        let adminLink = menuItems.querySelector('a[href="admin-orders.html"]');
        
        if (accountManager.isAdmin()) {
            // Create admin link if it doesn't exist
            if (!adminLink) {
                const adminLi = document.createElement('li');
                adminLi.innerHTML = '<a href="admin-orders.html" style="color: #ffd700;">Admin Orders</a>';
                menuItems.appendChild(adminLi);
            } else {
                // Ensure existing admin link is visible
                adminLink.parentElement.style.display = 'block';
                adminLink.style.color = '#ffd700';
            }
        } else {
            // Hide admin link if user is not admin
            if (adminLink) {
                adminLink.parentElement.style.display = 'none';
            }
        }
    }
}

// --- PAGE INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    
    var menuItems = document.getElementById("MenuItems");
    if (menuItems) {
        menuItems.style.maxHeight = "0px";
    }

    cartManager.init();
    
    // Update navigation immediately and check admin status
    updateNavigation();
    
    // Additional check after a short delay to ensure everything is loaded
    setTimeout(updateNavigation, 100);

    if (document.getElementById('featured-products')) {
        const featuredProducts = products.filter(product => product.featured);
        renderProductCards(featuredProducts, 'featured-products');
        
        const latestProducts = products.filter(product => product.latest);
        renderProductCards(latestProducts, 'latest-products');
    }

    if (document.getElementById('products-container') && document.getElementById('sortSelect')) {
        sortProducts('default'); 
        
        document.getElementById('sortSelect').addEventListener('change', function() {
            sortProducts(this.value);
        });
    }

    if (document.getElementById('product-details')) {
        const productId = parseInt(getUrlParameter('id')) || 1;
        const product = products.find(p => p.id === productId) || products[0];
        
        if (product) {
            renderProductDetails(product);
            renderRelatedProducts(productId);
            document.title = `${product.name} - SnapShop`;
        } else {
            const container = document.getElementById('product-details');
            container.innerHTML = `
                <div class="error-message">
                    <h2>Product Not Found</h2>
                    <p>The product you're looking for doesn't exist.</p>
                    <a href="products.html" class="btn">Back to Products</a>
                </div>
            `;
        }
    }

    if (document.getElementById('LoginForm')) {
        login();
        
        document.getElementById('LoginForm').addEventListener('submit', handleLogin);
        document.getElementById('RegForm').addEventListener('submit', handleRegister);
        
        if (accountManager.isLoggedIn()) {
            const loginForm = document.getElementById('LoginForm');
            if (loginForm) {
                let adminStatus = '';
                if (accountManager.isAdmin()) {
                    adminStatus = '<p style="color: #ffd700; font-weight: bold;">✓ Administrator Account</p>';
                }
                
                loginForm.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h3>Welcome back, ${accountManager.getUserDisplayName()}!</h3>
                        ${adminStatus}
                        <p>You are already logged in.</p>
                        <button type="button" class="btn" onclick="accountManager.logout(); window.location.reload();" style="margin-top: 20px;">
                            Logout
                        </button>
                    </div>
                `;
            }
            
            const regForm = document.getElementById('RegForm');
            if (regForm) {
                regForm.style.display = 'none';
            }
            
            const formBtn = document.querySelector('.form-btn');
            if (formBtn) {
                formBtn.style.display = 'none';
            }
        }
    }
});