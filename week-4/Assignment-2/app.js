/*
Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make AJAX call to a URL by GET method,
 and show the response data on the page. You may render UI with any style.
*/



function ajax(url, callback) { // your code here
    fetch(url)
        .then(res => res.json())
        .then(console.log)
        .then(callback)
        .catch(err => console.log(err))
}


function render(data) {
let newDiv = document.createElement("div")
for (let i = 0 ; i < data.length ; i++){
   const prodcut = `<h2>data[i].name</h2>
            <p>data[i].price</p>
            <p>data[i].description</p><hr>`;
   newDiv.appendChild(prodcut)
}
console.log(newDiv);
body.innerHTML = newDiv;

}

ajax( 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products', function (response) {
render(response); }
)

// you should get product information in JSON format and render data in the page