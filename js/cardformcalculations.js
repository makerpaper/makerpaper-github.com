 var size_prices= new Array();
 size_prices["A2"]=1.35;
 size_prices["A6"]=1.4;
 size_prices["A7"]=1.69;

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
    if (includeQuantity < 25){
        quantityPrice = 0;
    }
    else if (includeQuantity >= 25 && includeQuantity < 50) {
        quantityPrice = 0.05;
    }
    else if (includeQuantity >= 50 && includeQuantity < 100) {
        quantityPrice = 0.10;
    }
    else if (includeQuantity >= 100 && includeQuantity < 150) {
        quantityPrice = .15;
    }
    else if (includeQuantity >= 150 && includeQuantity < 200) {
        quantityPrice = .20;
    }   
    else if (includeQuantity >= 200 && includeQuantity < 250) {
        quantityPrice = .27;
    }
    else {
        quantityPrice = .32;
    }
    
    //finally we return the quantityPrice
    return quantityPrice;
}

//envelopesPrice() finds the envelopes price based on a check box selection
function envelopesPrice()
{
    var envelopesPrice=0;
    //Get a reference to the form id="pricing-form"
    var theForm = document.forms["pricing-form"];
    //Get a reference to the checkbox id="envelopes"
    var includeEnvelopes = theForm.elements["envelopes"];

    //If they checked the box set envelopesPrice to 5
    if(includeEnvelopes.checked==true)
    {
        envelopesPrice=.20;
    }
    //finally we return the envelopesPrice
    return envelopesPrice;
}

//cellPrice() finds the cellophane price based on a check box selection
function cellPrice()
{
    var cellPrice=0;
    //Get a reference to the form id="pricing-form"
    var theForm = document.forms["pricing-form"];
    //Get a reference to the checkbox id="includeCellophane"
    var includeCellophane = theForm.elements["includeCellophane"];
    
    //If they checked the box set cellPrice to 5
    if(includeCellophane.checked==true)
    {
        cellPrice=.10;
    }
    //finally we return the cellPrice
    return cellPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalCost = getSizePrice() - quantityPrice() + envelopesPrice() + cellPrice();
    totalCost = Math.round(100*totalCost)/100;
    //display the result
    var result = document.getElementById('totalPrice');
    result.innerHTML = "$" + totalCost;

}