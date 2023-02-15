import React, {useState, useEffect, useRef} from "react";
import { Outlet, Link } from "react-router-dom";

const Header = (props) => {
    const style = {
        height:50,
        width:'100%',
        display:'flex',
        backgroundColor:'white',
        position:'relative',
        zIndex:1,
        alignItems:'center',
        
        // borderBottomLeftRadius:5,
        // borderBottomRightRadius:5
        // border:'solid 1px black'
    } 
    const searchStyle = {
        justifySelf:'end'
    }
    const backgroundStyle={
        height:120,
        width:'100%',
        position:'absolute',
        // border:'solid 1px black',
        zIndex:0,
        background:'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.30))',

    }
    return (
        <>   
            <div style={backgroundStyle}/>
            <div style={style}>
                <Link style={{textDecoration:'none',color:'black'}} to ="/">
                    <span style={{marginLeft:50}}>[]</span>
                    <span>HealthStrategy</span>
                </Link>
                {/* <div>search</div> */}
            </div>
        </>
    )
        // healthstrategy.world
}

export default Header
