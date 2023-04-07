const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');



// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function checkStatus(res){
    if(res.ok){
        return Promise.resolve(res)
    }
    else{
        return Promise.reject(new Error(res.statusText));
    }
}

//原本這個function沒有加入return，有bug。要加入return才會傳遞給執行的function資料
//用了這個function反而使其他使用這個function的功能有bug
function fetchData(url){
    return fetch(url)
        .then(res=> checkStatus)
        .then(res=> res.json())
        .catch(error => console.log('回傳錯誤',error))
};

Promise.all(
    //如果console.log（data)，會看到每串API回傳的結果以list的方式回傳[{message:xxx},{...}]
    [
        fetch('https://dog.ceo/api/breeds/list'),
        fetch('https://dog.ceo/api/breeds/image/random')
    ]
)
    .then(responses => Promise.all(responses.map(response => response.json())))
    // .then(checkStatus)
    .then(data => {
        console.log(data);
        const breedList = data[0].message;
        const imgUrl = data[1].message;

        getoptions(breedList);
        getRandomImg(imgUrl);

    })
    .catch(error => {console.log(error)})

/* 以下四行被上方的Promise.all()取代，會更組織化
fetchData('https://dog.ceo/api/breeds/list')
    .then(data => getoptions(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
    .then(data => getRandomImg(data.message)) */


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function getoptions(data){
    const options = data
        .map(item => `<option value=${item}>${item}</option>`)
        .join(""); //join是為了把[...,...]中的COMMA刪除，用“”取帶
    select.innerHTML = options;
}

function getRandomImg(data){
        const html = `<img src="${data}" alt="">
                      <p>點擊瀏覽更多圖片${select.value}s</p>`;
        card.innerHTML = html;
}

function getBreedImg(){
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then (data =>{
            console.log(data);
            img.src = data.message;
            img.alt = breed;
            p.textContent = `點擊圖片看更多${breed}s`;
            }
        )
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change',getBreedImg);
card.addEventListener('click',getBreedImg);
form.addEventListener('submit',postData);


// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e){
    e.preventDefault(); //有被呼叫才會動，不要自己執行
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const config = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({name , comment})
    }
    fetch('https://jsonplaceholder.typicode.com/comments', config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

/* 學習：
1. 拿到的回傳資料一定要轉json()
2. json() , JSON.parse()不一樣 ，json()是為了response設計的,
 JSON.parse是在JS原生把string轉JSON的方式
3. 有時候功能打包到另個function會出錯，例如項重複了一樣的json()，就會有bug */
