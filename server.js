const express = require ('express')
const path = require ('path')
const app = express()

app.use(express.static("client"))

app.use (express.json())

const Rollbar = require ('rollbar')

const rollbar = new Rollbar ({
  accessToken: '7633847921a84b33904558dfafeee5db',
  captureUncaught: true,
  captureUnhandledRejections: true
})

const niceThings = ["You are so good at JS", "You look really good today", "I don't know anyone smarter than you"]




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'))
  rollbar.info('Html was monitored successfully!')
})

app.get('/api/nice-things', (req, res) => {
  let randomIndex = Math.floor(Math.random() * niceThings.length)
  console.log(randomIndex)
  rollbar.log('Compliment successfully received')
  res.status(200).send(niceThings[randomIndex]);
})

const port = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`We are ready to party on port ${port}!`))