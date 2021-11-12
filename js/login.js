function lock(){
    window.location = 'lock.html'
}
function shutdown(){
   console.log("shutting down in 5 seconds");
   setTimeout(5000);
   document.getElementById('app').style.animation = "fade";
   
}
function github(){
    window.location= 'https://github.com/Pandademic/mac2'
}
