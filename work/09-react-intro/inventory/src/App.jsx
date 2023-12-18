import { useState } from 'react';
import './App.css'; // Add any necessary styling
import Reorder from './reorder';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(Math.max(count - 1, 0));
  const handleReorder = () => setCount(5);

  return (
    <div className='card'>
      <h1>Inventory Count: {count}</h1>
      <button onClick={handleDecrease} disabled={!count}>
        -
      </button>
      <button onClick={handleIncrease}>+</button>
      {count === 0 && <Reorder onReorder={handleReorder} />}
    </div>
  );
};

export default App;
