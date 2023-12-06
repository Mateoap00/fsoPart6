import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../services/anecdotesService';
import { useNotificationDispatch } from '../NotificationContext';

const AnecdoteForm = () => {
    // Exercise 6.21
    // Implement adding new anecdotes to the server using React Query. The application should render a new anecdote by default.
    const queryClient = useQueryClient();

    // Exercise 6.23.
    // Implement the application's notification state management using the useReducer hook and context.
    const dispatch = useNotificationDispatch();

    const createAnecdoteMutation = useMutation({
        mutationFn: createAnecdote,
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes']);
            queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote));
            const msg = `New anecdote "${newAnecdote.content}" added!`;

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
        // Exercise 6.24.
        // Implement error handling for the insertion. Display a notification to the user in case of a failed POST request.
        onError: (error) => {
            dispatch({
                type: 'NOTIFY',
                payload: error.message,
            });
            setTimeout(() => {
                dispatch({
                    type: 'NOTIFY',
                    payload: '',
                });
            }, 3000);
        },
    });

    const addAnecdoteHandler = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';

        createAnecdoteMutation.mutate(content);
    };

    return (
        <form onSubmit={addAnecdoteHandler}>
            <h2>Add new anecdotes here!</h2>
            <input
                type="text"
                placeholder="Write a new anecdote..."
                name="inputAnecdote"
            />
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default AnecdoteForm;
