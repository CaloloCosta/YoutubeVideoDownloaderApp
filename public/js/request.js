const form = document.querySelector('form')

form.addEventListener('submit', e =>{
  e.preventDefault()
  const url = document.querySelector('input[type="text"]').value
  const format = document.querySelector('input[type="radio"]:checked').value

  // https://youtubevideodl.herokuapp.com
  const endPoint = `https://youtubevideodl.herokuapp.com/download?url=${url}&format=${format}`
  if(url.includes('youtube.com/watch?') || url.includes('youtu.be'))
	window.location.href = endPoint
  else
    window.alert("Please provid a valid youtube video url...")


})
