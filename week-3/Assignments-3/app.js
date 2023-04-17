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


app.get('/myName',(req,res)=>{
    console.log('----app.get----')
    // console.log('req params: ' + req.params) // { myName: 'kelly' }
    console.log('Cookies: ', req.cookies)
    // const username = req.cookies.username; //Cookies:  { csrftoken: 'lXg9QcohSul2QdbUeezTeeo2TOBTXRxS' }
    const { name } = req.query
    const { username } = req.cookies
    if( username ){
        const html = `<html><h1>你的名字是 ${username}</h1></html>`;
        return res.send(html);
    }else if(name){
        const html = `<html><h1>你的名字是 ${name}</h1></html>`;
        return res.send(html);
    }
    else{
        res.sendFile(path.resolve(__dirname,'./public/username.html'))
    }
})


app.post('/trackName',(req,res)=>{
    console.log('----app.post----')
    const {name} = req.body
    if(name){
        res.cookie('username', name)
            .redirect(302,`/myName?name=${name}`);

    } else{
        res.status(400).send('請重新輸入名字')
    }
})



app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})