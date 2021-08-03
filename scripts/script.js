function order(size,crust,topping,total) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = parseInt(size) + parseInt(crust) + parseInt(topping)
}
function myButton(event) {
  event.preventDefault()

  var pizzaSize = document.querySelector('input[name = size]:checked').value
  var pizzaTopping = document.querySelector('input[name =topping]:checked').value
  var pizzaCrust = document.getElementById('crust').value
  
  var pizzaOrder = new order(pizzaSize, pizzaCrust, pizzaTopping)
  var amount = new order(pizzaSize, pizzaTopping,pizzaCrust)
  
  $("ul#order").append("<li>Size Amount: <span class='order'>" + pizzaOrder.size + "</span></li>");
  $("ul#order").append("<li>Crust Amount: <span class='order'>" + pizzaOrder.crust + "</span></li>");
  $("ul#order").append("<li>Topping Amount: <span class='order'>" + pizzaOrder.topping + "</span></li>");
  $("ul#order").append("<li>Total Amount: <span class='order'>"  + amount.total + "</span></li>");

  var delivery = document.querySelector('input[name = delivery]:checked').value
  if(delivery==='200') {
    prompt('Enter location')
    alert('Your order will be delivered after check-out')
  }
}



   
    
    

  
    


