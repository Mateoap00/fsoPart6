const initialVotes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

const voteReducer = (state = initialVotes, action) => {
    let id = 0;
    let newState = {};
    let oldCount = 0;
    switch (action.type) {
        case 'VOTE':
            id = action.payload.id;

            oldCount = isNaN(state[id]) ? 0 : state[id];
            newState = { ...state, [id]: oldCount + 1 };
            return newState;
        default:
            return state;
    }
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

export default voteReducer;
