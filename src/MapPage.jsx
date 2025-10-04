import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
export default function MapPage() {
  return (
    <div>
      <img
        src="./images/map.png"
        alt="Map"
        className="w-full absolute -z-1 h-full"
      />
      <div className="pt-10 flex flex-col">
        <SearchBar svgPosition={"top-14 left-9"} />
        <div className="z-1 flex space-x-3 mt-3 ml-10">
          <FilterButton name="Café" />
          <FilterButton name="Snack" />
          <FilterButton name="Indisponible" />
        </div>
      </div>
      <div className="absolute top-150 left-80">
        <div className="flex space-y-5 flex-col px-5 ">
          <span className="bg-white space-y-2  flex flex-col p-3 rounded-full shadow-lg shadow-black/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="bg-black/20 w-full h-[1px]"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </span>
          <span className=" p-3 bg-white rounded-full shadow-lg shadow-black-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
