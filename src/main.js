
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
    return body;

  }).then(function(body) {
    const doctorView = createDoctorView(body.data);
      $('.showResults').text(doctorView);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
