import {FETCH_POSTS} from '../actions/index' ;

const INITIAL_STATE = {active:null, inactive:[]};

export default function (state= INITIAL_STATE, action) {
	switch (action.type){
		case FETCH_POSTS:
			return { ...state, inactive: action.payload.inActivePolls};
		default:
			return state;
	}
}