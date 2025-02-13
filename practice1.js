console.log("hello")

var btn1 = document.querySelector("#clickme");
var p = document.querySelector("#namedisplay");
btn1.addEventListener("click",()=>{
    p.innerHTML = "<h1>Hello Sainath</h1>"

})

var hide = document.querySelector("#hide");
var heading  = document.querySelector("h1")
hide.addEventListener("click",()=>{
    heading.innerText = "Hello User"
    heading.style.color = "red"
    heading.style.backgroundColor = "yellow"
    heading.style.width = "100%"
    // heading.style.letterSpacing = "5px"
    
    console.log("user Logged Out")
    hide.textContent = "log in"
}) 

var c1 = document.createElement('h1')
c1.textContent = "hello pratik"
var doc = document.querySelector('body');
doc.appendChild(c1)