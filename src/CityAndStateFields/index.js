import React, {useState} from "react";
import "./style.css";
import FiveDayForecastBlock from "../FiveDayForecastBlock";

/* City/State field and 'Get Weather' button */
/* Pass cityName to FiveDayForecastBlock component to be handled by API */

const CityAndStateFields = (props) => {
	const [cityStateName, setCityStateName] = useState('Dover, Delaware');
	var [userInputCityStateName, setUserInputCityStateName] = useState('');

	return (
		<div>
			<form className="getWeatherForm" onSubmit={(event) => {event.preventDefault();}}>
				<input
					name="cityAndStateInput"
					className="cityField" 
					type="text" 
					placeholder="City, State" 
					onChange={(event) => {
						userInputCityStateName = event.target.value
					}} 
				/>
				<input 
					className="button getWeather"
					type="submit"
					value="Get Weather"
					onClick={(event) => {
						setCityStateName(userInputCityStateName);
					}}
				/>
			</form>
			<h2 className="weatherForHeader">5 Day Forecast for {cityStateName}:</h2>
			<p><em className="subtext">(Select a day below)</em></p>
			<FiveDayForecastBlock cityStateName={cityStateName} /> 
		</div>
	)
}

export default CityAndStateFields;