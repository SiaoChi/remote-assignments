const form = document.getElementById("myform");
const submitBtn = document.querySelector('#btn');

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const username = formData.get("name"); //這裡抓到的name是input的屬性 [name]="username"

    if(!username){
        alert('請輸入名字');
        submitBtn.disabled = false;
        return
    }

    const url = 'http://127.0.0.1:3000/trackName'; //後端api url
    const config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: username}),
    }

    fetch(url, config)
        .catch(err => console.log(err))
    submitBtn.disabled = false;
})