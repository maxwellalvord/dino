import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import guessChecker from "./js/letterguess.js";

$(document).ready(function() {
  $('#dinoLang').click(function() {
    $('.dinoDiv').children('p').remove();
    $('.word').children('p').remove();
    let guess = new guessChecker();

    

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;
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
      const properString = body[0].toString();
      let letterArray = properString.split("");
      for (let i=0; i < body.length; i++) {
        $('.dinoDiv').append(`<p>${body[i]}<p><br>`);
      }
      for (let i = 0; i < letterArray.length ; i++) {
        $('.word').append(`<p>${letterArray[i]}</p>`); 
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showDino').text("");
    });
  });
});

