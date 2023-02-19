import React, {useState, useEffect, useRef} from "react";
import { blogJsonToHtml } from "./CRUD"

const BlogPost = (props) => {
    //need to add route for each post so routing doesnt screw up on refresh
    //or just do ajax when entering detail view
    const [content, setContent] = useState([])

    useEffect(()=>{
        if(!content.length){
            setContent(blogJsonToHtml(props.postBeingViewed))
        }
        // console.log(props.postBeingViewed)
    },[])
    console.log(content)
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
