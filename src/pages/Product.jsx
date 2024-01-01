import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CommerceSlice";
import { useParams } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const prod = useSelector((s) => s.CommerceSlice.products).find(
    (i) => i.id == id
  );
  const cat = useSelector((s) => s.CommerceSlice.categories).find(
    (i) => i.id == prod.categoryid
  );
  const addCart = () => {
    dispatch(addToCart(prod));
  };
  return (
    <div style={{ marginTop: 100, marginBottom: 100 }} className="container">
      <div className="row">
        <div className="col-6 ">
          <div className="wn__fotorama__wrapper">
            <div className="fotorama wn__fotorama__action" data-nav="thumbs">
              <a>
                <img src={prod.image} alt="" />
              </a>
              <a>
                <img src={prod.gallery[0]} alt="" />
              </a>
              <a>
                <img src={prod.gallery[1]} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="wn__single__product">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="product__info__main">
                  <h1>{prod.title}</h1>
                  <div className="product-reviews-summary d-flex">
                    <ul className="rating-summary d-flex">
                      <li>
                        <i className="zmdi zmdi-star-outline" />
                      </li>
                      <li>
                        <i className="zmdi zmdi-star-outline" />
                      </li>
                      <li>
                        <i className="zmdi zmdi-star-outline" />
                      </li>
                      <li className="off">
                        <i className="zmdi zmdi-star-outline" />
                      </li>
                      <li className="off">
                        <i className="zmdi zmdi-star-outline" />
                      </li>
                    </ul>
                  </div>
                  <div className="price-box">
                    <span>{prod.price}</span>
                  </div>
                  <div className="product__overview">
                    <p>
                      Ideal for cold-weather training or work outdoors, the Chaz
                      Hoodie promises superior warmth with every wear. Thick
                      material blocks out the wind as ribbed cuffs and bottom
                      band seal in body heat.
                    </p>
                    <p>
                      Ideal for cold-weather training or work outdoors, the Chaz
                      Hoodie promises superior warmth with every wear.
                    </p>
                  </div>
                  <div className="box-tocart d-flex">
                    <div className="addtocart__actions">
                      <button onClick={addCart} title="Add to Cart">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="product_meta">
                    <span className="posted_in">
                      Category:
                      <a>{cat.title}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__info__detailed">
            <div
              className="pro_details_nav nav justify-content-start"
              role="tablist"
            >
              <a
                className="nav-item nav-link active"
                data-bs-toggle="tab"
                href="#nav-details"
                role="tab"
              >
                Details
              </a>
              <a
                className="nav-item nav-link"
                data-bs-toggle="tab"
                href="#nav-review"
                role="tab"
              >
                Reviews
              </a>
            </div>
            <div className="tab__container tab-content">
              {/* Start Single Tab Content */}
              <div
                className="pro__tab_label tab-pane fade show active"
                id="nav-details"
                role="tabpanel"
              >
                <div className="description__attribute">
                  <p>
                    Ideal for cold-weather training or work outdoors, the Chaz
                    Hoodie promises superior warmth with every wear. Thick
                    material blocks out the wind as ribbed cuffs and bottom band
                    seal in body heat.Ideal for cold-weather training or work
                    outdoors, the Chaz Hoodie promises superior warmth with
                    every wear. Thick material blocks out the wind as ribbed
                    cuffs and bottom band seal in body heat.Ideal for
                    cold-weather training or work outdoors, the Chaz Hoodie
                    promises superior warmth with every wear. Thick material
                    blocks out the wind as ribbed cuffs and bottom band seal in
                    body heat.Ideal for cold-weather training or work outdoors,
                    the Chaz Hoodie promises superior warmth with every wear.
                    Thick material blocks out the wind as ribbed cuffs and
                    bottom band seal in body heat.
                  </p>
                  <ul>
                    <li>• Two-tone gray heather hoodie.</li>
                    <li>• Drawstring-adjustable hood.</li>
                    <li>• Machine wash/dry.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
