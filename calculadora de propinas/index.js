// id bill   id q-123   id custom id people 

function calculate(){
    var percentage ;
    var amount , total , amountP , totalP ;
try{

    tip = document.querySelectorAll(".tipa");
    tip.forEach((e) => {
        if(e.checked == true){
             percentage = parseFloat(e.value); 
            
        }
    });
var people = parseFloat(document.getElementById("peoples").value)||0,
        bill = parseFloat(document.getElementById("bill").value)||0;

        if(people && bill && percentage){
                      amount = bill / 100 * percentage;
                      total = bill + amount;
                      amountP = amount/people;
                      totalP = total/people;

            document.getElementById("totallytip").innerHTML = amountP.toFixed(2);
            document.getElementById("totallycost").innerHTML = totalP.toFixed(2);
            document.getElementById("dove").innerHTML = total.toFixed(2);
            
        }
}catch(e){}
}
function clean(){
    document.getElementById('bill').value = "";
}
function cleanes(){
    document.getElementById('custom').value = "0";
}
function cleane(){
    document.getElementById("peoples").value = "";
}
function reset(){
    document.getElementById("peoples").value = 0;
    document.getElementById("bill").value = 0; 
    document.getElementById("totallytip").innerHTML = "0.00";
    document.getElementById("totallycost").innerHTML = "0.00";
    tip = document.querySelectorAll(".tipa");
    tip.forEach((e) => {
        if(e.checked == true){
             e.checked = false;
            
        }
    });
}

function unselect(){
    document.getElementById("totallytip").innerHTML = "0.00";
    document.getElementById("totallycost").innerHTML = "0.00";
    document.getElementById("customa").value = ""; 
    tip = document.querySelectorAll(".tipa");
    tip.forEach((e) => {
        if(e.checked == true){
             e.checked = false;
            
        }
    });
}
