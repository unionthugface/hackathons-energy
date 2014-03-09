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
    { date: "03/09/2014", usage: 43.5, appliance: "Washer" },
    { date: "03/09/2014", usage: 121.5, appliance: "Oven" },
    { date: "03/09/2014", usage: 90, appliance: "Dryer" },
    { date: "03/09/2014", usage: 43.2, appliance: "Sleep" },
    { date: "03/09/2014", usage: 884, appliance: "Heater" },
    { date: "03/10/2014", usage: 14.5, appliance: "Washer" },
    { date: "03/10/2014", usage: 37.5, appliance: "Oven" },
    { date: "03/10/2014", usage: 30, appliance: "Dryer" },
    { date: "03/10/2014", usage: 15.8, appliance: "Sleep" },
    { date: "03/10/2014", usage: 252, appliance: "Heater" }
];

// Load the Visualization API and the piechart package.

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawCharts);

// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.

function drawHistogram() {
    function initialize() {
        // The URL of the spreadsheet to source data from.
        var query = new google.visualization.Query(
            'https://docs.google.com/spreadsheet/ccc?key=0Agwv43LK71pfdFdKUklmZmQwTlFuS1gzbURYOVFMakE#gid=0');
        query.send(draw);
        
        }

    function draw(response) {
        if (response.isError()) {
            alert('Error in query');
        }

        var ticketsData = response.getDataTable();
        var chart = new google.visualization.ColumnChart(
            document.getElementById('histogram-div'));
        chart.draw(ticketsData, {
            'isStacked': true, 'legend': 'bottom',
            'vAxis': { 'title': 'Power Consumption' }
    });

        // Set a 'select' event listener for the table.
        // When the table is selected, we set the selection on the map.
        google.visualization.events.addListener(table, 'select',
            function () {
                map.setSelection(table.getSelection());
            });

        // Set a 'select' event listener for the map.
        // When the map is selected, we set the selection on the table.
        google.visualization.events.addListener(map, 'select',
            function () {
                table.setSelection(map.getSelection());
            });
        }
    }

function drawLineChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Power Consumption from Green Button Data');
        data.addColumn('string', '');
        data.addColumn('string', '');
        data.addColumn('number', '');
        data.addColumn('string', '');
        data.addColumn('string', '');
        data.addRows([
[new Date(2013,11,9,0,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,0,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,1,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,1,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,1,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,1,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,1,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,1,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,2,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,2,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,3,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,3,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,3,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,3,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,3,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,3,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,4,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,4,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,4,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,4,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,4,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,50,0),4,null, null, null, null, null],
[new Date(2013,11,9,4,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,20,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,5,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,5,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,20,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,50,0),4,null, null, null, null, null],
[new Date(2013,11,9,6,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,7,0,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,5,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,30,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,35,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,40,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,45,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,7,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,7,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,8,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,9,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,10,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,11,50,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,11,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,15,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,20,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,25,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,30,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,35,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,40,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,45,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,50,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,12,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,15,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,20,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,25,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,30,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,35,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,40,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,45,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,50,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,13,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,14,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,14,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,14,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,9,14,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,14,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,14,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,14,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,14,35,0),2,null, null, null, null, null],
[new Date(2013,11,9,14,40,0),2,null, null, null, null, null],
[new Date(2013,11,9,14,45,0),2,null, null, null, null, null],
[new Date(2013,11,9,14,50,0),2,null, null, null, null, null],
[new Date(2013,11,9,14,55,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,0,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,5,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,10,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,15,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,20,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,25,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,30,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,35,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,40,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,45,0),2,null, null, null, null, null],
[new Date(2013,11,9,15,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,15,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,16,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,17,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,18,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,18,5,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,30,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,35,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,40,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,45,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,50,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,18,55,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,0,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,5,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,30,0),1.5,null, null, null, null, null],
[new Date(2013,11,9,19,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,19,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,19,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,19,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,19,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,20,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,21,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,9,21,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,20,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,50,0),4,null, null, null, null, null],
[new Date(2013,11,9,21,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,20,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,50,0),4,null, null, null, null, null],
[new Date(2013,11,9,22,55,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,0,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,5,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,10,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,15,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,20,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,25,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,30,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,35,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,40,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,45,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,50,0),4,null, null, null, null, null],
[new Date(2013,11,9,23,55,0),4,null, null, null, null, null],
[new Date(1900,1,0,0,0,0),,null, null, null, null, null],
[new Date(2013,11,10,0,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,0,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,0,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,1,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,2,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,3,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,5,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,10,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,15,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,4,45,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,50,0),4,null, null, null, null, null],
[new Date(2013,11,10,4,55,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,5,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,5,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,5,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,25,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,30,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,35,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,40,0),4,null, null, null, null, null],
[new Date(2013,11,10,5,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,5,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,5,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,6,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,5,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,10,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,15,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,25,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,30,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,35,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,40,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,45,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,50,0),4,null, null, null, null, null],
[new Date(2013,11,10,6,55,0),4,null, null, null, null, null],
[new Date(2013,11,10,7,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,7,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,7,55,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,0,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,5,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,8,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,8,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,8,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,8,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,8,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,8,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,9,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,10,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,11,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,15,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,20,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,25,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,30,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,35,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,40,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,45,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,50,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,12,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,15,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,20,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,25,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,30,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,35,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,40,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,45,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,50,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,13,55,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,14,0,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,14,5,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,14,10,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,14,15,0),0.5,null, null, null, null, null],
[new Date(2013,11,10,14,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,14,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,14,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,14,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,14,40,0),2,null, null, null, null, null],
[new Date(2013,11,10,14,45,0),2,null, null, null, null, null],
[new Date(2013,11,10,14,50,0),2,null, null, null, null, null],
[new Date(2013,11,10,14,55,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,0,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,5,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,10,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,15,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,20,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,25,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,30,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,35,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,40,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,45,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,50,0),2,null, null, null, null, null],
[new Date(2013,11,10,15,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,16,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,17,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,18,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,18,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,18,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,30,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,35,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,40,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,45,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,50,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,18,55,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,0,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,5,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,10,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,15,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,20,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,25,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,30,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,35,0),1.5,null, null, null, null, null],
[new Date(2013,11,10,19,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,19,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,19,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,19,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,10,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,15,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,20,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,25,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,30,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,35,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,40,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,45,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,50,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,20,55,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,21,0,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,21,5,0),0.1,null, null, null, null, null],
[new Date(2013,11,10,21,10,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,15,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,25,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,30,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,35,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,40,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,45,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,50,0),4,null, null, null, null, null],
[new Date(2013,11,10,21,55,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,5,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,10,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,15,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,25,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,30,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,35,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,40,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,45,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,50,0),4,null, null, null, null, null],
[new Date(2013,11,10,22,55,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,0,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,5,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,10,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,15,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,20,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,25,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,30,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,35,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,40,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,45,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,50,0),4,null, null, null, null, null],
[new Date(2013,11,10,23,55,0),4,null, null, null, null, null],
[new Date(2013,11,11,0,0,0),4,null, null, null, null, null],
[new Date(2013,11,11,0,5,0),4,null, null, null, null, null],
        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('line-chart-div'));

    var options = {
            displayAnnotations: true
    };

    chart.draw(data, options);

}

function drawPieChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Appliance');
    data.addColumn('number', 'Energy Usage');
   
    for (var i = 0; i < energyArray.length; i++) {
        if (energyArray[i].date === "03/09/2014") {
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

$('#toggle').click(function () {
    if ($(this).data("id") === "first") {
        $('#line-chart-div').hide()
        $(this).data("id", "histo");
        initialize();
    }

    else if ($(this).data("id") === "line") {
        $('#line-chart-div').hide();
        $('#histogram-div').show();
        $(this).data("id", "histo");
    }
    else if ($(this).data("id") === "histo") {
        $('#histogram-div').hide();
        $('#line-chart-div').show();
        $(this).data("id", "line");
}
});