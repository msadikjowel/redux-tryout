const { createStore, combineReducers } = require("redux");

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCTS";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// product States
const initialProductState = {
    products: ["Sugar", "Salt"],
    numberOfProducts: 2,
};

// cart States
const initialCartState = {
    cart: ["Sugar"],
    numberOfProducts: 1,
};

// Product Action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

// Cart Action
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    };
};

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };

        default:
            return state;
    };
};

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            };

        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };

        default:
            return state;
    };
};

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

// store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Pen"));

store.dispatch(getCart());
store.dispatch(addCart("Pen"));
