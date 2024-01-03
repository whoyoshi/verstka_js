"use strict";
// 1
// Функция возвращает среднее арифметическое значение элементов массива, хотя название функции (sum) и комментарий к ней говорят о том, что функция должна возвращать сумму элементов.
// Если массив пустой, то будет произведено деление на 0, что вызовет ошибку.

// Исправленный вариант функции:
function Average(arr) {
  if (arr.length === 0) {
    return 0; // Возвращаем 0, если массив пустой
  }
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum / arr.length;
}

// 2
// В циклах for использается переменная elem, но вместо этого используются несуществующие переменные arr и arr2.
// Функция должна складывать элементы массива arr1, но вместо этого она делает это с несуществующей переменной arr.

// Исправленный вариант функции:

function calculateAverage(arr1, arr2) {
  let sum1 = 0;
  for (let elem of arr1) {
    sum1 += elem;
  }

  let sum2 = 0;
  for (let elem of arr2) {
    sum2 += elem;
  }
  return sum1 / sum2;
}

// 3
// Вместо сложения элементов массива происходит умножение.
// Используется неправильное название переменной res.

// Исправленный вариант функции:
function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}