var cart = [];
cart = {itemName:"", itemPrice:""};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random()*100)+1);
 cart.push({itemName:item, itemPrice:price});
 
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if (cart.length===0){
    return ("Your shopping cart is empty.");
  }
  else if (cart.length===1){
    return (`In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`);
  }
  else if (cart.length===2){
    return (`In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice} and ${cart[1].itemName} at \$${cart[1].itemPrice}.`);
  }
  
  
  else if (cart.length>2){
    var stringToReturn = "In your cart, you have ";
    var i = 0;
    var putAnd = (cart.length) - 1;
    while (i < cart.length){
    stringToReturn += `${cart[i].itemName}` +" at " + "$" +`${cart[i].itemPrice}`;
      
     if (i=== cart.length){
       // stringToReturn+=".";
     }
       // else stringToReturn+=", ";
      i++;}
    
    return stringToReturn;
    
  }
}

function total() {
  // write your code here
  var theTotal = 0;
  var theLength = cart.length;
  
  for (var i = 0; i < theLength; i++){
    
      theTotal += cart[i].itemPrice;
    
    return theTotal;
  }
}

function removeFromCart(item) {
  // write your code here
  if (!cart.includes(item)){
    return ("That item is not in your cart.");
  }
  var removeFrom = cart.indexOf(item);
  cart.splice();
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return ("Sorry, we don\'t have a credit card on file for you.");
  }
  if (cardNumber > 0){
    cart = [];
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
}