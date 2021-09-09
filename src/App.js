import React, { useState } from 'react'

const Heading = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)



const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.amount}</td>
  </tr>
)

const PositiveReviews = (props) => {
  //console.log(props)
  return (
    <tr>
      <td>positive</td>
      <td>{props.good / props.total}</td>
    </tr>
  )
}
  

const AverageReviews = (props) => {
  console.log(props)
  return (
    <tr>
      <td>average</td>
      <td>{(props.good - props.bad) / (props.total)}</td>
    </tr>
  )

}


const TotalReviews = (props) => {
  console.log(props)
  return (
    <tr>
      <td>all</td>
      <td>{props.total}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  if ((total) !== 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" amount={props.good} />
            <StatisticLine text="neutral" amount={props.neutral} />
            <StatisticLine text="bad" amount={props.bad} />
            <TotalReviews total={total} good={props.good} bad={props.bad} />
            <AverageReviews good={props.good} bad={props.bad} total={total} />
            <PositiveReviews good={props.good} total={total}/>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = (newValue) => {
    setGood(newValue)
  }

  const updateNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const updateBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <Heading text="give feedback"/>
      <Button handleClick={() => updateGood(good + 1)} text="good" />
      <Button handleClick={() => updateNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => updateBad(bad + 1)} text="bad" />
      <Heading text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
