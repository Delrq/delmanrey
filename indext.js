const btnCourse = document.getElementById("btnCourse");
const btnAbutUs = document.getElementById("btnAbutUs");
const btnConactUs = document.getElementById("btnConactUs");

btnCourse.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/main/content/Course.html"
});
btnAbutUs.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/main/content/about.html.html"
});
btnConactUs.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/main/content/contact.html.html"
});