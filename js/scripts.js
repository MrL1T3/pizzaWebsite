const myPizza = new Pizza('', [])
function Pizza (size, toppingsList) {
  this.size = size
  this.toppingslist = toppingsList
}

window.addEventListener('load', (event) =>{
  function gatherToppings() {
    console.log (myPizza.toppingslist);
  }

  const pepCheck = document.getElementById('pepperoni');
  pepCheck.addEventListener('change', e=>{
    if(e.target.checked === true){
      if (myPizza.toppingslist.includes('pepperoni') === false){
        myPizza.toppingslist.push('pepperoni')
      }
      gatherToppings();
    }
    else if (e.target.checked === false){
      if (myPizza.toppingslist.includes('pepperoni')){
        myPizza.toppingslist.splice(myPizza.toppingslist.indexOf('pepperoni'), 1)
      }
      gatherToppings
    }
  });

  
});
