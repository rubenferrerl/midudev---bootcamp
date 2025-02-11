import Mensaje from './Mensaje'

const Description = () =>{
  return <p>esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  const name = 'Ruben'
  const age = 25
  return (
    <div>
      <Mensaje name = {name} age = {age}/>
      <Mensaje name = 'Mel' age = {20 + 5}/>
      <Description />
    </div>
  )
}

export default App