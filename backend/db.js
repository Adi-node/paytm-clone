import mongoose, { model, Schema } from "mongoose";
mongoose.connect(process.env.MONGO_URL);

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:30
    },

    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },

    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },

    password:{
        type:String,
        required:true,
        minLength:6
    }
})

export const userModel = model('User',userSchema);

const accountSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },

    balance:{
        type:Number,
        required:true,
        default:0
    }
})

export const accountModel = model('Account',accountSchema);