import React from 'react';
import LineBadge from './LineBadge';
import ServiceTypeBadge from './ServiceTypeBadge';

export default function TrainCard({train}) {
  const { TrainId, ServiceType, CarCount, LineCode } = train;
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '4px',
      marginBottom: '.5rem',
      padding: '0rem .5rem',
      width: '24rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'
      }}>
        <p style={{paddingTop: '.2rem', fontWeight: 'bold'}}>Train {TrainId}</p>
        <LineBadge LineCode={LineCode} />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        alignItems: 'center'
      }}>
        <ServiceTypeBadge ServiceType={ServiceType}/>
        <p>Car Count: {CarCount}</p>
      </div>
    </div>
  );
}