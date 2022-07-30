let d = document.getElementById("dialog");
function cdalertfuc(){
    let f = document.createElement('form');
    let b = document.createElement('button');
    f.setAttribute("method","dialog");
    b.textContent = "OK";
    
    d.textContent = "Alert pressed";
    d.setAttribute("open","");
    f.appendChild(b);
    d.append(f);
}
let cdalertb = document.getElementById("cdAlert");
cdalertb.addEventListener("click",cdalertfuc);

let cdo = document.getElementById("cdoutput");
function cdconfirmfuc(){
    d.setAttribute("open","");
    d.textContent = "do you confirm this?";
    let tb = document.createElement('button');
    let fb = document.createElement('button');
    let f = document.createElement('form');
    f.setAttribute("method","dialog");
    tb.textContent = "OK";
    fb.textContent = "Cancel";
    tb.addEventListener("click", ()=>{cdo.textContent= "The value returned by the confirm method is : true";})
    fb.addEventListener("click", ()=>{cdo.textContent= "The value returned by the confirm method is : false"})
    f.appendChild(tb);
    f.appendChild(fb);
    d.appendChild(f);
    
}
let cdconfirmb = document.getElementById("cdConfirm");
cdconfirmb.addEventListener("click",cdconfirmfuc);


function cdpromptfuc(){
    d.setAttribute("open","");
    d.textContent = "give me something";
    let f = document.createElement('form');
    f.setAttribute("method","dialog");
    let userinput = document.createElement('input');
    let tb = document.createElement('button');
    let fb = document.createElement('button');
    tb.textContent = "OK";
    fb.textContent = "Cancel";
    tb.addEventListener("click", ()=>{cdo.textContent=userinput.value})
    fb.addEventListener("click", ()=>{cdo.textContent= "User canceled input"})
    f.appendChild(userinput);
    f.appendChild(tb);
    f.appendChild(fb);
    d.appendChild(f);
    
}
let cdpromptb = document.getElementById("cdPrompt");
cdpromptb.addEventListener("click", cdpromptfuc);

