import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../services/anecdotesService';

const AnecdoteForm = () => {
    // Exercise 6.21
    // Implement adding new anecdotes to the server using React Query. The application should render a new anecdote by default.
    const queryClient = useQueryClient();

    const createAnecdoteMutation = useMutation({
        mutationFn: createAnecdote,
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes']);
            queryClient.setQueryData(
                ['anecdotes'],
                anecdotes.concat(newAnecdote)
            );
        },
    });

    const addAnecdoteHandler = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';
        let msg = '';

        if (content.length >= 5) {
            createAnecdoteMutation.mutate(content);
            msg = `New anecdote added: ${content}.`;
        } else {
            msg = `The anecdote "${content}" must be at least 5 characters long.`;
        }

        console.log(msg);
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
