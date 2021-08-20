const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')
const app = express();

//database'i bağla
mongoose.connect('mongodb://localhost/pcat-test-db'),{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}

const post=require('./models/post');
//template engine
app.set("view engine","ejs")

//middleware fonksiyonları
//body'deki bilgileri tut
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());


// const myLogger =(req,res,next)=>{
//     console.log("Middleware Log 1")
//     next();
// }
// const myLogger2 =(req,res,next)=>{
//   console.log("Middleware Log 2")
//   next();
// }

//routes
app.get('/',async(req,res)=>{
  const posts= await post.find({})
  res.render('index',{
    posts
  })
  //res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('index')
})

//routes
app.get('/about',(req,res)=>{
  //res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('about')
})
//routes
app.get('/add_post',(req,res)=>{
  //res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('add_post')
})
//request nesnesinden gelen body bilgisini yakaladık
 app.post('/post', async(req, res) => {
   //console.log("!!!!!!!!!")
   //post oluştur
   await post.create(req.body);
   //anasayfaya yönlendir
  
   res.redirect('/')
 });

//app.use(myLogger)
//app.use(myLogger2)
//app.get('/', (req, res) => {
 //const blog = { id: 1, title: "Blog title", description: "Blog description" }
  //res.send(blog)
//})


const port = 9000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
