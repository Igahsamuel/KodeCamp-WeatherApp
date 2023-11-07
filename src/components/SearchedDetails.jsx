
import { CloudContext } from "../context/Cloud";
import { useContext } from "react";
function SearchedDetails() {
  const { userLocation } = useContext(CloudContext);
  if (userLocation.length > 0) {
    const cityData = userLocation[userLocation.length - 1];

    return (
      <div>
        <div className="font-bold my-7 text-[18px]">
          <p>Current Location Weather Detail</p>
          <div className="flex justify-between py-2">
            <span>Humidity</span>
            <span>{cityData.main?.humidity}%</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Temperature</span>
            <span>{(cityData.main?.temp - 273.15).toFixed(2, 0)}°C</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Wind Speed</span>
            <span>{cityData.wind?.speed}m/s</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchedDetails;
