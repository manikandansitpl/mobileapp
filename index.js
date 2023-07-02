const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const iam = require('./awsIam')
var morgan = require('morgan')
var mongoose = require('mongoose')
const router = require('./routes/router');
const cookieParser = require("cookie-parser");
const cors = require('cors')

//middle ware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(cookieParser())



const url = process.env.MONGO_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
    // Perform the data deployment here
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api/person', router)
const port = process.env.PORT || 8000
app.listen(port, (error) => {
  console.log(`port connected with ${port}`)
});