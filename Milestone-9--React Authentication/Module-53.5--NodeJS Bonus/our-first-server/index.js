const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('All is well! Make our server')
})


 app.get('/data',(req, res)=>{
    res.send('We shall over come')
 }

)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})