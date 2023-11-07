import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CloudContext } from "../context/Cloud";
import ArrowLeft from "../components/ArrowLeft";

function SearchedLocation() {
  const { weatherData } = useContext(CloudContext);

  if (weatherData.length > 0) {
    const clouds = weatherData[weatherData.length - 1];
    return (
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center md:h-screen my-4 ">
          <div className="md:w-[725px] lg:w-[900px] bg-[rgba(255,255,255,.15)] backdrop-blur px-5 py-4">
            <ArrowLeft />
            <div className="flex flex-col md:flex-row justify-between my-4 items-center">
              <div className="text-center md:text-start">
                <h2 className="text-[30px] font-bold">
                  {clouds?.city}, {clouds.data.sys?.country}
                </h2>
                <div>
                  <p>
                    <span>
                      {new Date().toLocaleString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour12: true,
                      })}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <button className="text-white bg-blue-500 px-4 py-3 rounded my-3">
                  Save Location
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col md:flex-row justify-between  items-center my-3">
                {clouds.data.weather.some((item) => item.main === "Rain") ? (
                  <img src="/svg/raincloud.svg" alt="Rain" />
                ) : (
                  <img src="/svg/smiling-cloud.svg" alt="Not Rain" />
                )}

                {console.log(
                  clouds.data.weather.map((item) => item.main === "Rain")
                )}
                <div className="flex flex-col items-center">
                  <h2 className="text-[40px] pr-5">
                    {(clouds.data.main.temp - 273.15).toFixed(2, 0)}°C
                  </h2>
                  <p>{clouds.data.weather.map((item) => item.main)}</p>
                </div>
              </div>
              <div className="border-l border-solid"></div>
              <div className="flex flex-col gap-10 items-center">
                <div className="flex gap-7">
                  <div className="flex flex-col items-center">
                    <span>
                      {(clouds.data.main.temp_max - 273.15).toFixed(2, 0)}
                    </span>{" "}
                    <span>High</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{clouds.data.wind.speed}mph</span> <span>Wind</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{clouds.data.main.humidity}%</span>{" "}
                    <span>Humidity</span>
                  </div>
                </div>
                <div className="flex gap-7">
                  <div className="flex flex-col items-center">
                    <span>
                      {(clouds.data.main.temp_min - 273.15).toFixed(2, 0)}
                    </span>{" "}
                    <span>Low</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{clouds.data.main.pressure}in</span>{" "}
                    <span>Pressure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>41%</span> <span>Precipitation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-8">
              <Link to="/saved-location">
                <button className="text-blue-500 bg-white border-2 border-blue-300 py-2 px-2 rounded">
                  View Saved Location
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchedLocation;
