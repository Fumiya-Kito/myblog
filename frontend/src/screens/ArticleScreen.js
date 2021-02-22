import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

function ArticleScreen({ match }) {
    // const article = articles.find((p) => p._id == match.params.id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <h1>article</h1>
                </Col>
            </Row>
        </div>
    )
}

export default ArticleScreen