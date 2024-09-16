import React, {useState, useRef, useEffect} from 'react';
import { clearInterval } from 'timers';
import './App.css';

const App = () => {
    const [timerDays, setTimerDays] = useState('00'); 
    const [timerHours, setTimerHours] = useState('00'); 
    const [timerMinutes, setTimerMinutes] = useState('00'); 
    const [timerSeconds, setTimerSeconds] = useState('00'); 


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('November 10, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                if(days < 10 ) setTimerDays('0' + days);
                else setTimerDays (days);
                if(hours < 10 ) setTimerHours('0' + hours);
                else setTimerHours (hours);
                if(minutes < 10 ) setTimerMinutes('0' + minutes);
                else setTimerMinutes (minutes);
                if(seconds < 10 ) setTimerSeconds('0' + seconds);
                else setTimerSeconds (seconds);
                
                
                
            }


        }, 1000);

    };

    useEffect (() => {
        startTimer ();
        return () => {
            clearInterval(interval.current)
        };

    } );


    return (

        
        <div className="timer-container">
        <div className="coming">
            <div className="titleCountdown">Coming Soon</div>
            <div className="wego">We'll be LIVE!</div>
        </div>
        <div className="timer">
            <div>
            <div className ="realtimer">
                <p className="numbers">{timerDays}<small className="textabove">Days</small></p>
                
                <p className="numbers">{timerHours}<small className="textabove">Hours</small></p>
                
                <p className="numbers">{timerMinutes}<small className="textabove">Minutes</small></p>
                
                <p className="numbers">{timerSeconds}<small className="textabove">Seconds</small></p>
                
            </div>
            <div className="titleunder">November 10th</div>
            </div>
        </div>
        
            
        
        </div>
    );

};

export default App;
