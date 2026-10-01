
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() { console.log("login"); }
    logout() { console.log("logout"); }
    static sendEmail() { }
}

class Customer extends User {
    cart = []
    constructor(name, email, password = "sadsadsadas") {
        super(name, email)
        this.password = password
        // this.name = name;
        // this.email = email;
    }
    buyProduct() { console.log("buy product"); }
    addToCart(item) { this.cart.push(item) }
    showCartItems() { console.log(this.cart); }
    // login() { }
    // logout() { }
}


class Seller extends User {
    // constructor(name, email) {
    //     // this.name = name;
    //     // this.email = email
    // }
    addProduct() { console.log("addProduct"); }
    // login() { }
    // logout() { }
}

class Admin extends User {
    // constructor(name, email) {
    //     // this.name = name;
    //     // this.email = email
    // }
    hideProduct() { console.log("hideproduct"); }
    // login() { }
    // logout() { } 
}

const c1 = new Customer("nishant", "nishant@example.com", "adas")
const s1 = new Seller("shaswat", "shaswat@example.com")
// const a1 = new Admin("devyani" , "devyani@example.com")
// console.log(c1);
// // console.log(s1);
// // console.log(a1);
// // c1.logout()
// c1.addToCart("macbook")
// c1.showCartItems()


class PremiumCustomer extends Customer {
    constructor(name, email, pass) {
        super(name, email, pass)
    }

    getDiscount() { }
}

const pc1 = new PremiumCustomer("asda", "saads")
console.log(pc1);