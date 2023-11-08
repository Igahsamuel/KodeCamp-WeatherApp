import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedLocation from "./pages/SearchedLocation";
import { CloudContext } from "./context/Cloud";
import { useContext } from "react";
import SavedLocation from "./components/SavedLocation";

function App() {
  const { weatherData, userLocation, permissionStatus } =
    useContext(CloudContext);
  let currentImage = "Clouds";
  if (weatherData.length > 0) {
    const currentWeather = weatherData[weatherData.length - 1];

    const imageBackground = currentWeather.data.weather.map(
      (item) => item.main
    );

    if (imageBackground.length > 0) {
      currentImage = imageBackground[0];
    }
    console.log(currentImage === "Clouds");
    // console.log(userLocation);
  }
  return (
    <div>
      <div
        className={`text-white lg:overflow-hidden relative ${
          currentImage === "Clouds" && permissionStatus === "granted"
            ? "image-cloudy"
            : currentImage === "Rain" && permissionStatus === "granted"
            ? "image-rainy"
            : currentImage === "Clear" && permissionStatus === "granted"
            ? "image-clear"
            : permissionStatus === "denied"
            ? "image-onLocation"
            : "image-onLocation"
        }`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search-result/:city" element={<SearchedLocation />} />
            <Route path="/saved-location" element={<SavedLocation />} />
          </Routes>
        </Router>
      </div>
      {/* // ))} */}
    </div>
  );
}

export default App;
