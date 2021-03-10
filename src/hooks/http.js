import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url, depen) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        await axios.get(url).then((res) => {
          setData(res.data);
          setIsLoading(false);
        });
      } catch (e) {
        console.log('');
      }
    }
    fetchData();
  }, depen);

  return [data, isLoading];
};
