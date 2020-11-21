import React from "react";
import Plot from 'react-plotly.js';

const Graph = (props) => {

	console.log(props.temperaturesArray)
	console.log(props.timeStampsArray)

	return (
		<Plot 
			key={props.temperaturesArray}
			className="graph"
			data={[
				{
					x: props.timeStampsArray,
					y: props.temperaturesArray,
					type: 'bar',
					text: 'Degrees',
					mode: 'lines+points',
					marker: {color: '#c0daef'},
				},
			]}
			layout={ 
				{
					width: 700, 
					height: 700, 
					title: '3 Hour Updates', 
					xaxis: {title: 'Time'},
					yaxis: {title: 'Temperature'},
				}
			}
		/>
	)
}

export default Graph;