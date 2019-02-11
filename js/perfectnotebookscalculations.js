var size_prices= new Array();
size_prices["P1"]=7.5;

function getSizePrice()
{
   var sizePrice=0;
   //Get a reference to the form id="pricing-form"
   var theForm = document.forms["pricing-form"];
   //Get a reference to the select id="size"
   var selectedSize = theForm.elements["size"];
    
   //set sizePrice Price equal to value user chose
   sizePrice = size_prices[selectedSize.value];

   //finally we return sizePrice
   return sizePrice;
}
       
function calculateTotal()
{
   //Here we get the total price by calling our function
   //Each function returns a number so by calling them we add the values they return together
   var totalCost = getSizePrice();
   totalCost = Math.round(100*totalCost)/100;
   //display the result
   var result = document.getElementById('totalPrice');
   result.innerHTML = "$" + totalCost;

}