import React from "react"

const testData = {   
    title:'The story of the lazy dog',
    main_image:require('../testingUtility/images/testImg3.jpg').default,
    date:new Date().toUTCString().slice(0,16),
    main_content:[
        {
            type: 'paragraph',
            content: 'The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.The lazy dog jumped over the quick fox.'
        },
        {
            type: 'image',
            content: require('../testingUtility/images/testImg12.jpg').default
        },
        {
            type: 'paragraph',
            content: 'Then the lazy dog went to sleep.'
        },
        {
            type: 'subtitle',
            content: 'What Does It Mean?'
        },
        {
            type: 'paragraph',
            content: 'The lazy dog does not do much exercise. '
        },
        // {
        //     type: 'ad',
        //     content: ["no idea what to put here yet. will just put place holder div that says 'ad'"]
        // }
    ]
}

export function getBlogPostData(){
    var testDataCopy = {...testData}
    var index=0
    let main_content = testDataCopy.main_content.map(data => {
        index++
        // console.log(testData.main_content)
        switch(data.type){
            case 'paragraph':
                return <p key={index} style={{alignSelf:'start'}}>{data.content}</p>
            case 'subtitle':
                return <div key={index} style={{fontSize:'120%',fontWeight:'bold'}}>{data.content}</div>
            case 'image':
                return <img key={index} style={{maxWidth:'600px'}} src={data.content}/>
            case 'ad':
                return null
                break
        }
        
    })
    testDataCopy.main_content = main_content
    return testDataCopy
} 