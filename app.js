// Lunes
// -------------
var lunes = Array();
try {
  lunes = JSON.parse(window.localStorage.getItem('lunes'));
} catch (error) {
    console.error(error);
}
if ( lunes != null ) {
  lunes.forEach( function( name, index ) {
    if ( name != null ) {
      $('#lunes ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#lunes input').val('');
    }
  })
} else {
  lunes = Array();
}

// display or hide input field on click on +
$('#lunes .fa-plus').on('click', function(){
  $('#lunes input').slideToggle();
})


// change css style on click on a to do
$('#lunes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  lunes[id].status = $(this).attr('class');
  window.localStorage.setItem('lunes', JSON.stringify(lunes));
})


// add tex on keypress in input
$('#lunes input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#lunes input').val();
      $('#lunes ul').append('<li data-id="' + lunes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#lunes input').val('');
      var valor = {
        'value': value,
        'status': 'todo' 
      };
      lunes.push(valor);
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
if ( martes != null ) {
  martes.forEach( function( name, index ) {
    if ( name != null ) {
      $('#martes ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#martes input').val('');
    }
  })
} else {
  martes = Array();
}


// display or hide input field on click on +
$('#martes .fa-plus').on('click', function(){
  $('#martes input').slideToggle();
})


// change css style on click on a to do
$('#martes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  martes[id].status = $(this).attr('class');
  window.localStorage.setItem('martes', JSON.stringify(martes));
})


// add tex on keypress in input
$('#martes input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#martes input').val();
      $('#martes ul').append('<li data-id="' + martes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#martes input').val('');
     
      var valor = {
        'value': value,
        'status': 'todo' 
      };
      martes.push(valor);
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
if ( miercoles != null ) {
  miercoles.forEach( function( name, index ) {
    if ( name != null ) {
      $('#miercoles ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#miercoles input').val('');
    }
  })
} else {
  miercoles = Array();
}

// display or hide input field on click on +
$('#miercoles .fa-plus').on('click', function(){
  $('#miercoles input').slideToggle();
})


// change css style on click on a to do
$('#miercoles ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  miercoles[id].status = $(this).attr('class');
  window.localStorage.setItem('miercoles', JSON.stringify(miercoles));
})


// add tex on keypress in input
$('#miercoles input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#miercoles input').val();
      $('#miercoles ul').append('<li data-id="' + miercoles.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#miercoles input').val('');

      var valor = {
        'value': value,
        'status': 'todo' 
      };
      miercoles.push(valor);
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
if ( jueves != null ) {
  jueves.forEach( function( name, index ) {
    if ( name != null ) {
      $('#jueves ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#jueves input').val('');
    }
  })
} else {
  jueves = Array();
}

// display or hide input field on click on +
$('#jueves .fa-plus').on('click', function(){
  $('#jueves input').slideToggle();
})


// change css style on click on a to do
$('#jueves ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  jueves[id].status = $(this).attr('class');
  window.localStorage.setItem('jueves', JSON.stringify(jueves));

})


// add tex on keypress in input
$('#jueves input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('#jueves input').val();
      $('#jueves ul').append('<li data-id="' + jueves.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#jueves input').val('');

      var valor = {
        'value': value,
        'status': 'todo' 
      };
      jueves.push(valor);
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
if ( viernes != null ) {
  viernes.forEach( function( name, index ) {
    if ( name != null ) {
      $('#viernes ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#viernes input').val('');
    }
  })
} else {
  viernes = Array();
}

// display or hide input field on click on +
$('#viernes .fa-plus').on('click', function(){
  $('#viernes input').slideToggle();
})


// change css style on click on a to do
$('#viernes ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  viernes[id].status = $(this).attr('class');
  window.localStorage.setItem('viernes', JSON.stringify(viernes));

})


// add tex on keypress in input
$('#viernes input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#viernes input').val();
      $('#viernes ul').append('<li data-id="' + viernes.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#viernes input').val('');

      var valor = {
        'value': value,
        'status': 'todo' 
      };
      viernes.push(valor);
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
if ( sabado != null ) {
  sabado.forEach( function( name, index ) {
    if ( name != null ) {
      $('#sabado ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#sabado input').val('');
    }
  })
} else {
  sabado = Array();
}

// display or hide input field on click on +
$('#sabado .fa-plus').on('click', function(){
  $('#sabado input').slideToggle();
})


// change css style on click on a to do
$('#sabado ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  sabado[id].status = $(this).attr('class');
  window.localStorage.setItem('sabado', JSON.stringify(sabado));
})


// add tex on keypress in input
$('#sabado input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#sabado input').val();
      $('#sabado ul').append('<li data-id="' + sabado.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#sabado input').val('');

       var valor = {
        'value': value,
        'status': 'todo' 
      };
      sabado.push(valor);
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
if ( domingo != null ) {
  domingo.forEach( function( name, index ) {
    if ( name != null ) {
      $('#domingo ul').append('<li data-id="' + index + '" class="' + name.status + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + name.value + '</li>');
      $('#domingo input').val('');
    }
  })
} else {
  domingo = Array();
}

// display or hide input field on click on +
$('#domingo .fa-plus').on('click', function(){
  $('#domingo input').slideToggle();
})


// change css style on click on a to do
$('#domingo ul').on('click', 'li', function(){
  $(this).toggleClass('done');
  var id = $(this).data("id");
  domingo[id].status = $(this).attr('class');
  window.localStorage.setItem('domingo', JSON.stringify(domingo));

})


// add tex on keypress in input
$('#domingo input').on('keypress', function(e){
  if (e.which === 13) {
     value = $('#domingo input').val();
      $('#domingo ul').append('<li data-id="' + domingo.length + '"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('#domingo input').val('');

      var valor = {
        'value': value,
        'status': 'todo' 
      };
      domingo.push(valor);
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
