
var FR360M = {
              "prices": [80000, 75000, 90000],
              "miles": [20000, 25000, 10000]
              };
function getMake() {
  var make = document.querySelector("#make").value;
  var findModels;
  var modelList = document.querySelector('#model');
  var newOption;
  var del = document.querySelector("#model");
  del.innerHTML = "";
    if (make == "Ferrari"){
      findModels = "Ferrari"; //print make
      newOption = document.createElement("option");
      newOption.appendChild(document.createTextNode("F355"));
      newOption.value = "F355"
      modelList.appendChild(newOption);
      newOption = document.createElement("option");
      newOption.appendChild(document.createTextNode("360 Modena"));
      newOption.value = "360 Modena"
      modelList.appendChild(newOption);
    }
    else if (make == "Lamborghini"){
      findModels = "Lamborghini"; //print make
      newOption = document.createElement("option");
      newOption.appendChild(document.createTextNode("Murcielago"));
      newOption.value = "Murcielago"
      modelList.appendChild(newOption);
      newOption = document.createElement("option");
      newOption.appendChild(document.createTextNode("Aventador"));
      newOption.value = "Aventador"
      modelList.appendChild(newOption);
    }
    //print make
    document.querySelector("#result").innerHTML = findModels;
}

function getModel(){
  var model = document.querySelector("#model").value;
  document.querySelector("#result2").innerHTML = model;
  //date calcs
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var date = mm+'_'+dd+'_'+yyyy;
  document.querySelector("#date").innerHTML = date;
  document.querySelector("#avgfile").innerHTML = model+'avg.txt';
  document.querySelector("#curfile").innerHTML = model+'_'+date+'.txt';
}

function search(){
  var searchMake = document.querySelector("#make").value;
  var searchModel = document.querySelector("#model").value;
  document.getElementById("jsdata").innerHTML = FR360M.prices[0];
}


/*Current Chart*/
var ctx = document.getElementById('curchart').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Current Market Listings',
            data: [{
                x: 10000,
                y: 80000
            }, {
                x: 5000,
                y: 100000
            }, {
                x: 2000,
                y: 125000
            }, {
                x: 3000,
                y: 95000
            }, {
                x: 7000,
                y: 105000
            }, {
                x: 8000,
                y: 90000
            }],
            radius: 10,
            backgroundColor: 'rgba(0, 172, 223, 0.8)'
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString: 'List Price'
                  }
            }],
            yAxes:  [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Mileage (mi)'
                  }
            }]
        },
        legend: {
            display: false
          },
        layout: {
            padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
    }
});

/*Historical Chart*/
var ctx2 = document.getElementById('hischart').getContext('2d');
var scatterChart = new Chart(ctx2, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Historical Market Data',
            data: [{
                x: 2005,
                y: 166000
            }, {
                x: 2010,
                y: 120000
            }, {
                x: 2015,
                y: 100000
            }, {
                x: 2018,
                y: 80000
            },{
                x: 2020,
                y: 90000
            }],
            radius: 10,
            backgroundColor: 'rgba(212, 0, 0, 0.8)',
            fill: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString: 'Year'
                  }
            }],
            yAxes:  [{
                display: true,
                ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Average Price'
                }
            }]
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
    }
});
