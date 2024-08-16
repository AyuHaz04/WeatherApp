import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [error,setError]=useState("");
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="b60e104528493e072592eecc53d1cbb5";

    let getWeatherInfo = async() => {
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            let result={
                temp:jsonResponse.main.temp,
                tempMax:jsonResponse.main.temp_max,
                tempMin:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
                city: city
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
       
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit= async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        setError(false);
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'>
        <h1>SearchBox</h1>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br /><br /> <br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
       {error && <p style={{color:'red', fontWeight:'800'}}>No such place is in our API!</p> }
    </div>
    )
}