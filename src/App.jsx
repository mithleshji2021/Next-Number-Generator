import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [nextNumber, setNextNumber] = useState([]);

  useEffect(() => {
    
    let num = parseInt(number)
    if(num && num <= 0 ){
      setMessage("Enter a positive value")
    }
     else  {
      setMessage('');
      
        if(!num){
          setMessage('enter a number')
        }else{
          setNextNumber([num + 2, num + 4, num + 6]);
        }
      
    }
  }, [number]);

  return (
    <div className="bg-gray-500 p-4 text-white">
      
      <input
        type="number"
        value={number}
        autoFocus
        placeholder='enter number'
        className='outline-none pl-2 text-black'
        onChange={(event) => setNumber(event.target.value)}
      />
      <p>{message ? message : nextNumber.join(', ')}</p>
    </div>
  );
}

export default App;
