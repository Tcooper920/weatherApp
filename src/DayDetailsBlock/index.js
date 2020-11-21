import React, {useState, setState} from "react";
import ThreeHourUpdatesBlock from "../ThreeHourUpdatesBlock";
import TimeZoneBlock from "../TimeZoneBlock";

const DayDetailsBlock = (props) => {
	let eightThreeHourForecastsForThisDay = [];
	const cityTimezoneDetails = props.fiveDayForecast.city;
	const dateForThisDay = props.fiveDayForecast.list[props.startingDateIndex].dt_txt.split(" ").reverse().pop();

	return (
		<div>
			<h2>3 Hour Updates:</h2>
			<div className="detailsWrapper">
			{	
				// Filter weather details by date for each of the 5 days
				props.fiveDayForecast.list.filter((listItem) => {
					const thisDateToCompare = listItem.dt_txt.split(" ").reverse().pop();
					
					/* For each list item with a date that matches the date for this day, push the
					list item into the array of forecasts */
					if (thisDateToCompare === dateForThisDay) {
						eightThreeHourForecastsForThisDay.push(listItem)
					}
				})
			}
			<ThreeHourUpdatesBlock eightThreeHourForecastsForThisDay={eightThreeHourForecastsForThisDay} />
			<TimeZoneBlock cityTimezoneDetails={cityTimezoneDetails} eightThreeHourForecastsForThisDay={eightThreeHourForecastsForThisDay} />
			</div>
		</div>
	)
}

export default DayDetailsBlock;