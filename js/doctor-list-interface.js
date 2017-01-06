var Doctors = require('./../js/doctor-list.js').doctorModule;

var displayResults = function(results){
  var doctorList = [];
  var doctorContact = [];
  console.log(results);
  for(i=0;i<results.data.length;i++){
    doctorList.push(results.data[i].profile);
    doctorContact.push(results.data[i].practices[0].phones[0].number);
  };
  if (doctorList.length > 0 ){
    doctorList.forEach(function(eachDr){
      var doctorCount =0;
      $("#results").show();
      $("#results").append("<img class ='profile-pic' src=" + eachDr.image_url+ ">" +"<p class='dr-name'> Dr.    " + eachDr.last_name + ", " + eachDr.title +" </p><p>Contact: " + doctorContact[doctorCount]+"</p><p class='bio'>" + eachDr.bio + "</p><hr>");
      doctorCount +=1;
    });
  } else{
    $("#results").append("<h3>There are no doctors that match your search criteria.  Please try a different symptom, or check your spelling.</h3>");
  }
}
$(document).ready(function(){
  $("#get-doctor").click(function(){
    $("#results").text("");
    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var ailment = $("#ailment").val();
    var currentDoctorList = new Doctors(firstName,lastName, ailment);
    currentDoctorList.getSymptom(displayResults);
  });
});
