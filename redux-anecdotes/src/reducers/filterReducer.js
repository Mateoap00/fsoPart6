// 6.9 Better anecdotes, step7.
// Implement filtering for the anecdotes that are displayed to the user.

// Reducer.
const filterReducer = (state = '', action) => {
    let newState = '';
    switch (action.type) {
        case 'SET_FILTER':
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};

// Action creators.
export const setFilter = (filterWith) => {
    return {
        type: 'SET_FILTER',
        payload: filterWith,
    };
};

export default filterReducer;
