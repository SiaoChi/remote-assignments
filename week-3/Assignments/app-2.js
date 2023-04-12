const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')


//Assignment-1 server setting
app.listen(3000, () => {
  console.log('Server is listening on port 3000....')
})
app.use(express.static('./public'))

//Assignment-4
app.use(cookieParser())
app.use(express.json())

app.get('/:myName',(req,res)=>{
    console.log('----app.get----')
    // console.log('req params: ' + req.params) // { myName: 'kelly' }
    // console.log('Cookies: ', req.cookies)
    // const username = req.cookies.username; //Cookies:  { csrftoken: 'lXg9QcohSul2QdbUeezTeeo2TOBTXRxS' }
    const { username } = req.cookies
    const { myName } = req.params; //取出url的:myName
    if( username && username === myName){
        res.send(`<h1>你的名字是${myName}</h1>`)
    }else{
        res.sendFile(path.resolve(__dirname,'./public/username.html'))
    }
})

//建立cookie的api，會回傳status200，讓前端可以redirect url到 /:myNmae
app.post('/trackName',(req,res)=>{
    console.log('----app.post----')
    const {name} = req.body
    if(name){
        res.cookie('username', name)
            .status(200)
            .json({success: true , name : name, redirected: true})
            // .redirect(`/${name}`);
            // 問題：可否在cookie建立後直接redirect到 /:myName，通常是前端還後端負責redirect?
            /* ChatGTP :後端的 res.redirect() 是在伺服器端進行跳轉，因此前端畫面不會改變。
            當瀏覽器收到來自伺服器端的重定向訊息後，它會自動發出新的請求，然後瀏覽器會載入新的頁面。*/

    } else{
        res.status(400).send('請重新輸入名字')
    }
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})
