import React, {useState} from "react";
import "./style.css";
import FiveDayForecastBlock from "../FiveDayForecastBlock";

const CityAndStateFields = (props) => {
	const [cityName, setCityName] = useState('Dover, Delaware');
	var [userInputCityName, setUserInputCityName] = useState('');

	return (
		<div>
			<form className="getWeatherForm">
				<input
					className="cityField" 
					type="text" 
					placeholder="City, State" 
					onChange={(event) => {
						userInputCityName = event.target.value
					}} 
				/>
				<input 
					className="button getWeather"
					type="button"
					value="Get Weather"
					onClick={(event) => {
						setCityName(userInputCityName);
					}}
				/>
			</form>
			<h2 className="weatherForHeader">Weather for {cityName}:</h2>
			<p><em className="subtext">(Select a day below)</em></p>
			<FiveDayForecastBlock cityName={cityName} /> 
		</div>
	)
}

export default CityAndStateFields;