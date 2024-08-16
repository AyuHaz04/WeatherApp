import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';
import './WeatherApp.css'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        feelsLike: 41.05,
        humidity:66,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze",
        city:"Delhi",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div className='WeatherApp'>
          <h1>Weather App By Ayush</h1>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo} />
        </div>
    )
}