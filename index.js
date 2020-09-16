const request = require('request')
const port = 3000

request.get('/', (req, res) => {
  
  console.log("Handled HTPP request")
    //res.send('HTTP endpoint using nodejs and express !')
})



