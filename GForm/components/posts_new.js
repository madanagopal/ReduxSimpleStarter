import React, {Component} from 'react';

import {reduxForm} from 'redux-form';

class PostsNew extends Component {
	render() {
		return (
			<div> Create Form </div>
			);
	}
}

export default reduxForm({
	form:'PostsNewForm',
	fields:['title','choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8']
})(PostsNew);