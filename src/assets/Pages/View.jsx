import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { addtowishlist } from "../../Redux/slice/wishlistslice";
import { addToCart } from "../../Redux/slice/cartSlice";

function View() {
  const { id } = useParams();
  console.log(id);
  const { loading,error,products } = useSelector((state) => state.ProductSlice);

  const [product, setproduct] = useState({});

  const disptach = useDispatch();

  const  {wishlist } = useSelector((state) => state.wishlistslice); 

  useEffect(() => {
    setproduct(products.find((product) => product.id == id));
  }, []);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("already exist");
    } else {
      disptach(addtowishlist(product));
    }
  };

  return (
    <div className="container mt-5 my-5">
     
        <div className="row my-5">
          <div className="col-md-6">
            <img
              style={{ width: "500px" }}
              src={product.thumbnail}
              className="img-fluid"
              alt="Shop Item"
            />
          </div>
          <div className="col-md-6 my-5 mt-45">
            <p>Pid:{product.id}</p>
            <h1>{product?.title}</h1>
            <p className="text-muted">
              <del>$45.00</del>{" "}
              <strong style={{ color: "red" }}>$:{product?.price}</strong>
            </p>
            <p>{product.description}</p>
            <div className="d-flex">
              <button
                onClick={() => handleWishlist(product)}
                className="btn btn-light btn-outline-dark mx-5"
              >
                <i className="fa-solid fa-heart text-danger "></i> Wishlist
              </button>

              <button onClick={()=>disptach(addToCart(product))}  className="btn btn-light btn-outline-dark">
                <FaShoppingCart className="mx-2 fs-4" /> Add to cart
              </button>
            </div>
          </div>
        </div>
   
    </div>
  );
}

export default View;
