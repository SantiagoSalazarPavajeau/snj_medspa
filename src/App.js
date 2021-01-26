import './App.css';
import NavBar from './components/NavBar';
import TopHeader from './components/TopHeader';
import LogoHeader from './components/LogoHeader';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader/>
        
        <LogoHeader/>

        <Banner/>
        
        <NavBar/>

      </header>
    </div>
  );
}

export default App;
