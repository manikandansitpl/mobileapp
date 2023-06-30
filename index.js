const express = require('express')
const app = express();

const iam = require('./awsIam')
var morgan = require('morgan')
var mongoose = require('mongoose')
const router = require('./routes/router');
const cors = require('cors')
//middle ware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// const url = 'mongodb+srv://manikandansitpl3:83mb1dmaopS%40@mobilecluster0.nkmpjqj.mongodb.net/sudentDB';
// const url = 'mongodb://0.0.0.0:27017/unqueDB';
const url = 'mongodb://0.0.0.0:27017/fdmDb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
    // Perform the data deployment here
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api/person', router)
// Call the listUsers function
// iam.listUsers()
//   .then((users) => {
//     console.log('List of IAM users:', users);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

///port creation
app.listen(8000, (error) => {
  console.log('port connected')
});