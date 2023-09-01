import { createStore } from 'redux';

const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    let increment = 0
    switch (action.type) {
        case 'GOOD':
            increment = state.good + 1
            return { ...state, good: increment }
        case 'OK':
            increment = state.ok + 1
            return { ...state, ok: increment }
        case 'BAD':
            increment = state.bad + 1
            return { ...state, bad: increment }
        case 'ZERO':
            return {
                good: 0,
                ok: 0,
                bad: 0
            }
        default:
            return state
    }
}

const counterStore = createStore(counterReducer)

counterStore.subscribe(() => {
    const currentCounter = counterStore.getState()
    console.log(currentCounter)
})

export { counterReducer, counterStore }