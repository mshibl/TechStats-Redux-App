import React, {Component} from 'react';

class Buttons extends Component{
	render(){
		return(
	        <div className="main-buttons">
			    <button type="button" className="btn btn-info" id="indeed"
		                onClick={() => this.props.actions.loadData("demand")}>
		          <div className="text">Number of Jobs</div>
		          <div className="hidden-text">
		            <img src="http://res.cloudinary.com/shibl/image/upload/c_scale,w_15/v1473395068/jj2z8DZ-Z5rV-Y4IY0ZklkuPjCchjeeisflFD0dU_zlJNpbUJkDTQpAMlc5rwutKFSU_w300_ixdwl3.png"></img>
		            &nbsp; Data from Indeed!
		          </div>
		        </button>
		        <button type="button" className="btn btn-info" id="stackoverflow"
		                onClick={() => this.props.actions.loadData("questions")}>
		          <div className="text">Availble Support and Q&A</div>
		          <div className="hidden-text">
		            <img src="http://res.cloudinary.com/shibl/image/upload/c_scale,w_15/v1473395366/icon-stackoverflow_nejhzt.png"></img>
		            &nbsp; Data from StackOverflow!
		          </div>
		        </button>
	        </div>
        )
	}
}

export default Buttons;