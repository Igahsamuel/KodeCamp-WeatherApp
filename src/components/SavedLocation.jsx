import ArrowLeft from "./ArrowLeft";

function SavedLocation() {
  return (
    <div className="px-4 py-10 mx-auto container h-[100vh]">
      <ArrowLeft />
      <div className="mt-[50px] text-center">
        <h2 className="text-[35px] font-bold">Saved Locations</h2>
        <p className="my-4 text-[18px]">Find your saved locations here</p>
        <p className="text-center">
          You do not have a location saved yet. Your saved locations will show
          up here when you save them
        </p>
      </div>
    </div>
  );
}

export default SavedLocation;
