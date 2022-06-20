import React from 'react';
import LineBadge from './LineBadge';

export default function TrainCard({train}) {
  const { TrainId, ServiceType, CarCount, LineCode } = train;
  // console.log(train)
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '4px',
      margin: '.5rem',
      padding: '0rem .5rem',
      width: '24rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'
      }}>
        <p style={{paddingTop: '.2rem', fontWeight: 'bold'}}>Train {TrainId}</p>
        {/* <p>Line Code: {LineCode ? LineCode : "N/A"}</p> */}
        <LineBadge LineCode={LineCode} />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'
      }}>
        <p>Service Type: {ServiceType === 'NoPassengers' ? 'No Passengers' : ServiceType}</p>
        <p>Car Count: {CarCount}</p>
      </div>
    </div>
  );
}