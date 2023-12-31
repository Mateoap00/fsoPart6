import axios from 'axios';

const url = 'http://localhost:3001/anecdotes';

// Exercise 6.20:
// Implement retrieving anecdotes from the server using React Query.
export const getAnecdotes = async () => {
    const response = await axios.get(url);
    return response.data;
};

// Exercise 6.21
// Implement adding new anecdotes to the server using React Query. The application should render a new anecdote by default.
export const createAnecdote = async (content) => {
    // Exercise 6.24.
    // Implement error handling for the insertion. Display a notification to the user in case of a failed POST request.
    if (content.length < 5) {
        const error = new Error(
            'Error: Anecdote content must be at least 5 characters long!'
        );
        throw error;
    }
    const newAnecdote = {
        content,
        votes: 0,
    };
    const response = await axios.post(url, newAnecdote);
    return response.data;
};

// Exercise 6.22
// Implement voting for anecdotes using again the React Query. The application should automatically render the
// increased number of votes for the voted anecdote.
export const updateAnecdote = async (anecdote) => {
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
    };
    const response = await axios.put(`${url}/${anecdote.id}`, updatedAnecdote);
    return response.data;
};
