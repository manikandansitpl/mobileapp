const mongoose = require('mongoose')

const StudentSceema = mongoose.Schema({
    Name :{
        type : String,
        required : true
    },
    Password:{
        type : String,
        required:true
    },  
    crateTime:{
        type:Date,
        default:Date.now
    }
})

const personsScheema = mongoose.Schema({
    Name:{
         type:String,
         required:true
    }
})

module.exports = mongoose.model('persons' , StudentSceema);
module.exports = mongoose.model('sirs' , personsScheema)