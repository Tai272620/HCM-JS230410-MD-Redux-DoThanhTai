import { DELETE_PRODUCT } from "./constant";

const initState = JSON.parse(localStorage.getItem("listCart")) || [];

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const updatedState = state.filter((product) => product.productId !== action.productId);
            console.log(updatedState)
            localStorage.setItem('listCart', JSON.stringify(updatedState))
            return updatedState;
        default:
            return state
    }
}

export default cartReducer