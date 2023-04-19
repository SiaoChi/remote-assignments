
const express = require("express");
const app = express()
const cookieParser = require('cookie-parser')
const user = require('./Router/user')

app.use(cookieParser())
app.use(express.json())
app.use(express.static('./Public'))
app.use(user)

app.use((req, res, next) => {
  const err = new Error('I cannot find this page...')
  err.status = 404
  next(err)
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})



