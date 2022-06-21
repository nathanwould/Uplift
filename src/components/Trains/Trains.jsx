import React from 'react'
import TrainCard from './components/TrainCard'

function Trains({ trains, error, loading, trainFilter }) {
  console.log(trainFilter)
  if (loading) {
    return (
      <div>Finding Trains...</div>
    )
  }
  return (
    <div style={{margin: '1rem 1rem 2rem'}}>
      {error ? <p style={{fontWeight: 'bold', color: 'red'}}>{ error.message } </p> : null}
      {trains?.filter((train) => {
        return trainFilter.column === null ?
          true
          : train[trainFilter.column] === trainFilter.value
      }).map((train) => <TrainCard key={train.TrainId} train={train}/>)}
    </div>
  )
}

export default Trains