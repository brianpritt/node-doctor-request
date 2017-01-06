var Doctors = require('./../js/doctor-list.js').doctorModule;

$(document).ready(function(){
  $("#get-doctor").click(function(){
    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var ailment = $("#ailment").val();
    var currentDoctorList = new Doctors(firstName,lastName, ailment);
    currentDoctorList.getSymptom()
  });
});
