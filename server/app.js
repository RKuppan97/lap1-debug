const express = require('express')
const app = express()
app.listen(5000, () => console.log("listening at 5000"))

const cors = require('cors');

quotes = [
  '"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
  '"I’M STILL LEARNING." –MICHELANGELO',
  '"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
  '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." ―ABIGAIL ADAMS',
  '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
  '"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
  '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
  '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
  '"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
  '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
  '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." —HENRY FORD',
  '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
  '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." ―LEO BUSCAGLIA',
  '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." ―MAHATMA GANDHI',
  '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND'
]

function getRandomQuote () {
  return quotes[4]
}

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

// To do: Create a route for retrieving all quotes
app.get('/quotes', (req, res) => res.send(quotes))

// To do: Create a route for retrieving a random quote
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random()*step1;
  let result = Math.floor(step2) + min;

  return quotes[result]
};

app.get('/quotes/random', (req,res) => res.send(getRandomNumber(0,quotes.length)))

// To do: Add handling for out-of-range index
function outOfIndex(req, res) {
  if (req.params.index >= 14) {
    return res.send("Out of Index")
  } else {
    res.send(quotes[req.params.index-1])
  }
}

app.get('/quotes/:index', (req, res) => res.send(outOfIndex(req, res)))


// To do: Get the server running
