const express = require('express')
const path = require('path')
const members = require('./members')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')

const app = express()



//init middleware
app.use(logger)

//Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended : false})) //so that we can send url encoded data


const PORT = process.env.PORT || 4000 ;



app.listen(PORT , () => console.log('Server started on PORT' , PORT))

app.get("/" , function (req , res)  {
    res.sendFile(path.join(__dirname, 'public' , 'index2.html'))
})

//SET stattic folder

//Express is used for building JSON apis so that u can connect with front end framwework like react or u want to render 
//or u wanr to render templates where u can insert dynamic data so that u can make ur app dynamic



//middle ware Functions : the functions which have the access to the req and res objects And u can actually change things

app.use(express.static(path.join(__dirname , 'public')))


//Members APi routes
app.use('/api/members' , require('./routes/api/members'))

