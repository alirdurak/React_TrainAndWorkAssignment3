import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function BlogDetail() {
  const { id } = useParams();
  const item = useSelector((s) => s.BlogSlice.blogs).find((i) => i.id == id);
  return (
    <div style={{ marginTop: 100 }}>
      <div className="ht__breadcrumb__area bg-image--6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__inner text-center">
                <h2 className="breadcrumb-title">Blog Details</h2>
                <nav className="breadcrumb-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separator">/</span>
                  <span className="breadcrumb_item active">Blog-Details</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-blog-details section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="blog-details content">
                <article className="blog-post-details">
                  <div className="post-thumbnail">
                    <img src={item.image} alt="blog images" />
                  </div>
                  <div className="post_wrapper">
                    <div className="post_header">
                      <h2>{item.title}</h2>
                      <div className="blog-date-categori">
                        <ul>
                          <li>{item.date}</li>
                          <li>
                            <a href="#" title="Posts by boighor" rel="author">
                              boighor
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post_content">
                      <p>{item.long_desc}</p>
                      <blockquote>
                        Lorem ipsum dolor sit amet, consecte adipisicing elit,
                        sed do eiusmod tempor deo incididunt labo dolor magna
                        aliqua. Ut enim ad minim veniam quis nostrud geolans
                        work.
                      </blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehendrit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore of to magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehnderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia dser mollit anim
                        id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
