import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
export default function ProductList() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-10">Liste de produits</h1>
      <SearchBar svgPosition={"top-32 left-9"} />
      <div className="mt-10">
        <ProductItem name="Americano" />
        <ProductItem name="Café court" />
        <ProductItem name="Café long" />
        <ProductItem name="Café noisette" />
        <ProductItem name="Expresso" />
      </div>
    </div>
  );
}
