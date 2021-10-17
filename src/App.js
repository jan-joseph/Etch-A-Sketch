import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="flex flex-col items-center justify-center" >
      <Header />
      <Slider />
      <Grid />
    </div>
  );
}

export default App;
