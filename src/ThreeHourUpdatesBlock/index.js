import React, {useState} from "react";

const ThreeHourUpdatesBlock = (props) => {
	return (
		<div className="threeHourUpdatesBlock">
				{
					props.eightThreeHourForecastsForThisDay.map((threeHourForecast, index) => {
						let time = threeHourForecast.dt_txt.split(" ").pop(); // Only show the time (not the date)
						let thisDate = threeHourForecast.dt_txt.split(" ").reverse().pop(); // Only show the date (not the time)

						return (
							<div className="detailContainers" key={index}>
								<img className="weatherIcon"
									src={`http://openweathermap.org/img/wn/${threeHourForecast.weather[0].icon}.png`} 
									alt={threeHourForecast.weather[0].main}
									width="30"
								/>
								<h3>{time}</h3>
								<p>{thisDate}<br />
								<strong>Temperature:</strong> {threeHourForecast.main.temp}&#8457;<br />
								<strong>Humidity:</strong> {threeHourForecast.main.humidity}%<br />
								<strong>Wind Speed:</strong> {threeHourForecast.wind.speed}mph<br />
								<strong>Weather:</strong> {threeHourForecast.weather[0].description}<br />
								</p>	
							</div>
						)
					})
				}
				</div>
	)
}

export default ThreeHourUpdatesBlock;