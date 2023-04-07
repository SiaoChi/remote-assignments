//使用for loop的方法
function avg(data){
    let sum = 0
    for (let i = 0 ; i < data.products.length ; i++ ){
        sum += data.products[i].price
    }
    return sum / data.size
}

//使用forEach的方法
function avg2(data){
    const { products } = data;
    let sum = 0;
    products.forEach( product => {
        sum += product.price} );
    return sum / data.size
}

//使用reduce的方法
function avg3(data){
    const { size, products } = data;
    const total = products.reduce((sum,product)=> sum + product.price ,0);
    const avgPrice = total / size;
    return avgPrice
}

console.log(avg2({
    size:3,
    products:[{
        name:'a',
        price:100},
        {
        name:'b',
        price:800},
        {
        name:'c',
        price:250},
        ]

    }))


//自我練習：運用reduce把[[...array],[...array]] => [...array]
const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

    // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];


const flatMovies = users.map(user => user
    .favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [...arr,...titles],[])

console.log(flatMovies)