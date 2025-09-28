import ProductItem from "./ProductItem";
export default function FavouritePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center p-10">Favoris</h1>
      <div className="flex space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500 absolute left-9 top-32"
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
          className="px-3 p-4 mx-6 pl-12 w-full  rounded-xl shadow-lg  shadow-black/30"
          placeholder="Rechercher un produit..."
        ></input>
      </div>
      <div className="mt-10">
        <ProductItem name="Americano" />
        <ProductItem name="Café court" />
        <ProductItem name="Café noisette" />
      </div>
    </>
  );
}
