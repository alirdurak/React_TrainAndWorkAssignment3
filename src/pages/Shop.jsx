import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  addToCart,
  allProducts,
  fetchCategories,
  fetchProducts,
} from "../redux/slices/CommerceSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  const dispatch = useDispatch();
  const cats = useSelector((s) => s.CommerceSlice.categories);
  const prods = useSelector((s) => s.CommerceSlice.filteredProducts);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  const filter = (id) => {
    dispatch(filterByCategory(id));
  };
  const all = () => {
    dispatch(allProducts());
  };
  const addCart = (i) => {
    dispatch(addToCart(i));
  };
  return (
    <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
            <div className="shop__sidebar">
              <aside className="widget__categories products--cat">
                <h3 className="widget__title">Product Categories</h3>
                <ul>
                  <li>
                    <a style={{ cursor: "pointer" }} onClick={all}>
                      All <span></span>
                    </a>
                  </li>
                  {cats &&
                    cats.map((i) => (
                      <li key={i.id}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => filter(i.id)}
                        >
                          {i.title} <span></span>
                        </a>
                      </li>
                    ))}
                </ul>
              </aside>
            </div>
          </div>
          <div className="col-lg-9 col-12 order-1 order-lg-2">
            <div className="row">
              {prods &&
                prods.map((i) => (
                  <div key={i.id} className="product product__style--3  col-6">
                    <div className="product__thumb">
                      <Link to={`/product/${i.id}`} className="first__img">
                        <img src={i.image} alt="product image" />
                      </Link>

                      <div className="hot__box">
                        <span className="hot-label">BEST SALLER</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4>
                        <Link to={`product/${i.id}`}>{i.title}</Link>
                      </h4>
                      <ul className="price d-flex">
                        <li>${i.price}</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li>
                              <a
                                onClick={() => addCart(i)}
                                className="wishlist"
                              >
                                <i className="bi bi-shopping-cart-full" />
                              </a>
                            </li>
                            <li>
                              <a className="compare">
                                <i className="bi bi-heart-beat" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o" />
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o" />
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o" />
                          </li>
                          <li>
                            <i className="fa fa-star-o" />
                          </li>
                          <li>
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
