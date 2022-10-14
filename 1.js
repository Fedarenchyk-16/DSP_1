function FirstDiagram() {
  let N = 512;
  let A = 5;
  let f = 1;
  let fi = [Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4, 0, Math.PI];

  var ctx = document.getElementById("myChartFirst");
  var myChartFirst = new Chart(ctx, {
    type: "line",
    data: {
      labels: [], //Подписи оси x
      datasets: [
        {
          label: "x(n) ф = PI/4", //Метка
          data: [], //Данные
          borderColor: "blue", //Цвет
          borderWidth: 3, //Толщина линии
          fill: false, //Не заполнять под графиком
        },
        {
          label: "x(n) ф = PI/2", //Метка
          data: [], //Данные
          borderColor: "red", //Цвет
          borderWidth: 3, //Толщина линии
          fill: false, //Не заполнять под графиком
        },
        {
          label: "x(n) ф = 3PI/4", //Метка
          data: [], //Данные
          borderColor: "green", //Цвет
          borderWidth: 3, //Толщина линии
          fill: false, //Не заполнять под графиком
        },
        {
          label: "x(n) ф = 0", //Метка
          data: [], //Данные
          borderColor: "black", //Цвет
          borderWidth: 3, //Толщина линии
          fill: false, //Не заполнять под графиком
        },
        {
          label: "x(n) ф = PI", //Метка
          data: [], //Данные
          borderColor: "yellow", //Цвет
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
    myChartFirst.data.labels.push(n);
    for (var i = 0; i < 5; i += 1) {
      myChartFirst.data.datasets[i].data.push(
        calculateFirst(n, i).toFixed(2)
      );
    }
  }
  //Обновляем
  myChartFirst.update();

  function calculateFirst(n, i) {
    //Вычисление нужной функции
    return A * Math.sin((2 * Math.PI * f * n) / N + fi[i]);
  }
}
