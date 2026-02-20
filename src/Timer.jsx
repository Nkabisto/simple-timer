import {useState, useEffect, useRef} from 'react';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer = ()=>{
  const timerRef = useRef(null);

  const [time, setTime] = useState(()=>{
    return  Number(localStorage.getItem('time') || 0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() =>{
    localStorage.setItem('time', time)
  }, [time])

  const toggleTimer = () => {
    if(isRunning){
      //Clear interval to stop timer
      clearInterval(timerRef.current)
      timerRef.current = null;
    }else{
      // Start timer
      timerRef.current = setInterval(()=>{
        setTime((prevTime) => prevTime + 1);
      }, 1000)
    }

    setIsRunning(!isRunning);
  };

  
  const resetTimer = () =>{
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time');
  }
  
  const startButtonRef = useRef(null);

  useEffect(()=>{
    if(startButtonRef.current){
      startButtonRef.current.focus();
    }
  }, []);
  
  return(
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>

      <TimerDisplay 
        title="⏳Timer" 
        time={time}  
      />

      <div className='flex justify-center gap-4 mt-6'>
        <TimerControls 
          title={isRunning ? 'Pause' : 'Start'} 
          clickHandler={toggleTimer}
          color="green"
          ref={startButtonRef}
        />

        <TimerControls 
          title="Reset"
          clickHandler={resetTimer}
          color="red"
        />
      </div>
  </div>
  );
};

export default Timer;
