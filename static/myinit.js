$('#alert-buzz').hide();
var avgThresh = 0.01;
var buzzCountThresh = 6;
var start = 475;
var end = 512;
var lastBuzzTime = -1;
var lastDisplayTime = -1;
var displaying = false;
var displayTimeDiff = 0;

var buzz = false;
var buzzCount = 0;
var peakVal = 0;
var peakIndex = 498;
var sliced = [];

var d = -1;
var now = -1;
var timeDiff = -1;

var max = 0;
var max_index = 0;

var sum = 0;
var avg = 0;

var banner1 = '<div class="row"><div class="alert-buzz alert alert-primary text-center col-md justify-content-center" role="alert">'
var benner2 = 'Default Buzz detection string.'
var banner3 = '.</div></div>'