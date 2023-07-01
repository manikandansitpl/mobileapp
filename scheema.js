const mongoose = require('mongoose')

const UserScheema = mongoose.Schema({
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

const trendingScheema = mongoose.Schema({
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
        required:false
    }
},
{
    timestamps:true
}
)


const User =  mongoose.model('News' , UserScheema);
const User1 =  mongoose.model('RegisterUser' , UserScheema1);
const Trending = mongoose.model('trendingNews',trendingScheema)
module.exports = {User, User1,Trending};