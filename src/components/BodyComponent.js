import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../store/app.actions';
import Countdown from 'react-countdown-now';

function BodyComponent() {
    const dispatch = useDispatch();
    const [className, setClassName] = useState('font-green');
    const [shine, setShine] = useState('');
    const id = useSelector(state => state.id);
    const timer = useSelector(state => state.timer);
    const show = useSelector(state => state.show);

    const countdownRender = ({ completed, formatted }) => {
        if (completed) {
            // Render a completed state
            setClassName('font-red');
            setShine('parpadea');
            return <span>{timer.endMessage}</span>
        } else {
            // Render a countdown
            return <span>{formatted.minutes}:{formatted.seconds}</span>;
        }
    };

    const handleTick = ({ total }) => {
        // const timerSeconds = new Date(timer.date).getSeconds();
        setShine('');
        //setShow(true);
        if (total <= 120000) setClassName('font-yellow'); else setClassName('font-green');
    };

    useEffect(() => {
        dispatch(setId(id + 1));
    }, [timer]);

    return(
        <div className="app-body">
            <div className="top-div" />
            <div className={`countdown font-white ${shine}`} style={{opacity: show ? 1 : 0 }}>
                <Countdown
                    key={id}
                    date={timer.date}
                    renderer={countdownRender}
                    onTick={handleTick}
                />
            </div>
            <div className={`message font-white ${shine}`} style={{opacity: show ? 1 : 0 }}>
                { timer.message }
            </div>
        </div>
    );
}

export default React.memo(BodyComponent);
