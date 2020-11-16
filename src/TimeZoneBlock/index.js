import React, {useState} from "react";

const TimeZoneBlock = (props) => {
	return (
		<div className="timeZoneBlock">
			<p><strong>Timezone: </strong>{props.cityTimezoneDetails.timezone}<br />
			<strong>{props.cityTimezoneDetails.name} Sunrise: </strong>{props.cityTimezoneDetails.sunrise} <br />
			<strong>{props.cityTimezoneDetails.name} Sunset: </strong>{props.cityTimezoneDetails.sunset}</p>
		</div>
	)
}

export default TimeZoneBlock;