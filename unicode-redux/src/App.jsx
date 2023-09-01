import { useState } from 'react'
import './App.css'

const Header = ({ title }) => {
    return (
        <h2>{title}</h2>
    );
}

const Button = ({ handleClick, name }) => {
    return (
        <button onClick={handleClick}>{name}</button>
    );
}

const StatisticLine = ({ name, value }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    );
}

const Statistics = ({ counters }) => {
    const good = counters[0];
    const ok = counters[1];
    const bad = counters[2];
    const total = counters.reduce((previous, current) => { return previous + current });
    let average = 0;
    let positive = 0;

    if (total !== 0) {
        average = (good * 1 + ok * 0 + bad * (-1)) / total;
        positive = (good / total) * 100;

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                    <StatisticLine name={'Good'} value={good} />
                    <StatisticLine name={'Ok'} value={ok} />
                    <StatisticLine name={'Bad'} value={bad} />
                    <StatisticLine name={'All'} value={total} />
                    <StatisticLine name={'Average'} value={average} />
                    <StatisticLine name={'Positive'} value={`${positive}%`} />
                </tbody>
            </table>
        );
    } else {
        return (
            <div>No feedback given!</div>
        );
    }


}

function App({ counterStore }) {
    const [goodCounter, setGood] = useState(0);
    const [okCounter, setOk] = useState(0);
    const [badCounter, setBad] = useState(0);

    const handleGood = () => {
        counterStore.dispatch({ type: 'GOOD' })
        const counters = counterStore.getState()
        setGood(counters.good);
    }

    const handleBad = () => {
        counterStore.dispatch({ type: 'BAD' })
        const counters = counterStore.getState()
        setBad(counters.bad);
    }

    const handleOk = () => {
        counterStore.dispatch({ type: 'OK' })
        const counters = counterStore.getState()
        setOk(counters.ok);
    }

    const handleRestart = () => {
        counterStore.dispatch({ type: 'ZERO' })
        const counters = counterStore.getState()
        setGood(counters.good);
        setOk(counters.ok);
        setBad(counters.bad);
    }

    return (
        <div className="App">
            <Header title="Give Feedback" />
            <Button handleClick={handleGood} name={'Good'} />
            <Button handleClick={handleOk} name={'Ok'} />
            <Button handleClick={handleBad} name={'Bad'} />
            <Button handleClick={handleRestart} name={'Restart'} />
            <Header title="Statistics" />
            <Statistics counters={[goodCounter, okCounter, badCounter]} />
        </div>
    );
}

export default App;
