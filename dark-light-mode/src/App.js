import React from 'react';
import './App.css';

function App() {

  function ThemeD() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
  }

  //setting dark class
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
