/* Task:

You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!

Answer:
*/
function reverse(string){
    //your code here
    return string.split(' ').reverse().join(' ')
  }


  const clock = document.getElementById('clock');
  const text = document.getElementById('time');

  const updateTime = () => {
    const leftOffset = Math.random() * 100;
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    text.textContent = timeString
    text.setAttribute("style", `top: ${Math.random() * 100}%; left: ${leftOffset}%`)
  }

  updateTime();
  setInterval(updateTime, 3000);

