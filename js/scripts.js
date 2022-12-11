function Pizza (size, toppingsList) {
  this.size = size
  this.toppingsList = {}
}
const myPizza = new Pizza('', {})

window.addEventListener('load', (event) =>{

  const toppingsForm = document.getElementById('toppings-form');
  let topInputs = toppingsForm.getElementsByTagName('input');
  for (let i = 0; i < topInputs.length; i++) { 
    if (topInputs[i].type === 'checkbox') {
      topInputs[i].addEventListener('change', function() {
        const cBox = this;
        if (myPizza.toppingsList[cBox.id] === false){
          myPizza.toppingsList[cBox.id] = true;
          console.log(myPizza.toppingsList)
        }
        else {
          myPizza.toppingsList[cBox.id] = false;
          console.log(myPizza.toppingsList)
        }
      });
      myPizza.toppingsList[topInputs[i].id] = false;
    }
  }
});
