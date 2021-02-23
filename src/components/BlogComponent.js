import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import BlogInfo from './BlogInfoComponent';
import { FadeTransform } from 'react-animation-components';

function RenderBlogItem({blog, onClick}) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: "scale(0.5) translateY(50%)"
            }}>
            <Card onClick={() => onClick(blog.id)} > 
                <Link to={`/blog/${blog.id}`}>
                    <CardImg width="100%" src={blog.image} alt={blog.name} />
                    <CardImgOverlay>
                        <CardTitle>{blog.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </FadeTransform>
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
                    <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Blog</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                </div>
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