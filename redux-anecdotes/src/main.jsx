import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import voteReducer from './reducers/votesReducer';
import App from './App.jsx';
import './index.css';

const votesStore = createStore(voteReducer);

votesStore.subscribe(() => {
    const votes = votesStore.getState();
    console.log(votes);
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(
        <Provider store={votesStore}>
            <App />
        </Provider>
    );
};

renderApp();
votesStore.subscribe(renderApp);
