import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAsync } from "../redux/slices/BlogSlice";
import { Link } from "react-router-dom";

function Blogs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsAsync());
  }, [dispatch]);
  const blogs = useSelector((s) => s.BlogSlice.blogs);
  return (
    <div style={{ marginTop: 100 }}>
      <div className="ht__breadcrumb__area bg-image--4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__inner text-center">
                <h2 className="breadcrumb-title">Blog Page</h2>
                <nav className="breadcrumb-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separator">/</span>
                  <span className="breadcrumb_item active">Blog</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-blog bg--white section-padding--lg blog-sidebar right-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="blog-page">
                <div className="page__header">
                  <h2>Category Archives: HTML</h2>
                </div>
                {blogs &&
                  blogs.map((i) => (
                    <article key={i.id} className="blog__post d-flex flex-wrap">
                      <div className="thumb">
                        <Link to={`/blog/${i.id}`}>
                          <img src={i.image} alt="blog images" />
                        </Link>
                      </div>
                      <div className="content">
                        <h4>
                          <Link to={`/blog/${i.id}`}>{i.title}</Link>
                        </h4>
                        <ul className="post__meta">
                          <li>
                            Posts by : <a href="#">road theme</a>
                          </li>
                          <li className="post_separator">/</li>
                          <li>{i.date}</li>
                        </ul>
                        <p>{i.short_desc}</p>
                        <div className="blog__btn">
                          <Link to={`/blog/${i.id}`}>read more</Link>
                        </div>
                      </div>
                    </article>
                  ))}

                {/* End Single Post */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
