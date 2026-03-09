 const cartButtons = document.getElementsByClassName("addtocart");

let cartArr = localStorage.cart ? JSON.parse(localStorage.cart) : [];


for (let i = 0; i < cartButtons.length; i++) {
  for (let j = 0; j < cartArr.length; j++) {
    if (cartButtons[i].dataset.id === cartArr[j].id) {
      cartButtons[i].src = "img/removefromcart.png";
    }
  }
}


for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", saveToCart);
}

function saveToCart(e) {
  
  e.preventDefault();

  const item = {
    id: this.dataset.id,
    img: this.dataset.img,
    
  };


  const index = cartArr.findIndex((p) => p.id === item.id);

  if (index !== -1) {
    cartArr.splice(index, 1);
    this.src = "img/addtocart.png";
  } else {
    cartArr.push(item);
    this.src = "img/removefromcart.png";
  }

  localStorage.cart = JSON.stringify(cartArr);
}
/*  
AI was used on this page to help with debugging and helping me a little with some line of code
 */