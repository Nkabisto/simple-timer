const TimerDisplay = ({time, title})=>{
  return(
    <h2 className="text-4xl font-semibold mt-4">
      {title} : {time}
    </h2>
  );
};

export default TimerDisplay;

