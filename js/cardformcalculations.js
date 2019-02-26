 var size_prices= new Array();
 size_prices["A2"]=0.75;
 size_prices["A6"]=1.30;
 size_prices["A7"]=1.30;

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

    if (getSizePrice() === 0.75) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 0.01;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 0.06;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 0.12;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 0.18;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 0.25;
        }
        else {
            quantityPrice = 0.31;
        }
    }

    if (getSizePrice() === 1.30) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 0.17;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 0.30;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 0.48;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 0.54;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 0.56;
        }
        else {
            quantityPrice = 0.59;
        }
    }

    if (getSizePrice() === 1.30) {
        if (includeQuantity < 25){
            quantityPrice = 0;
        }
        else if (includeQuantity >= 25 && includeQuantity < 50) {
            quantityPrice = 0.17;
        }
        else if (includeQuantity >= 50 && includeQuantity < 100) {
            quantityPrice = 0.30;
        }
        else if (includeQuantity >= 100 && includeQuantity < 150) {
            quantityPrice = 0.48;
        }
        else if (includeQuantity >= 150 && includeQuantity < 200) {
            quantityPrice = 0.54;
        }   
        else if (includeQuantity >= 200 && includeQuantity < 250) {
            quantityPrice = 0.56;
        }
        else {
            quantityPrice = 0.59;
        }
    }

    //finally we return the quantityPrice
    return quantityPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    // var totalCost = getSizePrice() - quantityPrice() + envelopesPrice() + cellPrice();
    var totalCost = getSizePrice() - quantityPrice();
    totalCost = Math.round(100*totalCost)/100;
    //display the result
    var result = document.getElementById('totalPrice');
    result.innerHTML = "$" + totalCost;

}