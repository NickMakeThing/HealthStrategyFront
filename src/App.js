import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article"
import Header from "./components/Header"
import BlogPost from "./components/BlogPost"
import {createDummyArticles} from './testingUtility/testingFunctions'

// import Choices_Container from "./components/Choices_Container";

const App = () => {
    const [articleObjects, setArticleObjects] = useState([])
    
    useEffect(()=>{
        createDummyArticles(setArticleObjects)
    },[])
    
    const articles = articleObjects.map(obj => {
        return <Article key={obj.key} title={obj.title} description={obj.description} img={obj.img}/>
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
                <Header />
                <Routes>
                    <Route index element={<div style={articleContainerStyle}>{articles}</div>}/>
                    <Route path="blog_post" element={<BlogPost />} />
                </Routes>
                
            </div>
        </BrowserRouter>  
    )
}

export default App
