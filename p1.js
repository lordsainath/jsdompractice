document.getElementById("heading").addEventListener("click", function () {
  setInterval(() => {
    this.textContent = "Welcome to my site";
  }, 1000);
});

// setInterval(() => {
//     document.getElementById("heading").textContent = "Welcome to my site"
//   }, 1000);


//   var c1 = document.getElementsByClassName('boxitems').addEventLister('click',function(){
//     console.log("hello")
//   })



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