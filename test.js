const mongoose = require('mongoose')
const Schema=mongoose.Schema;

//database'i bağla
mongoose.connect('mongodb://localhost/pcat-test-db'),{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}

//şablonu yaptık (schema)
const PhotoSchema= new Schema(
    {
        title: String,
        description:String
    }
)
//modele dönüştürdük
const Photo=mongoose.model('Photo',PhotoSchema)

// //veritabanına collection oluşturmuş olduk
// Photo.create({
//     title: 'Photo Title 1',
//     description: 'Photo description 1 lorem ipsum'
// })

// //read
// Photo.find({},(err,data)=>{
//     console.log(data);
// })

// //update
// const id = "611df970e155f32b7c5feb8a";
// Photo.findByIdAndUpdate(
//     id,
//     {
// title: 'Photo title 1 updated',
// description: 'Photo description 1 updated'
//     },
//     (err,data)=>{console.log(data)
// })

const id = "611df970e155f32b7c5feb8a";

//delete
Photo.findByIdAndDelete(id,(err,data)=>{
    console.log('Photo is removed')
})