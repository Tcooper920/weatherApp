import React, {useState, useEffect} from "react";
import "./style.css";
import Plot from 'react-plotly.js';

const Graph = (props) => {
	let [yAxisTitle, setYAxisTitle] = useState('Temperature (&#8457;)')
	let [units, setUnits] = useState('&#8457;')
	let [yAxisData, setYAxisData] = useState(props.temperaturesArray);
	let [windSpeedArray, setWindSpeedArray] = useState(props.windSpeedArray)
	let [graphColor, setGraphColor] = useState('#c0daef')

	// Set graph values to reflect new props if they change
	useEffect(() => {
		setYAxisTitle('Temperature (&#8457;)');
    	setUnits('&#8457;');
    	setYAxisData(props.temperaturesArray);
    	setWindSpeedArray(props.windSpeedArray);
    	setGraphColor('#c0daef')
  	}, [props.temperaturesArray, props.windSpeedArray])

	return (
		<div className="graphWrapper">
			<form>
				<input type="button" value="Temperature" className="button"
					onClick={() => {
						setYAxisTitle('Temperature (&#8457;)');
						setUnits('&#8457;');
						setYAxisData(props.temperaturesArray);
						setGraphColor('#c0daef')
					}}
				/>
				<input type="button" value="Humidity" className="button"
					onClick={() => {
						setYAxisTitle('Humidity (%)');
						setUnits('%');
						setYAxisData(props.humidityArray);
						setGraphColor('#ffa88c')
					}}
				/>
				<input type="button" value="Wind Speed" className="button"
					onClick={() => {
						setYAxisTitle('Wind Speed (mph)');
						setUnits('mph');
						setYAxisData(props.windSpeedArray);
						setGraphColor('#d3dfe4')
					}}
				/>
			</form>
			<Plot 
				key={props.temperaturesArray}
				className="graph"
				data={[
					{
						x: props.timeStampsArray,
						y: yAxisData,
						type: 'bar',
						text: units,
						mode: 'lines+points',
						marker: {color: graphColor},
					},
				]}
				layout={ 
					{
						title: `3 Hour Updates for ${props.dateForThisDay}`, 
						xaxis: {title: 'Time'},
						yaxis: {title: yAxisTitle},
						useResizeHandler: true,
						autosize: true,
					}
				}
				useResizeHandler={true}
			/>
		</div>
	)
}

export default Graph;