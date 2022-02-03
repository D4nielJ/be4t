import { useState } from 'react';

const useApiEntities = () => {
  const [entities, setEntities] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  return [
    { entities, status, error }, 
    setEntities, 
    setStatus, 
    setError
  ];
};

export default useApiEntities;
