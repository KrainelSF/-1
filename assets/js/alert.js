'use strict'
alert('Я JavaScript')

let name = prompt('Введите имя', 'Без имени')
let surname = prompt('Введите Фамилию', 'Без фамилии')
let patranimyc = prompt('Введите Отчество', 'Без отчества')

let isTrue = confirm(`Верны ли данные ${name} ${surname} ${patranimyc}?`);

alert(isTrue)