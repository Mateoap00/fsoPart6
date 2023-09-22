import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import anecdoteReducer from './reducers/anecdotesReducer';
import filterReducer from './reducers/filterReducer';
import App from './App.jsx';
import './index.css';

// 6.9 Better anecdotes, step7.
// Implement filtering for the anecdotes that are displayed to the user.
const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer,
});

const store = createStore(reducer);

store.subscribe(() => {
    const currentState = store.getState();
    console.log(currentState);
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
};

renderApp();
store.subscribe(renderApp);
