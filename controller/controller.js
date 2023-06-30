const{ User ,User1}= require('../scheema');
const bcrypt = require('bcrypt');
// const process = require('dotenv').config();
const Img = require('../scheema');
const multer = require('multer');
const asynchandler= require('express-async-handler')

const upload = multer({ dest: 'uploads/' })

let uploadHandler = upload.single('file')

const imageUpload = asynchandler((req, res ) =>{
  console.log(req.files)
   uploadHandler(req,res ,(err)=>{
  // if(err instanceof multer.MulterError){
  //   if(err.code === 'LIMIT_FILE_SIZE'){
  //     res.status(400).json({messgae:"maximum file size is 2 MB."})
  //   }
  //   return;
  // }
  if(!req.file){
    res.status(400).json({message:"no file."})
  }
  else{
    res.status(200).json({messgae:"success"})
  }
})
})


const register = asynchandler(async(req, res) => {
  const { Name, Password,Email } = req.body;
  try {
    const validateName = await User1.findOne({ Email: Email })
    if (!Name || !Password || !Email) {res.status(400).json('please fill all the fields')}
    if (validateName) {res.status(409).json("user already exist")}
    if (Name && Password && Email && !validateName) {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Hash the password with the salt
      const hashedPassword = await bcrypt.hashSync(req.body.Password,salt);
      const savep = await User1({Name: req.body.Name, Password:hashedPassword ,Email:Email});
      const show = await savep.save();
      res.status(200).json({message:"Register successfully" , show , token:show._id});
    }
  } catch (error) { throw error }
});

const login = asynchandler(async(req, res) => {
  const { Name, Password } = req.body;
  // const token = req.headers['authorization']
  // const secret = jwt.verify(token, 'your-secret-key');

  let storedHashedPassword;
  try {
    // Retrieve the hashed password from the data store based on the username
    const user = await User1.findOne({ Name });
    storedHashedPassword = user?.Password;
    if (user && await bcrypt.compareSync(Password, storedHashedPassword)) {
     // Passwords match, authentication successful
     return res.status(200).json({ message: 'Login successfull' ,user ,token:user._id});
    } else {
      // Passwords do not match
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
  }
});

const NewsPost = async (req, res) => {

  const {Title , News , Img} = req.body
    try {
        if (Title && News && Img ) {
            const savep = User({
              Title:Title,
              News:News,
              Img:Img
            })
            const show = await savep.save();
            res.status(200).json({message:'Message Upload successfully' , show})
        } else{
          res.status(400).send({message:"bad request"})
        }
    } catch (error) {
        throw error
    }
  };

  const NewsGet = async (req, res) => {
      try {
        const getNews = await User.find();
        res.set('Content-Type', 'application/json');
        res.status(200).json(getNews)
      } catch (error) {
          throw error
      }
    };

const personGet = async (req, res) => {
    const getApp = await RegisterStudent.find();
    res.set('Content-Type', 'application/json');
    res.status(200).json(getApp)
};

// const personPut = async (req, res) => {
//     const result = await persons.findByIdAndUpdate({ _id: req.params.id }, { $set: { Name: req.body.Name } }, { new: true })
//     res.status(200).json(result)
// };

// const personDelete = async (req, res) => {
//     const result = await persons.deleteOne({ _id: req.params.id })
//     res.status(200).json(result)
// };

module.exports = { login, register, personGet, imageUpload ,NewsPost ,NewsGet};