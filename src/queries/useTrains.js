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
          const error = Object.assign({}, res, {
            status: res.status,
            message: res.statusText,
          });
          console.log(res)
          setError(error);
          throw Error(error);
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err);
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