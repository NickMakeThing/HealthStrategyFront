import React, {useState, useEffect, useRef} from "react";
import { getBlogPostDetails } from "./CRUD"

const BlogPost = (props) => {
    
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
    
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{props.postBeingViewed.title}</div>  
            <div>
                {/* when i use % on max width, it shifts it to the left when encapsulated by parent */}
                <img style={{maxWidth:600}} src={props.postBeingViewed.main_image}/>
                <div style={dateStyle}>Date: {props.postBeingViewed.date}</div>
            </div>
            <div style={{maxWidth:600}}>
                {props.postBeingViewed.content}
            </div>
        </div>
    )
}

export default BlogPost
