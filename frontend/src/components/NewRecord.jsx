import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';
import Loader from './Loader/Loader';

const NewRecord = ({ setView, emitData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [loanAmount, setLoanAmount] = useState('');

  if (isLoading) return <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/houses`, {
        address,
        currentValue,
        loanAmount,
      });

      emitData(response.data);
      setView('update');
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
      alert('Failed to create the house record. Please try again.');
    }
  };

  return (
    <div className='record-container'>
      <h2>Submit a New House Record</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='currentValue'>Current Value:</label>
          <input
            type='number'
            id='currentValue'
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            required
            min={0}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='loanAmount'>Loan amount:</label>
          <input
            type='number'
            id='loanAmount'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
            min={0}
          />
        </div>
        <div className='button-wrapper'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewRecord;
