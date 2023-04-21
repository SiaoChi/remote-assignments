
// 抓取form input value

const signInform = document.getElementById('sign-in-form');
const signUpform = document.getElementById('sign-up-form');
const signinMsg = document.getElementById('signinMsg');
const signupMsg = document.getElementById('signupMsg');


signInform.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Sign in form submitted');
    const formData = new FormData(signInform)
    const email = formData.get('email').toLowerCase()
    const password = formData.get('password').toLowerCase()

    if( email.length == 0 || password.length == 0){
        alert('please fill out the form')
        return
    }

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email ,
            password : password ,
            }),
    }

    fetch('/signin',config)
        .then(res => res.json())
        // .then(console.log) console.log後不會傳送給下面資料（？），因為下面就沒有執行了，要找原因
        .then(data => {
            if (data.status === 'success'){
                console.log('登入成功')
                console.log('data.redirectUrl')
                window.location.href = data.redirectUrl
            }
            else if (data.status === 'failed') {
                console.log('登入失敗')
                signinMsg.innerText = '信箱或密碼錯誤，請重新輸入'
      }else {
                console.log('沒有對應到資料')
            }
        })

})



signUpform.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Sign up form submitted');
    const formData = new FormData(signUpform)
    const email = formData.get('email').toLowerCase()
    const password = formData.get('password').toLowerCase()
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email ,
            password : password ,
            }),
    }
    console.log(email)
    if( email.length == 0 || password.length == 0){
        alert('please fill out the form')
        return
    }

    fetch('/signup',config)
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success'){
                 console.log('註冊成功 from browser.js')
                window.location.href = data.redirectUrl
            }else if (data.status === 'failed'){
                console.log('註冊失敗');
                signupMsg.innerText = '信箱已經存在，請重新輸入';
            }
        })
        .catch(err => console.log(err))
})





//fetch to /login