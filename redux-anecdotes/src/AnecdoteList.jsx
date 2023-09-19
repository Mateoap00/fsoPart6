import { useDispatch, useSelector } from 'react-redux';
import { vote } from './reducers/anecdotesReducer';

const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <>
            <div className="card">
                {anecdote.content}
                <div>
                    <strong>{`has ${anecdote.votes} votes`}</strong>
                </div>
                <button onClick={() => handleVote(anecdote.id)}>Vote</button>
            </div>
        </>
    );
};

// 6.8: anecdotes, step6.
// Separate the rendering of the anecdote list into a component called AnecdoteList.
const AnecdoteList = () => {
    const dispatch = useDispatch();
    // 6.5: anecdotes, step3.
    // Make sure that the anecdotes are ordered by the number of votes.
    const anecdotesInOrder = useSelector((state) =>
        state.sort((current, next) => next.votes - current.votes)
    );

    const handleVote = (id) => {
        dispatch(vote(id));
    };

    return (
        <>
            <h2>Anecdotes of the day</h2>
            <div>
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
