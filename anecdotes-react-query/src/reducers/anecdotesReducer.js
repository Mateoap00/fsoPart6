import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotesService';

// 6.11 Better anecdotes, step9
// Change the definition of the anecdote reducer and action creators to use the Redux Toolkit's createSlice function.

// const generateId = () => {
//     return Number((Math.random() * 1000000).toFixed(0));
// };

// Redux state management using redux/toolkit and createSlice for anecdotes.
const anecdotesSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        setAnecdotes(state, action) {
            const newState = action.payload;
            return newState;
        },
        newAnecdote(state, action) {
            const newAnecdote = action.payload;
            state.push(newAnecdote);
        },
        vote(state, action) {
            const id = action.payload;
            const newState = state.map((anecdote) => {
                return anecdote.id === id
                    ? {
                          id: anecdote.id,
                          content: anecdote.content,
                          votes: anecdote.votes + 1,
                      }
                    : anecdote;
            });
            return newState;
        },
    },
});

export const { setAnecdotes, newAnecdote, vote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;

// 6.16 Anecdotes and the backend, step 3.
// Modify the initialization of the Redux store to happen using asynchronous action creators.
export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdotesService.getAnecdotes();
        dispatch(setAnecdotes(anecdotes));
    };
};

// 6.17 Anecdotes and the backend, step 4.
// Modify the creation of a new anecdote to happen using asynchronous action creators.
export const addAnecdote = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdotesService.createAnecdote(content);
        dispatch(newAnecdote(anecdote));
    };
};

// 6.18 Anecdotes and the backend, step 5.
// Save votes to the backend using action async action creators.
export const voteForAnecdote = (id) => {
    return async (dispatch) => {
        const anecdoteVoted = await anecdotesService.voteAnecdote(id);
        dispatch(vote(anecdoteVoted.id));
    };
};

// const anecdoteReducer = (state = initialAnecdotes, action) => {
//     let id = 0;
//     let newState = [];
//     switch (action.type) {
//         // Exercise 6.3: anecdotes, step1.
//         // Implement the functionality for voting anecdotes. The number of votes must be saved to a Redux store.
//         case 'VOTE':
//             id = action.payload.id;
//             newState = state.map((anecdote) => {
//                 return anecdote.id === id
//                     ? {
//                           id: anecdote.id,
//                           content: anecdote.content,
//                           votes: anecdote.votes + 1,
//                       }
//                     : anecdote;
//             });
//             return newState;
//         // 6.4: anecdotes, step2.
//         // Implement the functionality for adding new anecdotes.
//         case 'NEW_ANECDOTE':
//             newState = [...state, action.payload];
//             return newState;

//         default:
//             return state;
//     }
// };

// 6.6: anecdotes, step4.
// Separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js.

// Action creator to create a new Anecdote.
// export const newAnecdote = (id, content) => {
//     return {
//         type: 'NEW_ANECDOTE',
//         payload: {
//             id,
//             content,
//             votes: 0,
//         },
//     };
// };

// Action creator to vote.
// export const vote = (id) => {
//     return {
//         type: 'VOTE',
//         payload: {
//             id,
//         },
//     };
// };
