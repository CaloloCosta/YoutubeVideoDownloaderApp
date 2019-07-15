
console.log(axios)

const form = document.querySelector('form')

form.addEventListener('submit', e =>{
  e.preventDefault()

  const format = document.querySelector('input[type=radio]:checked')
  const video = document.querySelector('input')
  console.log(`video: ${video.value} \n format: ${format.value}`)
  const url = `http://localhost:3000/download?URL=${video.value}&format=${format.value}`
  download(url)
})


function download(url){
  // window.location.href= url;
  const r = fetch(url, { mode: 'no-cors' })
  r.then(data => data.json()).then(data => {
    const title = data.title;
    const url = data.url;
    console.log(url)
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download','true')
    document.body.appendChild(a)
    a.click()
    // axios({
    //   url,
    //   method: 'GET',
    //   responseType: 'blob',
    // }).then(res =>{
    //   const url = window.URL.createObjectURL(new Blob([response.data]))
    //   const link = document.createElement('a')
    //   link.href = url
    //   link.setAttribute('download',`${title}.mp4`)
    //   document.body.appendChild(link)
    //   link.click()
    // })

  })

}
