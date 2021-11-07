/*

// VARIÁVEL - forma da gente armazenar coisas

// FUNÇÃO - realizam alguma ação
function darOi(){
	alert("Oi!")
}


// CONDICIONAIS - realizam ações conforme uma ação

if(1 === 1){
	darOi()
}

*/

// buscar os items da tela
const itensPerguntasERespostas = document.querySelectorAll(".item");

// entender que o item foi clicado
itensPerguntasERespostas.forEach(function(item) {
	item.addEventListener("click", function() {

		// verificar se a pergunta clicada está ativa
		const estavaAtiva = item.classList.contains("ativo")

		// se a pergunta não está ativa
		if(!estavaAtiva){

			//eu preciso fechar todas

			itensPerguntasERespostas.forEach(function(item){
				item.classList.remove("ativo")
			})

			// abrir a resposta atual
			item.classList.add("ativo")
		} 

		// se a pergunta estiver ativa

		else {
			item.classList.remove("ativo")
		}


			// desativar (removeria a classe ativo)

	})
})

