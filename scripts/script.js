function order(size,crust,topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
function myButton(event) {
  event.preventDefault()

  var pizzaSize = document.querySelector('input[name = size]:checked').value
  var pizzaTopping = document.querySelector('input[name =topping]:checked').value
  var pizzaCrust = document.getElementById('crust').value
  
  var pizzaOrder = new order(pizzaSize, pizzaCrust, pizzaTopping)
  
  $("ul#order").append("<li><span class='order'>" + pizzaOrder.size + "</span></li>");
  $("ul#order").append("<li><span class='order'>" + pizzaOrder.crust + "</span></li>");
  $("ul#order").append("<li><span class='order'>" + pizzaOrder.topping + "</span></li>");


}

   
    
    

  
    


