import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedLocation from "./pages/SearchedLocation";
import { CloudContext } from "./context/Cloud";
import { useContext } from "react";
import SavedLocation from "./components/SavedLocation";

function App() {
  // const { weather } = useContext(CloudContext);
  // console.log(weather);

  return (
    <div>
      {/* {weather.map((condition, index) => ( */}
      <div
        // key={index}
        // className={`text-white overflow-hidden relative ${
        //   condition.data.weather.some((item) => item.main === "Clouds")
        //     ? "image-cloudy"
        //     : "image-rainy"
        // }`}
        className="text-white lg:overflow-hidden relative image-onLocation"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search-result" element={<SearchedLocation />} />
            <Route path="/saved-location" element={<SavedLocation />} />
          </Routes>
        </Router>
      </div>
      {/* // ))} */}
    </div>
  );
}

export default App;
