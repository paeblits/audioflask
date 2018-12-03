Highcharts.chart('container', {
    series: [{
        name: 'data',
        data: []
    }],

    chart: {
        type: 'spline',
        events: {
            load: function() {
                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function() {
                    $.getJSON('http://localhost:5000/audiofeed', function(data) {
                        //console.log(data)
                        series.setData(data);
                    });
                }, 100);
            }
        }
    },
    title: {
        text: 'Microphone input'
    },

    subtitle: {
        text: 'Data input from live remote JSON data'
    },

//
//    data: {
//        rowsURL: 'http://localhost:5000/audiofeed',
////      rowsURL: 'https://demo-live-data.highcharts.com/time-rows.json',
//        firstRowAsNames: false,
//        enablePolling: true,
//        dataRefreshRate: 1
//    },

    yAxis: {
        min: 0,
        max: 250
    }
});
