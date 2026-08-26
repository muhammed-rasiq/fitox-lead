import mongoose from "mongoose";

const userScheama = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    Plan:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     LeadStatus:{
        type:String,
        default:"New",
        required: false
    }
    
    
})

const User = mongoose.model('Users',userScheama)

export default User;