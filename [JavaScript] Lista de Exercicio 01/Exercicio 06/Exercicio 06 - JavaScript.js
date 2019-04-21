var entrada = document.getElementById("caixa1");

window.onclick = function(evento) {

	if (evento.target == entrada) {
		alert("Primeira caixa ativada!");
	}
	else
		{alert("Perdeu o foco!");
	}
}