import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Home Page Loaded</h1>
      <p>
        Go To <Link to="/products">List of Products</Link> 
        </p>
    </>
  );
}

export default Homepage;
