import React, {useState, useEffect} from "react";
import ThreeHourUpdatesBlock from "../ThreeHourUpdatesBlock";
import TimeZoneBlock from "../TimeZoneBlock";

const DayOneDetails = (props) => {

	const eightThreeHourForecastsForThisDay = [];
	const cityTimezoneDetails = props.fiveDayForecast.city;

	return (
		<div>
			<h2>3 Hour Updates:</h2>
			<div className="detailsWrapper">
			{
				// Filter by all dates that match the date at fiveDayForecast.list[index]
				props.fiveDayForecast.list.filter((listItem) => {
					let thisDate = listItem.dt_txt.split(" ").reverse().pop();
					let dayOneDate = props.fiveDayForecast.list[0].dt_txt.split(" ").reverse().pop();
					
					if (thisDate === dayOneDate) {
						eightThreeHourForecastsForThisDay.push(listItem)
					}
				})
			}
			<ThreeHourUpdatesBlock eightThreeHourForecastsForThisDay={eightThreeHourForecastsForThisDay} />
			<TimeZoneBlock cityTimezoneDetails={cityTimezoneDetails} />
			</div>
		</div>
	)
}

export default DayOneDetails;