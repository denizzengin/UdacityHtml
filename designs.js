// Select color input
// Select size input

function makeGrid() {

var text ;
var tables = $('#pixel_canvas');
var column = $( "#input_height" ).val();
var row = $( "#input_width" ).val();

    for(var i=0; i<row; i++){
        text = '<tr> ';
        for(var j=0; j<column; j++){
          text += ' <td '+'class='+j.toString()+'>'+ '</td> ';
        }
        text += ' </tr> ';
        tables.append(text);
        //differently can set
        tables.find( 'tr' ).last().addClass( i.toString() );
        
    }
}

$( "#sizePicker" ).submit( function(event){
	
	//default behaviour prevented;
    event.preventDefault();
    $( '#pixel_canvas' ).find( 'tr' ).remove();
    makeGrid();
    trigger(); //trig new table elements 
});
;



function trigger(){
$( '#pixel_canvas td' ).click(function(event){
   
       var color = $( '#colorPicker' ).val(); 
       $(this).css( 'background-color', color);
       
        
}); }

