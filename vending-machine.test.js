const expect = chai.expect

describe("Vending Machine", function () {
    it("vends normally", function () {
        const items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        { name: "Cheese and Onion Crips", code: "B06", quantity: 0, price: 0.20 },
        { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }];
        
        const machine = new VendingMachine(items, 10.00);
        expect(machine.vend("A01", 0.60)).to.equal("Vending Smarties")
    });
    it("vends with change", function () {
        const items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        { name: "Cheese and Onion Crisps", code: "B06", quantity: 0, price: 0.20 },
        { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }];

        const machine = new VendingMachine(items, 10.00);
        machine.vend("A01", 0.60)
        expect(machine.vend("A01", 10.0)).to.equal("Vending Smarties with 9.40 change.");
    });
    it("works with an invalid selection", function () {
        const items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        { name: "Cheese and Onion Crisps", code: "B06", quantity: 0, price: 0.20 },
        { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }];

        const machine = new VendingMachine(items, 10.00);
        machine.vend("A01", 0.60)
        machine.vend("A01", 10.0)
        expect(machine.vend("Z01", 0.41)).to.equal("Invalid selection! : Money in vending machine = 11.20");
    });
    it("works with not enough money", function () {
        const items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        { name: "Cheese and Onion Crisps", code: "B06", quantity: 0, price: 0.20 },
        { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }];

        const machine = new VendingMachine(items, 10.00);
        machine.vend("A01", 0.60)
        machine.vend("A01", 10.0)
        machine.vend("Z01", 0.41)
        expect(machine.vend("A02", 0.40)).to.equal("Not enough money!");
    });
    it("works when something is out of stock", function () {
        const items = [{ name: "Smarties", code: "A01", quantity: 10, price: 0.60 },
        { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.60 },
        { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
        { name: "Cheese and Onion Crisps", code: "B06", quantity: 0, price: 0.20 },
        { name: "Freddo", code: "A04", quantity: 1, price: 0.25 }];

        const machine = new VendingMachine(items, 10.00);
        machine.vend("A01", 0.60)
        machine.vend("A01", 10.0)
        machine.vend("Z01", 0.41)
        machine.vend("A02", 0.40)
        expect(machine.vend("B06", 4.60)).to.equal("Cheese and Onion Crisps: Out of stock!");
    });
});