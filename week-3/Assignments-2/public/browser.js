const form = document.getElementById("myform");
const inputele = form.querySelector('input');

form.addEventListener('submit', (e) => {
    // e.preventDefault();

    if(!inputele.value.length){
        alert('請輸入名字');
    }
    const name = inputele.value;
    const url = `http://127.0.0.1:3000/trackName?name=${name}`;
    console.log(url)
    fetch(url)
        .catch(error => console.log(error))
})