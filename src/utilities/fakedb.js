// use local storage to manage cart data
const addToDb = value =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    //add quantity
    const quantity = shoppingCart[value];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[value] = newQuantity;
    }
    else{
        shoppingCart[value] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(shoppingCart));
}
const getStoredCart=()=>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}