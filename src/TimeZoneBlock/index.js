import React, {useState} from "react";
import "./style.css";
import Graph from "../Graph";

/* Loop through array for this day and create new arrays with the temperatures (or other properties) and times. 
Then, use these values for the x and y axis in the Plotly CDN. 
(https://plotly.com/javascript/getting-started/) */

const TimeZoneBlock = (props) => {
    let [timeStampsArray, setTimeStamps] = useState([]); // Array of timestamps
    let [temperaturesArray, setTemperatures] = useState([]); // Array of temperatures
    let [humidityArray, setHumidity] = useState([]); // Array of humidity
    let [windSpeedArray, setWindSpeedArray] = useState([]); // Array of wind speeds
    let [chanceOfPrecipitationArray, setChanceOfPrecipitationArray] = useState([]); // Array of precipitation

    // Clear previous day's values
    timeStampsArray = [];
    temperaturesArray = [];
    humidityArray = [];
    windSpeedArray = [];
    chanceOfPrecipitationArray = [];
		
	props.eightThreeHourForecastsForThisDay.map((forecast) => {
        timeStampsArray.push(forecast.dt_txt.split(" ").pop().toString());
		temperaturesArray.push(forecast.main.temp);
		humidityArray.push(forecast.main.humidity);
		windSpeedArray.push(forecast.wind.speed);
		chanceOfPrecipitationArray.push(forecast.pop * 100);
	});
	
	return (
		<div className="timeZoneBlock">
			<p><strong>Timezone: </strong>{props.cityTimezoneDetails.timezone}<br />
			<strong>{props.cityTimezoneDetails.name} Sunrise: </strong>{props.cityTimezoneDetails.sunrise} <br />
			<strong>{props.cityTimezoneDetails.name} Sunset: </strong>{props.cityTimezoneDetails.sunset}</p>
			<hr />
			<Graph 
				dateForThisDay={props.dateForThisDay}
				timeStampsArray={timeStampsArray} 
				temperaturesArray={temperaturesArray} 
				humidityArray={humidityArray} 
				windSpeedArray={windSpeedArray} 
				chanceOfPrecipitationArray={chanceOfPrecipitationArray}
			/>
		</div>
	)
}

export default TimeZoneBlock;