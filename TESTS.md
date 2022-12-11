Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { size: "medium", toppings: ["anchovies", "pineapple"]}


Describe: gatherToppings()

Test: "It should log the toppingsList property of the myPizza object in the console"
Code: gatherToppings(myPizza);
Expected Output: ['anchovies', 'pineapple']

Describe pepCheck.addEventListener()

Test: "It should push the checked topping to the toppingsList of myPizza"
Code: pepCheck.addEventListener('change', e=>{});
Expected Output: ['pepperoni']

Test: "It should not add an excess element to the array if it is already present"
Code: pepCheck.addEventListener('change', e=>{});
Expected Output: ['pepperoni']

Test: "It should remove the topping when the box is unchecked"
Code: pepCheck.addEventListener('change', e=>{});
Expected Output: []


Describe: window.addEventListener

Test: "It should check if the topping is already selected or not"
Code for (let i = 0; i < topInputs.length; i++) {}
Expected Output: [pepperoni: true, olives: false], [pepperoni: false, olives: false], [pepperoni: false, olives: true], [pepperoni: true, olives: true]