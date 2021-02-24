import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

function ArticleScreen() {
    const [articles, setArticles] = useState([]) 
    useEffect(() => {     
        async function fetchArticles() { 
            const { data } = await axios.get('/api/articles/') //awaitで非同期処理をする
            setArticles(data)
        }
        fetchArticles()
    }, [])

    return (
        <div>
            <h1>Latest Articles</h1>
            <Row>
                {articles.map(article => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3>{article.title}</h3>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ArticleScreen