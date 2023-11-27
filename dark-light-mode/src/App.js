import React from 'react';
import './App.css';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className=' w-full max-w-5xl flex flex-col gap-4 items-center justify-center'>
      <h1 className='font-bold text-center text-4xl w-1/2'>It's crazy how Blues Music can Connect Souls</h1>
      <p className='text-3xl text-center w-1/2'>Sometimes music is the only thing that gets your mind off of everything else.</p>
      <button className='p-2 bg-black text-white w-[200px] rounded-md'>
        Play some music
      </button>
    </div>

    </div>
  );
}

export default App;
