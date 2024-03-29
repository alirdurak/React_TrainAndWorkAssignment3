function Footer() {
  return (
    <footer
      style={{ marginLeft: 350 }}
      id="wn__footer"
      className="footer__area bg__cat--8 brown--color"
    >
      <div className="footer-static-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__widget footer__menu">
                <div className="ft__logo">
                  <a href="index.html">
                    <img src="images/logo/3.png" alt="logo" />
                  </a>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered duskam alteration
                    variations of passages
                  </p>
                </div>
                <div className="footer__content">
                  <ul className="social__net social__net--2 d-flex justify-content-center">
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-google" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-youtube" />
                      </a>
                    </li>
                  </ul>
                  <ul className="mainmenu d-flex justify-content-center">
                    <li>
                      <a href="index.html">Trending</a>
                    </li>
                    <li>
                      <a href="index.html">Best Seller</a>
                    </li>
                    <li>
                      <a href="index.html">All Product</a>
                    </li>
                    <li>
                      <a href="index.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="index.html">Blog</a>
                    </li>
                    <li>
                      <a href="index.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="copyright">
                <div className="copy__right__inner text-start">
                  <p>
                    © 2021, Boighor. Made with{" "}
                    <i className="fa fa-heart text-danger" /> by{" "}
                    <a href="http://hasthemes.com/">HasThemes</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="payment text-end">
                <img src="images/icons/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
