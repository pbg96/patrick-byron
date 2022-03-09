import { useState, useEffect, Suspense, lazy } from 'react';
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
import CaseStudyPritoTito from './components/casestudies/CaseStudyPritoTito';
import CaseStudyStocksAndMore from './components/casestudies/CaseStudyStocksAndMore';
import CaseStudyPlantphilia from './components/casestudies/CaseStudyPlantphilia';
import CaseStudyGetToastea from './components/casestudies/CaseStudyGetToastea'
import CaseStudyJikasJewels from './components/casestudies/CaseStudyJikasJewels'
import CaseStudyAbstractLogos from './components/casestudies/CaseStudyAbstractLogos'
import CaseStudyMascotLogos from './components/casestudies/CaseStudyMascotLogos'
import CaseStudyAltheteqId from './components/casestudies/CaseStudyAthleteqId'
import CaseStudyOne from './components/casestudies/CaseStudyOne';
import CaseStudyTwo from './components/casestudies/CaseStudyTwo';
import CaseStudyThree from './components/casestudies/CaseStudyThree';
import CaseStudyTreeLogistics from './components/casestudies/CaseStudyTreeLogistics'
import CaseStudyPropWashPilsners from './components/casestudies/CaseStudyPropWashPilsners'
import CaseStudyHolaTacos from './components/casestudies/CaseStudyHolaTacos'
import CaseStudyAthleteqId from './components/casestudies/CaseStudyAthleteqId'

const Home = lazy(() => import('./components/Home'));

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
    <Suspense fallback={<div className="loader">
    <BarLoader color={"black"} loading={loading} css={override} height={5} width={100} />
    </div>}>
    <Router>
    <div>  
      <Header />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/works" exact component={WorksList}/>
      <Route path="/contacts" exact component={ContactPage}/> 
      <Route path="/privacy-policy" exact component={PrivacyPolicy}/>
      <Route path="/prito-tito" exact component={CaseStudyPritoTito}/>
      <Route path="/stocks-and-more" exact component={CaseStudyStocksAndMore}/>
      <Route path="/plantphilia" exact component={CaseStudyPlantphilia}/>
      <Route path="/gettoastea" exact component={CaseStudyGetToastea}/>
      <Route path="/jikasjewels" exact component={CaseStudyJikasJewels}/>
      <Route path="/abstractlogos" exact component={CaseStudyAbstractLogos}/>
      <Route path="/mascotlogos" exact component={CaseStudyMascotLogos}/>
      <Route path="/athleteqid" exact component={CaseStudyAthleteqId}/>
      <Route path=  "/case-study-1" exact component={CaseStudyOne}/>
      <Route path="/case-study-2" exact component={CaseStudyTwo}/>
      <Route path="/case-study-3" exact component={CaseStudyThree}/>
      <Route path="/treelogistics" exact component={CaseStudyTreeLogistics}/>
      <Route path="/propwashpilsners" exact component={CaseStudyPropWashPilsners}/>
      <Route path="/holatacos" exact component={CaseStudyHolaTacos}/>
    </Switch>
    <Footer />
    </div>
    </Router>
    </Suspense>
  );
}

export default App;
