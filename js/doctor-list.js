var apiKey = require('./../.env').apiKey;

function Doctors(firstName, lastName, symptom){
  this.firstName = firstName;
  this.lastName = lastName;
  this.symptom = symptom;
}

Doctors.prototype.getSymptom = function(){
  var resultArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ this.symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    var allDoctors = result;
    console.log(allDoctors);
  //   allDoctors.forEach(function(eachBio){
  //    resultArray.push(eachBio.profile);
  //  });
    })
   .fail(function(error){
      console.log("fail");
    });
    console.log(resultArray);
  };


exports.doctorModule = Doctors;
