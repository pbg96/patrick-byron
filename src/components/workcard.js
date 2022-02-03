import { props } from 'react'
import WorksList from './WorksList';
import CaseStudyOne from './CaseStudyOne';
import CaseStudyTwo from './CaseStudyTwo';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import CaseStudyPritoTito from './CaseStudyPritoTito';
import CaseStudyStocksAndMore from './CaseStudyStocksAndMore';
import CaseStudyPlantphilia from './CaseStudyPlantphilia'

function Workcard(props) {
    return (      
      <Link to={props.link}>  
            <div className="card" data-aos="fade-in">
                   <img src={props.image} alt={props.alt} className=""/>
               
                <div className="card-overlay">
                    <p className="overline-text">{props.category}</p>
                    <p className="body-1">{props.title}</p>
                </div>


            <Switch>
            <Route path="/works/prito-tito">
            <CaseStudyPritoTito />
            </Route>
            <Route path="/works/stocks-and-more">
            <CaseStudyStocksAndMore />
            </Route>
            <Route path="/works/plantphilia">
            <CaseStudyPlantphilia />
            </Route>
            <Route path="/works/case-study-1">
            <CaseStudyOne />
            </Route>
            <Route path="/works/case-study-2">
            <CaseStudyTwo />
            </Route>
            <Route path="/works/case-study-3">
            <CaseStudyOne />
            </Route>
            </Switch>
            </div>
            </Link>
    );
  }

export default Workcard