/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/

window.onload=function(){
    document.getElementById('id-sun').onclick = function(){
        document.getElementById('pagina').classList.remove('dark-mode')
        document.getElementById('id-moon').classList.remove('active')
        this.classList.add('active')
      }
      /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
      con id page y se aplicará el estilo active a la luna*/
    document.getElementById('id-moon').onclick = function(){
        document.getElementById('pagina').classList.add('dark-mode')
        document.getElementById('id-sun').classList.remove('active')
        this.classList.add('active')
      }
}


/*
<div id="pagina">

      <div class="container-btn-mode">
        <div id="id-sun" class="btn-mode sun active">
           <i class="fas fa-sun"></i>
        </div>
        <div id="id-moon" class="btn-mode moon">
           <i class="fas fa-moon"></i>
        </div>
      </div>

      */