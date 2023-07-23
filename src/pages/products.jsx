import CardProduct from "../components/Fragment/CardProduct";
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/img/product-1.jpg" />
        <CardProduct.Body title="Keyboard">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          pariatur laudantium id quisquam error odit nostrum veritatis at
          corrupti omnis voluptatum, repellat repellendus! Eveniet eos
          consectetur aperiam accusantium rem fuga.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
