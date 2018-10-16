
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
      console.log(body);


      $('.showResults').text(`Please see the following list of doctors who match your criteria: ${body.data}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });







  });
});
