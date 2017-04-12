$(function(){ // doc ready function

//---------------------------------------------------------
//
// VARIABLES
//
//----------------------------------------------------------

tabCD	    = [];
tabCateg  = [];
cdId	    = 1;
categId	  = 1;


$("#btnAddCD").click(function(){

  //requête Ajax

  // alert(CD)
  var CD = $("#CD").val();
    $.post( 
      // 1 URL
      "../php/album_create.php",
      // 2 les Variable 
      { name: CD } ,
      // 3 function call back
      function(cdId) {
        afficherTabCD(cdId, CD);
    }).fail(function() {
      alert( "error" );
    });

  });

//---------------------------------------------------------
//
// OBJETS
//
//---------------------------------------------------------

  class CD{
    constructor(id, name){
      this.id = id;
      this.name = name;
    }
  }

  class Categ{
    constructor(id, name){
      this.id = id;
      this.name = name;
    }
  }

//----------------------------------------------------------
//
// ADD CD
//
//-----------------------------------------------------------


  /*cdName = $('#CD').val();
  afficherTabCD();
  cdId++;
  addCD(cdName);*/

}); 

//-----------------------------------------------------------
//
// ADD CATEGORY
//
//-----------------------------------------------------------

$("#btnAddUser").click(function(){
  afficherTabCategorie();
  categId++;

});

//------------------------------------------------------------
//
// Delete CD
//
//------------------------------------------------------------

$(document).on("click",'.btnDelCD', function(){
    var id  = $(this).parents('table').attr("data-id");
    var myTableCD = $(this).parents('table');
    //tamytable.prev().remove();
    //mytable.prev().remove();
    $(this).parents('table').hide('slow');

    for (var i  in tabCD){
      if (id == tabCD[i].id){
        tabCD.splice(i,1);
        break;
      }
    }
});

//--------------------------------------------------------------
//
// Delete CATEGORY
//
//--------------------------------------------------------------

$(document).on("click",".btnDelCateg", function(){
    nameCateg = $(this).parents('table').attr("data-id");
    var myTableCateg = $(this).parents('table');
    $(this).parents('table').hide('slow');
});

//---------------------------------------------------------------
//
// FONCTION FILL TABLE CD
//
//---------------------------------------------------------------

function afficherTabCD(id, name){

    var str = "";

    str +='<table class="table table-striped" data-id='+id+'>';
    str +="<tr>";
    str +="<td colspan=3>"+id+"<h3>#"+name;
    str +='<a class="btn btn-primary btnDelCD" role="button">';
    str +='<span class="glyphicon glyphicon-trash">';
    str +='</span></a></h3></td>';
    str +="</tr>";
    // entete du tableau
    str +="<tr>";
    str +="<th>Piste</th><th>Titre</th><th>Durée</th>";
    str +="</tr>";
    str += '</table>';

    $('#demo').append(str);
}

function afficherTabCategorie(){
    categName = $("#nom").val();
    var str = '';
    var ligneCateg =  new Categ(categId, categName);
    tabCateg.push(ligneCateg);
    console.log(tabCateg);

    str +='<table class="table" data-id='+categId+'>';
    str +="<tr>";
    str +="<td width=200>"+categId+"-"+categName;
    str +='</td><td><a class="btn btn-primary btnDelCateg" role="button">';
    str +='<span class="glyphicon glyphicon-trash">';
    str +='</span></a></td>';
    str +="</tr>";
    // entete du tableau
  
    str += '</table>';

     $('#categorie').append(str);
}

//-----------------------------------------------------------------------------
// doc end function
//-----------------------------------------------------------------------------
function addCD(text) {
    $.post(
        "../php/album_create.php",
        {name:text},          // on génère un objet json pour récupérer le nom du CD
        function(data) {
            $('#CD').html(data);
            
          }
        ).fail(function(){
        alert("error");
    });
  
}

/*function afficherCD(id, name){
    str +='<table class="table table-striped" data-id='+id+'>';
    str +="<tr>";
    str +="<td colspan=3>"+id+"<h3>#"+name;
    str +='<a class="btn btn-primary btnDelCD" role="button">';
    str +='<span class="glyphicon glyphicon-trash">';
    str +='</span></a></h3></td>';
    str +="</tr>";
    // entete du tableau
    str +="<tr>";
    str +="<th>Piste</th><th>Titre</th><th>Durée</th>";
    str +="</tr>";
    str += '</table>';
}*/
