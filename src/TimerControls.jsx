const TimerControls = ({title,clickHandler, color})=>{
  return (
    <button
      onClick = {clickHandler}
      className="mt-3 text-white px-4 py-2 rounded ml-3 mr-3 hover:brightness-90"
      style={{ backgroundColor: color}}
    >{title}
    </button>
  );
};

export default TimerControls;
