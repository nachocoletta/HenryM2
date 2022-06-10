
$('#boton').click(function() {
    $("#lista").empty();
    $.get("http://localhost:5000/amigos", function( data ) {
        for(let i = 0; i < data.length; i++){
            $("#lista").append(`<li id=${data[i].id}>${data[i].id}-  ${data[i].name}</li>`);
        }    
    });
});

$('#search').click(function() {
    let id = $("#input").val();
    
    if(id){
        $.get("http://localhost:5000/amigos/"+id, function( data ) {
            
            $("#amigo").text(data.name);
        });
    }
  });


  $("#delete").click(function(){
    let id = $("#inputDelete").val();
    

    $.ajax({
        url: 'http://localhost:5000/amigos/'+id,
        type: 'DELETE',
        success: function(data) {
            // Do something with the result

            $("#success").text(`El amigo fue borrado exitosamente`);
            $("#lista").empty();
            for(let i = 0; i < data.length; i++){
                $("#lista").append(`<li id=${data[i].id}>${data[i].id}-  ${data[i].name}</li>`);
            }  
        }
        });
  })
