/*# Pizza Bedlam

**BasicPizza Bedlam kata**

Diseña el código que te permita modelar el menú del restaurante BasicPizza Bedlam y las promociones. Utiliza diferentes clases para representar los productos y su coste.

Debemos calcular el precio de cada pizza.

Por ejemplo, una Prosciutto cuesta 12.00 euros y una Prosciutto con Champiñones y Salsa picante cuesta 13.80

**Nuestras pizzas:**

- MARGHERITA 9,30€ Tomate, mozzarella y albahaca
- PROSCIUTTO 12,00€ Tomate, mozzarella, jamón dulce y orégano
- PROSCIUTTO E FUNGHI 12,50€ Tomate, mozzarella, jamón dulce, champiñones y orégano
- 4 STAGIONI 12,50€ Tomate, mozzarella, jamón dulce, champiñones, alcachofas, olivas y orégano

**Ingredientes y extras**

- **Ingredientes Básicos (+0.90€/c.u.)** Jamón dulce, Extra Queso Mozzarella, Tomate Natural, Champiñones, Alcachofas, Atún
- **Gourmet (+1.20€/c.u.)** Olivas, Alcaparras, Jamón Serrano, Pollo
- **Premium (+2.20€/c.u)** Anchoas, salmón, ternera picada
- **Salsa Barbacoa (+1.00€)**
- **Salsa Picante (+0.90€)**
- **Borde relleno de queso (+1.20€)**

**Requisito avanzado**

Cada pizza debe generar un ticket con el precio y el nombre.

Por ejemplo, una `Prosciutto e Funghi con extra de queso y extra de anchoas` deberá generar el siguiente ticket:

   `PROSCIUTTO E FUNGHI   12,50€
    + EXTRA QUESO         0,90€
    + EXTRA ANCHOAS       2,20€
   _____________________________
   TOTAL                 15,60€`
*/

class Pizza {
    constructor(name, basePrice) {
        this.name = name;
        this.basePrice = basePrice;
        this.extras = [];
    }
}

class Extra {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(pizza) {
        this.pizza = pizza;
    }
    addExtra(extra) {
        this.pizza.extras.push(extra);
    }
    calculateTotal() {
        let total = this.pizza.basePrice;   
        for (let extra of this.pizza.extras) {
            total += extra.price;
        }   
        return total;
    }

    generateTicket() {
        let ticket = `${this.pizza.name.toUpperCase()}   ${this.pizza.basePrice.toFixed(2)}€\n`;
        for (let extra of this.pizza.extras) {
            ticket += `+ ${extra.name.toUpperCase()}         ${extra.price.toFixed(2)}€\n`;
        }
        ticket += '_____________________________\n';
        ticket += `TOTAL                 ${this.calculateTotal().toFixed(2)}€`;
        return ticket;
    }
}

// Pizzas
const MARGHERITA = new Pizza("Margherita", 9.30);
const PROSCIUTTO = new Pizza("Prosciutto", 12.00);
const PROSCIUTTO_E_FUNGHI = new Pizza("Prosciutto e Funghi", 12.50);
const FOUR_SEASONS = new Pizza("4 Stagioni", 12.50);

// Extras
const EXTRA_CHEESE = new Extra("Extra Queso Mozzarella", 0.90);
const TOMATO = new Extra("Tomate Natural", 0.90);   
const MUSHROOMS = new Extra("Champiñones", 0.90);
const ANCHOVIES = new Extra("Anchoas", 2.20);
const SPICY_SAUCE = new Extra("Salsa Picante", 0.90);
const CHEESE_STUFFED_CRUST = new Extra("Borde relleno de queso", 1.20);

// Example Order
const myPizzaOrder = new Order(PROSCIUTTO_E_FUNGHI);
myPizzaOrder.addExtra(EXTRA_CHEESE);
myPizzaOrder.addExtra(ANCHOVIES);
console.log(myPizzaOrder.generateTicket());

