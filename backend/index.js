const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.send([{
      a: true,
      b: 5,
      c: 'Hej'
    },
    {
      a: false,
      b: 10,
      c: 'Hejdå'
    }
  ])
})

app.listen(3000)
