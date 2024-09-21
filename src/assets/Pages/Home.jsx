import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductData } from "../../Redux/slice/ProductSlice";
import Spinner from "react-bootstrap/Spinner";
import { addtowishlist } from "../../Redux/slice/wishlistslice";
import { addToCart } from "../../Redux/slice/cartSlice";

function Home() {
  const disptach = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.ProductSlice
  );
   const {wishlist} =useSelector(state => state.wishlistslice)
   const cart= useSelector(state=>state.cartSlice.cart)

  useEffect(() => {
    disptach(fetchProductData());
  }, []);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find(item=> item.id == product.id);
    if (existingProduct) {
      alert("already exisying");
    } else {
      disptach(addtowishlist(product));
    }
  };

  return (
    <div className="container " style={{ marginTop: "50px" }}>
      {loading ? 
        <div className="d-flex justify-content-center my-5  ">
          <Spinner className="my-5" animation="border" variant="warning" /> Loading
        </div>
       : 
        <div className="row my-5">
          {products?.length > 0 &&
            products.map((product, index) => (
              <div key={index} className="col mb-3" sm={12} md={8} lg={4}>
                <Card style={{ width: "18rem", marginTop: "5%" }}>
                  <Link to={`/view/${product?.id}`}>
                    <Card.Img
                      style={{ width: "100%" }}
                      variant="top"
                      src={product?.thumbnail}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{product.title.slice(0, 20)}</Card.Title>

                    <div className="d-flex justify-content-evenly">
                      <Button
                        onClick={() => handleWishlist(product)}
                        className="btn btn-light"
                      >
                        <i className="fa-solid fa-heart text-danger"></i>
                      </Button>
                      <Button onClick={() => disptach(addToCart(product))} className="btn btn-light">
                        <i className="fa-solid fa-cart-shopping text-success"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      }
    </div>
  );
}

export default Home;
