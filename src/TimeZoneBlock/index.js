import React, {useState} from "react";
import "./style.css";
import Graph from "../Graph";

/* Component used to generate timezone info and pass props to the graph */

const TimeZoneBlock = (props) => {
    let [timeStampsArray, setTimeStamps] = useState([]); // Array of timestamps
    let [temperaturesArray, setTemperatures] = useState([]); // Array of temperatures
    let [humidityArray, setHumidity] = useState([]); // Array of humidity
    let [windSpeedArray, setWindSpeedArray] = useState([]); // Array of wind speeds
    let [chanceOfPrecipitationArray, setChanceOfPrecipitationArray] = useState([]); // Array of precipitation
    let [cloudinessArray, setCloudinessArray] = useState([]); // Array of cloudiness

    // Clear previous day's values
    timeStampsArray = [];
    temperaturesArray = [];
    humidityArray = [];
    windSpeedArray = [];
    chanceOfPrecipitationArray = [];
    cloudinessArray = [];
		
	/* Loop through the array of 8 items for this day and create new arrays with the forecast properties (temp, humidity, etc.) and times. 
	Then, use the property arrays for the x axis and the time for the y axis in the Plotly CDN. 
	(https://plotly.com/javascript/getting-started/) */
	props.eightThreeHourForecastsForThisDay.map((forecast) => {
        timeStampsArray.push(forecast.dt_txt.split(" ").pop().toString());
		temperaturesArray.push(forecast.main.temp);
		humidityArray.push(forecast.main.humidity);
		windSpeedArray.push(forecast.wind.speed);
		chanceOfPrecipitationArray.push(forecast.pop * 100);
		cloudinessArray.push(forecast.clouds.all);
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
				cloudinessArray={cloudinessArray}
			/>
		</div>
	)
}

export default TimeZoneBlock;