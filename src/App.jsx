import { useState } from 'react'

import './App.css'
import WeatherPhoto from './components/WeatherPhoto'
import InformationWeather from './components/InformationWeather'
import SearchBox from './components/Search-box'

function App() {


  return (
    <div className='flex justify-center items-center h-screen flex-col gap-11 bg-blue-700'>


      <div> 

        <SearchBox />

      </div>


      <div className='flex justify-center items-center bg-blue-500 w-96 h-64 rounded-lg  '>

        <WeatherPhoto />

        <InformationWeather />

      </div>
    </div>
  )
}

export default App
