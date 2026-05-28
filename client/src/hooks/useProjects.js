import { useState, useEffect } from 'react';
import axios from '../api/axios';

const useProjects = () => {
  const [projects, setProjects]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Projects fetch failed:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;