function alterandoMensagem(){

  var x, i; 
  var text = "";

  x = parseInt (document.getElementById("texto").value);

    for (i = 1; i < x +1; i++) {

     text += "IFCE " + i + "<br>";
}
  document.getElementById("mensagem").innerHTML = text;
}