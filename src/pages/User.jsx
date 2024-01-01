import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../redux/slices/UserSlice";
function User() {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [lmail, setlMail] = useState();
  const [lpass, setlPass] = useState();
  const dispatch = useDispatch();
  const register = () => {
    dispatch(registerUser({ email: mail, password: pass }));
  };
  const login = () => {
    dispatch(loginUser({ email: lmail, password: lpass }));
  };
  return (
    <div style={{ marginTop: 100 }}>
      <div className="ht__breadcrumb__area bg-image--6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__inner text-center">
                <h2 className="breadcrumb-title">My Account</h2>
                <nav className="breadcrumb-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separator">/</span>
                  <span className="breadcrumb_item active">My Account</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my_account_area pt--80 pb--55 bg--white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="my__account__wrapper">
                <h3 className="account__title">Login</h3>
                <div action="#">
                  <div className="account__form">
                    <div className="input__box">
                      <label>
                        Username or email address <span>*</span>
                      </label>
                      <input
                        style={{ color: "black" }}
                        value={lmail}
                        onChange={(e) => setlMail(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="input__box">
                      <label>
                        Password<span>*</span>
                      </label>
                      <input
                        style={{ color: "black" }}
                        value={lpass}
                        onChange={(e) => setlPass(e.target.value)}
                        type="password"
                      />
                    </div>
                    <div className="form__btn">
                      <button onClick={login}>Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="my__account__wrapper">
                <h3 className="account__title">Register</h3>
                <div action="#">
                  <div className="account__form">
                    <div className="input__box">
                      <label>
                        Email address <span>*</span>
                      </label>
                      <input
                        style={{ color: "black" }}
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        type="email"
                      />
                    </div>
                    <div className="input__box">
                      <label>
                        Password<span>*</span>
                      </label>
                      <input
                        style={{ color: "black" }}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                      />
                    </div>
                    <div className="form__btn">
                      <button onClick={register}>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default User;
