import React, {useState} from "react";
import FiveDayForecastBlock from "../FiveDayForecastBlock";

const CityAndStateFields = (props) => {
	var cityName = "Dover";
	var [cityInput, getCity] = useState('');

	return (
		<div>
			<form>
				<input 
					className="cityField" 
					type="text" 
					placeholder="Search by City" 
					onChange={event => getCity(event.target.value)} 
				/>
				<button 
					onClick={(event) => {
						event.preventDefault();
						cityName = cityInput;
						alert(cityName) // making sure variable value is changed to user input
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