(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
  $('#grid').mousemove(function(e) {
    var offset = e.originalEvent.offsetX * -1;
    $('.featured-image').css("background-position", "" + offset + "");
  });
});

$(function() {
  var transitioning = false;
  var transitionSpeed = 400;
  var transitioningDelay = transitionSpeed * 2 + 100;
  $('.page-link1').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link1').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project1').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link2').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link2').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project2').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link3').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link3').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project3').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link4').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link4').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project4').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link5').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link5').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project5').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
});

},{}]},{},[1]);
