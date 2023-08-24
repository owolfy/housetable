import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import Loader from './Loader/Loader';

const LoadRecord = ({ emitData, setView }) => {
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/houses/${id}`);
      emitData(response.data);
      setView('update');
    } catch (e) {
      console.error('An error occurred while submitting the form:', e);
      alert('Failed to fetch the house record. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='record-container'>
      <div className='form-group'>
        <label htmlFor='id'>Record ID:</label>
        <input
          type='number'
          id='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          min={0}
        />
      </div>
      <div className='button-wrapper'>
        <button type='submit'>Load record</button>
      </div>
    </form>
  );
};

export default LoadRecord;
