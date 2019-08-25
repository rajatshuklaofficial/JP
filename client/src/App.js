import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import govtjobs from './component/pages/govtjobs';
import pvtjobs from './component/pages/pvtjobs';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App"> 
    <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
      <Route exact path="/govtjobs" component={govtjobs}/>
      <Route exact path="/pvtjobs" component={pvtjobs}/>
      </div>
      <Footer />
    </div>
    </Router>
  );
 }
}

export default App;
