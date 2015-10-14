
var userName=prompt("What's your name?");




//bar graph code
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Movie', 'Gross'],
        ['Insidious Chapter 3', 52218558 ],
        ['Poltergeist', 47425125 ],
        ['Unfriended', 32482090    ],
        ['Sinister 2', 27578583],
        ['The Lazarus Effect', 25801570 ],
        ['The Gallows', 22764410 ],
        ['It Follows', 14674077],
        ['The Woman in Black 2', 11473908   ],
        ['The Green Inferno', 6480313  ],
        ['The Vatican Tapes    ', 1784763 ]


    ]);

    var options = {
        title: 'Gross Data for horror movies',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Gross Data',
            minValue: 0
        },
        vAxis: {
            title: 'Movie Title'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
// end of bar graph code

//pie chart code
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Movie', 'Ticket Sales'],
        ['Insidious Chapter 3',6238776  ],
        ['Poltergeist', 5666084 ],
        ['Unfriended', 3880775  ],
        ['Sinister 2',3294932 ],
        ['The Lazarus Effect', 3082624 ],
        ['The Gallows', 2719762 ],
        ['It Follows',1753175],
        ['The Woman in Black 2', 1370837 ],
        ['The Green Inferno',  816405],
        ['The Vatican Tapes ', 213233 ]
    ]);

    var options = {
        title: 'Horror Movie Ticket Sales'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
//end of pie chart code

