import { useState, useEffect, useContext } from "react";
import SearchedDetails from "./SearchedDetails";
import SearchedList from "./SearchedList";
import { CloudContext } from "../context/Cloud";
import { Link } from "react-router-dom";

function SideBar() {
  const {
    handleDelete,
    handleSubmit,
    searchBar,
    cityName,
    setSearchBar,
    weatherData,
  } = useContext(CloudContext);

  // useEffect(() => {
  //   console.log(cityName);
  // }, [cityName]);
  return (
    <div className="py-9  z-10 px-7 bg-[rgba(255,255,255,.15)] backdrop-blur">
      <form className="relative" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search for a city"
          className="py-3 w-[100%] lg:w-[400px] rounded-lg px-4 text-black outline-none"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <button className="absolute top-1 right-2 bg-blue-500 text-white px-2 py-2 rounded text-[15px]">
          Search
        </button>
      </form>
      <div className="my-9">
        <p>Your Previous Searches</p>
        <ul className="max-h-[200px] overflow-y-auto">
          {weatherData.map((items, index) => (
            <SearchedList items={items} key={index} onDelete={handleDelete} />
          ))}
        </ul>
        <hr className="mt-[80px]" />
        <SearchedDetails weatherData={weatherData} />
        <div className="my-6">
          <Link to="/saved-location">
            <button className="border-2 bg-white border-blue-500 text-blue-600 px-6 py-3 rounded ">
              View Saved Locations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
