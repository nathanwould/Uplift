import React from 'react';
import FilterButton from './components/FilterButton';

function Filters({setTrainFilter}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h2>Filter Trains By:</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>
          <h4>Train Line:</h4>
          <div>
            <FilterButton text="Red" filterColumn={'LineCode'} filterValue={'RD'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Blue" filterColumn={'LineCode'} filterValue={'BL'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Yellow" filterColumn={'LineCode'} filterValue={'YL'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Orange" filterColumn={'LineCode'} filterValue={'OR'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Grey" filterColumn={'LineCode'} filterValue={'GR'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Silver" filterColumn={'LineCode'} filterValue={'SL'} setTrainFilter={setTrainFilter} />
          </div>
        </div>
        <div>
          <h4>Service Type:</h4>
          <div>
            <FilterButton text="Normal" filterColumn={'ServiceType'} filterValue={'Normal'} setTrainFilter={setTrainFilter} />
            <FilterButton text="No Passengers" filterColumn={'ServiceType'} filterValue={'NoPassengers'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Special" filterColumn={'ServiceType'} filterValue={'Special'} setTrainFilter={setTrainFilter} />
            <FilterButton text="Unknown" filterColumn={'ServiceType'} filterValue={'Unknown'} setTrainFilter={setTrainFilter} />
          </div>
        </div>
        <div>
          <h4>Number of Cars:</h4>
        </div>
      </div>
    </div>
  );
}

export default Filters;