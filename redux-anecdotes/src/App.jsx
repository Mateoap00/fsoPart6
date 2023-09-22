import './App.css';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

const App = () => {
    return (
        <>
            <h1>Redux-Anecdotes App</h1>
            <Filter />
            <AnecdoteForm />
            <AnecdoteList />
        </>
    );
};

export default App;
