export function createDummyArticles(setArticleObjects){
    let articles=[]
    for(let i=0; i<21; i++){
        articles.push({
            title:'This is the title',
            description:'Here describes what the viewer can get from reading this article',
            img: 'https://healthstrategy.s3.ap-southeast-2.amazonaws.com/testImg'+i%14+'.jpg', //require('./images/testImg'+i%14+'.jpg').default,
            key:i,
        })
    }
    setArticleObjects(articles)
}
// """
// {
//     "title": \""""+str(i)+""" This is the title",
//     "thumbnail": "https://healthstrategy.s3.ap-southeast-2.amazonaws.com/testImg"""+str(i)+""".jpg",
//     "main_image": "https://healthstrategy.s3.ap-southeast-2.amazonaws.com/testImg"""+str(i)+""".jpg",
//     "description":"Here describes what the viewer can get from reading this article",
//     "content": [
//         "sdfdsfdsf"
//     ]
// }
// """