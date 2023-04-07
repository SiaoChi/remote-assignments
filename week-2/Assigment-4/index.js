

const banner = document.querySelector(".banner")
const banner_txt = document.querySelector("#banner-txt")
banner.addEventListener('click',()=>{
    banner_txt.innerHTML ='Have a Good Time!';
    }
);

const button = document.querySelector("#btn")
const hideArea = document.querySelector(".content-box-container-2")

button.addEventListener('click',()=> {
    if(hideArea.style.display === 'none'){
        hideArea.style.display = "flex"}
    else{
        hideArea.style.display = "none"
    }
})