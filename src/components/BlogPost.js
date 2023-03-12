import React, {useState, useEffect, useRef} from "react";
import { blogJsonToHtml, getSingleBlogPosts } from "./CRUD"
import './mediaQueries.css'

// https://stackoverflow.com/questions/64733163/create-unique-route-for-each-blog-post-react
const BlogPost = (props) => {

    const [content, setContent] = useState([])

    useEffect(()=>{
        if (props.postBeingViewed){
            setContent(blogJsonToHtml(props.postBeingViewed))
        } else {
            getSingleBlogPosts(setContent, props.setPostBeingViewed)
        }
        return () => {
            props.getPostsOnUnmount()
        }
    },[])

    const containerStyle = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    }
    const dateStyle = {
        fontSize:'80%',
        opacity:0.5,
        marginTop:1
    } 
    const titleContainerStyle = {
        marginTop:55,
        marginBottom:27,
        // width:600
    }
    const titleStyle = {
        fontSize:'210%',
        fontWeight:'bold',
    }
    const descriptionStyle = {
        maxWidth:600,
        marginBottom:25,
        marginLeft:20,
        marginRight:15
    }
    const contentStyle = {
        display:'flex',
        flexDirection:'column',
        maxWidth:700,
        alignItems:'center',
        lineHeight:'25px',
        marginLeft:20,
        marginRight:15
    }
    /* 
    content posted to database should follow the structure seen in testData in CRUD.js
    */
    const date = Date(content.date).split(' ').slice(1,4).join(' ')
    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>
                <span style={titleStyle}>{content.title}</span>
            </div>  
            <div style={descriptionStyle}>
                <i style={{opacity:0.7}}>{content.description}</i>
                <div style={dateStyle}>{date}</div>
            </div>
           
            {/* when i use % on max width, it shifts it to the left when encapsulated by another div */}
            <img className='mainImage' src={content.main_image}/>

            <div style={contentStyle}>
                {content.parsedContent}
            </div>
        </div>
    )
}

export default BlogPost
