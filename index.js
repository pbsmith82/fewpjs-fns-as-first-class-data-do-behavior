/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
 
   displayMessage(greet(timeString))
}

const greeting = document.getElementById('greeting')


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(ts){
  let num = parseInt(ts)
  if (num < 12) {
    return "Good Morning"
  } else if (num < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  } 
  }
/* Write your implementation of displayMessage() */
function displayMessage(response) {
  greeting.innerText = response
}