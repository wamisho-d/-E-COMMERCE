import React from 'react';
import { Button } from 'react-bootstrap';

function DeleteProduct({ productId, onDelete }) {
    const handleDelete = () => {
        
        onDelete(productId);
    };

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete Product
        </Button>
    );
}

export default DeleteProduct;
