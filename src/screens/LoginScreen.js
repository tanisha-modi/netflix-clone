import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import logo from "../image/net.png";
import netflix1 from "../image/netflix1.mp4";
import netflix2 from "../image/netflix2.mp4";
import tv from "../image/tv.png";
import tv2 from "../image/tv2.jpg";
import tv3 from "../image/tv3.png";
import tv4 from "../image/tv4.png";
import Footer from "../Components/Footer";
import SignUpScreen from "./SignUpScreen";
// import cover_photo from '../image/netflixCover.jpg';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className="login">
      <div className={`nav ${show && "navb"}`}></div>
      <div className="loginScreen">
        <div className="loginScreen_background">
          {/* <img className="loginScreen_logo" src={logo} alt=""/> */}
          {signIn ? (
            <img
              className="loginScreen_logo"
              onClick={() => setSignIn(false)}
              src={logo}
              alt=""
            />
          ) : (
            <img className="loginScreen_logo" src={logo} alt="" />
          )}

          {signIn ? (
            <></>
          ) : (
            <button
              className="loginScreen_button"
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          )}

          <div className="loginScreen_gradient"></div>
        </div>

        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>

              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="login_getstarted"
                  >
                    Get Started {">"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="Screen_body">
        {signIn ? (
          <></>
        ) : (
          <div className="containers">
            <div className="hr"></div>
            <div className="login_footer">
              <div className="text">
                <h2>Enjoy on your TV</h2>
                <span>
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </span>
              </div>
              <div className="video-container">
                <div className="image-overlay">
                  <img className="img" src={tv} alt="Overlay" />
                  <video autoPlay loop muted className="video-bg">
                    <source src={netflix1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="hr"></div>
            <div className="login_footer rev">
              <div className="img">
                <img src={tv2} alt="" />
              </div>
              <div className="text">
                <h2>Download your shows to watch offline</h2>
                <span>
                  Save your favourites easily and always have something to
                  watch.
                </span>
              </div>
            </div>
            <div className="hr"></div>
            <div className="login_footer">
              <div className="text">
                <h2>Watch everywhere</h2>
                <span>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </span>
              </div>
              <div className="video-container">
                <div className="image-overlay">
                  <img className="img" src={tv3} alt="Overlay" />
                  <video autoPlay loop muted className="video-bg2">
                    <source src={netflix2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="hr"></div>
            <div className="login_footer rev">
              <div className="img">
                <img src={tv4} alt="" />
              </div>
              <div className="text">
                <h2>Create profiles for kids</h2>
                <span>
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hr"></div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
