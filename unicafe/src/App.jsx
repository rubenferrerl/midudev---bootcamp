import { useState } from 'react'

const StatisticsLine = ({ title, review }) => {
  return (
    <tr>
      <td>{title}:</td>
      <td>{review}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const totalComments = good + neutral + bad;

  if (totalComments === 0) {
    return (
      <div>
        <h2>Comentarios Recopilados</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const averageScore = totalComments ? (good - bad) / totalComments : 0;
  const positivePercentage = totalComments ? (good / totalComments) * 100 : 0;

  return (
    <div>
      <h2>Comentarios Recopilados</h2>
      <table>
        <tbody>
          <StatisticsLine title='Good' review={good} />
          <StatisticsLine title='Neutral' review={neutral} />
          <StatisticsLine title='Bad' review={bad} />
          <StatisticsLine title='Total comments' review={totalComments} />
          <StatisticsLine title='Avarage' review={averageScore.toFixed(2)} />
          <StatisticsLine title='Positive percentage' review={positivePercentage.toFixed(2)} />
        </tbody>
      </table>
    </div>
  );
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    return setGood(good + 1)
  }

  const handleClickNeutral = () => {
    return setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    return setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button handleClick={handleClickGood} text='Good' />
      <Button handleClick={handleClickNeutral} text='Neutral' />
      <Button handleClick={handleClickBad} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App