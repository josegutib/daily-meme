import {ENDPOINT, handleErrors, getMemes} from './api.js'
import {format} from './utils.js'
import {desiredWidthAndHeight} from './utils.js'
import {byAscendingId} from './utils.js'
import {randomize} from './utils.js'

const memeImg = document.queryselector('meme')

getMemes(ENDPOINT)
.then( memes =>
  memes.map(format)
       .filter(desiredWidthAndHeight)
       .sort(byAscendingId)
)
.then( memeList => console.log(getRandomMeme(memeList)))


function getMemeOfTheDay(meme){
  const fecha = new Date()
  const hoy = fecha.getDate()
  return meme[hoy - 1]
}

function getRandomMeme(meme){
  return meme[randomize(meme.length)]
}
