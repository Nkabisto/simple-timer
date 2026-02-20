import {useState, useRef} from 'react';
import TimerControls from './TimerControls';


const App = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
  }
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <h2 className="text-4xl font-semibold mt-4">
      ⏳Timer: {time}
      </h2>
      <TimerControls 
        title={isRunning ? 'Pause' : 'Start'} 
        clickHandler={toggleTimer}
        color="green"
      />

      <TimerControls 
        title="Reset"
        clickHandler={resetTimer}
        color="red"
      />
    </div>
  );
};

export default App;
