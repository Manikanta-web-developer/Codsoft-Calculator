let display = document.getElementById("display");

function show(number){
    display.value += number;
}
function total(){
    try {
        let totalNum=display.value;
        let totalValue=eval(totalNum);
        display.value = totalValue;
       }
    catch(error){
         if(display.value === "+" && "-" || "+" && "*" || "+" && "/" || "+" && "%"){
        display.value = "ERROR";
       } 
    }
}
function clr(){
    display.value = "";
}

function del(){
    display.value= display.value.toString().slice(0,-1);
}