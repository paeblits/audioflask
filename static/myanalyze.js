function analyze(data) {
    $('#alert-buzz').hide();
    // we're only going to look at the frequency spectrum between 475 and 512
    // because of peaks observed from listening to the dryer buzzing sound

    var buzz = false;
    var start = 475;
    var end = 512;
    var index = 498;
    var sliced = data.slice(start, end);
    var threshold = 0.0005;

    var max = Math.max.apply(Math,sliced);
    var max_index = data.indexOf(max);

    var sum = 0;
    for( var i = start; i < end; i++ ){
        sum += data[i];
    }

    var avg = sum/data.length;

   //console.log(max);
   // console.log(max_index);
    $('p#avg').html(avg);
    $('p#max').html(max);
    $('p#myindex').html(max_index);

    if(avg > threshold) {
        console.log("BUZZ . . . avg = " + avg);
        buzz = true;
    }

    if (buzz) {
        $('#alert-buzz').show();
    }

}