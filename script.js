let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName) {
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " aggiunto al carrello!");
}

window.onload = function () {
  const cartList = document.getElementById("cart-items");
  if (cartList) {
    cartList.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }
};