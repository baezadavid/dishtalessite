import * as ActionTypes from './ActionTypes';

export const Blogs = (state = { errMess: null, blogs: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BLOGS:
            return {...state, errMess: null, blogs: action.payload};

        case ActionTypes.BLOGS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_BLOG:
            const blog = action.payload;
            return {...state, blogs: state.blogs.concat(blog)};

        default:
            return state;
    }
};