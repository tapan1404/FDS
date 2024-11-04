function Orderfood(item, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item === "Burger") { 
                reject(`Failed to order ${item}`);
            } else {
                resolve(`${item} is ready`);
            }
        }, delay);
    });
}

async function restaurant() {
    console.log("Order placed");

    try {
        // Order Pizza
        let pizza = await Orderfood("Pizza", 1000);
        console.log(pizza);

        // Order Burger
        let burger = await Orderfood("Burger", 2000);
        console.log(burger);
    } catch (error) {
        console.log(error);
    }

    // Order Noodles
    let noodles = await Orderfood("Noodles", 3000);
    console.log(noodles);

    console.log("All Orders Completed");
}

restaurant();
