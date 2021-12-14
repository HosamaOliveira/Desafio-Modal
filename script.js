const button = document.querySelector("#button")
var div1 = document.querySelector("#div1")

button.onclick = function() {
  div1.style.display = "grid"
}

document.addEventListener('keydown', function(event){
  const isEscKey = event.key === 'Escape'

  if(isEscKey) {
    div1.style.display = "none"
    button.style.border = "none"
  }
})