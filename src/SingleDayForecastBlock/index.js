import React, {useState} from "react";
import "./style.css";
import { Link } from "@reach/router";

const SingleDayForecastBlock = (props) => {
	let thisDate = props.date.split(" ").reverse().pop(); // Timestamp not needed here – only show date

	return (
		<Link 
			to={`/${props.detailsLinkSlug}`} 
			// Reach Router's method for highlighting an active link...
			getProps={({ isCurrent }) => {
      			return {
       				style: {
          			opacity: isCurrent ? ".65" : "1"
        		}
    		}
    	}}
		>
			<div className="singleDay">
				<img 
					className="weatherIcon" 
					src={`http://openweathermap.org/img/wn/${props.weatherIcon}.png`} 
					alt={props.weather} 
					width="45"
				/>
				<span>{thisDate}</span> 
				<span className="temperature">
					<strong>{props.temperature}&#8457;</strong>
				</span>
				<span><strong>{props.weather}</strong></span>
			</div>
		</Link>
	);
}

export default SingleDayForecastBlock;