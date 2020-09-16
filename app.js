const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('HTTP endpoint using nodejs and express !')
})


app.get('/ratings', (req, res) => {
    res.send('Five Stars!!!')
  })


app.post('/createRatings', (req, res) => {

    console.log("Received POST request!")
    console.log(req.body)
    res.send('Successfully created!')
  })  
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})