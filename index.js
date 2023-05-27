const express = require('express')
const app  = express();

var morgan = require('morgan')
var mongoose = require('mongoose')
const router = require('./router');
const cors = require('cors')
//middle ware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const url = 'mongodb://127.0.0.1:27017/peoples'; 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
    // Perform the data deployment here
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

  app.use('/api/person',router)

///port creation
app.listen(2000,()=>{
    console.log('port connected')
});