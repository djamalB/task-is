// 1. Сколько раз каждый элемент встречается в массиве:

const fruits = ["kiwi", "kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

function getDuplicateElement(arr) {
  let newObj = arr.reduce((acm, elem) => {
    if (acm[elem]) {
      acm[elem]++;
    } else {
      acm[elem] = 1;
    }
    return acm;
  }, {});
  return newObj;
}

console.log(getDuplicateElement(fruits));

// 2. Создать массив который содержит только уникальные значения
// ['kiwi', 'apple', 'orange']

const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

function getUniqueValues(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

console.log(getUniqueValues(myFruits));

// 3. Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов
// {
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];

function groupStudentsByAge(students) {
  const groupedByAge = {};

  students.forEach((student) => {
    const age = student.age;

    if (!groupedByAge[age]) {
      groupedByAge[age] = [];
    }

    groupedByAge[age].push(student);
  });

  return groupedByAge;
}
console.log(groupStudentsByAge(students));
// 4. Написать функцию, которая принимает два аргумента:
// массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу,
// которое приходит вторым аргументом, функция должна
// вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

function findPairWithSum(arr, targetSum) {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = targetSum - num;

    if (numSet.has(diff)) {
      return [num, diff];
    }
    numSet.add(num);
  }
  return [];
}

console.log(findPairWithSum(myNumbers, sum));

// 5. Получить единый массив из любимых пицц каждого друга

const friends = [
  { name: "alex", pizzas: ["cheese", "pepperoni"] },
  { name: "mike", pizzas: ["salami", "margarita"] },
  { name: "stas", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];

const pizzaArrays = friends.map((elem) => elem.pizzas);

const favoritePizzas = pizzaArrays.flat();
console.log(favoritePizzas);

// 6. Записать строку (символы строки) в обратном порядке (2 способа)

const myStr = "pizza";

const arr = myStr.split("").reverse().join("");
console.log(arr);
