// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useRef, useState } from "react";
const Nav = () => {
  const [top, setTop] = useState(true);
  const hamburgerRef = useRef();
  const navLinkRef = useRef();
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      var y = window.scrollY;
      var w = window.innerWidth;
      if (y > 0 && w > 1023) {
        setTop(false);
      } else {
        setTop(true);
      }
    });
  }
  const handleBurger = () => {
    hamburgerRef.current.classList.toggle("animate");
    navLinkRef.current.classList.toggle("hamburger__menu__active");
  };

  return (
    <nav className={top ? "nav " : "nav white__bg "}>
      <div className="hero-container">
        <div className="nav__left">
          <a href="/">{top ? <h2>Quizzie</h2> : <h2>SkyLink Creative</h2>}</a>
        </div>
        {/* nav menu for desktop */}
        <div className="nav__right " ref={navLinkRef}>
          <a href="/">Home</a>
          <span>
            <p>All Quizzes</p>
            <ul>
              <li>
                <a href="/services/web-development/">Maths</a>
              </li>
              <li>
                <a href="/services/wordpress/">History</a>
              </li>
              <li>
                <a href="/services/ui-ux/">Science</a>
              </li>
              <li>
                <a href="/services/affiliate-marketing/">Computer</a>
              </li>
              <li>
                <a href="/services/seo/">Programming</a>
              </li>
              <li>
                <a href="/services/content/">English</a>
              </li>
            </ul>
          </span>
          <a href="/#works">Tutorials</a>
          <a href="/#contact">Sign Up</a>
        </div>
        {/* mobile hamburger menu */}
        <div className="menu-wrapper" onClick={handleBurger}>
          <div ref={hamburgerRef} className="hamburger-menu"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
