import '/css/style.css'
import javascriptLogo from '/images/javascript.svg'
import viteLogo from '/images/vite.svg'
import { setupCounter } from '/js/counter.js'
import dayjs from 'dayjs'

const date1 = dayjs("2023-09-05");
const date2 = dayjs().diff(date1, 'date');

// The output below did not work, so I went with the above one ^

// ISO Standard
// console.log("ISO")
// console.log(now.format());

// // Time
// console.log("\nTime")
// console.log(now.format("14:38:20"));
// console.log(now.format("2:38:20 pm"));

// // Date
// console.log("\nDate")
// console.log(now.format("Monday, November 6 2023"));
// console.log(now.format("2023/11/6"));

// console.log(now.format());

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>Today's date: ${dayjs().format('MMM D, YYYY')}</h2>
    <h2>Number of days since the program started: ${date2}</h2>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
