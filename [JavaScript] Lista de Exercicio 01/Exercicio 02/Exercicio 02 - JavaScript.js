function aleatorio(){ 
	var n = Math.floor((Math.random() * 50) + 1);
    document.getElementById("exibir_Numero").innerHTML = n;
}
document.getElementById("botao").addEventListener("click", aleatorio);