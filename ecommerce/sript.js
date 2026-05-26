function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
function buyNow(name, price, imgURL) {
    localStorage.setItem('productName', name);
    localStorage.setItem('unitPrice', price);
    localStorage.setItem('productImg', imgURL);
    localStorage.setItem('quantity', 1);
    window.location.href = 'buy.html';
}
function addToCart(name, price, imgURL) {
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const existingItemIndex = cartItems.findIndex(item => item.name === name);
            if (existingItemIndex > -1) {
                cartItems[existingItemIndex].quantity++;
            } else {
                cartItems.push({ name, price, imgURL, quantity: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert(`${name} has been added to your cart!`);
            location.href = 'cart.html';
        }


let unitPrice = 0;
window.onload = () => {
    const name = localStorage.getItem('productName') || 'Vivo X200 PRO';
    unitPrice = parseInt(localStorage.getItem('unitPrice')) || 0;
    const img = localStorage.getItem('productImg') || '';
    const qty = parseInt(localStorage.getItem('quantity')) || 1;
    document.getElementById('product-name').innerText = name;
    document.getElementById('total-price').innerText = unitPrice;
    document.getElementById('product-img').src = img;
    document.getElementById('product-img').alt = name;
    document.getElementById('quantity').value = qty;

    updateTotal();
};

function updateTotal() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const total = unitPrice * quantity;
    document.getElementById("total-price").innerText = total;
}

function Increment() {
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotal();
}

function Decrement() {
    const quantityInput = document.getElementById("quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotal();
    }
}

function checkout() {
    const productElement = document.getElementById("product-name");
    const productName = productElement ? productElement.innerText : "Unknown Product";
    const quantity = parseInt(document.getElementById("quantity").value);
    const total = unitPrice * quantity;

    console.log("Checkout Details:");
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Unit Price: ₹" + unitPrice);
    console.log("Total Price: ₹" + total);
    alert(`Order placed for ${name}\nQuantity: ${quantity}\nTotal: ₹${total}`);
}

