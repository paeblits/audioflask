var analyze = function(data) {
    // we're only going to look at the frequency spectrum between 475 and 512
    // because of peaks observed from listening to the dryer buzzing sound

    sliced = data.slice(start, end);
    d = new Date();

    max = Math.max.apply(Math,sliced);
    max_index = data.indexOf(max);

    sum = 0;
    avg = 0;
    for( var i = start; i < end; i++ ){
        sum += data[i];
    }

    avg = sum/sliced.length;
    peakVal = data[peakIndex];
    var peakNeigh1 = data[++peakIndex];
    var peakNeigh2 = data[--peakIndex];
    var peakPercent1 = peakNeigh1/peakVal;
    var peakPercent2 = peakNeigh2/peakVal;


   //console.log(max);
   // console.log(max_index);
    $('td#avg').html(avg);
    $('td#max').html(max);
    $('td#myindex').html(max_index);

    // check last buzz time
    now = d.getTime();
    buzzTimeDiff = now - lastBuzzTime;
    if (buzzCount > 0) {
        if(buzzTimeDiff >= 1000 ) {
            console.log("resetting buzz count. Current buzzCount = " + buzzCount)
            buzzCount = 0;
        }
    }


    if(avg > avgThresh && peakVal > 0.04 && peakPercent1 <= 0.2 && peakPercent2 == 1) {
        console.log("avg > " + avgThresh + " . . . avg = " + avg);
        console.log("peakVal = " + peakVal)
        console.log("peakPercent1 = " + peakPercent1)
        console.log("peakPercent2 = " + peakPercent2)
        if(buzzCount > buzzCountThresh) {
            isBuzz = true;
        } else {
            now = d.getTime();
            timeDiff = now - lastBuzzTime;
            lastBuzzTime = now;
            console.log("timeDiff = " + timeDiff);
            if (timeDiff < 150) {
                buzzCount++;
                lastBuzzTime = d.getTime();
            }
        }
    }

    // if we detected a buzz, display a banner and reset some vars
    if (isBuzz) {
        console.log("BUZZ!");
        var banner = banner1 + "Buzz detected at " +  d.toString() + banner3;

        // append a new banner at the top of the banners list
        $('#buzz-banners').prepend(banner);
        //$('#alert-buzz').show();
        //$('#buzz-banners').first().text(buzzDisplayString);
        lastBuzzTime = -1;
        buzzCount = 0;
        lastDisplayTime = d.getTime();
        isBuzz = false;
    }

    // check how long we've been displaying the Buzz banner
//    if (displaying) {
//        displayTimeDiff = d.getTime() - displayStartTime;
//        if(displayTimeDiff > 60000) {
//            console.log("turning off display. Time diff = " + displayTimeDiff + " ms");
//            $('#alert-buzz').hide();
//            displaying = false;
//        }
//    }

}