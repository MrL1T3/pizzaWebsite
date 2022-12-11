function Pizza (toppingsList) {
  this.toppingsList = toppingsList
}

Pizza.prototype.price = function() {
  const size = document.getElementById('size');
  let pizzaSize = size.options[size.selectedIndex].text;

  numToppings = 0;
  for (var k in this.toppingsList) {
    if (this.toppingsList[k] === true) {
      numToppings ++;
    }
  }
  let toppingsPrice = numToppings * 0.25;
  let pizzaPrice = ((3/4) * (parseInt(size.value)));
  console.log(numToppings);
  console.log(toppingsPrice);
  console.log(pizzaSize);
  console.log(pizzaPrice);
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
