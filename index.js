const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message"); 
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function check(){
    hideMessage();
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
           const changeAmount = cashGiven.value - billAmount.value ; 
           calculateChange(changeAmount);
           
        }else{
            showMessage("Insufficient Cash / Give more cash");
        }
    }else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(changeAmount){
    for (var i = 0; i <availableNotes.length ; i++){
        const numberOfNotes = Math.trunc(changeAmount / availableNotes[i]);
         changeAmount = changeAmount % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display = "block";
        errorMessage.innerText = message;

}











































/* function Manthan(){
   console.log("Manthan is good")
}

() => console.log("Manthan Gour") ; () =>
 */