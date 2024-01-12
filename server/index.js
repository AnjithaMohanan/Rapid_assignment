const express=require('express');
const mongoose=require('mongoose');
const path=require('path')
const cors=require('cors');
const { dbConnection } = require('./db/dbConnect');
const {readdirSync}=require('fs')

const app=express();
require ('dotenv').config()
const PORT=process.env.PORT || 5000

//Middlw wares

app.use(cors());
app.use(express.json())

//routes
readdirSync('./routes').map((route) => app.use('/api',require('./routes/' + route)))


// server static files

app.use('/public',express.static(path.join(__dirname,'public')))

// const connect =()=>{
//     mongoose.connect(process.env.MONGO).then(()=>{
//         console.log("mongodb connected")
//     }).catch((err)=>{
//         throw err;
//     })

// }
if (process.env.NODE_ENV === 'production') {
  const indexPath = path.join(__dirname, '..', 'frontend', 'build', 'index.html');
  console.log('Resolved Path:', indexPath);

  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(indexPath);
  });
}


app.listen(PORT,()=>{
    dbConnection()
    console.log('server running')
})

