import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '../store'
import { decrement, increment } from "../counterSlice//counterSlice";

const Slider = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
      
      <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>Slider has recieved count : {count}<button onClick={()=>{dispatch(increment())}}>+</button></div>
    </>
  );
};

export default Slider;
