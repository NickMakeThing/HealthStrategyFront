import React, {useState, useEffect, useRef, memo} from "react";
import { Outlet, Link } from "react-router-dom";
import { searchBlogPosts, getAllBlogPosts } from './CRUD'
const Search = memo((props) => {

    const [searchText, setSearchText] = useState('')
    const getSearchResults = () => {
        if(searchText){
            searchBlogPosts(props.setArticleObjects, searchText)
        } else {
            getAllBlogPosts(props.setArticleObjects)
        }
    } 

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            getSearchResults()
        }
    }

    const style = {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:'50%',
        width:'109px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius:'5px',
        paddingLeft:'5px',
        paddingRight:'5px',
    }

    const inputStyle = {
        border:'none',
        backgroundColor:'rgba(0,0,0,0)',
        width:'100%',
        outline:'none'
    }

    return (
        <div style={style} >
            <input style={inputStyle} placeholder="Search" onKeyDown={handleEnterKey} onChange={e=>{setSearchText(e.target.value)}}/>
            <img style={{ cursor:'pointer', opacity:0.5}} height='15px' onClick={getSearchResults} src='https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg'/>
        </div> 
    )
})

export default Search

