import { useEffect, useState } from 'react';
import Home from './Home';
import NewRecord from './NewRecord';
import LoadRecord from './LoadRecord';
import UpdateRecord from './UpdateRecord/UpdateRecord';

function MainSection({ goHome }) {
  const [view, setView] = useState('home');
  const [data, setData] = useState('');

  useEffect(() => {
    setView('home');
    setData('');
  }, [goHome]);

  switch (view) {
    case 'home':
      return <Home setView={setView} />;
    case 'new':
      return <NewRecord emitData={setData} setView={setView} />;
    case 'load':
      return <LoadRecord emitData={setData} setView={setView} />;
    case 'update':
      return <UpdateRecord emitData={setData} data={data} />;
    default:
      return <div>Page not found</div>;
  }
}

export default MainSection;
