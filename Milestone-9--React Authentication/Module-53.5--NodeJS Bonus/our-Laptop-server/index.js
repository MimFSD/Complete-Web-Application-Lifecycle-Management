const express = require('express')
const Laptops = require('./Laptops.json')
const app = express()
const port = 5000 ;

app.get('/', (req, res) => {
  res.send('This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond ')
})

app.get('/Laptops',(req,res) =>{
    res.send(Laptops);
})
//to load single data
app.get('/Laptops/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    console.log('Show the data for id : ',id)
    const laptop = Laptops.find(laptop => laptop.id === id) || {} ;
    res.send(laptop);
}
)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 