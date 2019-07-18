const form = document.querySelector('form')

form.addEventListener('submit', e =>{
  e.preventDefault()
  const url = document.querySelector('input[type="text"]').value
  const format = document.querySelector('input[type="radio"]:checked').value
  console.log(url,format)

  const endPoint = `https://youtubevideodl.herokuapp.com/download?url=${url}&format=${format}`
  if(!url.includes('youtube.com/watch?'))
    window.alert("Please provida a valid video url...")
  else
    window.location.href = endPoint
})
