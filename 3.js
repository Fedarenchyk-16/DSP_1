function ThirdDiagram () {
  let N = 512;
  let A = [3, 5, 10, 4, 8];
  let f = 4;
  let fi = Math.PI;

  var ctx = document.getElementById("myChartThird");
  var myChartThird = new Chart (ctx, {
    type: 'line',
    data: {
      labels: [], //Подписи оси x
      datasets: [
        {
          label: 'x(n) A = 3', //Метка
          data: [], //Данные
          borderColor: 'blue', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) A = 5', //Метка
          data: [], //Данные
          borderColor: 'red', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) A = 10', //Метка
          data: [], //Данные
          borderColor: 'green', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) A = 4', //Метка
          data: [], //Данные
          borderColor: 'black', //Цвет
          borderWidth: 3, //Толщина линии
          fill: false //Не заполнять под графиком
        },
        {
          label: 'x(n) A = 8', //Метка
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
    myChartThird.data.labels.push(n);
    for (var i = 0; i < 5; i += 1) {
      myChartThird.data.datasets[i].data.push(calculateFirst(n, i).toFixed(2));
    }
  }
  //Обновляем
  myChartThird.update();

  function calculateFirst(n, i) { //Вычисление нужной функции
    return A[i] * Math.sin(((2 * Math.PI * f * n) / N) + fi);
  }
}
