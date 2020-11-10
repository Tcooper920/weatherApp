/* API: https://openweathermap.org/forecast5 */

import React, {useState, useEffect} from "react";
import "./App.css";
import CityAndStateFields from "./CityAndStateFields";

function App() {

	return (
   		<div>
      		<CityAndStateFields />
    	</div>
	);
}

export default App;