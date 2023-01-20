import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import {ThemeContext} from './Context/Context'
import {useContext} from 'react'
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : ''
    }}>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
