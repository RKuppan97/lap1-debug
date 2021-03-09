const { response } = require("../../server/app")


document.getElementsByTagName('form').addEventListener('submit', getRandomQuote(e))

async function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:5000/quotes/random')
    .then(resp => response.json())
    .then(resp => resp.text)
    .then(document.getElementById('text').innerHTML = resp)
}

form.onsubmit = getRandomQuote

console.log(getRandomQuote())
