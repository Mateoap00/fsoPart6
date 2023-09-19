const initialAnecdotes = [
    {
        id: 0,
        content: 'If it hurts, do it more often.',
        votes: 0,
    },
    {
        id: 1,
        content: 'Adding manpower to a late software project makes it later!',
        votes: 0,
    },
    {
        id: 2,
        content:
            'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0,
    },
    {
        id: 3,
        content:
            'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0,
    },
    {
        id: 4,
        content: 'Premature optimization is the root of all evil.',
        votes: 0,
    },
    {
        id: 5,
        content:
            'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0,
    },
    {
        id: 6,
        content:
            'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        votes: 0,
    },
];

const anecdoteReducer = (state = initialAnecdotes, action) => {
    let id = 0;
    let newState = [];
    switch (action.type) {
        // Exercise 6.3: anecdotes, step1.
        // Implement the functionality for voting anecdotes. The number of votes must be saved to a Redux store.
        case 'VOTE':
            id = action.payload.id;
            newState = state.map((anecdote) => {
                return anecdote.id === id
                    ? {
                          id: anecdote.id,
                          content: anecdote.content,
                          votes: anecdote.votes + 1,
                      }
                    : anecdote;
            });
            return newState;
        // 6.4: anecdotes, step2.
        // Implement the functionality for adding new anecdotes.
        case 'NEW_ANECDOTE':
            newState = [...state, action.payload];
            return newState;

        default:
            return state;
    }
};

// 6.6: anecdotes, step4.
// Separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js.

// Action creator to create a new Anecdote.
export const newAnecdote = (id, content) => {
    return {
        type: 'NEW_ANECDOTE',
        payload: {
            id,
            content,
            votes: 0,
        },
    };
};

// Action creator to vote.
export const vote = (id) => {
    return {
        type: 'VOTE',
        payload: {
            id,
        },
    };
};

export default anecdoteReducer;
