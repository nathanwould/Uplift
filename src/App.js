import './App.css';
import useTrains from './queries/useTrains';
import Trains from './components/Trains/Trains';
import { useState } from 'react';
import Filters from './components/Filters/Filters';

function App() {
  const { data, error, loading } = useTrains();
  const [trainFilter, setTrainFilter] = useState({
    column: null,
    value: null,
  });
  const trains = data?.TrainPositions;
  console.log(trains);
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Train Tracker</h1>
      <Filters setTrainFilter={setTrainFilter}/>
      <Trains trains={trains} error={error} loading={loading} trainFilter={trainFilter} />
    </div>
  );
}

export default App;
