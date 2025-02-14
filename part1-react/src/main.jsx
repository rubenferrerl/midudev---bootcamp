import ReactDOM from 'react-dom/client'
import { useState } from 'react'

/* import App from './App' */

const WarningNotUsed = () => {
  return <h1>todavia no se ha usado el contenedor</h1>
}

const ListOfClicks = ({clicks}) => {
  console.log({clicks});
  
  return <p>{clicks.join(', ')}</p>
};


const App = () => {
/*     const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0) */
  
    const [counters, setCounters] = useState({
        left: 0,
        right: 0
    });

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
      const newCountersState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCountersState);

        setClicks(previewsClicks => [...previewsClicks, 'L'])
    }

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })
        setClicks(previewsClicks => [...previewsClicks, 'R'])
    }

    const handleReset = () => {
      setCounters({
        left: 0,
        right: 0
    })
    setClicks([])
    }

    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>
          left
        </button>
        <button onClick={handleClickRight}>
          right
        </button>
        {counters.right}
        <p>
          <button onClick={handleReset}>Reset</button>
        </p>
        <p>clicks totales: {clicks.length}</p>
        {clicks.length === 0 
        ? <WarningNotUsed /> 
        : <ListOfClicks clicks={clicks} />
        }
      </div>
    )
  }


ReactDOM.createRoot(document.getElementById('root')).render(<App />)