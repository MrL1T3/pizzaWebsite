Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { size: "medium", toppings: ["anchovies", "pineapple"]}


Describe: gatherToppings()

Test: "It should log the toppingsList property of the myPizza object in the console"
Code: gatherToppings(myPizza);
Expected Output: ['anchovies', 'pineapple']

Describe pepCheck.addEventListener()

Test: "it should push the checked topping to the toppingsList of myPizza"
Code: pepCheck.addEventListener('change', e=>{});
Expected Output: ['pepperoni']