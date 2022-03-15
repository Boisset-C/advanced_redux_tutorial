import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 3,
    title: "my first product",
    description: "my first description",
  },
  {
    id: "p2",
    price: 9,
    title: "my second product",
    description: "my second description",
  },
  {
    id: "p3",
    price: 5,
    title: "my third product",
    description: "my third description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
