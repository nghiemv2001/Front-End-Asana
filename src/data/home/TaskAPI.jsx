import { useState, useEffect } from "react";
import { API_URL } from "../../config/config";

export const useFetchTasks = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetchTasks = async () => {
      setError(null);
      try {
        const response = await fetch(`${API_URL}tasks`);
        if (!response.ok) {
          throw new Error("Check NetWork");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    return { data, error, fetchTasks };
  };


export const useUpdateTask = (taskId) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const updateTask = async (updates) => {
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch(`${API_URL}tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updates),
            });

            if (!response.ok) {
                throw new Error('Failed update');
            }

            const data = await response.json();
            setSuccess(true);
            return data;
        } catch (error) {
            setError(error.message);
        }
    };
    return { updateTask, error, success };
};