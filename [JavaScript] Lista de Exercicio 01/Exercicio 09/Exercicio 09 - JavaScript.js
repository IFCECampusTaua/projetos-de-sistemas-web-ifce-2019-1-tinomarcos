function alterandoMensagem(){

  var x, text1, text2, text3, text4,aumento, novoSalario;

  x = parseFloat (document.getElementById("texto").value);

   if ( x >= 0  && x <=280) {
      aumento = (x*0.20);
      novoSalario = aumento + x;
      text1 = x;
      text2 = "20%";
      text3 = aumento;
      text4 = novoSalario
    } 
    else if ( x > 280 && x <=700 ){
      aumento = (x*0.15);
      novoSalario = aumento + x;
      text1 = x;
      text2 = "15%";
      text3 = aumento;
      text4 = novoSalario
      
    }
    else if ( x > 700 && x <=1500 ){
      aumento = (x*0.10);
      novoSalario = aumento + x;
      text1 = x;
      text2 = "10%";
      text3 = aumento;
      text4 = novoSalario
    }

   else{
      aumento = (x*0.05);
      novoSalario = aumento + x;
      text1 = x;
      text2 = "5%";
      text3 = aumento;
      text4 = novoSalario
   }
  document.getElementById("salarioAtual").innerHTML = text1;
  document.getElementById("PercentualAumento").innerHTML   = text2;
  document.getElementById("valorAumento").innerHTML = text3;
  document.getElementById("salarioNovo").innerHTML  = text4;
}