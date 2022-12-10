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
    if(e.target.checked){
      myPizza.toppingslist.push('pepperoni')
      gatherToppings();
    }
  });

  
});
