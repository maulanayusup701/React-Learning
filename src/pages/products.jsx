import CardProduct from "../components/Fragment/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Keyboard",
    price: "Rp.1000.000",
    image: "/img/product-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur laudantium id quisquam error odit nostrum veritatis at corrupti omnis voluptatum, repellat repellendus! Eveniet eos consectetur aperiam accusantium rem fuga.`
  },
  {
    id: 2,
    name: "Logitech MX Key",
    price: "Rp.1.200.000",
    image: "/img/product-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur laudantium id quisquam error odit nostrum veritatis `
  }
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
