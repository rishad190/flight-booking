

function handleTicket(classValue,isIncrease){
    var classCount = getInputValue(classValue);
    var classNewCount = classCount;
    
    if(isIncrease == true){
        var classNewCount = classCount + 1;
    }
    if(isIncrease == false && classCount > 0){
        var classNewCount = classCount - 1;
    }
    document.getElementById(classValue + '-Class').value = classNewCount;
    calculationTotal();
}

function calculationTotal(){

    var firstClass = getInputValue('first');
    var ecoClass = getInputValue('eco');
    
    var totalPrice = firstClass*150 + ecoClass*100;
    document.getElementById('subTotal').innerText = totalPrice;
    

    var tax = Math.round(totalPrice*0.1);
    document.getElementById('tax-amount').innerText = tax;

    var grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal; 
}

function getInputValue(classValue){
    var classInput = document.getElementById(classValue + '-Class' );
    var classValueCount = parseInt(classInput.value);
    return classValueCount;
}

document.getElementById("bookNow").addEventListener("click",function(){
    var mainContain = document.getElementById('mainPage');
    mainContain.style.display = "none";
    var valueOf = document.getElementById('thanksPage');
    valueOf.style.display = "block";
    var thanksPrice = document.getElementById('grand-total').innerText;
document.getElementById('price').innerText = thanksPrice;
})





