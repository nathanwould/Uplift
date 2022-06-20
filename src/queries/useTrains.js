import { useEffect, useState } from 'react';
import { config, trainPositions } from '../api/config';

export default function useTrains() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = new Request(trainPositions, config);

  useEffect(() => {
    (
      async () => {
        try {
          setLoading(true)
          fetch(request)
            .then(response => {
              if (response.ok) {
                return response.json()
              }
              throw response;
            })
            .then(data => {
            setData(data)
          })
        } catch(err) {
          setError(err)
        } finally {
          setLoading(false)
      }
      }
    )()
  }, [])

  return { data, error, loading }
};