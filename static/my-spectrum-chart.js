Highcharts.chart('container-spectrum', {
    series: [{
        name: 'freequency spectrum data',
        data: []
    }],

    chart: {
        animation: false,
        type: 'column',
        events: {
            load: function() {
                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function() {
                    $.getJSON('http://localhost:5000/spectrumfeed', function(data) {
                        //console.log(data)
                        // set the series data
                        series.setData(data);

                        for (var i = start; i < end; i++) {
                            // color specific points
                            series.data[i].color = '#BF0B23'
                        }

                        // analyze and display some metrics
                        analyze(data);
                    });
                }, 50);
            }
        }
    },
    title: {
        text: 'Fast Fourier Transform'
    },

    subtitle: {
        text: 'Live data stream from microphone'
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
        max: 1
    }
});