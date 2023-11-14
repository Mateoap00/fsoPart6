import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAnecdote } from '../services/anecdotesService';

const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <>
            <div className="card">
                {anecdote.content}
                <div>
                    <strong>{`has ${anecdote.votes} votes`}</strong>
                </div>
                <button onClick={() => handleVote(anecdote)}>Vote</button>
            </div>
        </>
    );
};

// Exercise 6.20:
// Implement retrieving anecdotes from the server using React Query.
const AnecdoteList = ({ anecdotes }) => {
    // Exercise 6.22
    // Implement voting for anecdotes using again the React Query. The application should automatically render the
    // increased number of votes for the voted anecdote.
    const queryClient = useQueryClient();

    const updateAnecdoteMutation = useMutation({
        mutationFn: updateAnecdote,
        onSuccess: (updatedAnecdote) => {
            const updatedAnecdotes = queryClient
                .getQueryData(['anecdotes'])
                .map((anecdote) => {
                    if (anecdote.id === updatedAnecdote.id) {
                        return updatedAnecdote;
                    } else {
                        return anecdote;
                    }
                });
            queryClient.setQueryData(['anecdotes'], updatedAnecdotes);
        },
    });

    const handleVote = (anecdote) => {
        const msg = `You have voted for the anecdote: ${anecdote.content}.`;
        updateAnecdoteMutation.mutate(anecdote);
        console.log(msg);
    };

    const anecdotesInOrder = anecdotes.sort(
        (current, next) => next.votes - current.votes
    );

    return (
        <>
            <h2>All registered Anecdotes</h2>
            <div className="anecdotesList">
                {anecdotesInOrder.map((anecdote) => {
                    return (
                        <Anecdote
                            key={anecdote.id}
                            anecdote={anecdote}
                            handleVote={handleVote}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AnecdoteList;
