var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var availableNotes = [2000,500,100,20,5,1];
var noOfNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#error-message");
    


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
            var amountToBeReturned = cashGiven.value-billAmount.value;  
            calculateChange(amountToBeReturned);
            //showMessage("Thankyou For Shopping!!!!");
        }else{
            showMessage("Cash Given must be greater than Bill Amount");
        }
    }else{
        showMessage("Invalid Input");
    }
    

});

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
            
        }
    }


function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerHTML = msg;
}




