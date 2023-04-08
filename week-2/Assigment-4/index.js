
const banner = document.querySelector(".banner")
const banner_txt = document.querySelector("#banner-txt")
banner.addEventListener('click',()=>{
    banner_txt.innerHTML ='Have a Good Time!';
    }
);

const button = document.querySelector("#btn")
const hideArea = document.querySelector(".content-box-container-2")

button.addEventListener('click',()=> {
    console.log('點擊btn')
    // "none"需要用 === ""空集合代表
    if(hideArea.style.display == ""){
        console.log('display: flex')
        hideArea.style.display = "flex"}
    else{
        console.log('display: none')
        hideArea.style.display = ""
    }
})