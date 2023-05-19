class VendingMachine {
    constructor(items, money) {
        this.items = items // array of objects
        this.money = money // number (how much is currently in the machine)
    }
    
    // this.items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        // { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        // { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        // { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }]

    vend(selection, itemMoney) { // selection = "A01", itemMoney = 0.60

        // ASSUME: they put in the exact right amount of money
        // ASSUME: they picked a valid selection

        // 1: Go and find the item object that matches the selection
        let item = undefined
        
        // for(let itemToCheck of this.items) {
        //     if( selection === itemToCheck.code ) {
        //         item = itemToCheck
        //         break // emergency exit the loop
        //         //return "Vending " + itemToCheck.name
        //     }
        // }

        // for(let i = 0; i < this.items.length; i++) {
        //     if( selection === this.items[i].code ) {
        //         item = this.items[i]
        //         break // emergency exit the loop
        //         //return "Vending " + this.items[i].name
        //     }
        // }

        item = this.items.find(itemToCheck => selection === itemToCheck.code)

        


        // Invalid selection
        if(item === undefined) {
            return "Invalid selection! : Money in vending machine = " + this.money.toFixed(2)
        }

        // Not enough money
        if(itemMoney < item.price) {
            return 'Not enough money!'
        }

        // Out of stock
        if(item.quantity === 0) {
            return item.name + ": Out of stock!"
        }

        const amountOfChange = itemMoney - item.price
        item.quantity -= 1;
        this.money += item.price

        // if(CHANGE) {
        //     return "Vending " + item.name + " with " + amountOfChange + " change."
        // }
        // else {
        //     return "Vending " + item.name
        // }

        // let message = "Vending " + item.name
        // if(amountOfChange > 0) {
        //     message += " with " + amountOfChange + " change."
        // }

        const message = "Vending " + item.name + (
            (amountOfChange > 0) ? 
            " with " + amountOfChange.toFixed(2) + " change." 
            : "" 
        )

        return message
        // 3: update the quantity on the item
        // 4: update the money in the machine
        // 2: return a string that says you're vending that item

 
        //Rachel
        for (item of this.items){
            if (selection == item.code && itemMoney == item.price && item.quantity >0) {
                this.item.quantity -= 1;
                
                //return `Vending ${item.name}`;
                
            } 
        }
        

        // PREDICTIONS:
        
        
        
        //

        //loop over array and get item?
        
        //Logan
        for (let i = 0; i<this.items.length; i++){
            if(selection === this.items){
                return 
            }
        }
        
        //return a string of some kind?



        //Kurt's guess
        for (i in this.items) {
            if (i.name === selection) { //finds item
                if (this.items[i].quanity > 0) {
                    
                    
                } else {
                    //sold out
                }
                
            }
        }
        
   
        //use a loop and then use  a pop method
        //for (let i = 0; and i<this.items.length; i++){
            
        //}
        //item+= this.items.selection.pop()




     //Martin umm shouldnt we identify what the array is goin to be first?
     



    }
}