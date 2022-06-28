import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

$(document).ready(function() {
  $('#dinoLang').click(function() {
    let words = $('#words').val();
    $('#words').val("");
    let para = $('#paragraphs').val();
    $('#paragraphs').val("");
    $('.dinoDiv').children('p').remove();
    

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=${para}&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      for (let i=0; i < body.length; i++) {
        $('.dinoDiv').append(`<p>${body[i]}<p><br>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showDino').text("");
    });
  });
});