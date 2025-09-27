import { useState } from 'react'
import Button from './Button'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>    
      <StatisticLine text='good' value={props.good}/>
      <StatisticLine text='neutral' value={props.neutral}/>
      <StatisticLine text='bad' value={props.bad}/>
      <StatisticLine text='all' value={props.good + props.neutral + props.bad}/>
      <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
      <StatisticLine text='positive' value={(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'}/>
      </div>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
        <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App