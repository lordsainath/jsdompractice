// 11. Set the `href` attribute of a `<a>` tag with the id `link` to "https://www.example.com".
document.getElementById("w3school").setAttribute("href", "https://www.example.com")



//12. Change the `src` of an image with the id `logo` to a new image URL.

document.getElementById("change").addEventListener("click", ()=>{
    document.getElementById("logoimage").setAttribute("src", "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D");
});







// 16. Add a `click` event listener to a button with the id `start` that logs "Button clicked!".
document.getElementById("change").addEventListener("click",()=>{
    console.log("Button clicked!");
})


// 17. Add a `mouseover` event to an image with the id `thumbnail` that changes its border to red.
document.getElementById("change").addEventListener("mouseover",()=>{
           document.getElementById("logoimage").style = "border:5px solid red";
})

document.getElementById("change").addEventListener("mouseleave",()=>{
    document.getElementById("logoimage").style = "border:none";
})


