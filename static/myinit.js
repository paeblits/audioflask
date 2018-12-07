$('#alert-buzz').hide();

// we can tweak these variables to make detection more sensitive

// We take an average of a small group of frequencies.
// Lower this value to make detection more sensitive.
var avgThresh = 0.01;

// how many times/frames do you want to detect the sound signature?
var buzzCountThresh = 6;

// At which index on the x-axis do you want to start your group?
var start = 475;
// same as above, but end?
var end = 512;


var buzzCount = 0;

// This should be the last time in milliseconds that a buzz was detected.
var lastBuzzTime = -1;

var isBuzz = false;
var peakVal = 0;
var peakIndex = 498;    // which index do we want to monitor for a peak?
var sliced = [];    // a subset of all the data in this frame

var d = -1; // date
var now = -1; // date
var timeDiff = -1; // time diff in millis

var max = 0;    // placeholder for a max value
var max_index = 0;

var sum = 0;
var avg = 0;

var banner1 = '<div class="row"><div class="alert-buzz alert alert-primary text-center col-md justify-content-center" role="alert">'
var benner2 = 'Default Buzz detection string.'
var banner3 = '.</div></div>'