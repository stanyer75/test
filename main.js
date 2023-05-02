'use strict';

class Item {
    constructor(name, category){
        this.name = name;
        this.category = category;
    }

    static maxItems = 10;

    static getHelperText(){
        return 'add items to your list'
    }

    getDetails(){
        return `${this.name} - ${this.category}`;
    }
}

class PurchasedItem extends Item {
    constructor(name, category, price){
        super(name, category);
        this.price = price;

    }

    getDetailsWithPrice(){
        return `${this.name} - ${this.category} - $${this.price}`;
    }
    
    static getNumberOfItems(){
        return `3/ ${super.maxItems}`;
    }
}

/* let item = new Item('coffee', 'food');
item.category = 'drinks';

let purchasedItem = new PurchasedItem('sugar', 'food', '2.49');  */

/* document.getElementById('output').innerHTML = Item.getHelperText(); */
document.getElementById('output').innerHTML = PurchasedItem.getNumberOfItems();
