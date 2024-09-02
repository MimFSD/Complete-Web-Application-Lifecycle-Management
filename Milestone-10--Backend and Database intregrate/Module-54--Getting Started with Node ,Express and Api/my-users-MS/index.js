const express = require ('express');
const cors = require('cors')
const app = express();
const port =process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json())
const users = [
    { id : 1 , name: 'Hamid' , email : 'hamid@gmail.com'} ,
    { id : 2 , name: 'Rafiq' , email : 'Rafiq@gmail.com'} ,
    { id : 3 , name: 'Aslam' , email : 'aslam@gmail.com' } ,
]
app.get('/',(req,res) => {
    res.send('Users Management server running for express JS and more ')
})

app.get('/users',(req,res) => {
    res.send(users);
}
)

app.listen(port,() => {
    console.log(`Server is running  on port -- localhost:${port} `);
})