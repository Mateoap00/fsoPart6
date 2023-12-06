import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getAnecdotes } from './services/anecdotesService';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

// Exercise 6.20:
// Implement retrieving anecdotes from the server using React Query.
const App = () => {
    const anecdotesQuery = useQuery({
        queryKey: ['anecdotes'],
        queryFn: getAnecdotes,
        refetchOnWindowFocus: false,
    });

    if (anecdotesQuery.isError) {
        const msg = `Anecdotes service is not available due to problems in the server.`;
        return <div>{msg}</div>;
    } else if (anecdotesQuery.isPending) {
        const msg = `Loading anecdotes...`;
        return <div>{msg}</div>;
    }

    const anecdotes = anecdotesQuery.data;

    return (
        <>
            <h1>Redux-Anecdotes App</h1>
            <Notification />
            <AnecdoteForm />
            <AnecdoteList anecdotes={anecdotes} />
        </>
    );
};

export default App;
