const express = require('express')
const router = express.Router()
const path = require("path");
const pool = require("../database")


router.get('/', (req , res) =>
    res.sendFile(path.resolve(__dirname, '../public/index.html')))

router.get('/member',(req,res)=>{
    res.send('登入成功，歡迎你')
})

router.post('/signin', async (req, res) => {
  console.log('收到sign in資料');

  const { email , password } = req.body;
  console.log(`${email} , ${password}`)
  const [row] = await pool.query(`SELECT * FROM user WHERE email = ? AND password = ?` , [email,password]);
  console.log(row)
  if (row.length === 0) {
      // no match
      console.log('登入失敗，帳號或密碼錯誤')
      res.json({status:'failed' , redirectUrl : './'})
  }else{
      //login success
      console.log('登入成功')
      res.json({status:'success' , redirectUrl : './member'})
    }
});

router.post('/signup',  async (req, res) => {
  const { email , password } = req.body;
  const [row] = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);

  if (row.length > 0){
      // email is existed
      console.log('信箱已經存在')
      res.json({ status:'failed', redirectUrl : './'})

  }else{
      console.log('正在嘗試存入資料')
      const [result] = await pool.query(`
        INSERT INTO user (email, password)
        VALUES (?,?)
    `, [email, password])
      console.log(result.insertId)
      console.log(`${email} , ${password}`)
      console.log('註冊成功')
      res.json({status:'success' , redirectUrl : './member'})
  }

})

module.exports = router