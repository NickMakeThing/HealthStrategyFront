export function createDummyArticles(setArticleObjects){
    let articles=[]
    for(let i=0; i<21; i++){
        articles.push({
            title:'This is the title',
            description:'Here describes what the viewer can get from reading this article',
            img:require('./images/testImg'+i%14+'.jpg').default,
            key:i,
        })
    }
    setArticleObjects(articles)
}
