import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
// import { createStore, combineReducers } from 'redux';
import App from './App.jsx';
import './index.css';

// 6.9 Better anecdotes, step7.
// Implement filtering for the anecdotes that are displayed to the user.
// const reducer = combineReducers({
//     anecdotes: anecdoteReducer,
//     filter: filterReducer,
// });

// const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
