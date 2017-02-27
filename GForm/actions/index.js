import axios from 'axios';

const ROOT_URL = 'http://localhost:8081/cvsym/polls/getPollsForRoom?roomId=MilvEAh9V63CpvfZSqkSNn///qXhQNrCdA==';
//
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){

	const request = axios.get('http://localhost:8081/cvsym/polls/getPollsForRoom?roomId=MilvEAh9V63CpvfZSqkSNn///qXhQNrCdA==');
	return{
		type:FETCH_POSTS,
		payload : request
	}
}