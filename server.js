const express = require('express')
const app = express()
const postRouter = require('./Routes/post_route')
const commentRouter = require('./Routes/comment_route')
const exphbs  = require('express-handlebars');
const userRouter = require('./Routes/user_route')
const path = require('path')
const mongoose = require('mongoose');
const bodyParse = require('body-parser')





mongoose.connect('mongodb://localhost/mainbase', {useNewUrlParser: true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
})
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.use(express.static(path.join('public')));
app.use('/',postRouter)
app.use('/',commentRouter)
app.use('/',userRouter)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const port = process.env.PORT = 3000

app.listen(port, console.log(`app is running on port ${port}`))