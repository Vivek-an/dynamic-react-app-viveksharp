import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ timestamp }) => {
    return (
        <Countdown date={timestamp}>
            {({ hours, minutes, seconds, completed }) => {
                if (completed) {
                    // Render a completed state
                    return <span>Time's up!</span>;
                } else {
                    // Render a countdown
                    return <span>{hours}:{minutes}:{seconds}</span>;
                }
            }}
        </Countdown>
    );
};

export default CountdownTimer;