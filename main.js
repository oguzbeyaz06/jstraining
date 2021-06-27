/*
let age = 22;
const myAge = 30;
var myName = 'username';
// let variable
//const === constant (SABİT)

// String
let email = '#';
let firstName = 'Oğuzhan';
let lastName = 'Beyaz';
let fullName = firstName +' '+ lastName;

console.log(fullName[2]);
//u
console.log(fullName.length);

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result);

let index = email.indexOf('@');

console.log(index);

// Common String
console.log(email.lastIndexOf('z'));

console.log(email.slice(0,5));

console.log(email.substr(4,10));

console.log(email.replace('o', 'ö'));

console.log(email.replace('06' , 'selam'));

//math operators
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

console.log(10 / 2 );

console.log(radius % 3);

console.log(pi * radius **2);

// NaN - not a number
console.log(5/'hello');

let liriks = 'the blog has ' + radius + ' created';
console.log(liriks);

//Template string
const title = 'This website title area';
const author = 'Oğuzhan';
const likes  = 30;

console.log('title :' + title + ' author : ' + author +  ' likes : ' + likes);

let complete = `The blog called ${title} by ${author} has ${likes} likes`;

console.log(complete);  
/*
let html = `
    <h2>${title}</h2>
    <p> By ${author}</p>
    <span>likes = ${likes}</span>
`;
console.log(html);

// arrays

let ninjas =  ['oguz' , 'beyaz', 'selam'];
console.log(ninjas);
console.log(ninjas.length);

// array methods

let spls = ninjas.join(',');
let splsl = ninjas.indexOf('selam');
let splsls = ninjas.concat(['ken' , 'kun']);
let pushing  = ninjas.push('ken');
let popss = ninjas.pop();

console.log(spls);
console.log(splsl);
console.log(splsls);
console.log(pushing);

let agea = '100'; //False
console.log(agea);

score = Number(agea);
score++;
console.log(score);

for(let i=0; i < ninjas.length; i++)
{
    console.log(ninjas[i]);
}

const password = 'p@ass';

if(password.length >= 8)
{
    console.log("Password is long enough!");
}else {
    console.log("password is not long");
}

//function

function play() {
    console.log("Hello play");
}
play();

const speak = function (name = 'luigi' , age = 22) {
  console.log(`good day mr ${name}.im ${age} years old thanks.`);  
};
speak();

const calcArea = function (radius) {
    return 3.14 * radius**2;
};
const area = calcArea(5);
console.log(area);

//const calcArea = (radius) => {
//   return 3.14 * radius**2;
//}

const bill = (products,tax) => {
    let total =0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
   }
   return total;
}
const total = bill([10,15,30],0.2);
console.log(total);


//functions

const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);


//methods
let name = "oğuz";

let resultTwo = name.toUpperCase();

console.log(resultTwo);


let people = ['mario','luigi','ryu','shaun','chun-li'];
people.forEach(function(person,index){
    console.log(index,person);
});

const ul = document.querySelector('.people');
let html =  ``;

people.forEach(function(person){
    html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;

// object

let user = {
    name : 'crystal',
    age  : 21,
    email : 'asdasd@asdasdçcom',
    location : 'berlin',
    blogs: ['why mac rule','10 things something'],
    login: function(){
        console.log('the user logged in!');
    }
};
user.login();

const blogs = [
    {title : 'why mac % runes',likes:30},
    {title : '10 mac % runes',likes:40}
];
console.log(blogs);

console.log(Math);

const areas = 7.6;

console.log(Math.round(areas));
console.log(Math.floor(areas));
console.log(Math.ceil(areas));
console.log(Math.trunc(areas));

//random numbers

const random = Math.random();
console.log(random);
*/

// Document Object Model

// const para = document.querySelector('div.error');
// const paragraphError = document.querySelector('p.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para)
// })
// const errors = document.querySelectorAll('.error');
// console.log(errors);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

// const paras  = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>THIS IS A NEW h2</h2>';
// content.innerHTML += '<h2>THIS IS A NEW h2</h2>';

// const people = ['mario','luigi','yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// CHANGE ATTIRBUTE
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://mobahell.com');
// link.innerText = 'Thenet Ninja Website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','confirm');
// mssg.setAttribute('style', 'color:green;');

// const title = document.querySelector('h1');

// title.setAttribute('style','margin:50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';

// title.style.margin = '';


// Adding remove classes
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('oguz');
// content.classList.remove('oguz');
// content.classList.add('success');

//parents,children siblings

// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children))

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// chaining 
// console.log(title.nextElementSibling.parentElement.children);

//Event Basics



// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click',() => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     ul.append(li);
//     ul.prepend(li);
// });


// ul.addEventListener('click', e => {
//     //console.log('event in UL');
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('copy');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove',e => {
//     //console.log(e);
//     //console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX , e.pageY);
// });

// POPUP
// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');

// close.addEventListener('click', () => {
//     popup.style.display = 'none';
// })

// button.addEventListener('click',() => {
//     popup.style.display = 'block';
// });
// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// });

//Form Event

// const form = document.querySelector('.signup-form');
// const ptag = document.querySelector('p');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('submit', e => {
//     e.preventDefault(); //Sayfayı refresh yapmama
//     input validation
//     const username = form.username.value;
//     if (usernamePattern.test(username)){
//         ptag.textContent = 'that username is valid!';
//     }else {
//         ptag.textContent = 'username must contain letters only & be between 6-12 characters long';
//     }

//     console.log(username.value);
//     console.log(form.username.value);
//     Toplama İşlemi yaptım
//     let toplam = parseInt(form.sayi1.value) + parseInt(form.sayi2.value);
//     ptag.innerText = toplam;
    
// });

// testing RegEx
// const username =  'shaunp';
// const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);

// if(result)
// {
//     console.log('regex test passed :)');
// }else {
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern);
// console.log(result);

//live feedback

// form.username.addEventListener('keyup', e => {
//     //console.log(e.target.value, form.username.value);
//     if(usernamePattern.test(e.target.value)){
//         form.username.setAttribute('class', 'success');
//     }else {
//         form.username.setAttribute('class', 'error');
//     }
// });
