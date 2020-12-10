import React, {useState, useEffect} from "react";
import "./style.css";
import SingleDayForecastBlock from "../SingleDayForecastBlock";
import DayDetailsBlock from "../DayDetailsBlock";
import { Router } from "@reach/router";

const apiKey = "";

/* Search for forecast by city/state ('props.cityStateName') */
/* API returns the next 5 day forecast (returns an array of 40 items = 5 sets of 8 3hr forecasts) */

const FiveDayForecastBlock = (props) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
	const [dayOneForecast, setDayOneForecast] = useState([]);
	const [dayTwoForecast, setDayTwoForecast] = useState([]);
	const [dayThreeForecast, setDayThreeForecast] = useState([]);
	const [dayFourForecast, setDayFourForecast] = useState([]);
	const [dayFiveForecast, setDayFiveForecast] = useState([]);
  var [showErrorMessage, setShowErrorMessage] = useState('hideErrorMessage');

	useEffect(() => {
    const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.cityStateName}&appid=${apiKey}&units=imperial`);
      
      // Manually reject non-network errors
      if (response.status >= 400 && response.status < 600) {
        setShowErrorMessage('showErrorMessage');
        return null;
      } else {
        setShowErrorMessage('hideErrorMessage');
      }

      const fiveDayForecast = await response.json();
      /* Initialize the first forecast timestamp shown for each of the five days in the list of 40 items */
      const dayOneForecast = fiveDayForecast.list[0];
      const dayTwoForecast = fiveDayForecast.list[8];
      const dayThreeForecast = fiveDayForecast.list[16];
      const dayFourForecast = fiveDayForecast.list[24];
      const dayFiveForecast = fiveDayForecast.list[32];
      
      setFiveDayForecast(fiveDayForecast);
      setDayOneForecast(dayOneForecast);
      setDayTwoForecast(dayTwoForecast);
      setDayThreeForecast(dayThreeForecast);
      setDayFourForecast(dayFourForecast);
      setDayFiveForecast(dayFiveForecast);
    };

    getWeather();
  }, [props.cityStateName]);

  if (!dayOneForecast.main || !dayTwoForecast.main || !dayThreeForecast.main || !dayFourForecast.main || !dayFiveForecast.main) { 
    return null; 
  }

  /* Generate 5 day forecast blocks by passing props to SingleDayForecastBlock component 5 times */
  /* A unique URL slug will be passed to each of the 5 day blocks for each day's unique link */
  return (
    <div className="fiveDayForecastWrapper">
      <div className={showErrorMessage}>Please enter a location using this format: [ City, State ]</div>
      <div className="fiveDayForecast">
        <SingleDayForecastBlock 
          temperature={dayOneForecast.main.temp} 
          weather={dayOneForecast.weather[0].main} 
          date={dayOneForecast.dt_txt}
          weatherIcon={dayOneForecast.weather[0].icon} 
          detailsLinkSlug={"DayOneDetails"}
        />
        <SingleDayForecastBlock 
          temperature={dayTwoForecast.main.temp} 
          weather={dayTwoForecast.weather[0].main} 
          date={dayTwoForecast.dt_txt}
          weatherIcon={dayTwoForecast.weather[0].icon} 
          detailsLinkSlug={"DayTwoDetails"}
        />
        <SingleDayForecastBlock 
          temperature={dayThreeForecast.main.temp} 
          weather={dayThreeForecast.weather[0].main} 
          date={dayThreeForecast.dt_txt}
          weatherIcon={dayThreeForecast.weather[0].icon} 
          detailsLinkSlug={"DayThreeDetails"}
        />
        <SingleDayForecastBlock 
          temperature={dayFourForecast.main.temp} 
          weather={dayFourForecast.weather[0].main} 
          date={dayFourForecast.dt_txt}
          weatherIcon={dayFourForecast.weather[0].icon} 
          detailsLinkSlug={"DayFourDetails"}
        />
        <SingleDayForecastBlock 
          temperature={dayFiveForecast.main.temp} 
          weather={dayFiveForecast.weather[0].main} 
          date={dayFiveForecast.dt_txt}
          weatherIcon={dayFiveForecast.weather[0].icon} 
          detailsLinkSlug={"DayFiveDetails"}
        />
      </div>
      <Router primary={false}>
        <DayDetailsBlock path="/DayOneDetails" fiveDayForecast={fiveDayForecast} startingDateIndex={0} />
        <DayDetailsBlock path="/DayTwoDetails" fiveDayForecast={fiveDayForecast} startingDateIndex={8} />
        <DayDetailsBlock path="/DayThreeDetails" fiveDayForecast={fiveDayForecast} startingDateIndex={16} />
        <DayDetailsBlock path="/DayFourDetails" fiveDayForecast={fiveDayForecast} startingDateIndex={24} />
        <DayDetailsBlock path="/DayFiveDetails" fiveDayForecast={fiveDayForecast} startingDateIndex={32} />
      </Router>
    </div>
	);
}

export default FiveDayForecastBlock;
