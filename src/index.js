//'use strict';
//class Hello extends React.Component {
// render() {
// return <h1>Hello, React</h1>;
// }
//}

/*
//for (let key in personalMoveDB) {
// if (typeof (personalMoveDB[key]) == 'function') console.log(key);
//}




function main() {

  return prompt("Какой фильм Вы смотрели недавно?", "");
}

if (main()) prompt("Во сколько баллов оцениваете?", "");




c = prompt("Сколько фильмов Вы смотрели недавно?", "");
if (c) {


  for (; c; c--) {
    a = prompt("Какой фильм Вы смотрели недавно?", "");
    b = prompt("Во сколько баллов оцениваете?", ""),
      personalMoveDB.movies[a] = b;
  }
} else { alert("ответьте на вопрос"); }
console.log(personalMoveDB);

//personalMoveDB.movies[c] = d;

//  ReactDOM.render(<p>Фильм  {a}</p>, document.getElementById('film'));
//  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[a]}</p>, document.getElementById('points'));
//  ReactDOM.render(<p>Фильм  {d}</p>, document.getElementById('film'));
//  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[d]}</p>, document.getElementById('points'));
if (a) console.log(personalMoveDB);

switch (a) {
  case "mk2": console.log(a);
    break;
  case "": break;
  default: alert("Введите название фильма mk2");
}



// START получение названия, свойств количества ключей объекта 

const personalMoveDB =
{
  count: 1,
  movies: { first: 'MK2', last: "mk2" },
  acters: {},
  gebres: [],
  private: false,
  points: 0,
  printStr: function (params) { console.log(params) }

};

// деструктуризация объекта
const {first,last} = personalMoveDB.movies;
console.log(first,last);




for(let key in personalMoveDB){
  if(typeof(personalMoveDB[key])==='function')
   console.log(`${key}() = ${typeof(personalMoveDB[key])}`);
}


//console.log(`количество ключей объекта: ${Object.keys(personalMoveDB).length}`); //количество ключей объекта 
//console.log(`перечисление ключей объекта:  ${Object.keys(personalMoveDB)}`); //перечисление ключей объекта 




// END  получение названия и количества ключей объекта 




//-------------------------------------------------------------------
// работа с массивами, начало
//-------------------------------------------------------------------

// пример сортировка массива как чисел  
const arr = [2, 3, 4, 5, 11, 9];
console.log(arr.sort(cNum));
function cNum(a, b) {
  return a - b;

}

// пример сортировка массива как строки
const arr = ["asd", "zasd", "csd"];
console.log(arr.sort());

// пример перебора массива с помощью forEach()
arr.forEach(function (item, i, arr) {
  console.log(`${item} ${i} ${arr}`)

});


//-------------------------------------------------------------------
//работа с массивами, конец 
//-------------------------------------------------------------------


//-------------------------------------------------------------------
//работа с прототипами, начало 
//-------------------------------------------------------------------
const winWind_0 = {
  winHeight: 100,
  winWidth: 350,
  winMethod: "mbOk",
  printMsg: function () {
    console.log("Test");
  }
};

// создание оъекта с наследованием от "winWind"
const minWind_0 = Object.create(winWind_0);


const winWind_1 = {
  winHeight: 100,
  winWidth: 350,
  winMethod: "mbOk",
  printMsg: function () {
    console.log("Test");

  }

};

const minWind_1 = {
  winHeight: 100,

};
//наследование от готового прототипа "wniWind"
Object.setPrototypeOf(minWind_1, winWind_1);
minWind_0.printMsg();
minWind_1.printMsg();
console.log(minWind_0);
console.log(minWind_1);

//-------------------------------------------------------------------
//работа с прототипами, конец 
//-------------------------------------------------------------------

*/
//------ test personalMoveDb add, начало

let a, b, c;
let numberOfFilms;
const personalMoveDB =
{
  count: 0,
  movies: {
    first: 'MK2',
    last: "mk2"
  },
  acters: {},
  gebres: [],
  private: true,
  points: 0,
  printStr: function (params) { console.log(params) },

  toggleVisibleMyDb: function () {
    if (this.private == true)
      personalMoveDB.private = false;
    else
      personalMoveDB.private = true;
  },

  start: function () {
    let param = 0;
    param = +prompt("Сколько фильмов Вы смотрели недавно?", "");
    for (; param == "" || param == null || isNaN(param);) {
      param = +prompt(`Сколько фильмов Вы смотрели недавно ?`, "");
    }
    personalMoveDB.count = param;
    return param;
  }

};

numberOfFilms = personalMoveDB.start();
// недоделал 20.01.21
for (let seen = false, c = numberOfFilms; c > 0; c--) {
  a = prompt("Какой фильм Вы смотрели недавно?", "");
  if (a != null && a != "" && a.length < 40) { //если строка введина правильно
    b = prompt("Во сколько баллов оцениваете?", "");
    personalMoveDB.movies[a] = b;
  }
 
  if (b != null && b != "") { //если строка введина правильно
    personalMoveDB.movies[a] = b;
    seen = true;
  }
  else {
    c++;
  }
}

//------ test personalMoveDb add, конец
