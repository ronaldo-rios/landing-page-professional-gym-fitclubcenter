import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Depositions from './components/Depositions/Depositions';
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Depositions />
          <JoinUs />
          <Footer />
    </div>
  );
}

export default App;
