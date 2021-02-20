import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import BlogInfo from './BlogInfoComponent';

function RenderBlogItem({blog, onClick}) {
    return (
        <Card onClick={() => onClick(blog.id)} > 
            <Link to={`/blog/${blog.id}`}>
                <CardImg width="100%" src={blog.image} alt={blog.name} />
                <CardImgOverlay>
                    <CardTitle>{blog.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}


function  Blog(props) {
  
        const blog = props.blogs.map(blog => {
            return (
                    <div key={blog.id} className="col-md-5 m-1">
                        <RenderBlogItem blog={blog} onClick={props.onClick} />
                        <BlogInfo blog={props.blogs.filter(blog => blog.id === props.selectedBlog)[0]}/>
                    </div>  
            )
        });
    

      return (
          <React.Fragment>
                <div className="container">
                        <div className="row">
                            <div className="col">
                                <form className="search-form">
                                    <input className="search-bar" type="text" /> 
                                    <button className="search-button" type="submit">Search by Country</button>
                                </form>
                            </div>
                        </div>
                    </div>
            <div className="container">
                <div className="row">
                    {blog}
                </div>
            </div>
        </React.Fragment>
    );
  //}

}

export default Blog;