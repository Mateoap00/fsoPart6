import axios from 'axios';

const url = 'http://localhost:3001/anecdotes';

// 6.14 Anecdotes and the backend, step1
// When the application launches, fetch the anecdotes from the backend implemented using json-server.
const getAnecdotes = async () => {
    const response = await axios.get(url);
    return response.data;
};

export default { getAnecdotes };
