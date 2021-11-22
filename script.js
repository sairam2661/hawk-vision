let labels1 = ['19X201', '19X202', '19X203', '19X204'];
let data1 = [100.0, 50.0, 85.714, 38.888];
let colors1 = ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'radar',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor:colors1
        }]
    },
    options: {
        title: {
            text: "Plagiarism details for Roll No. 19X201",
            display: true
        },
        legend: {
          display: true
        }
    }
});

let labels6 = ['19X201', '19X202', '19X203', '19X204'];
let data6 = [100.0, 50.0, 85.714, 38.888];
let colors6 = ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)'];

let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart (myChart6, {
    type: 'polarArea',
    data: {
      labels: labels6,
      datasets: [ {
        data: data6,
        backgroundColor: colors6
      }]
    },
    options: {
      title: {
        text: "Plagiarism details for Roll No. 19X201",
        display: true
      },
      legend: {
        display: true
      }
    }
});

let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufthansa Group'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Messi',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [50, 12, 55, 7, 29]
          },
          {
            label: 'Ronaldo',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union (in mio)",
            display: true
        }
    }
});
