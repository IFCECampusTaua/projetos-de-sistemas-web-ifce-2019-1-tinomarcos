document.getElementById('botao').addEventListener("click", handleclick, false);

function handleclick(){
	var n1 = document.getElementById('caixa1').value;
	var n2 = document.getElementById('caixa2').value;
	document.getElementById('result').innerHTML = resto(n1,n2);
}
function resto(n1,n2){
	return n1 % n2;
}