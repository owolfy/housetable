import { useState } from 'react';
import './App.scss';
import MainSection from './components/MainSection';

function App() {
  const [goHomeToggle, setGoHomeToggle] = useState(false);

  return (
    <div className='main-container'>
      <div className='box-container'>
        <img
          id='logo'
          src='https://assets.website-files.com/61c1f2cd3de869dd6f44cebe/61dd4536f96feb46ea0247c2_Group%201330.svg'
          alt='HOUSETABLE logo'
          width='137'
          onClick={() => setGoHomeToggle(!goHomeToggle)}
        ></img>
        <MainSection goHome={goHomeToggle} />
      </div>
    </div>
  );
}

export default App;
