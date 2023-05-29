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



module.exports = mongoose.model('studentDetail' , StudentSceema);