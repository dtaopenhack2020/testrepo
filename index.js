const request = require('request')
const port = 3000

request.get('/', (req, res) => {
  
  console.log("Succesfully Handled HTTP request")
    //res.send('HTTP endpoint using nodejs and express !')
})



