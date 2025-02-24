import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function UpdateProductForm({ productId }) {
    const [product, setProduct] = useState({ name: '', price: '' });

    useEffect(() => {
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Product
            </Button>
        </Form>
    );
}

export default UpdateProductForm;
