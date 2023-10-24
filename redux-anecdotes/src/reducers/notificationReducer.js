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
    },
});
export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
