import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part = {part1} num = {exercises1}/>
      <Content part = {part2} num = {exercises2}/>
      <Content part = {part3} num = {exercises3}/>
      <Total num1 = {exercises1} num2 = {exercises2} num3 = {exercises3}/>
    </div>
  )
}

export default App