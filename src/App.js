import { useState, useEffect } from 'react';
import Home from './components/Home'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from'./components/About';
import WorksList from './components/WorksList';
import ContactPage from './components/ContactPage';
import Header from './components/header';
import Footer from './components/footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { css } from "@emotion/react";
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 50% auto;
  border-color: black;
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ?
        <div className="loader">
        <BarLoader color={"black"} loading={loading} css={override} height={5} width={100} />
        </div>
      
        :
    <Router>
    <div>  
      <Header />
      <Switch>
      <Route path="/patrick-byron" exact component={Home}/>
      <Route path="/patrick-byron/about" component={About}/>
      <Route path="/patrick-byron/works" component={WorksList}/>
      <Route path="/patrick-byron/contacts" component={ContactPage}/>
      <Route path="/patrick-byron/privacy-policy" component={PrivacyPolicy}/>
    </Switch>
    <Footer />
    </div>
    </Router>
        }
    </div>
  );
}

export default App;
