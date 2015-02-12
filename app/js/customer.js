$(document).ready(function() {

  $("#cancel_Edit").click(function() {
    $("#editForm").hide();
    $("#customerInformation").show();
  });








  $( "form" ).submit(function( event ) {
    console.log( $( this ).serializeArray() );
    event.preventDefault();
  });
})
