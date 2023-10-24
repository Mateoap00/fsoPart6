import './App.css';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

const App = () => {
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
