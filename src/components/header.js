import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };


  const [scrolled,setScrolled]= useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })

  let navbarClasses=['head'];
    if(scrolled){
      navbarClasses.push(' scrolled');
    }

  return (
    <div>
      <header className="head">
        <div className="logo button-text">
          <p class="overline">
            <Link to="/" onClick={handleToggle}>
              Patrick Byron Gattoc
            </Link>
          </p>
        </div>
        <button className="burger-icon" onClick={handleToggle} type="button">
          <i className="fas fa-bars"></i>
        </button>
      </header>
      <div>
        <nav className={!isActive ? "navlist navlist-expanded" : "navlist"}>
          <a className="menu-item navlist-item">
            <Link to="/about" onClick={handleToggle}>
              <h3>About</h3>
            </Link>
          </a>
          <a className="menu-item navlist-item">
            <Link to="/works" onClick={handleToggle}>
              <h3>Works</h3>
            </Link>
          </a>
          <a className="menu-item navlist-item">
            <Link to="/contacts" onClick={handleToggle}>
              <h3>Contact</h3>
            </Link>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
