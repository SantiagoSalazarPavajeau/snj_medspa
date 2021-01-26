import './App.css';
import NavBar from './components/NavBar';
import TopHeader from './components/TopHeader';
import LogoHeader from './components/LogoHeader';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader/>
        
        <LogoHeader/>

        <Banner/>
        
        <NavBar/>

        <Services/>

        <Footer/>

      </header>
    </div>
  );
}

export default App;
