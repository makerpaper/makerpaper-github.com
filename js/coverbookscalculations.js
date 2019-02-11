var size_prices= new Array();
size_prices["A1"]=14.15;
size_prices["A2"]=14.92;
size_prices["A3"]=19.43;
size_prices["A4"]=23;

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

    if (getSizePrice() === 23) {
        if (includeQuantity < 11){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 11 && includeQuantity < 25) {
            quantityPrice = 1;
        }
        else {
            quantityPrice = 2;
        }
    }

    else {
        quantityPrice = 0;
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