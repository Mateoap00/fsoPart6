import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

// 6.9 Better anecdotes, step7.
// Implement filtering for the anecdotes that are displayed to the user.
const Filter = () => {
    const dispatch = useDispatch();

    const filterWith = useSelector((state) => state.filter);
    const anecdoteFound = useSelector((state) => {
        if (filterWith === '') {
            return undefined;
        } else {
            return state.anecdotes.find((anecdote) =>
                anecdote.content
                    .toUpperCase()
                    .includes(filterWith.toUpperCase())
            );
        }
    });

    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(setFilter(value));
    };

    return (
        <>
            <div>
                <span>Write a phrase to filter with: </span>
                <input type="text" onChange={(event) => handleChange(event)} />
                <div className="anecdotesList">
                    <h2>Anecdote that matches:</h2>
                    <div className={anecdoteFound ? 'card' : ''}>
                        {anecdoteFound ? <p>{anecdoteFound.content}</p> : ''}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;
