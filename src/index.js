const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const path = require('path')

const app = express()

console.log(path.join(__dirname,'../public'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('', (req, res) =>{
  res.render('index')
})

 app.get('/download', async (req, res) =>{
   // audioonly  OR mp4
   const video = {
     url: req.query.url,
     format: req.query.format
   }
   ytdl.getBasicInfo(video.url,(err, info) =>{
    if(err)
      return error
      video.format === 'mp4' ? res.attachment(`${info.title}.${video.format}`) : res.attachment(`${info.title}.mp3`)
  })
  await ytdl(video.url,{quality: 'highest',filter: video.format === 'mp4' ? (f) => f.container === 'mp4' : 'audioonly'}).pipe(res)
})

app.listen(3000, () => {console.log('App running')})
