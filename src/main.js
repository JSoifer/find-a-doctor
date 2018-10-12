
import $ from 'jquery';
import 'bootstrap';
import FindDoctor from '../src/FindDoctor.js';

$(document).ready(function() {
  $('#getList').click(function() {
    // let concern = $('#concern').val();
    // $('#concern').val("");

    let findDoctor = new FindDoctor();
    let promise = findDoctor.findDoctorByConcern();
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('.showResults').text(`Please see the following list of doctors who match your criteria: ${body}`);


    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });







  });
});
