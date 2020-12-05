import React, {useState} from "react";
import "./style.css"; 

const ThreeHourUpdatesBlock = (props) => {
	const [dropdownIsActive, setDropdownActive] = useState(false);

	const toggleClass = () => {
		setDropdownActive(!dropdownIsActive);
	};

	return (
		<div className="threeHourUpdatesBlock">
			{
				props.eightThreeHourForecastsForThisDay.map((threeHourForecast, index) => {
					let time = threeHourForecast.dt_txt.split(" ").pop(); // Only show the time (not the date)
					let thisDate = threeHourForecast.dt_txt.split(" ").reverse().pop(); // Only show the date (not the time)
					let thisChanceOfPrecipitation = Math.round((threeHourForecast.pop * 100) * 10) / 10;

					return (
						<div className="threeHourUpdate" key={index}>
							<div className="iconDateTimeContainer">
								<img className="weatherIcon"
									src={`http://openweathermap.org/img/wn/${threeHourForecast.weather[0].icon}.png`} 
									alt={threeHourForecast.weather[0].main}
									width="30"
									height="30"
								/>
								<h3>{time}<br />{thisDate}</h3>
							</div>
							<hr />
							<p>
								<strong>Weather:</strong> {threeHourForecast.weather[0].description}<br />
								<strong>Temperature:</strong> {threeHourForecast.main.temp}&#8457;<br />
								<strong>Chance of Precipitation:</strong> {thisChanceOfPrecipitation}%<br />
								<input type="button" className="expandDetailsLink" onClick={toggleClass} value="Expand Details..." />
								<span className={`expandedForecastBlockContent ${dropdownIsActive ? 'expandForecastBlock': null}`}>
									<strong>Humidity:</strong> {threeHourForecast.main.humidity}%<br />
									<strong>Wind Speed:</strong> {threeHourForecast.wind.speed}mph<br />
									<strong>Cloudiness:</strong> {threeHourForecast.clouds.all}%<br />
									<strong>Average Visibility:</strong> {threeHourForecast.visibility}m<br />
								</span>
							</p>	
						</div>
					)
				})
			}
		</div>
	)
}

export default ThreeHourUpdatesBlock;