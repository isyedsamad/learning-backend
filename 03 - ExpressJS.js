// Introduction to ExpressJS
// framework, npm package
// manages everything from receiving the request to giving the response

// setting up a basic expressjs app
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)