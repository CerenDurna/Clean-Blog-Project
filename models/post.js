const mongoose = require('mongoose')
const Schema=mongoose.Schema;

//schema yarat
const PostSchema= new Schema(
    {
        title: String,
        description:String,
        dateCreated:{
            type: Date,
            default:Date.now}
    }
)
//modele dönüştürdük
const post=mongoose.model('post',PostSchema)                             
//export et
module.exports=post