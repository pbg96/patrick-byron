import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from'./About';
import WorksList from './WorksList';
import ContactPage from './ContactPage';


function Header() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);

    };
    return (
      <div>
          <header className="head">
        <div className="logo button-text">
            <p><Link to="/patrick-byron" >Patrick Byron Gattoc</Link></p>
        </div>
        <button className="burger-icon" onClick={handleToggle} type="button">
            <i className="fas fa-bars"></i>
        </button>
    </header>
    <div>
    <nav className={isActive ? "navlist navlist-expanded" : "navlist"}>
        <a className="menu-item navlist-item"><Link to="/patrick-byron/about" onClick={handleToggle}><h3>About</h3></Link></a>
        <a className="menu-item navlist-item"><Link to="/patrick-byron/works" onClick={handleToggle}><h3>Works</h3></Link></a>
        <a className="menu-item navlist-item"><Link to="/patrick-byron/contacts" onClick={handleToggle}><h3>Contact</h3></Link></a>
    </nav>
    </div>
    
    <Switch>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/works">
      <WorksList />
      </Route>
      <Route path="/contacts">
      <ContactPage/>
      </Route>
    </Switch>
      </div>
    );
  }
  
  export default Header;
  