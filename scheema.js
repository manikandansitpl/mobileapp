const mongoose = require('mongoose')

const UserScheema = mongoose.Schema({
    // Name :{
    //     type : String,
    //     required : true
    // },
    // Password:{
    //     type : String,
    //     required:true
    // },
    // MobileNumber:{
    //     type:Number,
    //     required:true,
    // },
    // picture:{
    //     type:String,
    //     required:false,
    //     default:"https://i.stack.imgur.com/l60Hf.png"
    // }
    Title:{
        type:String,
        required:true
    },
    News:{
        type:String,
        required:true
    },
    Img:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const UserScheema1 = mongoose.Schema({
    Name :{
        type : String,
        required : true
    },
    Password:{
        type : String,
        required:true
    },
    Email:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
}
)


const User =  mongoose.model('News' , UserScheema);
const User1 =  mongoose.model('RegisterUser' , UserScheema1);
module.exports = {User, User1};