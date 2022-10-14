function SecondDiagram () {
  let N = 512;
  let A = 1;
  let f = [1, 3, 2, 4, 10];
  let fi = Math.PI;

  var ctx = document.getElementById("myChartSecond");
  var myChartSecond = new Chart (ctx, {
    type: 'line',
    data: {
      labels: [], //Подписи оси x
      datasets: [
        {
          label: 'x(n) f = 1', //Метка
          data: [], //Данные
          borderColor: 'blue', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) f = 3', //Метка
          data: [], //Данные
          borderColor: 'red', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) f = 2', //Метка
          data: [], //Данные
          borderColor: 'green', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) f = 4', //Метка
          data: [], //Данные
          borderColor: 'black', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) f = 10', //Метка
          data: [], //Данные
          borderColor: 'yellow', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        }
        //Можно добавить другие графики
      ]
    },
    options: {
      responsive: false, //Вписывать в размер canvas
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  });
  //Заполняем данными
  for (var n = 0.0; n < N; n += 1) {
    myChartSecond.data.labels.push(n);
    for (var i = 0; i < 5; i += 1) {
      myChartSecond.data.datasets[i].data.push(calculateFirst(n, i).toFixed(2));
    }
  }
  //Обновляем
  myChartSecond.update();

  function calculateFirst(n, i) { //Вычисление нужной функции
    return A * Math.sin(((2 * Math.PI * f[i] * n) / N) + fi);
  }
}
