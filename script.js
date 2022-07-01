const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

let load = 0
let int = setInterval(cont, 30)

function cont(){
  load++

  if(load > 99) {
    clearInterval(int)
  }

  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 3, 0)}rem)`

  if(load == 100){
    sleep(2500);
    location.reload() //reload the page
  }  
}

//Function to accont 2.5 seconds.
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}