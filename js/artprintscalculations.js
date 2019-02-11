var size_prices= new Array();
size_prices["P1"]=5.94;
size_prices["P2"]=6.88;
size_prices["P3"]=8.75;
size_prices["P4"]=14.95;

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

function quantityPrice()
{
   //This local variable will be used to decide whether or not to charge for the quantity
   var quantityPrice=0;
   //Get a reference to the form id="pricing-form"
   var theForm = document.forms["pricing-form"];
   //Get a reference to the number input id="quantityPrice"
   var includeQuantity = theForm.elements["quantity"].value;
   //If they checked the box set quantityPrice to 20
   if (getSizePrice() === 5.94) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 3.5;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 4.06;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 4.69;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 4.88;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 5.06;
        }
        else {
            quantityPrice = 5.13;
        }
    }

    if (getSizePrice() === 6.88) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 3.5;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 4.63;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 5.57;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 5.75;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 5.75;
        }
        else {
            quantityPrice = 5.82;
        }
    }

    if (getSizePrice() === 8.75) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 4.62;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 6.25;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 6.69;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 6.81;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 6.94;
        }
        else {
            quantityPrice = 7;
        }
    }

    if (getSizePrice() === 14.95) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 3.37;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 5.62;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 8.75;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 10.12;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 10.87;
        }
        else {
            quantityPrice = 11.25;
        }
    }
   
   //finally we return the quantityPrice
   return quantityPrice;
}
       
function calculateTotal()
{
   //Here we get the total price by calling our function
   //Each function returns a number so by calling them we add the values they return together
   var totalCost = getSizePrice() - quantityPrice();
   totalCost = Math.round(100*totalCost)/100;
   //display the result
   var result = document.getElementById('totalPrice');
   result.innerHTML = "$" + totalCost;

}