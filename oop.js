// class Dog {
//     constructor(name, age, breed){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     walks() {
//         console.log(`Taking ${this.name} the ${this.breed} aged ${this.age} for a walk.`)
//     }
//     eats() {
//         console.log(`${this.name} has eated some food.`)
//     } 
// }

// const stanley = new Dog("Stanley", 10, "Bulldog");
// stanley.walks();

// const ethel = new Dog ("Ethel", 5, "Bull Mastiff")
// ethel.eats()


// class Animal {
//     constructor(name) {
//         this.name = name
//         this.hunger = 100
//         this.health = 100
//     }
//     drinks () {
//         this.health += 5
//         this.hunger -= 5
//         return this
//     }
//     eats() {
//         this.health += 5
//         this.hunger += 10
//         return this
//         console.log(`${this.name}'s health is: ${this.health}`)
//     }
//     stats() {
//         return console.table({
//             name: this.name,
//             health: this.health,
//             hunger: this.hunger,
//             happy: this.happy
//         })
//     }
// }

// const hedgehog = new Animal(`Hedgehog`)
// hedgehog.eats()
// hedgehog.drinks()
// hedgehog.stats()

// const lion = new Animal(`Lion`)
// lion.eats()
// lion.drinks()
// lion.stats()

// class dog extends Animal {
//     constructor (name, happy){
//         super (name, happy)
//         this.happy = 100
//     }
//     playBall() {
//         this.health += 8
//         this.hunger -= 12
//         this.happy += 20
//         console.log(`${this.name} is happy.`)
//         return this
//     }
//     walks() {
//         this.health += 20
//         this.hunger -= 15
//         this.happy += 10
//         console.log(`Taking ${this.name} for a walk and they are ${this.happy}`)
//         return this
//     }
// }

// const Bob = new dog ("Bob")
// Bob.drinks()
// Bob.eats()
// Bob.playBall()
// Bob.walks()
// Bob.stats()


//      ACTIVITY ONE

class CoffeeShopTill {
    constructor() {
        this.menu = {
            'espresso': 1.50,
            'latte': 2.50,
            'cappuccino': 2.75,
            'americano': 2.00,
            'mocha': 3.00,
            'tea': 1.75,
            'hot chocolate': 2.50
        };
        this.order = [];
    }

    addDrink(drinkName) {
        if (this.menu.hasOwnProperty(drinkName)) {
            this.order.push(drinkName);
            console.log(`${drinkName} added to the order.`);
        } else {
            console.log(`Sorry, we don't have ${drinkName} on the menu.`);
        }
    }

    calculateTotal() {
        let total = this.order.reduce((sum, drink) => sum + this.menu[drink], 0);
        return total;
    }

    displayOrder() {
        if (this.order.length === 0) {
            console.log("No drinks in the order.");
        } else {
            console.log("Current order:");
            this.order.forEach(drink => {
                console.log(` - ${drink}: $${this.menu[drink].toFixed(2)}`);
            });
            console.log(`Total: £${this.calculateTotal().toFixed(2)}`);
        }
    }
}
const till = new CoffeeShopTill();
till.addDrink('latte');
till.addDrink('tea');
till.addDrink('mocha');
till.addDrink(`hot chocolate`)
till.displayOrder();

//      STRETCH

class Customer {
    constructor(name, cash) {
        this.name = name;
        this.cash = cash;
    }

    canAffordOrder(till) {
        let total = till.calculateTotal();
        let Change = this.cash - total.toFixed(2)
        if (this.cash >= total) {
            console.log(`${this.name} can afford the order. Total price: £${total.toFixed(2)}. Change: £${Change}`);
            return true;
        } else {
            console.log(`${this.name} cannot afford the order. Total price: £${total.toFixed(2)}, Available cash: £${this.cash.toFixed(2)}`);
            return false;
        }
    }
}

const customer = new Customer('John', 10);
customer.canAffordOrder(till);

const customer2 = new Customer('Jane', 5);
customer2.canAffordOrder(till);
