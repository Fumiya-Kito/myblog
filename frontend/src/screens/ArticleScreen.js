import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import axios from 'axios'


function ArticleScreen({ match }) {
    // const article = articles.find((p) => p._id == match.params.id)
    const [article, setArticle] = useState([])

    useEffect(() => { 
        async function fetchArticle() { 
            const { data } = await axios.get(`/api/articles/${match.params.id}`) //awaitで非同期処理をする
            setArticle(data)
        }
        fetchArticle() 
    }, [])


    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <h3>{article.title}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default ArticleScreen