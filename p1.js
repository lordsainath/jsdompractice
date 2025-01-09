//Q1. Select an element with the id `header` and change its text content to "Welcome to My Site".
document.getElementById("main").addEventListener("click", function () {
  setInterval(() => {
    this.textContent = "Welcome to my site";
  }, 1000);
});

// setInterval(() => {
//     document.getElementById("heading").textContent = "Welcome to my site"
//   }, 1000);




// Q2. Select all elements with the class `item` and change their background color to yellow
document.querySelector(".btnitems").addEventListener('click',function(e){

     if(e.target.id === "btnid1"){
        document.querySelector(".box-container").style.backgroundColor = "tomato"
     }
     else if(e.target.id === "btnid2") {
       document.querySelector(".box-container").style.backgroundColor = "green"
     }
     else if(e.target.id === "btnid3") {
       document.querySelector(".box-container").style.backgroundColor = "goldenrod"
     }
          
})


// Q3.  Add a new class `highlight` to the element with the id `main`.
document.getElementById('main').classList.add("highlight");
document.getElementById('main').id = "newid";

// Q4. Remove the class `inactive` from all elements with the class `menu-item`.
var dom1 = document.querySelectorAll('.btn')
dom1.forEach(function(item){
  item.classList.remove('inactive')
})

// Q5. Retrieve and log the text content of the first `<p>` element inside a container with the class `article`.
var tc = document.querySelector('p').textContent
var element = document.createElement('p')
element.textContent = tc
document.querySelector('body').appendChild(element)

