import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = ({ match }) => {
    
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProducts = async () => {

            const { data } = await axios.get(`/api/products/${match.params.id}`)
            
            setProduct(data)
        }
        fetchProducts()
    }, [match] )
    
    return (
        <>
           <Link className='btn btn-dark my-3' to='/'>Go Back</Link> 
           <Row>
               <Col md={6}>
                   <Image src={product.image} fluid/>
               </Col>
               <Col md={3} >
                   <ListGroup varient='flush'>
                       <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
                   </ListGroup>
                   <ListGroup >
                       <ListGroup.Item><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroup.Item>
                   </ListGroup>
                   <ListGroup>
                       <ListGroup.Item>Price: ${product.price} </ListGroup.Item>
                   </ListGroup>
                   <ListGroup>
                       <ListGroup.Item>Description: {product.description} </ListGroup.Item>
                   </ListGroup>
               </Col>
           </Row>

           
        </>
    )
}

export default ProductScreen
