$(function() {
  $('.page-link1').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link1').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project1').show();
      $('.featured-project-image').html('<img src="../assets/images/devices1.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/robot-siyan-ren.jpeg)')
  });
  $('.page-link2').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link2').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project2').show();
      $('.featured-project-image').html('<img src="../assets/images/devices2.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/mike-dorner.jpg)')
  });
  $('.page-link3').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link3').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project3').show();
      $('.featured-project-image').html('<img src="../assets/images/devices3.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/freestocks-org.jpg)')
  });
  $('.page-link4').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link4').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project4').show();
      $('.featured-project-image').html('<img src="../assets/images/devices4.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/bart-larue.jpg)')
  });
  $('.page-link5').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link5').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project5').show();
      $('.featured-project-image').html('<img src="../assets/images/devices5.png">');
  });
});
