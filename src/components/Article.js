import React, {useState, useEffect, useRef} from "react";
import { Outlet, Link } from "react-router-dom";

const Article = (props) => {

    const style = {
        width:300,
        height:300,
        // border: 'solid 1px black'
    }

    const imgStyle = {
        width:'100%',
        height:'60%',
        marginBottom:5,
        position:'relative',
        zIndex:1,
        cursor:'pointer'
        // borderRadius:5
    }
    const titleStyle = {
        fontSize:'140%',
        color:'black',
        fontWeight:'bold',
        cursor:'pointer',
    }
    const descriptionStyle = {
        fontSize:'90%',
        color:'rgba(0,0,0,0.5)',
        // cursor:'pointer'
    }
    return (
        <div style={style}>
            <Link style={{textDecoration:'none'}} to={"/blog_post/"+props.postObj.title} onClick={()=>{props.setPostBeingViewed(props.postObj)}}>
                <img src={props.postObj.main_image} style={imgStyle}/>
                <span style={titleStyle}>{props.postObj.title}</span>
            </Link>
            <div style={descriptionStyle}>{props.postObj.description}</div>
        </div>
    )
}

export default Article
