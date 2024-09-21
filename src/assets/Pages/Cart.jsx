import React, { useEffect, useState } from 'react';
import { FaTrashRestore } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../../Redux/slice/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector(state => state.cartSlice);

  const [total, setTotal] = useState(0);
  const dispatch = useDispatch(); // Corrected spelling

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cart.map(product => product.totalPrice).reduce((p1, p2) => p1 + p2, 0));
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      {
        cart?.length > 0 ? (
          <div className="row mt-5">
            <div className="col-lg-8 my-5">
              <Table className='text-center md bg-light' bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>
                          <img width={"30%"} src={product.thumbnail} alt={product.title} />
                        </td>
                        <td><input className='border border-light' type="text" value={product.quantity} readOnly style={{ width: '25px' }} /></td>
                        <td>{product.totalPrice}</td>
                        <td><FaTrashRestore onClick={() => dispatch(removeFromCart(product.id))} className='fs-3' /></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>

              <div className="float-end"></div>
              <button onClick={() => dispatch(emptyCart())} className='btn btn-outline-warning'>Empty Cart</button> {/* Added onClick event */}

              <Link to={'/'}>
                <button className='btn btn-outline-primary'>SHOP MORE</button>
              </Link>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 my-5">
              <div className="container rounded shadow mt-5 p-3 w-100">
                <h2 className='my-2'>Cart Summary</h2>
                <h4>Total products: <span>{cart.length}</span></h4>
                <h5>Total: <span>${total}</span></h5>
              </div>
              <div className="d-grid">
                <button className='btn btn-success rounded'>Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mt-5 text-center">
            <h1 style={{ fontFamily: "cursive" }}>Your Cart is empty...</h1>
          </div>
        )
      }
    </div>
  );
}

export default Cart;
