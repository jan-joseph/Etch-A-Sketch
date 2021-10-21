import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Slider from './components/Slider';

import { useState } from 'react'

function App() {
  const [sliderValue, setSliderValue] = useState(10)
  return (
    <div className="flex flex-col items-center justify-center" >
      <Header />
      <Slider />
      <Grid sliderValue={sliderValue}/>
    </div>
  );
}

export default App;
