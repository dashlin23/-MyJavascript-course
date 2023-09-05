

// let, const
let pure = 3;

pure =34

console.log(pure)

// strings, numbers, boolean, undefined, symbol
 
const name = 'john';
const age = 40;

// Concatenation
console.log('My name is ' + name + ' and i am ' + age );

  // TEMPLATE STRING
  const hello = `My name is ${name} and I am ${age}`;

  console.log(hello);
   // string properties and method
  const t ='technology, computer, it, code';

  console.log(t.split(', '));

  // Arrays - variables that hold multiple verse

  const fruits = ['apples', 'oranges', 'pears'];

  fruits[3] ='grapes';

  fruits.push('mangos');

  fruits.unshift('strawberries');

  fruits.pop();

  console.log(Array.isArray('hello'));

  console.log(fruits.indexOf('oranges'));

  console.log(fruits);


  const person1 = {
    firstName: 'john',
    lastName: 'doe',
    age: '30',
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street:'30 nonas grand',
        city: 'blight',
        state: 'newcastle'
    }
  }
   person1.email = 'john@gmail.com';

  console.log(person);

  const todos =[
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted:false
    }
  ];

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
})

console.log(todoCompleted);

  for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
  }
  // for 
  for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
  }
   for(let todo of todos) {
    console.log(todo.isCompleted);
  }
// while 
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

const y = 19;
if(x > 4 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

const x = 11; 

const color ='green';

 switch(color) {
  case 'red':
  console.log('color is red');
  break;
  case 'blue':
    console.log('color is blue');
    break;
    default:
      console.log('color is NOT red or blue');
      break; 
 }

 
const addNums = num1 => num1 + 5 ; 


console.log(addNums(5, 5));


// Constructor Function
function Person (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
 
}
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// class 
 class person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 }



// instantiate object 
const person1 = new Person('john', 'doe', '4-2-1849');
const person2 = new Person('dairy', 'gracia', '5-7-1945');

console.log(person1.getFullName());
console.log(person2);


const items = document.querySelectorAll('.item');
 
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent ='Hello';
ul.children[1].innerText = 'Drake';
ul.lastElementChild.innerHTML = '<h1>Welcome</h1>'

const btn =document.querySelector('.btn');
btn.style.background = 'red'

button control

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
 document.querySelector('#my-form').style.background = '#ccc';
 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});



// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple element
 console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(o) {
  o.preventDefault();

  console.log()

if(nameInput.value == '' || emailInput.value == '' ) {
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all feilds';

  setTimeout(() => msg.remove(), 3000);
} else {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

   userList.appendChild(li);

   // Clear fields
   nameInput.value = '';
   emailInput.value = '';
}
}


  