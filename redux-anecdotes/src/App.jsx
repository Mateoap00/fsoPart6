import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdotesService from './services/anecdotesService';
import { setAnecdotes } from './reducers/anecdotesReducer';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

const App = () => {
    const dispatch = useDispatch();
    // 6.14 Anecdotes and the backend, step1
    // When the application launches, fetch the anecdotes from the backend implemented using json-server.
    useEffect(() => {
        anecdotesService.getAnecdotes().then((anecdotes) => {
            dispatch(setAnecdotes(anecdotes));
        });
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
