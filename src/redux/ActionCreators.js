import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addBlog = (blogId, name, country, image, description) => ({
	type: ActionTypes.ADD_BLOG,
	payload: {
		blogId: blogId,
        name: name,
        country: country,
        image: image,
        description: description
	}
});

export const fetchBlogs = () => (dispatch) => {
	return fetch(baseUrl + 'blog')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((blog) => dispatch(addBlog(blog)))
		.catch((error) => dispatch(blogsFailed(error.message)));
};

export const blogsFailed = (errMess) => ({
	type: ActionTypes.BLOGS_FAILED,
	payload: errMess
});

export const addBlogs = (blogs) => ({
	type: ActionTypes.ADD_BLOGS,
	payload: blogs
});

export const postBlog = (blogId, name, country, image, description) => (dispatch) => {
	const newBlog = {
		blogId: blogId,
        name: name,
        country: country,
        image: image,
        description: description
	};
	newBlog.date = new Date().toISOString();

	return fetch(baseUrl + 'blog', {
		method: 'POST',
		body: JSON.stringify(newBlog),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addBlog(response)))
		.catch((error) => {
			console.log('post Blog ', error.message);
			alert('Your Post could not be posted\nError: ' + error.message);
		});
};
