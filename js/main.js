'use strict';
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

//array.prototype.filter()
//1. filter the list of inventors for those who were born in the 1500's

const inventorsS16 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1600);
console.table(inventorsS16);

//array.prototype.map()
//2. give us an array of inventrory firs and last names

const inventrosNames = inventors.map((inventor) => `${inventor.first}  ${inventor.last}`);
console.log(inventrosNames);

//array.prototype.sort()
//3. sort de inventors by birthdate, oldest to youngest

const orderInventors = inventors.sort((a, b) => (a.age <= b.age ? 1 : -1));
//compara el item 1 con el item 2 y lo ordena, si queremos que este arriba = 1 y el contrario -1
//en este caso a es la primera persona y b es la segunda persona
console.table(orderInventors);

//array.prototype.reduce()
//4. how many years did all the inventors life?

//manera rustica:
/* const inventorsAge = inventors.map((inventor) => inventor.passed - inventor.year);
console.log(inventorsAge);

const sumAges = inventorsAge.reduce((acc, number) => acc + number, 0);
console.log(sumAges); */

//sólo usando 1 método funcional
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5. sort the inventors by years lived
//manera rustica :
const inventorsAge = inventors.map((inventor) => inventor.passed - inventor.year);
console.log(inventorsAge);

const ageSorted = inventorsAge.sort((a, b) => (a < b ? 1 : -1));
console.log(ageSorted);

//sólo 1 método funcional:
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.log(oldest);

//6. create a list of boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris //hacerlo en el devtools

const category = document.querySelector('.mw-category'); //devuelve una lista (node list) esto no se puede mapear proque no es un array //se puede hacer un queryselector de cualquier elemento en el dom, y mirará dentro de ese elemento, no tiene por que ser el document (toda la página)
const links = category.querySelectorAll('a');

const links = Array.from(category.querySelectorAll('a')); //array.from lo convertirá en un array
//opción 2: const links = [...categori.querySelectorAll('a)] ...spread
const de = links.map((link) => link.textContent).filter((streetName) => streetName.includes('de'));

//7. sort Exercise
//sort de people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const peopleSortAlphabetically = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split('. '); //se crea un array donde el primer elemento es el apellido y el 2º el nombre, separado por una , y un espacio = ('. ')
  const [bLast, bFirst] = nextOne.split('. ');
  return aLast > bLast ? 1 : -1; //orden alfabético
});
console.log(peopleSortAlphabetically);

//8. Reduce exercise
//sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
