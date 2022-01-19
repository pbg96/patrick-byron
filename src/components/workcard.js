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

function Workcard(props) {
    return (        
            <div className="card" data-aos="fade-in">
               <Link to={props.link}>
                   <img src={props.image} alt={props.alt} className=""/>
                </Link>
                <div className="card-overlay">
                    <p className="overline-text">{props.category}</p>
                    <p className="body-1">{props.title}</p>
                </div>

            <Switch>
            <Route path="/patrick-byron/case-study-1">
            <CaseStudyOne />
            </Route>
            <Route path="/patrick-byron/case-study-2">
            <CaseStudyTwo />
            </Route>
            <Route path="/patrick-byron/case-study-3">
            <CaseStudyOne />
            </Route>
            </Switch>
            </div>
    );
  }

export default Workcard