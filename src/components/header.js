function Header() {
    return (
      <div>
          <header className="head">
        <div className="logo button-text">
            <p>Patrick Byron Gattoc</p>
        </div>
        <button className="burger-icon" type="button">
            <i className="fas fa-bars"></i>
        </button>
    </header>
    <nav className="navlist">
        <a className="menu-item navlist-item" href=""><h4>About</h4></a>
        <a className="menu-item navlist-item" href="#works"><h4>Works</h4></a>
        <a className="menu-item navlist-item" href="#contact"><h4>Contact</h4></a>
    </nav>
      </div>
    );
  }
  
  export default Header;
  