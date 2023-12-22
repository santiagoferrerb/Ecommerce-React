/**
 *This function calculates the total price of a cart
 * @param {Aray} products cartProducts: Array of Objects
 * @returns {number} Total Price
 */

function totalPrice (products) {
    let sum = 0;
    products.forEach(item => sum += (item.quantity * item.price));
    return sum
}

function totalProducts (products) {
    let sum = 0;
    products.forEach(item => sum += item.quantity );
    return sum
}

export { totalPrice , totalProducts }