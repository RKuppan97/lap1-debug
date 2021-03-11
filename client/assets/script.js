let buttonRandom = document.querySelector('section form');
buttonRandom.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:5000/quotes/random', {})
    .then(res => res.text())
    .then(data => document.getElementById('text').textContent = data)
    .catch(error => console.log('ERROR'))
}



