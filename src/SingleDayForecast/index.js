import React from "react";

const SingleDayForecast = (props) => {
	return (
		<div className="singleDay">
			<img 
				className="weatherIcon" 
				src={`http://openweathermap.org/img/wn/${props.weatherIcon}.png`} 
				alt={props.weather} 
				width="45"
			/>
			<span>{props.date}</span> 
			<span className="temperature">
				<strong>{props.temperature} &#8457;</strong>
			</span>
			<span><strong>{props.weather}</strong></span>
		</div>
	);
}

export default SingleDayForecast;