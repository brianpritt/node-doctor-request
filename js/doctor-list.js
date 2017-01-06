var apiKey = require('./../.env').apiKey;

function Doctors(firstName, lastName, symptom){
  this.firstName = firstName;
  this.lastName = lastName;
  this.symptom = symptom;
}

Doctors.prototype.getSymptom = function(displayFunction){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ this.symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    displayFunction(result);
    })
   .fail(function(error){
      console.log("fail");
    });
  };


exports.doctorModule = Doctors;
