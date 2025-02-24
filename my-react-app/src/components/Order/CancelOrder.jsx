import React from 'react';
import { Button } from 'react-bootstrap';

function CancelOrder({ orderId, onCancel }) {
    const handleCancel = () => {
    
        onCancel(orderId);
    };

    return (
        <Button variant="danger" onClick={handleCancel}>
            Cancel Order
        </Button>
    );
}

export default CancelOrder;
