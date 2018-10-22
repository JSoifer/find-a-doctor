
import $ from 'jquery';
import 'bootstrap';
import FindDoctor from '../src/FindDoctor.js';

$(document).ready(function() {

  function location(practices) {
    let view = "practice:  ";
    practices.forEach(function(practice) {

      view += `${practice.name}, Address: ${practice.visit_address.street},  ${practice.visit_address.city}, ${practice.visit_address.state}  `

    });
    return view;
  }

  function createDoctorView(data) {
    let view = "Please see the following list of doctors who match your criteria:  ";

    data.forEach(function(doctor) {
      view += '<div>'
      view += '<h3>'
      view += doctor.profile.first_name + ' ' + doctor.profile.last_name;
      view += '</h3>'

      const locationView = location(doctor.practices);

      view += locationView;
      view += '</div>'
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
    // console.log(body);
  }).then(function(body) {
    const doctorView = createDoctorView(body.data);
      $('.showResults').html(doctorView);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
