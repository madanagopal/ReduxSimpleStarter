import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import Accordion from 'react-responsive-accordion';
import {Link} from 'react-router';

class PostsIndex extends Component{

	componentWillMount(){
		console.log ('good time to call');
		this.props.fetchPosts();
	}

	render(){
		return (
      <div>
      	<div className="text-xs-right">
      		<Link to="/posts/new" className="btn btn-primary" >Add a Post</Link>
 		</div>
      </div>
			);
	}
}

/*var PostsIndex = React.createClass({
 
 
  render: function() {
    return(
      <div>
 
        <Accordion>
          <div triggerText="A nifty React accordion component">
            <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
          </div>
 
          <div triggerText="What the difference?" triggerTextWhenOpen="THAT is the difference!">
            <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
          </div>
 
          <div triggerText="I'm responsive and I have a little secret. Look inside.">
            <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>
          </div>
        </Accordion>
 
      </div>
    );
  }
 
});*/



/*
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({fetchPosts},dispatch);
}*/


//export default connect(null, {fetchPosts:fetchPosts})(PostsIndex);
export default connect(null, {fetchPosts})(PostsIndex);
