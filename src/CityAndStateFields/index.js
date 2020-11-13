import React, {useState} from "react";
import FiveDayForecastBlock from "../FiveDayForecastBlock";

const CityAndStateFields = (props) => {
	const [cityName, setCityName] = useState('Dover');
	var userInputCityName;

	return (
		<div>
			<form>
				<input
					className="cityField" 
					type="text" 
					placeholder="Search by City" 
					onChange={(event) => {
						userInputCityName = event.target.value
					}} 
				/>
				<button 
					onClick={(event) => {
						event.preventDefault();
						setCityName(userInputCityName);
					}}
				>
				Get Weather
				</button>
			</form>
			<h2>Weather for {cityName}:</h2>
			<FiveDayForecastBlock cityName={cityName} /> 
		</div>
	)
}

export default CityAndStateFields;