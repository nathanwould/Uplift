import React from 'react';
import FilterButton from './components/FilterButton';

function Filters({trainFilter, setTrainFilter, carCounts}) {
  return (
    <div style={{margin: '1rem 1rem 2rem'}}>
      <h2>Filter Trains By:</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}>
        <div>
          <h4>Train Line:</h4>
          <div>
            <FilterButton text="Red" filterColumn={'LineCode'} filterValue={'RD'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Blue" filterColumn={'LineCode'} filterValue={'BL'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Yellow" filterColumn={'LineCode'} filterValue={'YL'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Orange" filterColumn={'LineCode'} filterValue={'OR'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Green" filterColumn={'LineCode'} filterValue={'GR'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Silver" filterColumn={'LineCode'} filterValue={'SV'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
          </div>
        </div>
        <div>
          <h4>Service Type:</h4>
          <div>
            <FilterButton text="Normal" filterColumn={'ServiceType'} filterValue={'Normal'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="No Passengers" filterColumn={'ServiceType'} filterValue={'NoPassengers'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Special" filterColumn={'ServiceType'} filterValue={'Special'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
            <FilterButton text="Unknown" filterColumn={'ServiceType'} filterValue={'Unknown'} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
          </div>
        </div>
        <div>
          <h4>Number of Cars:</h4>
          <select
            defaultValue=""
            onChange={(e) => setTrainFilter({
              column: 'CarCount',
              value: parseInt(e.target.value),
            })}
          >
            <option value="" disabled hidden>-</option>
            {carCounts?.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <h4>Clear Filter:</h4>
        <FilterButton text="Clear" filterColumn={null} filterValue={null} trainFilter={trainFilter} setTrainFilter={setTrainFilter} />
      </div>
    </div>
  );
}

export default Filters;