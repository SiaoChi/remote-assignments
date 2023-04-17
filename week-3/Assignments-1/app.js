const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(express.json())
app.use(express.static('./public'))


app.listen(3000, () => {
  console.log('Server is listening on port 3000....')
})
// app.use('/public', express.static((__dirname, 'public')));
app.use(express.static('./public'))


//Assignment-2 設定url response sum
app.get('/',(req,res)=>{
    //＿＿dirname = 絕對路徑，Users/KellyGuo/appworks/remote-assignments/week-3/Assignments
    //須解釋resolve
    res.sendFile(path.resolve(__dirname, './public/sum.html'))
})

app.get('/data',(req,res)=>{
    const checkNumber = req.query.number;
    const number = Number(checkNumber);
    console.log(checkNumber)
    if(checkNumber === '') {
        res.send("<h1>Lack of Parameter</h1>")
    }else if(isNaN(number) || !Number.isInteger(number) || number< 0){
        res.send("<h1>請輸入正整數數字</h1>")
    }else{
        const sum = (1 + number) * number /2
        res.send(`<h1>數字總和為${sum}</h1>`)
    }
})


app.get('/:myName',(req,res)=>{
    console.log('----app.get----')
    // console.log('req params: ' + req.params) // { myName: 'kelly' }
    console.log('Cookies: ', req.cookies)
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