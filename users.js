const { createStore } = require("redux");

// state
const initialUser = {
    users: ['Sadik'],
    count: 1
};

// constants
const ADD_USER = "ADD_USER";

// Action
const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
};

// Creating Reducer
const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            };
        default:
            return state;
    }
};

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUserAction("Kamal"))
