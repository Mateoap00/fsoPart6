import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

// 6.7: anecdotes, step5.
// Separate the creation of new anecdotes into a component called AnecdoteForm.
const AnecdoteForm = () => {
    const dispatch = useDispatch();

    // 6.13 Better anecdotes, step11
    // Notification component displays a message for five seconds when the user votes for an anecdote
    // or creates a new anecdote.
    const addAnecdoteHandler = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';

        // 6.15 Anecdotes and the backend, step2
        // Modify the creation of new anecdotes, so that the anecdotes are stored in the backend.

        // 6.17 Anecdotes and the backend, step 4.
        // Modify the creation of a new anecdote to happen using asynchronous action creators.
        dispatch(addAnecdote(content));

        // 6.19 Anecdotes and the backend, step 6.
        // Make an action creator to show a notification and clear it.
        const msg = `New anecdote added: ${content}`;
        dispatch(setNotification(msg, 5));
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
