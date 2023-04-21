const express = require("express");
const app = express()
const user = require('./router/user')

//cookie paser
const cookieParser = require('cookie-parser')

// json parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json({ extended: false }))

// app use to router
app.use(cookieParser())
app.use(express.json())
app.use(express.static('./public'))
app.use('/', user)

// error
app.use((req, res) => {
  res.send('can not find any')
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})