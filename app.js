// Lunes
// -------------

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
      $('#lunes ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#lunes input').val('');
  }
})

// delete to do
$('#lunes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})


// Martes
// -------------

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
      $('#martes ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#martes input').val('');
  }
})

// delete to do
$('#martes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})

// Miércoles
// -------------

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
      $('#miercoles ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#miercoles input').val('');
  }
})

// delete to do
$('#miercoles ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})


// Jueves
// -------------

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
      $('#jueves ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#jueves input').val('');
  }
})

// delete to do
$('#jueves ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})

// Viernes
// -------------

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
      $('#viernes ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#viernes input').val('');
  }
})

// delete to do
$('#viernes ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})


// Sábado
// -------------

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
      $('#sabado ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#sabado input').val('');
  }
})

// delete to do
$('#sabado ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})


// Domingo
// -------------

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
      $('#domingo ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#domingo input').val('');
  }
})

// delete to do
$('#domingo ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})
