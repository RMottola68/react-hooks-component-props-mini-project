import React from "react";
import Article from "./Article"

const ArticleList = ({ articles }) => {
    
    const postList = articles.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })
    
    return(
        <main>
            {postList}
        </main>
    )
}

export default ArticleList;