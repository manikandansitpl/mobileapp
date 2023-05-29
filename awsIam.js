// const AWS = require('aws-sdk');
// // Configure the AWS SDK with your credentials and desired region
// AWS.config.update({
//     accessKeyId: 'AKIASJPYHSTHESVL2ZMJ',
//     secretAccessKey: 'x6JdCasscXfoAv6gEXGk5LCO7Ocl77MCDowVqKVb',
//     region: 'ap-south-1', // Replace with your desired region
//   });
  
//   // Create an IAM service object
//   const iam = new AWS.IAM();
// // Function to list IAM users
// const listUsers = () => {
//     return new Promise((resolve, reject) => {
//       iam.listUsers({}, (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data.Users);
//         }
//       });
//     });
//   };
  
//   // Export the listUsers function
//   module.exports = {
//     listUsers,
//   };