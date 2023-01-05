const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//set template enginge (ejs)
app.set('view engine', 'ejs');


app.get("/", (req, res)=>{
    res.render('index',{
        title: 'Home',
    });
})
app.get("/about", (req, res)=>{
    res.render('about',{
        title: 'About',
});
})

app.get("/contact",(req, res)=>{
    res.render('contact',{
        title : 'contact',
    });
})
app.get("/services",(req, res)=>{
    res.render('services',{
        title : 'services',
    });
})

app.listen(PORT, ()=>{
    console.log(`server is running on port no : ${PORT}`);
})