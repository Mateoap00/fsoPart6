import { useDispatch } from 'react-redux';
import { newAnecdote } from '../reducers/anecdotesReducer';
import { createNotification } from '../reducers/notificationReducer';

// 6.7: anecdotes, step5.
// Separate the creation of new anecdotes into a component called AnecdoteForm.
const AnecdoteForm = () => {
    const dispatch = useDispatch();

    // 6.13 Better anecdotes, step11
    // Notification component displays a message for five seconds when the user votes for an anecdote
    // or creates a new anecdote.
    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';
        dispatch(newAnecdote(content));
        const msg = `New anecdote added: ${content}`;
        dispatch(createNotification(msg));
        setTimeout(() => {
            dispatch(createNotification(''));
        }, 5000);
    };

    return (
        <form onSubmit={addAnecdote}>
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
