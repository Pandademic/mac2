correctPWD="abd124"
pwd='';
ghRepoURL='https://github.com/Pandademic/mac2/';
function lock(){
    console.log("locking");
    window.location = 'lock';
}
function github(){
    window.location=ghRepoURL;
}
function login(){
    pwd=document.getElementById('pwd-box').value;
    if(pwd=='abd124'){
        window.location="desktop.html"
    }
    else{
        console.error("incorrect password");
        lock();
    }
}
