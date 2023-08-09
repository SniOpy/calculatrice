const touches = [...document.querySelectorAll(".button")];
const listKeyCode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("click", (event)=> {
  const value = event.target.dataset.key.toString();
  calculer(value);

})

function calculer(value) {
  if(listKeyCode.includes(value)){
    switch (value) {
      case "46":
        ecran.textContent = "";
        break;
      case "61":
        const result = eval(ecran.textContent);
        ecran.textContent = result;
        break;

      default:
        const indexKeyCode = listKeyCode.indexOf(value);
        console.log(indexKeyCode);
        const touche = touches[indexKeyCode];
        console.log(touches);
        ecran.textContent += touche.textContent;
        break;
    }
  }
}




