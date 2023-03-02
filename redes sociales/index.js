


function onOff(){
    let text = document.getElementsByClassName('dm-white');
    var header = document.getElementById('dm-header');
    let body = document.getElementById("body");
    let cards = document.getElementsByClassName("dm-cards");
    let gray = document.getElementsByClassName("bm-gray");
    var on = document.getElementById('mode').checked,
    move =  document.getElementById('move'),
    label = document.getElementsByClassName('on-off'); 


    if(on == false){
       move.setAttribute("style" ,"margin-left : 25px; background-color: RGB(32,34,47);");
     header.setAttribute("style" , "background-color: RGB(32,34,47) !important;");
     for(var i = 0 ; i<=13 ; i++){
     text[i].setAttribute("style" , "    color: RGB(240,243,250);");
    }
    for(var j = 0 ; j<=11 ; j++){
        cards[j].setAttribute("style" , "background-color: RGB(37,43,67); ");
       }
    for(var h = 0 ; h<=17 ; h++){
        gray[h].setAttribute("style" , "color: RGB(134,138,166); ");
       }
    body.setAttribute("style" , "background-color: RGB(29,32,41);");
    label[0].setAttribute("style" , "background: RGB(240,248,255) ;");
    
}else{
       
        move.setAttribute("style" ,"margin-left : 3px;");
        header.setAttribute("style" , "background-color: rgb(248,249,254);");
        for(var i = 0 ; i<=13 ; i++){
            text[i].setAttribute("style" , "color: rgb(28,31,38);");
           }
           body.setAttribute("style" , "  background-color: rgb(255,255,255);");
        for(var j = 0 ; j<=11 ; j++){
        cards[j].setAttribute("style" , " background-color: rgb(240,243,250);");
        }
        for(var h = 0 ; h<=17 ; h++){
            gray[h].setAttribute("style" , "color: rgb(101,105,118);");
           }
           label[0].setAttribute("style" , "background: linear-gradient(to right, rgb(69,149,209), rgb(79,199,145));");
    }
}


/*
body dm-RGB(29,32,41)
header bar dm-RGB(32,34,47)
text dm-white
cards dm-RGB(37,43,67)
circle bm-bg-black dm-RGB(32,34,47)
text-another-color bm-gray RGB(134,138,166)
 */

























