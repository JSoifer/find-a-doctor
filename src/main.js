
import $ from 'jquery';
import 'bootstrap';
import FindDoctor from '../src/FindDoctor.js';

$(document).ready(function() {
  function createDoctorView(data) {
    let view = "Please see the following list of doctors who match your criteria:  ";

    data.forEach(function(doctor) {
      view += doctor.profile.first_name + ' ' + doctor.profile.last_name + ', '
    });
    return view;
  }
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
