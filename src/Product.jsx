import { Link } from "react-router-dom";

function Product() {
  const Products = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
  ];

  return (
    <>
      <h1>Product Page Loaded</h1>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
