import "./Footer.scss";

function Footer() {

  return (
    <div className="footer_background">
    <div className="footer-all">
        <div className="social-media">
        <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Lakers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              aria-label="Rawg"
            >
              <img
                className="store_logo"
                id="x"
                src="public\images\X_logo.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/lakers/"
              aria-label="Rawg"
            >
              <img
                className="store_logo"
                id="insta"
                src="public\images\Instagram_logo.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.facebook.com/losangeleslakers"
              aria-label="Rawg"
            >
              <img
                className="store_logo"
                id="facebook"
                src="public\images\Facebook_logo.png"
                alt=""
              />
            </a>
        </div>
        <div className="logo-footer">
        <img className="logo" src="../../public/images/lognavbar_360.png" />
        </div>
        <div className="creator2">

            <ul>
                <li>
                Arnauld Montandon
                </li>
                <li>
                Morgan Pouilly
                </li>
            </ul>

        </div>
    </div>
    </div>
  )
}

export default Footer;