import { useSelector } from 'react-redux';

// 6.12 Better anecdotes, step10
// Extend the component Notification component so it renders the message stored in the Redux store.
const Notification = () => {
    const notification = useSelector((state) => state.notification);

    return (
        <>
            {notification === '' ? (
                <></>
            ) : (
                <div className="notification">
                    <h3 className="notification-header">NOTIFICATION</h3>
                    <p className="notification-content">
                        <strong>{notification}</strong>
                    </p>
                </div>
            )}
        </>
    );
};

export default Notification;
