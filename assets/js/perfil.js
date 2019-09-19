document.addEventListener('DOMContentLoaded', function() {

  function minhaFuncao() {
    document.getElementById("meuDropdown").classList.toggle("show");
    console.log("funfo?")
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  let params = coDesExtract()
  let value = params['key']
  /*
    A função coDesConnect cria uma conexão com o Firebase.
  */
  let db = coDesConnect('https://portfolio-codes.firebaseio.com/')

  /*
    O método download recebe dois parâmetros. O primeiro é
    o caminho até o dado específico que vocề deseja baixar.
    Reveja os slides para entender como caminhos funcionam.

    O segundo é uma função que deve ser chamada quando o
    dado terminar de ser baixado. Essa função recebe um
    parâmetro que é justamente o dado.

    ATENÇÃO: NÃO CHAME ESSE MÉTODO MAIS QUE UMA VEZ. NÃO
    É NECESSÁRIO E PODE CAUSAR PROBLEMAS DE SINCRONIZAÇÃO.
  */
  db.download('/', function(data) {
    context = data[value]
    console.log(context)
    coDesReplace('p', context)
    coDesReplace('h1', context)
    coDesReplace('img', context)
 })


})
