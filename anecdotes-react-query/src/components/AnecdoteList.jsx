import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAnecdote } from '../services/anecdotesService';
import { useNotificationDispatch } from '../NotificationContext';

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
    const anecdotesInOrder = anecdotes.sort(
        (current, next) => next.votes - current.votes
    );
    const queryClient = useQueryClient();

    // Exercise 6.23.
    // Implement the application's notification state management using the useReducer hook and context.
    const dispatch = useNotificationDispatch();

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

            const msg = `Anecdote "${updatedAnecdote.content}" voted! It now has ${updatedAnecdote.votes} votes`;

            dispatch({
                type: 'NOTIFY',
                payload: msg,
            });
            setTimeout(() => {
                dispatch({
                    type: 'NOTIFY',
                    payload: '',
                });
            }, 3000);
        },
    });

    const handleVote = (anecdote) => {
        updateAnecdoteMutation.mutate(anecdote);
    };

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
