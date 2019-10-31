import {ENDPOINT, handleErrors, getMemes} from './api.js'
import {format} from './utils.js'
import {desiredWidthAndHeight} from './utils.js'
import {byAscendingId} from './utils.js'
import {randomize} from './utils.js'

let memeImg
let btnRandom
let title

function bindUi(){
  memeImg = document.querySelector('#meme')
  btnRandom = document.querySelector('#btn')
  title = document.querySelector('#title')
}

function addListeners(){
  btnRandom.addEventListener('click', function(){
    getDesiredMemes()
    .then( memeList => getRandomMeme(memeList))
    .then( randomMeme => {
      memeImg.src = randomMeme.url
      title.innerHTML = 'Random Meme'
    })
  })
}

function getDesiredMemes(){
  return getMemes(ENDPOINT)
  .then( memes =>
    memes.map(format)
         .filter(desiredWidthAndHeight)
         .sort(byAscendingId)
  )
}

function start(){
  bindUi()
  addListeners()
  getDesiredMemes()
  .then( memeList => getMemeOfTheDay(memeList))
  .then( todaysMeme => {
    memeImg.src = todaysMeme.url
  })
}


function getMemeOfTheDay(meme){
  const fecha = new Date()
  const hoy = fecha.getDate()
  return meme[hoy - 1]
}

function getRandomMeme(meme){
  return meme[randomize(meme.length)]
}


window.addEventListener('load', start)
