import $ from 'jquery';
$(document).ready(function() {
  $('#getList').click(function() {
    // let condition = $('#concern').val();
    // $('#concern').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&sort=best-match-asc&skip=0&limit=10&process.env.exports.apiKey`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('.showResults').text(`Please see the following list of doctors who match your criteria: ${body.data.practices}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
