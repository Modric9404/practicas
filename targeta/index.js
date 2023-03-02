

  
var confirm = false;







function fill(){
    final = 0;
    var name = document.getElementById('name').value
    if(name){
        final++;
    }





    var sfr ;
    cvc = document.getElementById('key').value; 
    errorkey = document.getElementById('key');
    if(cvc.length == 0){
        document.getElementById('key-advice').setAttribute("style", "display:block;");
        errorkey.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }
    if(cvc.length == 1){
        document.getElementById('key-advice').setAttribute("style", "display:block;");
        errorkey.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }
    if(cvc.length == 3){
        str = year;
        document.getElementById('key-advice').setAttribute("style", "display:none;");
        errorkey.setAttribute("style" , "border: 2px solid  rgb(226,226,226) !important;");
        final++;
    }
    if(cvc.length == 4){
        document.getElementById('key').value = "";
        document.getElementById('key-advice').setAttribute("style", "display:block;");
        errorkey.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }






    var str ;
    month = document.getElementById('month').value; 
    errorMonth = document.getElementById('month');

    if(month.length == 0){
        document.getElementById('mmyy').setAttribute("style", "display:block;");
        errorMonth.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }
    if(month.length == 2){
        str = month;
        document.getElementById('mmyy').setAttribute("style", "display:none;");
        errorMonth.setAttribute("style" , "border: 2px solid  rgb(226,226,226) !important;");
        final++;
    }
    if(month.length == 3){
        document.getElementById('month').value = "";
        document.getElementById('mmyy').setAttribute("style", "display:block;");
        errorMonth.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }




    var sdr ;
    year = document.getElementById('year').value; 
    erroryear = document.getElementById('year');
    if(year.length == 0){
        document.getElementById('mmyy').setAttribute("style", "display:block;");
        erroryear.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }
    if(year.length == 2){
        sdr = year;
        document.getElementById('mmyy').setAttribute("style", "display:none;");
        erroryear.setAttribute("style" , "border: 2px solid  rgb(226,226,226) !important;");
        final++;
    }
    if(year.length == 3){
        document.getElementById('year').value = "";
        document.getElementById('mmyy').setAttribute("style", "display:block;");
        erroryear.setAttribute("style" , "border: 2px solid  rgb(253, 117, 117) !important;");
        final = 0;
    }








    var card = document.getElementById('number').value;

    if(card.length == 17){

           document.getElementById('number').value = "";
    }
    if(card.length < 17){
        document.getElementById('number').setAttribute("placeholder" , "");
    let transform = [];
    for(let i = 0;i < card.length; i += 4){
      transform.push(card.substr(i, 4));
    }
    var numbers = transform.join(' ');

    document.getElementById('chine').innerHTML = numbers;



    if(card.length == 16){
        //console.log(numbers);
        final++;
    }
 }

 if(final >= 5){
   document.getElementById('number-card').innerHTML = numbers;
   document.getElementById('name-card').innerHTML = name;
   document.getElementById('month-card').innerHTML = month;
   document.getElementById('year-card').innerHTML = year;
   document.getElementById('card-key').innerHTML = cvc;
    confirm = true;
 }

}

function confirmation(){
    if(confirm == true){
        document.getElementById("end").setAttribute("style" , "display:block !important; opacity:1;");
        document.getElementById("start").setAttribute("style" , "display:none !important;");
    }
}


function tybtn(){
    document.getElementById("end").setAttribute("style" , "display:none !important; opacity:0;");
    document.getElementById("start").setAttribute("style" , "display:block !important;");
    document.getElementById('number-card').innerHTML = "0000 0000 0000 0000";
    document.getElementById('name-card').innerHTML = "Jane Appleseed";
    document.getElementById('month-card').innerHTML = "00";
    document.getElementById('year-card').innerHTML = "00";
    document.getElementById('card-key').innerHTML = "000";
    document.getElementById('name').value = "";
    document.getElementById('key').value = ""; 
    document.getElementById('month').value = ""; 
    document.getElementById('year').value = ""; 
    document.getElementById('number').value = "";
    document.getElementById('chine').innerHTML = "";
    document.getElementById('number').setAttribute("placeholder" , "e.g. 1234 5678 9123 0000");
}