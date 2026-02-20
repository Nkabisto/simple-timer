import { useEffect, useRef } from "react";

const TimerControls = ({title,clickHandler, color,ref=null})=>{
  return (
    <button
      ref = {ref}
      onClick = {clickHandler}
      className="mt-3 text-white px-4 py-2 rounded ml-5 mr-5 hover:brightness-90"
      style={{ backgroundColor: color}}
    >{title}
    </button>
  );
};

export default TimerControls;
