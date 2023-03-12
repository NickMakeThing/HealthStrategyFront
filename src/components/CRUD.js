import React from "react"

export async function getAllBlogPosts(setArticleObjects){
    if (!getSlug()){ //if theres no slug
        let url = 'http://localhost:8000/getall'
        var data = await fetch(url)
            .then( response => response.json())
        setArticleObjects(data)
    }
}

export async function getSingleBlogPosts(setContent,setPostBeingViewed){
    let url = 'http://localhost:8000/get/'+getSlug()
    var data = await fetch(url)
        .then( response => response.json())

    setContent(blogJsonToHtml(data))
    setPostBeingViewed(data)
    //could put both state in js object to bulk update/render 
}

export async function searchBlogPosts(setArticleObjects, searchTerm){
    let url = 'http://localhost:8000/search?search='+searchTerm
    var data = await fetch(url)
        .then( response => response.json())
    if(data.length){
        setArticleObjects(data)
    } else {
        setArticleObjects([{title:'nopostsfound'}])
    }
}

export function blogJsonToHtml(blogData){
    var blogDataCopy = {...blogData}
    var index=0

    let parsedContent = blogDataCopy.content.map(data => {
        index++
        switch(data.type){
            case 'paragraph':
                return <p key={index} style={{alignSelf:'start'}}>{data.content}</p>
            case 'subtitle':
                return <div key={index} style={{fontSize:'120%',fontWeight:'bold', marginTop:21}}>{data.content}</div>
            case 'image':
                return <img key={index} className="contentImage" src={data.content}/>
            case 'ad':
                return null
                break
        }
    })
    blogDataCopy.parsedContent = parsedContent
    return blogDataCopy
} 

export function getSlug(){
    //document.url doesnt work in firefox
    return window.location.href.split('/').splice(-1)[0]
}

/*

{
    "title": "dfgkjdflkgjldf",
    "thumbnail": "https://healthstrategy.s3.ap-southeast-2.amazonaws.com/testImg8.jpg",
    "main_image": "https://healthstrategy.s3.ap-southeast-2.amazonaws.com/testImg8.jpg",
    "description": "hfghfghfghfgh", 
    "content":[
        {
            "type": "paragraph",
            "content": "The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox."
        },
        {
            "type": "image",
            "content": "testImg12.jpg"
        },
        {
            "type": "paragraph",
            "content": "Then the lazy dog went to sleep."
        },
        {
            "type": "subtitle",
            "content": "What Does It Mean?"
        },
        {
            "type": "paragraph",
            "content": "The lazy dog does not do much exercise. "
        }
    ]
}
*/