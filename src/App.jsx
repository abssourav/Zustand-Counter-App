
import './App.css'
import useStore from './store'

function App() {
  
  // const count = useStore(state => state.count)
  // const increaseCounter = useStore(state => state.increaseCounter)
  // const decreaseCounter = useStore(state => state.decreaseCounter)
  // const resetCounter = useStore(state => state.resetCounter)
  // const increaseByValue = useStore(state => state.increaseByValue)

  const {count,increaseCounter,decreaseCounter,resetCounter,increaseByValue} = useStore()

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button><br />
      <button onClick={()=> increaseByValue(5)}>Increase By 5</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default App
