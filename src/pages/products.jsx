import CardProduct from "../components/Fragment/CardProduct";
import Button from "../components/Elements/Button";
import { useEffect, useState, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 1000000,
    image: "/img/product-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur laudantium id quisquam error odit nostrum veritatis at corrupti omnis voluptatum, repellat repellendus! Eveniet eos consectetur aperiam accusantium rem fuga.`
  },
  {
    id: 2,
    name: "Logitech MX Key",
    price: 1200000,
    image: "/img/product-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur laudantium id quisquam error odit nostrum veritatis `
  }
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    cart.length > 0
      ? (totalPriceRef.current.style.display = "table-row")
      : (totalPriceRef.current.style.display = "none");
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/2 mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="w-full text-left table-auto border-collapse border border-gray-600">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">Product</th>
                <th className="border border-gray-600 px-4 py-2">Price</th>
                <th className="border border-gray-600 px-4 py-2">Quantity</th>
                <th className="border border-gray-600 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td className="border border-gray-600 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      Rp {product.price.toLocaleString()}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {item.qty}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {typeof product.price === "number" &&
                      !isNaN(product.price) &&
                      typeof item.qty === "number" &&
                      !isNaN(item.qty)
                        ? `Rp. ${(product.price * item.qty).toLocaleString()}`
                        : "Invalid price or quantity"}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td className="border border-gray-600 px-4 py-2" colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <b>Rp. {totalPrice.toLocaleString()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
