import { useEffect, useState } from 'react';
import { config, trainPositions } from '../api/config';

const useTrains = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = new Request(trainPositions, config);

  const getData = async () => {
    setLoading(true);
    fetch(request)
      .then(res => {
        if (!res.ok) {
          setError(res.statusText)
          throw Error(res.statusText)
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return { data, error, loading }
};

export default useTrains;