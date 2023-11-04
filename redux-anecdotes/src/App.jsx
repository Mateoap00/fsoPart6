import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAnecdotes } from './reducers/anecdotesReducer';
import { setNotification } from './reducers/notificationReducer';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

const App = () => {
    const dispatch = useDispatch();
    // 6.14 Anecdotes and the backend, step1
    // When the application launches, fetch the anecdotes from the backend implemented using json-server.

    useEffect(() => {
        // 6.16 Anecdotes and the backend, step 3.
        // Modify the initialization of the Redux store to happen using asynchronous action creators.
        dispatch(initializeAnecdotes());

        // 6.19 Anecdotes and the backend, step 6.
        // Make an action creator to show a notification and clear it.
        dispatch(setNotification('All anecdotes loaded!', 3));
    }, []);

    return (
        <>
            <h1>Redux-Anecdotes App</h1>
            <Notification />
            <Filter />
            <AnecdoteForm />
            <AnecdoteList />
        </>
    );
};

export default App;
