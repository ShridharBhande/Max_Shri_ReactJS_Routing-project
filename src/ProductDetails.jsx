import { Link, useParams } from "react-router-dom";

function ProductDetails() {
    const params = useParams();
  return (
    <>
      <h1>Product Details Page Loaded</h1>
      <p>{params.productId}</p>
      <p><Link to="..">Back</Link></p>
    </>
  );
}

export default ProductDetails;
