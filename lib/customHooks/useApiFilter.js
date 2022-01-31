import { useState } from 'react';

const useApiFilter = ({ name, values }) => {
  const [value, setValue] = useState(values[0]);
  const [entities, setEntities] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  return {
    name,
    value,
    values,
    entities,
    status,
    error,
    setValue,
    setEntities,
    setStatus,
    setError,
  };
};

export default useApiFilter;
