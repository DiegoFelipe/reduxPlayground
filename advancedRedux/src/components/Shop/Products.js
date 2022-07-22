import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 100,
    title: "HQ Doctor Strange",
    description: "Multiverse of Madness",
  },
  {
    id: "p2",
    price: 150,
    title: "HQ Iron Man",
    description: "Iron God",
  },
  {
    id: "p3",
    price: 100,
    title: "HQ Thor",
    description: "Gor, the gods' slayer",
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
