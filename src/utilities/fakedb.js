// use local storage to manage cart data
const addToDb = value =>{
    let shoppingCart = {value};
    localStorage.setItem('break-time', JSON.stringify(shoppingCart));
}
export {
    addToDb, 

}