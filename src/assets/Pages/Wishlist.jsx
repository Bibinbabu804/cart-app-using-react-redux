import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { removefromWishlist } from "../../Redux/slice/wishlistslice";
import { addToCart } from "../../Redux/slice/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlistslice.wishlist);

  const handleCart = (product) => {
    dispatch(removefromWishlist(product.id));
    dispatch(addToCart(product));
  };

  return (
    <div className="container my-5">
      <div className="row my-5">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div className="col mb-3" sm={12} md={8} lg={4}>
              <Card style={{ width: "18rem", marginTop: "5%" }}>
                <Link to={`/view/${product?.id}`}>
                  <Card.Img
                    style={{ width: "100%" }}
                    variant="top"
                    src={product?.thumbnail}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
                  <Card.Text></Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Button
                      onClick={() => dispatch(removefromWishlist(product.id))}
                      className="btn btn-light"
                    >
                      <FaHeartCircleMinus style={{ color: "red" }} />
                    </Button>
                    <Button
                      onClick={() => handleCart(product)}
                      className="btn btn-light"
                    >
                      <i className="fa-solid fa-cart-shopping text-success"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="container mt-5 text-center">
            <h1 style={{ fontFamily: "cursive" }}>Your wishlist is empty...</h1>
            <img
              width={"500px"}
              src="https://westerncatsinc.com/wp-content/uploads/cart.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
