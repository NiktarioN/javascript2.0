// Task 1. 
let a = 7,
	b = 9,
	inputIn1 = document.querySelector('.task1');
inputIn1.value = a * b;
console.log(a * b);

// Task 2
let c = 7,
	d = 9,
	inputIn2 = document.querySelector('.task2');
inputIn2.value = c / d;

// Task 3
let e = 3,
	f = 5,
	inputIn3 = document.querySelector('.task3');
inputIn3.value = e + f;

// Task 4
let e1 = '3',
	f1 = '5',
	inputIn4 = document.querySelector('.task4');
inputIn4.value = e1 + f1;
// Вывод: Т.к. складываем строки, то они просто "склеиваются"

// Task 5
let e2 = 3,
	f2 = 0,
	inputIn5 = document.querySelector('.task5');
inputIn5.value = e2 / f2;

// Task 6
let e3 = 3,
	f3 = 'Hello',
	inputIn6 = document.querySelector('.task6');
inputIn6.value = e3 + f3;

// Task 7
let e4 = 3,
	f4 = 'Hello',
	inputIn7 = document.querySelector('.task7');
inputIn7.value = e4 * f4;

// Task 8
let inputIn8 = document.querySelector('.input_task8'),
	btnClick8 = document.querySelector('.btn_task8');

btnClick8.onclick = () => {
	console.log(inputIn8.value);
}

// Task 9
let inputIn9 = document.querySelector('.input_task9'),
	btnClick9 = document.querySelector('.btn_task9'),
	divText9 = document.querySelector('.text_task9');

btnClick9.onclick = () => {
	divText9.innerHTML = inputIn9.value;
	inputIn9.value = '';
}

// Task 10
let inputIn10 = document.querySelector('.input_task10'),
	btnClick10 = document.querySelector('.btn_task10'),
	divText10 = document.querySelector('.text_task10');

btnClick10.onclick = () => {
	divText10.innerHTML = +inputIn10.value * 10;
	inputIn10.value = '';
}

// Task 11
let inputIn11 = document.querySelector('.input_task11'),
	btnClick11 = document.querySelector('.btn_task11'),
	divText11 = document.querySelector('.text_task11');

btnClick11.onclick = () => {
	divText11.innerHTML = +inputIn11.value + 11;
	inputIn11.value = '';
}

// Task 12
let inputName12 = document.querySelector('.input-name_task12'),
	inputSurname12 = document.querySelector('.input-surname_task12'),
	btnClick12 = document.querySelector('.btn_task12');

btnClick12.onclick = () => {
	console.log('Hello ' + inputName12.value + ' ' + inputSurname12.value);
	inputName12.value = '';
	inputSurname12.value = '';
}

// Task 13
let firstNum13 = document.querySelector('.input-num-one_task13'),
	secondNum13 = document.querySelector('.input-num-two_task13'),
	btnClick13 = document.querySelector('.btn_task13'),
	divText13 = document.querySelector('.text_task13');

btnClick13.onclick = () => {
	divText13.innerHTML = +firstNum13.value + (+secondNum13.value);
	firstNum13.value = '';
	secondNum13.value = '';
}

// Task 14
let inputIn14 = document.querySelector('.input_task14'),
	btnClick14 = document.querySelector('.btn_task14');

btnClick14.onclick = () => {
	inputIn14.value = 'Hello';
}

// Task 15
let y = document.querySelector('.input_task15'),
	btnClick15 = document.querySelector('.btn_task15');

btnClick15.onclick = () => {
	y.style.border = '2px solid red';
}
// Вывод: Просто изменили через JS стили input

// Task 16
let firstNum16 = document.querySelector('.input-num-one_task16'),
	secondNum16 = document.querySelector('.input-num-two_task16'),
	btnClick16 = document.querySelector('.btn_task16'),
	divText16 = document.querySelector('.text_task16');

btnClick16.onclick = () => {
	divText16.innerHTML = +firstNum16.value + (+secondNum16.value);
	firstNum16.value = '';
	secondNum16.value = '';
}

// Task 17
let InputIn17 = document.querySelector('.input_task17'),
	btnClick17 = document.querySelector('.btn_task17');

btnClick17.onclick = () => {
	let t = InputIn17.value;
	t = parseInt(t);
	console.log(t);
}
// Функция parseInt() принимает строку и возвращает челое число в указанной системе счисления. Если же в начале строки не число, то функция вернет NaN

// Task 18
let InputIn18 = document.querySelector('.input_task18'),
	btnClick18 = document.querySelector('.btn_task18');

btnClick18.onclick = () => {
	t = InputIn18.value;
	t = parseFloat(t);
	console.log(t);
}
// Функция parseFloat() принимает строку и возвращает челое число в десятичной системе. Если же в начале строки не число, то функция вернет NaN

// Task 19
let firstNum19 = document.querySelector('.input-num-one_task19'),
	secondNum19 = document.querySelector('.input-num-two_task19'),
	btnClick19 = document.querySelector('.btn_task19'),
	divSum = document.querySelector('.text-one_task19'),
	divParseInt = document.querySelector('.text-two_task19');

btnClick19.onclick = () => {
	divSum.innerHTML = +firstNum19.value + (+secondNum19.value);
	let sumParse = +firstNum19.value + (+secondNum19.value);
	sumParse = parseInt(sumParse);
	divParseInt.innerHTML = sumParse;
	firstNum19.value = '';
	secondNum19.value = '';
}

// Task 20
let inputName20 = document.querySelector('.input-nume_task20'),
	inputSurname20 = document.querySelector('.input-surnume_task20'),
	inputAge20 = document.querySelector('.input-age_task20'),
	inputProfession20 = document.querySelector('.input-profession_task20'),
	btnClick20 = document.querySelector('.btn_task20'),
	divText20 = document.querySelector('.text_task20');

btnClick20.onclick = () => {
	divText20.innerHTML = inputName20.value + ' ' + inputSurname20.value + ' ' + inputAge20.value + ' ' + inputProfession20.value;
	inputName20.value = '';
	inputSurname20.value = '';
	inputAge20.value = '';
	inputProfession20.value = '';
}