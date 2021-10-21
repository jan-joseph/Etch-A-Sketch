import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Slider from './components/Slider';

import { useState } from 'react'

function App() {
  const [sliderValue, setSliderValue] = useState(10)

  const handleSliderChange = () => {
    const changedSliderValue = document.getElementById('slider').value
    setSliderValue(changedSliderValue);
  }
  return (
    <div className="flex flex-col items-center justify-center" >
      <Header />
      <Slider sliderValue={sliderValue} handleChange={handleSliderChange}/>
      <Grid sliderValue={sliderValue}/>
    </div>
  );
}

export default App;
