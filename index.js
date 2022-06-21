// define constant
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// state
const initialState = {
    count: 0,
};

// action
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
};


// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            state;
    }
};