import axios from 'axios';

const url = 'http://localhost:3001/anecdotes';

// 6.14 Anecdotes and the backend, step1
// When the application launches, fetch the anecdotes from the backend implemented using json-server.
const getAnecdotes = async () => {
    const response = await axios.get(url);
    return response.data;
};

// 6.15 Anecdotes and the backend, step2
// Modify the creation of new anecdotes, so that the anecdotes are stored in the backend.
const createAnecdote = async (content) => {
    const newAnecdote = {
        content,
        votes: 0,
    };
    const response = await axios.post(url, newAnecdote);
    return response.data;
};

export default { getAnecdotes, createAnecdote };
