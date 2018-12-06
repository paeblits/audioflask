Highcharts.chart('container-waveform', {
    series: [{
        name: 'waveform data',
        data: []
    }],

    chart: {
        animation: false,
        type: 'spline',
        events: {
            load: function() {
                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function() {
                    $.getJSON('http://localhost:5000/wavefeed', function(data) {
                        //console.log(data)
                        series.setData(data);
                        //analyze(data);
                    });
                }, 10);
            }
        }
    },
    title: {
        text: 'Audio Waveform'
    },

    subtitle: {
        text: 'Live data stream from microphone'
    },

    yAxis: {
        min: 0,
        max: 300
    }
});