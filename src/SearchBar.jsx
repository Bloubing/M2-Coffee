export default function SearchBar({ svgPosition }) {
  return (
    <div className="flex space-x-1 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={"size-6 z-2 text-gray-500 absolute " + svgPosition}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        name="search"
        id="search"
        className="px-3 p-4  z-1 bg-white mx-6 pl-12 w-full  rounded-xl shadow-lg  shadow-black/30"
        placeholder="Rechercher un produit..."
      ></input>
    </div>
  );
}
