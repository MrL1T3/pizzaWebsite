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
  let pizzaPrice = ((3/4) * (parseInt(size.value)) + (numToppings * 0.25));
  return pizzaPrice;
}
const myPizza = new Pizza({})

window.addEventListener('load', (event) =>{
  const toppingsForm = document.getElementById('toppings-form');
  const calc = document.getElementById('calculate');
  let topInputs = toppingsForm.getElementsByTagName('input');
  for (let i = 0; i < topInputs.length; i++) { 
    if (topInputs[i].type === 'checkbox') {
      topInputs[i].addEventListener('change', function() {
        document.getElementById('price-place').innerHTML = '';
        const cBox = this;
        if (myPizza.toppingsList[cBox.id] === false){
          myPizza.toppingsList[cBox.id] = true;
        }
        else {
          myPizza.toppingsList[cBox.id] = false;
        }
      });
      myPizza.toppingsList[topInputs[i].id] = false;
    }
  }
  calc.addEventListener('click', function() {
    document.getElementById('price-place').innerHTML ='Your pizza will cost ' + myPizza.price() + ' dollars.';
  })
});
