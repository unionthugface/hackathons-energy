$(function() {
    $("#from").datepicker({
        changeMonth: true,
        numberOfMonths: 1,
        onSelect: function(selectedDate) {
            updatePieData(selectedDate);
        }
    });
});

var energyArray = [
    { date: "03/09/14", time: "", usage: .1, appliance: "heater" },
    { date: "03/09/14", time: "", usage: .4, appliance: "heater" },
    { date: "03/09/14", time: "", usage: .1, appliance: "computer" },
    { date: "03/09/14", time: "", usage: .2, appliance: "sleep" },
    { date: "03/10/14", time: "", usage: .6, appliance: "heater" },
    { date: "03/10/14", time: "", usage: .2, appliance: "heater" },
    { date: "03/10/14", time: "", usage: .4, appliance: "computer" },
    { date: "03/10/14", time: "", usage: .5, appliance: "sleep" }
];

var lineArray = [];

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawPieChart);

// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.

function drawLineChart() {
    $.ajax({
        type: "POST",
        url: "getLineData",
        data: { date: "11/09/13" },
        success: function (data) {
            lineArray = data;
        },
        error: function (e) {
            console.log("Ajax Failed");
        }
    });

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Date');
    data.addColumn('number', 'Energy Usage');

    for (var i = 0; i < energyArray.length; i++) {
        if (energyArray[i].date === date) {
            data.addRow([energyArray[i].date, energyArray[i].usage]);
        }
    }

    // Set chart options
    var options = {
        'width': 600,
        'height': 400,
        'legend': 'none'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('line-chart-div'));
    chart.draw(data, options);

}

function drawPieChart() {
    $.ajax({
        type: "POST",
        url: "getPieData",
        data: { date: "11/09/13" },
        success: function (data) {
            energyArray = data;
        },
        error: function (e) {
            console.log("Ajax Failed");
        }
    });

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Appliance');
    data.addColumn('number', 'Energy Usage');
   
    for (var i = 0; i < energyArray.length; i++) {
        if (energyArray[i].date === date) {
            data.addRow([energyArray[i].appliance, energyArray[i].usage]);
        }
    }

    // Set chart options
    var options = {
        'width': 600,
        'height': 400,
        'is3D': true,
        'legend': 'none'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart-div'));
    chart.draw(data, options);
}

function redrawPieChart(data) {
    
    // Set chart options
    var options = {
        'width': 600,
        'height': 400,
        'is3D': true,
        'legend': 'none'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart-div'));
    chart.draw(data, options);
}

function updatePieData(date) {
    
    $.ajax({
       type: "POST",
       url: "getPieData/",
       data: { date: date },
       success: function(data) {
           energyArray = data;
       },
       error: function(e) {
           console.log("Ajax Failed");
       }
    });

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Appliance');
    data.addColumn('number', 'Energy Usage');
    
    for (var i = 0; i < energyArray.length; i++) {
        if (energyArray[i].date === date) {
            data.addRow([energyArray[i].appliance, energyArray[i].usage]);
        }
    }
    
    redrawPieChart(data);
    
}

function drawCharts() {
    drawPieChart();
    drawLineChart();
}