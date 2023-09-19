import { useSelector, useDispatch } from 'react-redux';
import { newAnecdote } from './reducers/anecdotesReducer';

// 6.7: anecdotes, step5.
// Separate the creation of new anecdotes into a component called AnecdoteForm.
const AnecdoteForm = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state);

    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';
        const id = anecdotes.length;
        dispatch(newAnecdote(id, content));
    };

    return (
        <form onSubmit={addAnecdote}>
            <h3>Add new anecdotes here!</h3>
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
