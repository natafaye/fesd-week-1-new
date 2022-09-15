// https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript

class VendingMachine {
    constructor(items, money) {
      this.money = money; // money in the vending machine
      this.items = items; // items in the vending machine
    }
    
    vend(selection, itemMoney) { // selection = "A01"
      // find the item that matches the selection and vend it
      const selectedItem = this.items.find(item => item.code === selection);
      
      // If they picked an invalid item
      if(!selectedItem) { // if(selectedItem === undefined) {
        return "Invalid selection! : Money in vending machine = " + this.money.toFixed(2)
      }
      
      // If they didn't put in enough money
      if(itemMoney < selectedItem.price) {
        return "Not enough money!"
      }
      
      // If it's out of stock
      if(selectedItem.quantity === 0) {
        return selectedItem.name + ": Out of stock!"
      }
      
      // If they need change
      let change = ""
      if(itemMoney > selectedItem.price) {
        change = ` with ${ (itemMoney - selectedItem.price).toFixed(2) } change.`
      }
      
      // take their money
      this.money += selectedItem.price //this.money = this.money + selectedItem.money
      
      // update the quantity
      selectedItem.quantity--;
      
      return "Vending " + selectedItem.name + change;
    }
  }