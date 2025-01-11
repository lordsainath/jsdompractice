//  Select an element with the id `header` and change its text content to "Welcome to My Site".
document.getElementById('header').textContent = "Welcome to My Site"

// Select all elements with the class `item` and change their background color to yellow.

var c = document.querySelectorAll('.cc')

c.forEach(element => {
    element.style.backgroundColor = 'red'
});

console.log(c)
//  Add a new class `highlight` to the element with the id `main`.

document.getElementById('header').classList.add('highlight')

// Remove the class `inactive` from all elements with the class `menu-item`.
var a = document.querySelectorAll('.menuitem')
a.forEach((e)=> e.classList.remove('cc'))
   

//  Retrieve and log the text content of the first `<p>` element inside a container with the class `article`.
var a = document.querySelector('p').textContent
document.getElementById('header').textContent = a;

// Create a new `<div>` element with the text "Hello World" and append it to the body.
var c = document.createElement('div')
c.textContent = "Hello World sainath"
c.style = "color:red;background-color:tomato;padding:2vh;color:white"
document.querySelector('body').appendChild(c)

//  Create a `<li>` element with the text "New Item" and append it to a `<ul>` with the id `list`
var d = document.createElement('li')
d.id = 'list'
d.textContent = 'new item'
var c = document.querySelector('ul').append(d)

//  Insert a `<span>` element with the text "Read More" after a `<p>` element with the class `description`.
var e = document.createElement('span')
e.textContent = 'Read More'
document.querySelector('.description').appendChild(e)

// Create an image element, set its `src` to a given URL, and append it to a `<div>` with the id `gallery`.
var f = document.createElement('img')
f.src = "https://images.unsplash.com/photo-1735122787856-3537228a5e96?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
f.style = 'width:15vh;height:15vh;border-radius:50%;padding:5px'
document.querySelector('div').appendChild(f)

// Add three `<option>` elements with values "Option1", "Option2", "Option3" to a `<select>` dropdown with the id `choices`.
var o1 = document.createElement('option')
var o2 = document.createElement('option')
var o3 = document.createElement('option')
console.log(o1)
o1.textContent = 'Option 1'
o2.textContent = 'Option 2'
o3.textContent = 'Option 3'

document.querySelector('#choices').appendChild(o1)
document.querySelector('#choices').appendChild(o2)
document.querySelector('#choices').appendChild(o3)



