import React, {useState, useEffect, useRef} from "react";
import { getBlogPostData } from "./CRUD"

const BlogPost = (props) => {
    const [content,setContent] = useState('')
    
    useEffect(()=>{
        if(!content.length){
            console.log('test')
            setContent(getBlogPostData())
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
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{content.title}</div>  
            <div>
                {/* when i use % on max width, it shifts it to the left when encapsulated by parent */}
                <img style={{maxWidth:600}} src={content.main_image}/>
                <div style={dateStyle}>Date: {content.date}</div>
            </div>
            <div style={{maxWidth:600}}>
                {content.main_content}
            </div>
        </div>
    )
}

export default BlogPost
