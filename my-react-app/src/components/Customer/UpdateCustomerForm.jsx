import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function UpdateCustomerForm({ customerId }) {
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        
    }, [customerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="customerName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="customerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="customerPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Customer
            </Button>
        </Form>
    );
}

export default UpdateCustomerForm;
