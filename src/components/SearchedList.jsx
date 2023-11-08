import { Link } from "react-router-dom";

function SearchedList({ items, onDelete }) {
  // console.log(name);

  return (
    <li className="flex justify-between items-center my-2">
      <Link to={`/search-result/${items?.city}`}>
        <h2>{items?.city}</h2>
      </Link>
      <button
        className="bg-gray-200 p-2 rounded"
        onClick={() => {
          console.log("clicked");
          onDelete(items);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default SearchedList;
