const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const fs = require('fs')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/download', (req, res) =>{
  let url = req.query.URL
  let format = req.query.format
  let name = 'givenName'

  ytdl(url).pipe(fs.createWriteStream(`${name}.flv`))

})

app.listen(PORT, () =>{
  console.log('App running on port ', PORT)
})
