

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let labels6 = ['19X201', '19X202', '19X203', '19X204', '19X205', '19X206', '19X207', '19X208', '19X209', '19X210', '19X211', '19X212', '19X213', '19X214', '19X215', '19X216', '19X217', '19X218', '19X219', '19X220', '19X221', '19X222', '19X223', '19X224', '19X225', '19X226', '19X227', '19X228', '19X229', '19X230', '19X231', '19X232', '19X233', '19X234', '19X235', '19X236', '19X237', '19X238', '19X239', '19X240', '19X241', '19X242', '19X243', '19X244', '19X245', '19X246', '19X247', '19X248', '19X249', '19X250', '19X251', '19X252', '19X253', '19X254', '19X255', '19X2056'];

let data6 = [0, 50.0, 85.714, 38.888, 20, 10, 15, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 10, 10, 5, 6, 2 , 3, 40, 50, 6, 70, 1, 10, 10, 10, 1, 10, 1, 10, 1, 1, 1, 1, 1, 10, 10, 10, 50, 30, 10, 2, 1, 4, 50, 10, 20, 1, 10, 15, 16];
let colors6 = ['rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 99, 132)', ];

let myChart6 = document.getElementById("myChart6").getContext('2d');

/**let chart6 = new Chart (myChart6, {
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
        display: false
      }
    }
});**/



function renderChart(){
  var str = "Plagiarism details for Roll No. ";
  var select = document.getElementById("RollNO");
  var rollNO = select.options[select.selectedIndex].value;
  var str1 = str.concat(rollNO);
  let chart1  = new Chart (myChart6, {
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
        text: str1,
        display: true
      },
      legend: {
        display: false
      }
    }
});
  return chart1;
};


/**let chart1  = new Chart (myChart6, {
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
        text: str1,
        display: true
      },
      legend: {
        display: false
      }
    }
});**/









