import React, {useState, useEffect, useRef} from "react";
import { blogJsonToHtml, getSingleBlogPosts } from "./CRUD"


// https://stackoverflow.com/questions/64733163/create-unique-route-for-each-blog-post-react
const BlogPost = (props) => {

    const [content, setContent] = useState([])

    useEffect(()=>{
        console.log(props.postBeingViewed)
        if (props.postBeingViewed){
            setContent(blogJsonToHtml(props.postBeingViewed))
        } else {
            getSingleBlogPosts(setContent, props.setPostBeingViewed)
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
        opacity:0.5
    } 
    const titleStyle = {
        fontSize:'210%',
        fontWeight:'bold',
        marginTop:50,
        marginBottom:50,
    }
    /* 
    content posted to database should follow the structure seen in testData in CRUD.js
    */
    
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{content.title}</div>  
            <div>
                {/* when i use % on max width, it shifts it to the left when encapsulated by parent */}
                <img style={{maxWidth:600}} src={content.main_image}/>
                <div style={dateStyle}>Date: {content.date}</div>
            </div>
            <div style={{maxWidth:600}}>
                {content.parsedContent}
            </div>
        </div>
    )
}

export default BlogPost
