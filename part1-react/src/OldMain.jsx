import ReactDOM from 'react-dom/client'
import { useState } from 'react'

/* import App from './App' */

const Counter = ({number}) => {
    return(
        <h1>{number}</h1>
    )
}

const App = () => {
    const [contador, setContador] = useState(0);

/*     const contador = useState(0);
    const contadorValue =   contador[0];
    const updateContador = contador[1]; */

    const handleClick = (operacion) => {
        if(operacion === true){
            return setContador(contador + 1)
        } else {
            return setContador(contador - 1)
        }
    }


    const handleClickReset = () => {
        return setContador(0)
    }

    const isEven = contador % 2 === 0;
    const mensajePar = isEven ? 'Es par' : 'Es impar';

    return (
        <div>
            <p>Valor del contador es:</p>
            <Counter number={contador} />
            <h2>{mensajePar}</h2>
            <button onClick={()=>handleClick(true)}>
                +1
            </button>
            <button onClick={()=>handleClick(false)}>
                -1
            </button>
            <button onClick={handleClickReset}>
                Reset
            </button>
            
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

