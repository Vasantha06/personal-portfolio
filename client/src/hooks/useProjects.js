import { useState, useEffect } from 'react';
import axios from '../api/axios';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/projects');
        setProjects(res.data);
      } catch (err) {
        setError('Failed to load projects');
      } finally {
        setLoading(false); // ← whether success or fail, stop loading
      }
    };

    // 3 second timeout — if backend not running show demo immediately
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // ← after 3 seconds stop loading no matter what

    fetchProjects().finally(() => clearTimeout(timer));

  }, []);

  return { projects, loading, error };
};

export default useProjects;