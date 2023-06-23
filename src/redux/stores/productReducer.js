import { ADD_PRODUCT } from "./constant";

const initialState = [
    {
        productId: 1,
        productName: "Pizza",
        image: "../images/pizza.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 12,
        quantity: 1,
    },
    {
        productId: 2,
        productName: "Hamburger",
        image: "../images/Hamburger.jpg",
        title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 16,
        quantity: 1,
    },
    {
        productId: 3,
        productName: "Bread",
        image: "../images/bread.jpg",
        title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 13,
        quantity: 1,
    },
    {
        productId: 4,
        productName: "Cake",
        image: "../images/Cake.jpg",
        title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 14,
        quantity: 1,
    },
];

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state
        default:
            return state
    }
}


export default addToCartReducer