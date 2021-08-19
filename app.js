const express = require('express');
const path = require('path')
const ejs = require('ejs')
const app = express();

const myLogger =(req,res,next)=>{
    console.log("Middleware Log 1")
    next();
}
const myLogger2 =(req,res,next)=>{
  console.log("Middleware Log 2")
  next();
}

//template engine
app.set("view engine","ejs")

//middlewares
app.use(express.static('public'))

//routes
app.get('/',(req,res)=>{
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

app.use(myLogger)
app.use(myLogger2)
app.get('/', (req, res) => {
 const blog = { id: 1, title: "Blog title", description: "Blog description" }
  res.send(blog)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
