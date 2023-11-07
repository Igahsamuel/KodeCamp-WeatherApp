import { useContext } from "react";
import { CloudContext } from "../context/Cloud";

function Location() {
  const { permissionStatus, userLocation } = useContext(CloudContext);

  if (userLocation.length > 0) {
    const place = userLocation[userLocation.length - 1];
    return (
      <div>
        {permissionStatus === "granted" && (
          <div>
            <div className="flex gap-[10px] flex-col lg:flex-row items-center">
              <h2 className="text-[70px] font-bold">
                {(place?.main?.temp - 273.15).toFixed(2)}°
              </h2>
              <div className="text-[24px] text-center lg:text-start">
                <h3>{place?.name}</h3>
                <span>
                  {new Date().toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    month: "long",
                    day: "numeric",
                    weekday: "long",
                    year: "numeric",
                  })}
                </span>
                <p>{place?.weather.map((item) => item?.main)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {permissionStatus === "denied" && (
          <div>
            <p className="text-[24px] lg:w-[700px]">
              Failed to fetch weather of current location. Check your internet
              connectivity or enable your location
            </p>
          </div>
        )}
        {permissionStatus === "unsupported" && (
          <p>Your browser does not support geolocation</p>
        )}
      </div>
    );
  }
}

export default Location;
