function alterandoMensagem(){

  var x, text;

  x = document.getElementById("texto").value;

   if ( x >= 0 && x < 10 ) {
      text = "Insuficiente";
    } 
    else if ( x > 9 && x < 14 ){
      text = "Bom";
    }
   else{
      text = "Muito bom";
   }

  document.getElementById("mensagem").innerHTML = text;
}