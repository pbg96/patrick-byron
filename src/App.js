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
import CaseStudyPritoTito from './components/CaseStudyPritoTito';
import CaseStudyStocksAndMore from './components/CaseStudyStocksAndMore';
import CaseStudyPlantphilia from './components/CaseStudyPlantphilia';
import CaseStudyOne from './components/CaseStudyOne';
import CaseStudyTwo from './components/CaseStudyTwo';
import CaseStudyThree from './components/CaseStudyThree';


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
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/works" component={WorksList}/>
      <Route path="/contacts" component={ContactPage}/>
      <Route path="/privacy-policy" component={PrivacyPolicy}/>
      <Route path="/works/prito-tito" component={CaseStudyPritoTito}/>
      <Route path="/works/stocks-and-more" component={CaseStudyStocksAndMore}/>
      <Route path="/works/plantphilia" component={CaseStudyPlantphilia}/>
      <Route path="/works/case-study-1" component={CaseStudyOne}/>
      <Route path="/works/case-study-2" component={CaseStudyTwo}/>
      <Route path="/works/case-study-3" component={CaseStudyThree}/>
    </Switch>
    <Footer />
    </div>
    </Router>
        }
    </div>
  );
}

export default App;
