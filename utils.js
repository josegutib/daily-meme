
export function format(meme){
  const {id, name, width, height, url} = meme
  return {id, name, width, height, url}
}

export function desiredWidthAndHeight(meme){
  return meme.height >= 500 || meme.width >= 500
}

export function byAscendingId(a,b){
  return Number(a.id) - Number(b.id)
}


export function randomize(n){
  return Math.floor(Math.random() * (n+1))
}
