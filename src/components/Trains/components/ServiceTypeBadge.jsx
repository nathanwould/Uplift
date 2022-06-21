import React from 'react'

function ServiceTypeBadge({ ServiceType }) {
  if (ServiceType === 'NoPassengers') {
    return <p>Service Type: No Passengers 🙅🏻‍♂️</p>;
  }
  if (ServiceType === 'Normal') {
    return <p>Service Type: Normal ✅</p>;
  }
  if (ServiceType === 'Special') {
    return <p>Service Type: Special 👀</p>;
  }
  if (ServiceType === 'Unknown') {
    return <p>Service Type: Unknown 🤷🏻‍♂️</p>;
  }
  else {
    return <p>Service Type: {ServiceType}</p>
  }
}

export default ServiceTypeBadge