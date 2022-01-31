import { useState } from 'react';

const useApiFilter = ({ name, values }) => {
  const [value, setValue] = useState(values[0]);
  const [entities, setEntities] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});

  return {
    name,
    value,
    values,
    entities,
    status,
    error,
    pagination,
    setValue,
    setEntities,
    setStatus,
    setError,
    setPagination,
  };
};

export default useApiFilter;
