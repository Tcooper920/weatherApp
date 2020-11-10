import React, {useState, useEffect} from "react";
import SingleDayForecast from "../SingleDayForecast";

const apiKey = "";

const FiveDayForecastBlock = (props) => {
	const [dayOneForecast, setDayOneForecast] = useState([]);
	const [dayTwoForecast, setDayTwoForecast] = useState([]);
	const [dayThreeForecast, setDayThreeForecast] = useState([]);
	const [dayFourForecast, setDayFourForecast] = useState([]);
	const [dayFiveForecast, setDayFiveForecast] = useState([]);

	useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=${apiKey}&units=imperial`);
      const fiveDayForecast = await response.json();
      const dayOneForecast = fiveDayForecast.list[0];
      const dayTwoForecast = fiveDayForecast.list[8];
      const dayThreeForecast = fiveDayForecast.list[16];
      const dayFourForecast = fiveDayForecast.list[24];
      const dayFiveForecast = fiveDayForecast.list[32];
      
      setDayOneForecast(dayOneForecast);
      setDayTwoForecast(dayTwoForecast);
      setDayThreeForecast(dayThreeForecast);
      setDayFourForecast(dayFourForecast);
      setDayFiveForecast(dayFiveForecast);

      console.log(fiveDayForecast); // Get all weather
    };

    getWeather();
  }, []);

  if (!dayOneForecast.main || !dayTwoForecast.main || !dayThreeForecast.main || !dayFourForecast.main || !dayFiveForecast.main) { 
    return null; 
  }

  return (
    <div className="fiveDayForecastWrapper">
      <div className="fiveDayForecast">
        <SingleDayForecast 
          temperature={dayOneForecast.main.temp} 
          weather={dayOneForecast.weather[0].main} 
          date={dayOneForecast.dt_txt}
          weatherIcon={dayOneForecast.weather[0].icon} 
        />
        <SingleDayForecast 
          temperature={dayTwoForecast.main.temp} 
          weather={dayTwoForecast.weather[0].main} 
          date={dayTwoForecast.dt_txt}
          weatherIcon={dayTwoForecast.weather[0].icon} 
        />
        <SingleDayForecast 
          temperature={dayThreeForecast.main.temp} 
          weather={dayThreeForecast.weather[0].main} 
          date={dayThreeForecast.dt_txt}
          weatherIcon={dayThreeForecast.weather[0].icon} 
        />
        <SingleDayForecast 
          temperature={dayFourForecast.main.temp} 
          weather={dayFourForecast.weather[0].main} 
          date={dayFourForecast.dt_txt}
          weatherIcon={dayFourForecast.weather[0].icon} 
        />
        <SingleDayForecast 
          temperature={dayFiveForecast.main.temp} 
          weather={dayFiveForecast.weather[0].main} 
          date={dayFiveForecast.dt_txt}
          weatherIcon={dayFiveForecast.weather[0].icon} 
        />
      </div>
    </div>
	);
}

export default FiveDayForecastBlock;
