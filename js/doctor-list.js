var apiKey = require('./../.env').apiKey;

function Doctors(){

}

Doctors.prototype.getSymptom = function(symptom){
  //$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=3377230f689f077ed20b62b724429b61').then(function(result) {
    console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
  };


exports.doctorModule = Doctors;
