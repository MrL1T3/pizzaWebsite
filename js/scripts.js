function Pizza (size, toppingsList) {
  this.size = size
  this.toppingslist = toppingsList
}

const myPizza = new Pizza("medium", ["anchovies", "pineapple"])

function gatherToppings(Pizza)
  console.log (Pizza.toppingslist);