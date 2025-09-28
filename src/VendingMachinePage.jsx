import VendingProductItem from "./VendingProductItem";

export default function VendingMachinePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center p-10">Distributeur</h1>
      <div className="flex flex-col space-y-2 pb-10">
        <div className="self-end space-y-5 mr-5">
          <div className="flex space-x-2">
            <p className="text-green-700">Disponible</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
          <a className="py-3 px-5  bg-red-700 text-white rounded-xl">
            Signaler
          </a>
        </div>
      </div>

      <div>
        <VendingProductItem name="Americano" price="0,60" />
        <VendingProductItem name="Café court" price="0,40" />
        <VendingProductItem name="Café noisette" price="1,10" />
        <VendingProductItem name="Ristretto" price="0,50" />
      </div>
    </>
  );
}
