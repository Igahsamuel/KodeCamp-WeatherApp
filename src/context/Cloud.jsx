import { createContext, useState, useEffect } from "react";
export const CloudContext = createContext();

export default function CloudProvider({ children }) {
  const [searchBar, setSearchBar] = useState("");
  // const [cityName, setCityName] = useState([]);
  const [weatherData, setWeatherData] = useState(
    localStorage.getItem("weatherData")
      ? JSON.parse(localStorage.getItem("weatherData"))
      : []
  );
  const [permissionStatus, setPermissionStatus] = useState("undetermined");
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }, [weatherData]);

  useEffect(() => {
    const newPlace = localStorage.getItem("weatherData");
    if (newPlace) {
      setWeatherData(JSON.parse(newPlace));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const fetchApi = async () => {
        const apiKey = "dc794d5251cd1921a8d9a8dff70ed4de";
        const city = searchBar;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          // const cityData = { ...data, name: city };
          // setCityName((prevState) => [...prevState, city]);
          setWeatherData((prevState) => [...prevState, { city, data }]);
          // console.log(cityData);
          console.log(data);
          setSearchBar("");
        } else {
          console.log("Failed to fetch Api");
        }
      };
      fetchApi();
    } catch (error) {
      console.log("failed to fetch Api");
      setSearchBar("");
    }
  };

  // useEffect(() => {
  //   const temperature = weatherData;
  //   console.log(cityName);
  //   console.log(temperature);
  // }, [cityName, weatherData]);

  const handleDelete = (id) => {
    // const updatedDeleteItem = cityName.filter((item) => item !== id);
    const updateWeatherData = weatherData.filter((item) => item !== id);
    const confirm = window.confirm(
      "Are you sure you want to delete this place"
    );
    // setCityName(updatedDeleteItem);
    if (confirm) {
      setWeatherData(updateWeatherData);
    }
  };

  const fetchApi = async (latitude, longitude) => {
    const apiKey = "fedd3f2433e65c113271998ca28f0541";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      const data = await response.json();
      setUserLocation([data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const locationEnabled = () => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          setPermissionStatus("granted");
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              fetchApi(latitude, longitude);
            },
            (error) => {
              setPermissionStatus("denied");
            }
          );
        } else if (result.state === "prompt") {
          setPermissionStatus("prompt");
        } else {
          setPermissionStatus("denied");
        }
      });
    } else {
      setPermissionStatus("unsupported");
    }
  };
  useEffect(() => {
    locationEnabled();
  }, []);

  return (
    <CloudContext.Provider
      value={{
        handleDelete,
        handleSubmit,
        searchBar,
        // cityName,
        weatherData,
        setSearchBar,
        permissionStatus,
        userLocation,
        locationEnabled,
      }}
    >
      {children}
    </CloudContext.Provider>
  );
}
