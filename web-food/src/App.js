
import './App.css';
// all components
import NavBar from './components/NavBar';
import Hero from './components/hero';
import HeadlineCards from './components/headlineCards';
import Food from './components/food';
import Categories from './components/categories';
import Footer from './components/footer';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="bg-black pb-3">
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
