import CardProduct from "../components/Fragment/CardProduct";
import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragment/TableCart";
import Navbar from "../components/Fragment/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);
  useLogin();
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/2 mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
