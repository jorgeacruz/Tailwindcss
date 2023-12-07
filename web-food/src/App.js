
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import HeadlineCards from './components/headlineCards';
import Food from './components/Food';
import Categories from './components/categories';

function App() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Categories/>
    </div>
  );
}

export default App;
