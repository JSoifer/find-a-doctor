
import $ from 'jquery';
import 'bootstrap';
import FindDoctor from '../src/FindDoctor.js';

$(document).ready(function() {
  $('#getList').click(function() {
    const concern = $('#concern').val();
    $('#concern').val("");

    const findDoctor = new FindDoctor();
    const promise = findDoctor.findDoctorByConcern(concern);
    promise.then(function(response) {
      const body = JSON.parse(response);
      // console.log(body);
      for(let i = 0; i <= body.data.length; i++) {
        const doctors = (body.data[i]);
        const doctorArray = [];

        console.log(doctorArray);

        $('.showResults').text(`Please see the following list of doctors who match your criteria: ${doctors}`);
      }






    }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});
