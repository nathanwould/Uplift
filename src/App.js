import useTrains from './queries/useTrains';
import Trains from './components/Trains/Trains';
import { useState, useMemo } from 'react';
import Filters from './components/Filters/Filters';

function App() {
  const { data, error, loading } = useTrains();
  const [trainFilter, setTrainFilter] = useState({
    column: null,
    value: null,
  });

  const trains = useMemo(() => (data?.TrainPositions), [data]);
  const carCounts = Array.from(new Set(
    trains?.map((train) => train.CarCount)
  )).sort((a, b) => a - b);

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Train Tracker</h1>
      <Filters trainFilter={trainFilter} setTrainFilter={setTrainFilter} carCounts={carCounts} />
      <Trains trains={trains} error={error} loading={loading} trainFilter={trainFilter} />
    </div>
  );
}

export default App;
