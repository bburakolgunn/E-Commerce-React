export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "ADD_TO_CART";

export function addToCart(product) {
    return {
        type: ADD_TO_CART, // tyğe =gönderilen aksiyon
        payload: product //payload= o anki state göndermek istediğin değer
    };
}

export function removeToCart(product) {
    return {
        type: REMOVE_TO_CART,
        payload: product
    };
}