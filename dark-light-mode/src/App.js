import React from 'react';
import './App.css';

function App() {

  //setting 
  function toogleDark(){
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center dark:bg-yellow-400">
      <button className='p-2 bg-black text-white font-bold w-[200px] rounded-md absolute right-10 top-10 dark:bg-purple-700 dark:text-white'
      onClick={toogleDark}>
        Dark Mode
      </button>
      <div className=' w-full max-w-5xl flex flex-col gap-4 items-center justify-center'>
      <h1 className='font-bold text-center text-4xl w-1/2 dark:text-purple-700'>It's crazy how Blues Music can Connect Souls</h1>
      <p className='text-3xl text-center w-1/2 dark:text-purple-700'>Sometimes music is the only thing that gets your mind off of everything else.</p>
      <button className='p-2 bg-black text-white font-bold w-[200px] rounded-md dark:bg-purple-700 dark:text-white dark:hover:scale-105'>
        Play some music
      </button>
    </div>

    </div>
  );
}

export default App;
