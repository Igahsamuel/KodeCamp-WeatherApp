import SideBar from "./SideBar";
import Location from "./Location";

function Main() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="px-9 py-9 font-bold flex justify-between flex-col lg:h-screen">
          <h2>KodeCamp-Weather-App</h2>
          <Location />
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default Main;
