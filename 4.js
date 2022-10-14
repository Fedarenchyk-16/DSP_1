function FourthDiagram () {
  let N = 512;
  let A = [5, 5, 5, 5, 5];
  let f = [1, 2, 3, 4, 5];
  let fi = [Math.PI/9, Math.PI/4, Math.PI/3, Math.PI/6, 0];

  var ctx = document.getElementById("myChartFourth");
  var myChartFourth = new Chart (ctx, {
    type: 'line',
    data: {
      labels: [], //Подписи оси x
      datasets: [
        {
          label: 'x(n)', //Метка
          data: [], //Данные
          borderColor: 'red', //Цвет
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
    myChartFourth.data.labels.push(n);
    myChartFourth.data.datasets[0].data.push(calculateFirst(n).toFixed(2));
  }
  //Обновляем
  myChartFourth.update();

  function calculateFirst(n) { //Вычисление нужной функции
    let result = 0;

    for (var i = 0; i < 5; i += 1){
      result += A[i] * Math.sin(((2 * Math.PI * f[i] * n) / N) + fi[i]);
    }

    return result;
  }
}
