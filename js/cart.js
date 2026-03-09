const cartGrid = document.querySelector(".cart-grid");
let cartArr = localStorage.cart ? JSON.parse(localStorage.cart) : [];





if (!cartArr || cartArr.length === 0) {
  cartGrid.innerHTML = "<p>The cart is empty.</p>";
} else {
  cartGrid.innerHTML = "";
  for (let i = 0; i < cartArr.length; i++) {
    const cartElement = document.createElement("img");
    cartElement.src = cartArr[i].img; 
    cartElement.classList.add("cart-img"); 
    cartGrid.appendChild(cartElement);
  }
}


/* AI was used on this page to help with debugging and helping me a little with some line of code */