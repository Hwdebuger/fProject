
class Hello extends React.Component {
  render() {
    return <h1>Hello, React</h1>;
  }
}


/* START получение названия, свойств количества ключей объекта */
const personalMoveDB =
{
  count: 1,
  movies: {asd: '2'},
  acters: {},
  gebres: [],
  private: false,
  points: 0,
  printStr: function (params) { console.log(params) }

};

for(let key in personalMoveDB){
  if(typeof(personalMoveDB[key])==='function')
   console.log(`${key}() = ${typeof(personalMoveDB[key])}`);
}


//console.log(`количество ключей объекта: ${Object.keys(personalMoveDB).length}`); //количество ключей объекта 
//console.log(`перечисление ключей объекта:  ${Object.keys(personalMoveDB)}`); //перечисление ключей объекта 
/* END  получение названия и количества ключей объекта */

//for (let key in personalMoveDB) {
 // if (typeof (personalMoveDB[key]) == 'function') console.log(key);
//}



let a, b, c;

function main() {

  return prompt("Какой фильм Вы смотрели недавно?", "");
}

if (main()) prompt("Во сколько баллов оцениваете?", "");



/*
c = prompt("Сколько фильмов Вы смотрели недавно?", "");
if (c) {


  for (; c; c--) {
    a = prompt("Какой фильм Вы смотрели недавно?", "");
    b = prompt("Во сколько баллов оцениваете?", ""),
      personalMoveDB.movies[a] = b;
  }
} else { alert("ответьте на вопрос"); }
console.log(personalMoveDB);
*/
//personalMoveDB.movies[c] = d;

//  ReactDOM.render(<p>Фильм  {a}</p>, document.getElementById('film'));
//  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[a]}</p>, document.getElementById('points'));
//  ReactDOM.render(<p>Фильм  {d}</p>, document.getElementById('film'));
//  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[d]}</p>, document.getElementById('points'));
/*if (a) console.log(personalMoveDB);

switch (a) {
  case "mk2": console.log(a);
    break;
  case "": break;
  default: alert("Введите название фильма mk2");
}*/