
class Hello extends React.Component {
  render() {
    return <h1>Hello, React</h1>;
  }
}

let personalMoveDB = { count: 0, movies: {}, acters: {}, gebres: [], private: false, points: 0 };

let a = prompt("Какой фильм Вы смотрели недавно?", ""),
    b = prompt("Во сколько баллов оцениваете?", ""),
    c = prompt("Какой фильм Вы смотрели недавно?", ""),
    d = prompt("Во сколько баллов оцениваете?", "");




    personalMoveDB.movies[a] = b;
    personalMoveDB.movies[c] = d;
  //  ReactDOM.render(<p>Фильм  {a}</p>, document.getElementById('film'));
  //  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[a]}</p>, document.getElementById('points'));
  //  ReactDOM.render(<p>Фильм  {d}</p>, document.getElementById('film'));
  //  ReactDOM.render(<p>Оценка  {personalMoveDB.movies[d]}</p>, document.getElementById('points'));
ALert(personalMoveDB);