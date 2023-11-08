import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedLocation from "./pages/SearchedLocation";
import { CloudContext } from "./context/Cloud";
import { useContext } from "react";
import SavedLocation from "./components/SavedLocation";

function App() {
  const { userLocation, permissionStatus } = useContext(CloudContext);
  const currentWeather = userLocation[userLocation.length - 1];
  const imageBackground = currentWeather.weather.map((item) => item.main);
  const currentImage = imageBackground[0];
  console.log(currentImage === "Clouds");
  console.log(userLocation);

  return (
    <div>
      <div
        className={`text-white lg:overflow-hidden relative ${
          currentImage === "Clouds" && permissionStatus === "granted"
            ? "image-cloudy"
            : currentImage === "Rain" && permissionStatus === "granted"
            ? "image-rainy"
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
