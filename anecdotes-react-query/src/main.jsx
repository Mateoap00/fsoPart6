import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationContextProvider } from './NotificationContext.jsx';
import App from './App.jsx';
import './index.css';

// Exercise 6.20:
// Implement retrieving anecdotes from the server using React Query.

// Using React Query for state management.
const queryClient = new QueryClient();

// Using react useReducer and useContext for global context.
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <NotificationContextProvider>
            <App />
        </NotificationContextProvider>
    </QueryClientProvider>
);
