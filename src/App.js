import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article"
import Header from "./components/Header"
import BlogPost from "./components/BlogPost"
import {createDummyArticles} from './testingUtility/testingFunctions'
import { getAllBlogPosts } from "./components/CRUD"
// import Choices_Container from "./components/Choices_Container";

const App = () => {
    const [articleObjects, setArticleObjects] = useState([])
    const [postBeingViewed, setPostBeingViewed] = useState(null)
    
    useEffect(()=>{
        if(!articleObjects.length){
            getAllBlogPosts(setArticleObjects)
        } 
        //could move to article container, that way wont need !getSlug condition in the function.
        
    },[postBeingViewed])
    
    const articles = articleObjects.map(obj => {

        return <Article key={obj.title} postObj={obj} setPostBeingViewed={setPostBeingViewed}/>
    })

    const articleContainerStyle = {
        display:'flex',
        flexWrap:'wrap',
        gap: 20,
        margin:50,
    }
    
    return (
        <BrowserRouter>
            <div style={{fontFamily: 'Roboto'}}>
                <Header {...{setPostBeingViewed, postBeingViewed}}/>
                <Routes>
                    <Route index element={<div style={articleContainerStyle}>{articles}</div>}/>
                    <Route path="blog_post/:title" element={<BlogPost {...{setPostBeingViewed, postBeingViewed}}/>} />
                </Routes>
                
            </div>
        </BrowserRouter>  
    )
}

export default App
