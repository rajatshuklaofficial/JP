import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component{
	render(){
		return(
		<div className="landing">
		    <div className="dark-overlay landing-inner text-light">
		      <div className="container">
		        <div className="row">
		          <div className="col-md-12 text-center">
		            <h1 className="display-3 mb-4">RozgarInfo
		            </h1>
		            <p className="lead"> Vist for informations related to your career</p>
		            <hr />
		            <Link to="/govtjobs" className="btn btn-lg btn-info mr-2">Govt jobs</Link>
		            <Link to="/pvtjobs" className="btn btn-lg btn-light">Pvt jobs</Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  )
	}
}

export default Landing;