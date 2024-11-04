async function Orderfood(name,time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order for"+name+"Prepared");
        },time)
    });
}
async function restaurant() {
    console.log("order placed");
    let pizza= await Orderfood("Pizza",1000);
    console.log(pizza);
    let burger= await Orderfood("Burger",2000);
    console.log(burger);
    let noodles =await Orderfood("Noodles",3000);
    console.log(noodles);
    console.log("All Order Completed");
}
restaurant();