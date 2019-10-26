export const ENDPOINT = 'https://api.imgflip.com/get_memes'

export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function getMemes(url){
  return fetch(url)
  .then(handleErrors)
  .then(response => response.json())
  .then(data => data.data.memes)
  .catch(error => console.log(error) )
}
