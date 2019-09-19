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

  let db = coDesConnect('https://portfolio-codes.firebaseio.com/')

  //console.log(value)
  db.download('/', function(data) {
    let params = coDesExtract()
    //console.log(params)
    let value = params['key']
    let categ = params['category']
    console.log(categ)
    console.log(value)

    context = data['portfolio'][categ]['projetos'][value]
    console.log(context)
    coDesReplace('body',context)


 })



})
