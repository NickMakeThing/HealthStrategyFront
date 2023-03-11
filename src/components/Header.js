import React, {useState, useEffect, useRef} from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search"

const Header = (props) => {
    const style = {
        height:50,
        width:'100%',
        display:'flex',
        backgroundColor:'white',
        position:'relative',
        zIndex:1,
        alignItems:'center',
        gap:30
    } 

    const backgroundStyle={
        height:100,
        width:'100%',
        position:'absolute',
        // border:'solid 1px black',
        zIndex:0,
        background:'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.10))',

    }
    const resetView = () =>{
        if(props.postBeingViewed){ //checks if not viewing home view
            props.setPostBeingViewed(null)
        }

    }
    return (
        <>   
            <div style={backgroundStyle}/>
            <div style={style}>
                <Link style={{textDecoration:'none',color:'black'}} to="/" onClick={resetView}>
                    <span style={{marginLeft:50}}>[]</span>
                    <span>HealthStrategy</span>
                </Link>
                <Search setArticleObjects={props.setArticleObjects}/>
                <span/>
            </div>
        </>
    )
        // healthstrategy.world
}

export default Header
