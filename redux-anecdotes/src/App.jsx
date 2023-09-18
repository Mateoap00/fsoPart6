import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from './reducers/votesReducer';

const App = () => {
    const dispatch = useDispatch();

    const [anecdotes, setAnecdotes] = useState([
        {
            id: 0,
            content: 'If it hurts, do it more often.',
        },
        {
            id: 1,
            content:
                'Adding manpower to a late software project makes it later!',
        },
        {
            id: 2,
            content:
                'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        },
        {
            id: 3,
            content:
                'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        },
        {
            id: 4,
            content: 'Premature optimization is the root of all evil.',
        },
        {
            id: 5,
            content:
                'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        },
        {
            id: 6,
            content:
                'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        },
    ]);

    const votes = useSelector((state) => state);

    // const handleClick = () => {
    //     const randomNum = Math.floor(Math.random() * 7);
    //     setSelected(randomNum);
    // };

    const handleVote = (id) => {
        dispatch(vote(id));
    };

    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = '';
        const id = anecdotes.length;
        setAnecdotes([...anecdotes, { id, content }]);
    };

    let max = 0;
    const auxVotes = { ...votes };
    for (let vote in auxVotes) {
        if (auxVotes[vote] > auxVotes[max]) {
            max = vote;
        }
    }

    return (
        <>
            <h2>Anecdotes of the day</h2>
            <div>
                {anecdotes.map((anecdote) => {
                    return (
                        <div className="card" key={anecdote.id}>
                            {anecdote.content}{' '}
                            <div>
                                <strong>
                                    has{' '}
                                    {isNaN(votes[anecdote.id])
                                        ? 0
                                        : votes[anecdote.id]}{' '}
                                    votes{' '}
                                </strong>
                            </div>
                            <button onClick={() => handleVote(anecdote.id)}>
                                Vote
                            </button>
                        </div>
                    );
                })}
            </div>

            <form onSubmit={addAnecdote}>
                <h3>Add new anecdotes here!</h3>
                <input type="text" name="inputAnecdote" />
                <button type="submit">Add</button>
            </form>

            <div className="card">
                <h2>Anecdote with most votes</h2>
                <div>{anecdotes[max].content}</div>
            </div>
        </>
    );
};

export default App;
