var Doctors = require('./../js/doctor-list.js').doctorModule;

var displayResults = function(results){
  var doctorList = [];
  for(i=0;i<results.data.length;i++){
    doctorList.push(results.data[i].profile)
  };
  console.log(doctorList);
  doctorList.forEach(function(eachDr){
    $("#results").append("<img src=" + eachDr.image_url+ ">" +"<p> Dr  " + eachDr.last_name + ", </p><p>" + eachDr.bio + "</p>");
  })
}
$(document).ready(function(){
  $("#get-doctor").click(function(){
    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var ailment = $("#ailment").val();
    var currentDoctorList = new Doctors(firstName,lastName, ailment);
    currentDoctorList.getSymptom(displayResults)
  });
});
