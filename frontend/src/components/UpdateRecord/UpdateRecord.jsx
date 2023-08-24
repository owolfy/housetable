import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { API_URL } from '../../constants';
import './UpdateRecord.scss';

const UpdateRecord = ({ emitData, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [address, setAddress] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [risk, setRisk] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (data) {
      setAddress(data.address || '');
      setCurrentValue(data.currentValue || '');
      setLoanAmount(data.loanAmount || '');
      setRisk(data.risk || '');
      setId(data.id || '');
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(`${API_URL}/houses/${id}`, {
        address,
        currentValue,
        loanAmount,
      });

      emitData(response.data);
      setIsEditMode(false);
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
      alert('Failed to create the house record. Please try again.');
    }
  };

  const toggleEditModeText = isEditMode ? 'View Mode' : 'Edit Mode';

  if (isLoading) return <Loader />;

  return (
    <div className='record-container update-container'>
      <div className='header-container'>
        <h3>House Record</h3>
        <button onClick={() => setIsEditMode(!isEditMode)}>
          {toggleEditModeText}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='ID'>ID:</label>
          <input value={id} required disabled={true} />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input value={address} disabled={true} />
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
            disabled={!isEditMode}
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
            disabled={!isEditMode}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='risk'>Risk percentage:</label>
          <input value={risk * 100 + '%'} disabled={true} />
        </div>
        <div className='button-wrapper'>
          {isEditMode && <button type='submit'>Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default UpdateRecord;
