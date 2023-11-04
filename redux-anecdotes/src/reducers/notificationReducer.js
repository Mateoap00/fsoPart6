import { createSlice } from '@reduxjs/toolkit';

// 6.12 Better anecdotes, step10
// Extend the component Notification component so it renders the message stored in the Redux store.
const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            const msg = action.payload;
            return msg;
        },
        clearNotification() {
            return '';
        },
    },
});
export const { createNotification, clearNotification } =
    notificationSlice.actions;
export default notificationSlice.reducer;

// 6.19 Anecdotes and the backend, step 6.
// Make an action creator to show a notification and clear it.
export const setNotification = (msg, timeInSec) => {
    return (dispatch) => {
        dispatch(createNotification(msg));
        setTimeout(() => {
            dispatch(clearNotification());
        }, timeInSec * 1000);
    };
};
