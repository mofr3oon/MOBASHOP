let cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  alert(`${productName} added to your cart!`);
  displayCartItems();
}

function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>No items in the cart yet.</p>";
  } else {
    cart.forEach(item => {
      const itemElement = document.createElement("p");
      itemElement.textContent = `${item.name} - ${item.price} EGP`;
      cartItemsContainer.appendChild(itemElement);
    });
  }
}
