import React, {useState} from "react";
import FiveDayForecastBlock from "../FiveDayForecastBlock";
import { Link } from "@reach/router";

const CityAndStateFields = (props) => {
	const [cityName, setCityName] = useState('Dover, Delaware');
	var [userInputCityName, setUserInputCityName] = useState('')

	return (
		<div>
			<form>
				<input
					className="cityField button" 
					type="text" 
					placeholder="Search by City, State" 
					onChange={(event) => {
						userInputCityName = event.target.value
					}} 
				/>
				<input 
					type="button"
					value="Get Weather"
					onClick={(event) => {
						setCityName(userInputCityName);
					}}
				/>
			</form>
			<h2>Weather for {cityName}:</h2>
			<FiveDayForecastBlock cityName={cityName} /> 
		</div>
	)
}

export default CityAndStateFields;