function FifthDiagram() {
  let N = 512;
  let A0 = 20;
  let A = A0;
  let f0 = 6;
  let f = f0;
  let fi0 = Math.PI / 4;
  let fi = fi0;

  var ctx = document.getElementById("myChartFifth");
  var myChartFifth = new Chart(ctx, {
    type: "line",
    data: {
      labels: [], //Подписи оси x
      datasets: [
        {
          label: "x(n)", //Метка
          data: [], //Данные
          borderColor: "red", //Цвет
          borderWidth: 3, //Толщина линии
          fill: false, //Не заполнять под графиком
        },
        //Можно добавить другие графики
      ],
    },
    options: {
      responsive: false, //Вписывать в размер canvas
      scales: {
        xAxes: [
          {
            display: true,
          },
        ],
        yAxes: [
          {
            display: true,
          },
        ],
      },
    },
  });
  //Заполняем данными
  for (var n = 0.0; n < N; n += 1) {
    myChartFifth.data.labels.push(n);
    myChartFifth.data.datasets[0].data.push(calculateFirst(n).toFixed(2));
  }
  //Обновляем
  myChartFifth.update();

  function calculateFirst(n) {
    //Вычисление нужной функции
    result = A * Math.sin((2 * Math.PI * f * n) / N + fi);

    A += (A0 / N) * 0.5;
    f += (f0 / N) * 0.5;
    fi += (fi0 / N) * 0.5;
    return result;
  }
}
