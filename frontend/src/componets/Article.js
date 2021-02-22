import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Article({article}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Body>
                <Link to={ `/article/${article._id}` }>
                    <Card.Title as="div">
                        <strong>{article.name}</strong>
                    </Card.Title>
                </Link>
                
                <Card.Text as="div">
                    <div className="my-3">
                        {product.createdAt}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Article