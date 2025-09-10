import { useState } from "react"
import { FaUndo } from "react-icons/fa"

export default function Counter() {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button className="counter-btn" onClick={reset}><FaUndo /></button>
            <div>
                <button className="counter-btn" onClick={increament}>Increment</button>
                <button className="counter-btn" onClick={decreament}> Decrement</button>
            </div>
        </>
    )
}