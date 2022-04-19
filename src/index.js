import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('bom dia')
})

app.listen(8080)
