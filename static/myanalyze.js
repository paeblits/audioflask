function analyze(data) {
    var sum = 0;
    for( var i = 0; i < data.length; i++ ){
        sum += parseInt( data[i], 10 ); //don't forget to add the base
    }

    var avg = sum/data.length;
    $('h2#average').html(avg);
    if(avg>250) {
        $('h2#average').css("color","red");
    } else {
        $('h2#average').css("color","black");
    }

}