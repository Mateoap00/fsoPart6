import { createSlice } from '@reduxjs/toolkit';

// 6.10 Better anecdotes, step8
// Change the definition of the filter reducer and action creators to use the Redux Toolkit's createSlice function.

const initialFilter = '';

// Redux state management using redux/toolkit and createSlice for filter.
const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilter,
    reducers: {
        setFilter(state, action) {
            const filterWith = action.payload;
            return filterWith;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// // 6.9 Better anecdotes, step7.
// // Implement filtering for the anecdotes that are displayed to the user.

// // Reducer.
// const filterReducer = (state = '', action) => {
//     let newState = '';
//     switch (action.type) {
//         case 'SET_FILTER':
//             newState = action.payload;
//             return newState;
//         default:
//             return state;
//     }
// };

// // Action creators.
// export const setFilter = (filterWith) => {
//     return {
//         type: 'SET_FILTER',
//         payload: filterWith,
//     };
// };

// export default filterReducer;
