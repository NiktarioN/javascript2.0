// Task 1
console.log('Мое имя: Никита Трофимов');

// Task 2
console.log(12);

// Task 3
console.log('Добро ' + ' пожаловать ' + ' на курс');

// Task 4
// alert(2019);

// Task 5
// alert(2019 - 200);

// Task 6
document.getElementById('one').innerHTML = 'Hello World';

// Task 7
document.getElementById('two').innerHTML = 12 * 12;

// Task 8
document.querySelector('.one').innerHTML = 'Hello World again';

// Task 9
document.querySelector('h2 span').innerHTML = 'world';

// Task 10
document.querySelector('.three').innerHTML = '<h3>Произвольный текст для Task 10</h3>'

// Task 11 Зачем использовать + перед знаком =, если без него все работает? Даже внутри innerHTML можно разделить элементы знаком + и будет так же работать
document.querySelector('.four').innerHTML += '<h4>Произвольный заголовок для Task 11</h4><p>Параграф с текстом для Task 11</p>';

// Task 12
let a = document.querySelector('.five');
a.innerHTML = 3.1415

// Task 13
let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

// Task 14
let z1 = 6,
	z2 = 3;
document.querySelector('.task14').innerHTML = z1 * z2;

// Task 15
let y1 = 6,
	y2 = 3;
document.querySelector('.task15').innerHTML = y1 / y2;

// Task 16
let x1 = 'Hello',
	x2 = 5;
document.querySelector('.task16').innerHTML = x1 + x2;
console.log(typeof (x1 + x2));
// Вывод: В JS при сложении строки с числом число тоже превращается в строку 

// Task 17
let d1 = document.getElementsByClassName('test-1');
console.log(d1);
// Вывод: Нам показывает элемент в дереве документа, его номер и length элемента, т.е. массив данных (если использовать getElementsByClassName), если использовать querySelector, то только сам элемент и его содержимое

// Task 18
let d2 = document.querySelector('.test-2');
console.log(d2);
d2 = 5;
console.log(d2);
// Вывод: Присвоили другое значение переменной, поэтому и выводится просто значение 5

// Task 19
let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);
// Вывод: Присвоили другое значение переменной, поэтому и выводится div.s4

// Task 20
// document.querySelector('body').innerHTML = '';
// Вывод: Тег body является "телом" нашего документа. Присваивая ему пустую строку мы удаляем все элементы в этом главном теге