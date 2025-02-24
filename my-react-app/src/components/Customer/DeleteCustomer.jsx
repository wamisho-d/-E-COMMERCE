import React from 'react';
import { Button } from 'react-bootstrap';

function DeleteCustomer({ customerId, onDelete }) {
    const handleDelete = () => {
        // Delete customer from backend using customerId
        onDelete(customerId);
    };

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete Customer
        </Button>
    );
}

export default DeleteCustomer;
