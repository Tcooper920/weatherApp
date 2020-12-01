import React, {useState} from "react";
import "./style.css";
import FiveDayForecastBlock from "../FiveDayForecastBlock";

const CityAndStateFields = (props) => {
	const [cityName, setCityName] = useState('Dover, Delaware');
	var [userInputCityName, setUserInputCityName] = useState('');

	return (
		<div>
			<form className="getWeatherForm" onSubmit={(event) => {event.preventDefault();}}>
				<input
					name="cityAndStateInput"
					className="cityField" 
					type="text" 
					placeholder="City, State" 
					onChange={(event) => {
						userInputCityName = event.target.value
					}} 
				/>
				<input 
					className="button getWeather"
					type="submit"
					value="Get Weather"
					onClick={(event) => {
						setCityName(userInputCityName);
					}}
				/>
			</form>
			<h2 className="weatherForHeader">5 Day Forecast for {cityName}:</h2>
			<p><em className="subtext">(Select a day below)</em></p>
			<FiveDayForecastBlock cityName={cityName} /> 
		</div>
	)
}

export default CityAndStateFields;