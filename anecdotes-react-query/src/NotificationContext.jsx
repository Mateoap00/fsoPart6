import { useReducer, createContext, useContext } from 'react';

// Exercise 6.23.
// Implement the application's notification state management using the useReducer hook and context.
const initialState = '';

const notificationReducer = (state, action) => {
    if (action.type === 'NOTIFY') {
        state = action.payload;
        return state;
    }
    return state;
};

const NotificationContext = createContext();

export const useNotificationState = () => {
    const stateAndDispatch = useContext(NotificationContext);
    const state = stateAndDispatch[0];
    return state;
};

export const useNotificationDispatch = () => {
    const stateAndDispatch = useContext(NotificationContext);
    const dispatch = stateAndDispatch[1];
    return dispatch;
};

export const NotificationContextProvider = (props) => {
    const [state, notificationDispatch] = useReducer(notificationReducer, initialState);

    return (
        <NotificationContext.Provider value={[state, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
