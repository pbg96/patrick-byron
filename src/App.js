import Home from './components/Home'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from'./components/About';
import WorksList from './components/WorksList';
import ContactPage from './components/ContactPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div>  
      <Header />
      <Switch>
      <Route path="/patrick-byron" exact component={Home}/>
      <Route path="/patrick-byron/about" component={About}/>
      <Route path="/patrick-byron/works" component={WorksList}/>
      <Route path="/patrick-byron/contacts" component={ContactPage}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
