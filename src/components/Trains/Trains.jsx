import React from 'react'
import TrainCard from './components/TrainCard'

function Trains({ trains, error, loading, trainFilter }) {
  return (
    <div style={{ margin: '1rem 1rem 2rem' }}>
      <h2>Current Trains:</h2>
      {(loading && !trains) && <p>Finding Trains...</p>}
      {error && <p style={{fontWeight: 'bold', color: 'red'}}>{ error } </p>}
      {trains?.filter((train) => {
        return trainFilter.column === null ?
          true
          : train[trainFilter.column] === trainFilter.value
      }).map((train) => <TrainCard key={train.TrainId} train={train}/>)}
    </div>
  )
}

export default Trains