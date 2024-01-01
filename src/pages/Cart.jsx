import { useSelector, useDispatch } from "react-redux";
import {
  addOrderAsync,
  removeToCart,
  removeAllCart,
} from "../redux/slices/CommerceSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.CommerceSlice.cart);
  const user = useSelector((s) => s.UserSlice.currentUser);
  let total = 0;
  cart.forEach((i) => (total += i.product.price * i.quantity));
  const remove = (i) => {
    dispatch(removeToCart(i));
  };
  const order = () => {
    dispatch(addOrderAsync({ products: cart, user_id: user.id }));
    dispatch(removeAllCart());
  };
  return (
    <div style={{ marginTop: 100, marginLeft: 200 }}>
      <div className="ht__breadcrumb__area bg-image--3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__inner text-center">
                <h2 className="breadcrumb-title">Shopping Cart</h2>
                <nav className="breadcrumb-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separator">/</span>
                  <span className="breadcrumb_item active">Shopping Cart</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-main-area section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 ol-lg-12">
              <form action="#">
                <div className="table-content wnro__table table-responsive">
                  <table>
                    <thead>
                      <tr className="title-top">
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart &&
                        cart.map((i) => (
                          <tr key={i.product.id}>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img src={i.product.image} alt="product img" />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">{i.product.title}</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">${i.product.price}</span>
                            </td>
                            <td className="product-quantity">
                              <input type="number" defaultValue={i.quantity} />
                            </td>
                            <td className="product-subtotal">
                              ${i.product.price * i.quantity}
                            </td>
                            <td className="product-remove">
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => remove(i.product.id)}
                              >
                                X
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </form>
              <div className="cartbox__btn"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="cartbox__total__area">
                <div className="cartbox-total d-flex justify-content-between">
                  <ul className="cart__total__list">
                    <li>Cart total</li>
                    <li>Sub Total</li>
                  </ul>
                  <ul className="cart__total__tk">
                    <li>${total}</li>
                    <li>${total}</li>
                  </ul>
                </div>
                <div className="cart__total__amount">
                  <span>Grand Total</span>
                  <span>${total}</span>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-text" onClick={order}>
                    Confirm Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
