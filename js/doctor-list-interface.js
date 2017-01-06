var Doctors = require('./../js/doctor-list.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  var ailment = $("ailment").val();
  var currentDoctorList = new Doctors();
  currentDoctorList.getSymptom(ailment);

});
