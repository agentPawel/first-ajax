$(document).ready(function () {

  $('#step12 button').on('click', function (){
    $.ajax({
      method: 'GET',
      url: 'http://first-ajax-api.herokuapp.com/',
      dataType:''
    });
  });

  $('#step3456 button').on('click', function (){
    $.ajax({
      method: 'GET',
      url: 'http://first-ajax-api.herokuapp.com/ping',
      dataType: 'text'
    }).done(function(data) {
      console.log(data);
      console.log('We did it yo!')
      $('section#step3456').append(data);
    }).fail(function () {
      $('section#step3456').append('Try harder next time!');
      console.log('That did not go very well...')
    }).always(function(){
      console.log('Hey the request finished!');
    });
  });

  $('#step7 button').on('click', function (){
    $.ajax({
      method: 'GET',
      url: 'http://first-ajax-api.herokuapp.com/count',
      dataType:'text'
    }).done(function(data){
      console.log(data);
    });
  });

  $('#step8 button').on('click', function (){
    $.ajax({
      method: 'GET',
      url: 'http://first-ajax-api.herokuapp.com/time',
      dataType:'text',
      data: {timezone: 'America/Mexico_City'}
    }).done(function(data){
      $('section#step8').append(data);
      console.log(data);
    });
  });

  $('#step9 button').on('click', function (){
    $.ajax({
      method: 'GET',
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      dataType:'html'
    }).done(function(data){
      $('#attribute').append(data);
      console.log(data);
    });
  });

});
