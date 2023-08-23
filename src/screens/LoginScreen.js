import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../image/net.png";
import tv from "../image/tv.png";
import tv2 from "../image/tv2.jpg";
import tv3 from "../image/tv3.png";
import tv4 from "../image/tv4.png";
import meri from "../image/meri.JPG";
import SignUpScreen from "./SignUpScreen";
// import cover_photo from '../image/netflixCover.jpg';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="loginScreen">
        <div className="loginScreen_background">
          <img className="loginScreen_logo" src={logo} alt="" />
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
          <div className="img">
            <img src={tv} alt="" />
            <div className="extraIMG">
            <img src={meri} alt="" />
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
              Save your favourites easily and always have something to watch.
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
          <div className="img">
            <img src={tv3} alt="" />
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
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </span>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer">
        {/* <!-- panel1 --> */}
        <div className="foot-panel1">Questions? Call <span>000-800-919-1694</span></div>

        {/* <!-- panel2 --> */}
        <div className="foot-panel2">
          <ul>
            <a href="https://help.netflix.com/en/node/412">FAQ</a>
            <a href="https://media.netflix.com/en/">Media Centre</a>
            <a href="https://devices.netflix.com/en/">Ways to Watch</a>
            <a href="/">Cookie Preferences</a>
            <a href="https://fast.com/">Speed Test</a>
          </ul>
          <ul>
            <a href="https://help.netflix.com/en/">Help Centre</a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
          </ul>
          <ul>
            <a href="/">Account</a>
            <a href="https://jobs.netflix.com/">Jobs</a>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            <a href="https://help.netflix.com/en/contactus">Contact Us</a>
            <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
          </ul>
        </div>

        {/* <!-- panel 3 --> */}
        <div className="foot-panel3">Netflix India</div>
      </div>
    </div>
  );
}

export default LoginScreen;
