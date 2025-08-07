import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>Home Page Loaded</h1>
      <p>
        Go To <Link to="products">List of Products</Link>
        <button onClick={navigateHandler}>Naviagte</button>
      </p>
    </>
  );
}

export default Homepage;
