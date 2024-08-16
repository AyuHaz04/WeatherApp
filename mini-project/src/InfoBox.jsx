import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL="https://images.unsplash.com/photo-1687265051328-3d9c67034cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1508556919487-845f191e5742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJhaW58ZW58MHx8MHx8fDA%3D"
    return(
        <div className="InfoBox">
             <div className="card-container">
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80 ? RAIN_URL: (info.temp>20)? HOT_URL:COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/>: (info.temp>20)? <WbSunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Temperature: {info.temp}</p>
  <p>Maximum Temperature: {info.tempMax}</p>
  <p>Minimum Temperature: {info.tempMin}</p>
  <p>Humidity : {info.humidity}</p>
  <p>The weather feels like {info.weather} and it feels like {info.feelsLike}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
             </div>
        </div>
    )
}