correctPWD="abd124"
pwd='';
function lock(){
    window.location = 'lock.html'
}
function github(){
    window.location= 'https://github.com/Pandademic/mac2'
}
function login(){
    pwd=document.getElementById('pwd-box').value;
    if(pwd=='abd124'){
        window.location="desktop.html"
    }
    else{
        console.error("incorrect password");
        window.location="lock.html";
    }
}
