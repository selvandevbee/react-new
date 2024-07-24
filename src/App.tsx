import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { counterApp, resetCounter } from './redux/slice/demoSlice'

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counterapp.counterapp)
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(counterApp({ type: "INCREMENT" }))}>
          Increment
        </button>
        <button onClick={() => dispatch(counterApp({ type: 'DECREMENT' }))}>
          DECREMENT
        </button>
        <button onClick={() => dispatch(resetCounter(0))}>
          RESET
        </button>
        <p style={{ color: "red" }}>count is {count}</p>
      </div>
      <button>
        
      </button>
    </>
  )
}

export default App
