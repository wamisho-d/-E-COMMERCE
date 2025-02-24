import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function PlaceOrderForm() {
    const [order, setOrder] = useState({ customerId: '', productIds: [], orderDate: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="customerId">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                    type="text"
                    name="customerId"
                    value={order.customerId}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="productIds">
                <Form.Label>Product IDs</Form.Label>
                <Form.Control
                    type="text"
                    name="productIds"
                    value={order.productIds.join(', ')}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="orderDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control
                    type="date"
                    name="orderDate"
                    value={order.orderDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Place Order
            </Button>
        </Form>
    );
}

export default PlaceOrderForm;
