var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message"); 
var availableNotes = [2000,500,100,20,10,5,1];
var noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", check)

    function check(){
        hideMessage();
        if (Number(billAmount.value > 0)){
            if (Number(cashGiven.value) >= Number(billAmount.value)){
               const changeAmount = Number(cashGiven.value) - Number(billAmount.value) ; 
               calculateChange(changeAmount);
               
            }else{
                showMessage("Insufficient Cash / Give more cash");
            }
        }else {
            showMessage("Invalid Bill Amount");
        }
    };


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