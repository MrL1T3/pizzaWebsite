function Pizza (toppingsList) {
  this.toppingsList = toppingsList
}

Pizza.prototype.price = function() {
  const size = document.getElementById('size');
  let pizzaSize = size.options[size.selectedIndex].text;
  let sizePrice = (3/4) * (parseInt(size.value));

  console.log(pizzaSize);
  console.log(sizePrice);
}
const myPizza = new Pizza({})

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
