import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  filterByCategory,
  allProducts,
  addToCart,
} from "../redux/slices/CommerceSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BestSeller() {
  const dispatch = useDispatch();
  const cats = useSelector((s) => s.CommerceSlice.categories);
  const prods = useSelector((s) => s.CommerceSlice.filteredProducts).slice(
    0,
    3
  );
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
    <section className="wn__bestseller__area bg--white pt--80  pb--30 container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title text-center">
              <h2 className="title__be--2">
                All <span className="color--theme">Products</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered lebmid alteration in some ledmid
                form
              </p>
            </div>
          </div>
        </div>
        <div className="row mt--50">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div
              className="product__nav nav justify-content-center"
              role="tablist"
            >
              <a
                onClick={all}
                className="nav-item nav-link active"
                data-bs-toggle="tab"
                role="tab"
              >
                ALL
              </a>
              {cats &&
                cats.map((i) => (
                  <a
                    onClick={() => filter(i.id)}
                    key={i.id}
                    className="nav-item nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    {i.title}
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {prods &&
            prods.map((i) => (
              <div key={i.id} className="single__product col-4">
                <div className="single__product__inner">
                  <div className="product product__style--3">
                    <div className="product__thumb">
                      <Link to={`/product/${i.id}`} className="first__img">
                        <img src={i.image} alt="product image" />
                      </Link>
                      <Link
                        className="second__img animation1"
                        to={`/product/${i.id}`}
                      >
                        <img src={i.gallery[0]} alt="product image" />
                      </Link>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALLER</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4>
                        <Link to={`/product/${i.id}`}>{i.title}</Link>
                      </h4>
                      <ul className="price d-flex">
                        <li>{i.price} $</li>
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
                </div>
                {/* Start Single Product */}
                {/* Start Single Product */}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
