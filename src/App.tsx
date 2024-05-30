import "./App.css";
import NavBar from "./Components/NavBar";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice//counterSlice";

function App() {
 
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <NavBar></NavBar>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
