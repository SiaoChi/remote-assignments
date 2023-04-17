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
    //＿＿dirname = 絕對路徑，Users/KellyGuo/appworks/remote-assignments/week-3/Assignments-2
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


app.get('/myname',(req,res)=>{
    console.log('----myname get----')
    const { name } = req.cookies
    console.log("----")
    console.log(name)

    if(name){
        console.log(`你名字是${name}`)
        const html = `<html><h1>你的名字是 ${name}</h1></html>`;
        return res.send(html);
        // res.sendFile(path.resolve(__dirname, './public/myname.html'), { name: name });
    }else{
        console.log('send insert name html ')
        res.sendFile(path.resolve(__dirname,'./public/trackname.html'))
    }
})

app.get('/trackName',(req,res)=>{
    console.log('----trackname get----')
    const { name } = req.query
    if(name){
         res.cookie('name', name)
    } else{
        res.sendFile(path.resolve(__dirname,'./public/trackname.html'))
    }
    console.log('redirect to /myname')
    res.redirect(307,'/myname')

})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})
