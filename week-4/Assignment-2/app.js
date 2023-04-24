/*
Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make AJAX call to a URL by GET method,
 and show the response data on the page. You may render UI with any style.
*/


const body = document.querySelector('body')
const div = document.querySelector('div')

body.addEventListener('onload', () => {
    ajax('https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products', function (response) {
            render(response);
        }
    )
})

function render(data) {
    let content = '';
    for (let i = 0; i < data.length; i++) {
        content += `<div class="card" style="width: 18rem;">
           <div class="card-body">
           <h5 class="card-title">${data[i].name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${data[i].price}</h6>
           <p class="card-text">${data[i].description}</p>
           </div>
           </div>`;
    }
    div.insertAdjacentHTML("afterbegin", content);
// 也可以使用innerHTML只是用這個方式可以決定insert的位置
}

function ajax(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(callback)
        .catch(err => console.log(err))
        .finally(console.log('ajax finally'))
}


ajax('https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products', function (response) {
        render(response);
    }
)

// you should get product information in JSON format and render data in the page