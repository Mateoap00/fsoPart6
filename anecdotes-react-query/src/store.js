import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdotesReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';

// 6.10 Better anecdotes, step8
// Move the Redux store creation into the file store.js and use Redux Toolkit's configureStore to create the store.

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer,
    },
});

export default store;
