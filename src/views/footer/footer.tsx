import React from "react";
import { url_linkdn, url_twitter } from "../../constants/constants";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a href={url_linkdn}>
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href={url_twitter}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <div className="copyright">
            <span>© Copyright Sergio Alberca 2021.</span>
            <span>
              Design by <a href="http://www.styleshout.com/">styleshout</a>
            </span>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
