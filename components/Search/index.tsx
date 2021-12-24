import { faLocationArrow, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="flex flex-row justify-between pb-4 items-center">
      <div className="flex flex-row items-center text-base flex-1">
        <FontAwesomeIcon className="h-4 mr-2" icon={faSearch}></FontAwesomeIcon>
        <input
          type="text"
          className="placeholder:text-[#858585] flex-1 mr-2 rounded-xl bg-transparent"
          placeholder="Introdueix un lloc ..."
        ></input>
      </div>
      <FontAwesomeIcon className="h-4" icon={faLocationArrow} />
    </div>
  );
}

export default Search;
