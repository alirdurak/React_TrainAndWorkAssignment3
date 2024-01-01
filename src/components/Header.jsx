import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/UserSlice";
function Header() {
  const cart = useSelector((s) => s.CommerceSlice.cart);
  const user = useSelector((s) => s.UserSlice.currentUser);
  const dispatch = useDispatch();
  const out = () => {
    dispatch(logout());
  };
  return (
    <header
      id="wn__header"
      className="header__area header__absolute sticky__header"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-6 col-lg-2">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo/logo.png" alt="logo images" />
              </a>
            </div>
          </div>
          <div className="col-lg-8 d-none d-lg-block">
            <nav className="mainmenu__nav">
              <ul className="meninmenu d-flex justify-content-start">
                <li className="drop with--one--item">
                  <Link to="/">Home</Link>
                </li>
                <li className="drop">
                  <Link to="/shop">Shop</Link>
                </li>

                <li className="drop">
                  <Link to="/blog">Blog</Link>
                </li>
                {user && (
                  <li className="drop">
                    <Link to="/order">Blog</Link>
                  </li>
                )}

                {user ? (
                  <li>
                    <a onClick={out}> Logout</a>
                  </li>
                ) : (
                  <li>
                    <Link to="/user"> Login</Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className="col-md-6 col-sm-6 col-6 col-lg-2">
            <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
              <li className="shop_search">
                <a className="search__active" href="#" />
              </li>

              <li className="shopcart">
                <Link className="cartbox_active" to="cart">
                  <span className="product_qun">{cart ? cart.length : 0}</span>
                </Link>
                {/* Start Shopping Cart */}

                {/* End Shopping Cart */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
