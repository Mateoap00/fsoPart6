import { counterReducer } from './counterReducer'
import deepFreeze from 'deep-freeze'

describe('counterReducer tests', () => {
    let initialState = {}

    beforeEach(() => {
        initialState = {
            good: 0,
            ok: 0,
            bad: 0
        }

        deepFreeze(initialState)
    })

    test('Test01: Should return a proper initial state when called with undefined state', () => {
        const newState = counterReducer(undefined, { type: 'DO_NOTHING' })
        expect(newState).toEqual(initialState)
    })

    test('Test02: Good is incremented', () => {
        const action = {
            type: 'GOOD'
        }

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual(
            {
                good: 1,
                ok: 0,
                bad: 0
            }
        )
    })

    test('Test03: Ok is incremented', () => {
        const action = {
            type: 'OK'
        }

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual(
            {
                good: 0,
                ok: 1,
                bad: 0
            }
        )
    })

    test('Test04: Bad is incremented', () => {
        const action = {
            type: 'BAD'
        }

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual(
            {
                good: 0,
                ok: 0,
                bad: 1
            }
        )
    })

    test('Test05: Turns counters to zero', () => {
        const action = {
            type: 'ZERO'
        }

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual(
            {
                good: 0,
                ok: 0,
                bad: 0
            }
        )
    })
})