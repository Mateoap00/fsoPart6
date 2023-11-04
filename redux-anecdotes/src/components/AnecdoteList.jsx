import { useDispatch, useSelector } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

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

// 6.8: anecdotes, step6.
// Separate the rendering of the anecdote list into a component called AnecdoteList.
const AnecdoteList = () => {
    const dispatch = useDispatch();
    // 6.5: anecdotes, step3.
    // Make sure that the anecdotes are ordered by the number of votes.
    const anecdotes = [...useSelector((state) => state.anecdotes)];
    const anecdotesInOrder = anecdotes.sort(
        (current, next) => next.votes - current.votes
    );

    // 6.13 Better anecdotes, step11
    // Notification component displays a message for five seconds when the user votes for an anecdote
    // or creates a new anecdote.

    // 6.18 Anecdotes and the backend, step 5.
    // Save votes to the backend using action async action creators.
    const handleVote = ({ id, content }) => {
        dispatch(voteForAnecdote(id));

        // 6.19 Anecdotes and the backend, step 6.
        // Make an action creator to show a notification and clear it.
        const msg = `You have voted for the anecdote: ${content}`;
        dispatch(setNotification(msg, 5));
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
