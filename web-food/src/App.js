import React, { useState } from 'react';
import './App.css';

//International
import { useTranslation } from 'react-i18next';
import './locales/i18n'

// all components
import NavBar from './components/NavBar';
import Hero from './components/hero';
import HeadlineCards from './components/headlineCards';
import Food from './components/food';
import Categories from './components/categories';
import Footer from './components/footer';
import Copyright from './components/copyright';

function App() {
 
  //i18n
  const { t, i18n:{ changeLanguage, language }} = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language);
  
  function handleChangeLanguage(){
   
    const newLanguage  = currentLanguage === 'pt' ? 'en' : 'pt'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)

  }
  return (
    <div className="bg-black pb-3 dark:bg-white">
      <NavBar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Categories/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
