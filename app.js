// Lunes
// -------------
var lunes = Array();
try {
  lunes = JSON.parse(window.localStorage.getItem('lunes'));
} catch (error) {
    console.error(error);
}
lunes.forEach( function( name, index ) {
  if ( name != null ) {
    $('#lunes ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#lunes input').val('');
  }
})

// display or hide input field on click on +
$('#lunes .fa-plus').on('click', function(){
  $('#lunes input').slideToggle();
})


// change css style on click on a to do
$('#lunes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#lunes input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#lunes input').val();
      $('#lunes ul').append('<li data-id="' + lunes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#lunes input').val('');
      lunes.push(value);
      window.localStorage.setItem('lunes', JSON.stringify(lunes));
  }
})

// delete to do
$('#lunes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete lunes[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('lunes', JSON.stringify(lunes));
  console.log(lunes);
})


// Martes
// -------------
var martes = Array();
try {
  martes = JSON.parse(window.localStorage.getItem('martes'));
} catch (error) {
    console.error(error);
}
martes.forEach( function( name, index ) {
  if ( name != null ) {
    $('#martes ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#martes input').val('');
  }
})

// display or hide input field on click on +
$('#martes .fa-plus').on('click', function(){
  $('#martes input').slideToggle();
})


// change css style on click on a to do
$('#martes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#martes input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#martes input').val();
      $('#martes ul').append('<li data-id="' + martes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#martes input').val('');
      martes.push(value);
      window.localStorage.setItem('martes', JSON.stringify(martes));
  }
})

// delete to do
$('#martes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete martes[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('martes', JSON.stringify(martes));
})

// Miércoles
// -------------
var miercoles = Array();
try {
  miercoles = JSON.parse(window.localStorage.getItem('miercoles'));
} catch (error) {
    console.error(error);
}
miercoles.forEach( function( name, index ) {
  if ( name != null ) {
    $('#miercoles ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#miercoles input').val('');
  }
})
// display or hide input field on click on +
$('#miercoles .fa-plus').on('click', function(){
  $('#miercoles input').slideToggle();
})


// change css style on click on a to do
$('#miercoles ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#miercoles input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#miercoles input').val();
      $('#miercoles ul').append('<li data-id="' + miercoles.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#miercoles input').val('');
      miercoles.push(value);
      window.localStorage.setItem('miercoles', JSON.stringify(miercoles));
  }
})

// delete to do
$('#miercoles ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete miercoles[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('miercoles', JSON.stringify(miercoles));
})


// Jueves
// -------------
var jueves = Array();
try {
  jueves = JSON.parse(window.localStorage.getItem('jueves'));
} catch (error) {
    console.error(error);
}
jueves.forEach( function( name, index ) {
  if ( name != null ) {
    $('#jueves ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#jueves input').val('');
  }
})
// display or hide input field on click on +
$('#jueves .fa-plus').on('click', function(){
  $('#jueves input').slideToggle();
})


// change css style on click on a to do
$('#jueves ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#jueves input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#jueves input').val();
      $('#jueves ul').append('<li data-id="' + jueves.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#jueves input').val('');
      jueves.push(value);
      window.localStorage.setItem('jueves', JSON.stringify(jueves));
  }
})

// delete to do
$('#jueves ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete jueves[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('jueves', JSON.stringify(jueves));
})

// Viernes
// -------------
var viernes = Array();
try {
  viernes = JSON.parse(window.localStorage.getItem('viernes'));
} catch (error) {
    console.error(error);
}
viernes.forEach( function( name, index ) {
  if ( name != null ) {
    $('#viernes ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#viernes input').val('');
  }
})
// display or hide input field on click on +
$('#viernes .fa-plus').on('click', function(){
  $('#viernes input').slideToggle();
})


// change css style on click on a to do
$('#viernes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#viernes input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#viernes input').val();
      $('#viernes ul').append('<li data-id="' + viernes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#viernes input').val('');
      viernes.push(value);
      window.localStorage.setItem('viernes', JSON.stringify(viernes));
  }
})

// delete to do
$('#viernes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete viernes[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('viernes', JSON.stringify(viernes));
})


// Sábado
// -------------
var sabado = Array();
try {
  sabado = JSON.parse(window.localStorage.getItem('sabado'));
} catch (error) {
    console.error(error);
}
sabado.forEach( function( name, index ) {
  if ( name != null ) {
    $('#sabado ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#sabado input').val('');
  }
})
// display or hide input field on click on +
$('#sabado .fa-plus').on('click', function(){
  $('#sabado input').slideToggle();
})


// change css style on click on a to do
$('#sabado ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#sabado input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#sabado input').val();
      $('#sabado ul').append('<li data-id="' + sabado.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#sabado input').val('');
      sabado.push(value);
      window.localStorage.setItem('sabado', JSON.stringify(sabado));
  }
})

// delete to do
$('#sabado ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete sabado[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('sabado', JSON.stringify(sabado));
})


// Domingo
// -------------
var domingo = Array();
try {
  domingo = JSON.parse(window.localStorage.getItem('domingo'));
} catch (error) {
    console.error(error);
}
domingo.forEach( function( name, index ) {
  if ( name != null ) {
    $('#domingo ul').append('<li data-id="' + index + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name + '</li>');
    $('#domingo input').val('');
  }
})
// display or hide input field on click on +
$('#domingo .fa-plus').on('click', function(){
  $('#domingo input').slideToggle();
})


// change css style on click on a to do
$('#domingo ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('#domingo input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#domingo input').val();
      $('#domingo ul').append('<li data-id="' + domingo.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#domingo input').val('');
      domingo.push(value);
      window.localStorage.setItem('domingo', JSON.stringify(domingo));
  }
})

// delete to do
$('#domingo ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  var id = $(this).parent().data("id");
  delete domingo[id];
  $(this).parent().fadeOut();

  window.localStorage.setItem('domingo', JSON.stringify(domingo));
})
