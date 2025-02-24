import React, { useState, useEffect } from 'react';

function CalculateOrderTotal({ orderId }) {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
     
    }, [orderId]);

    return (
        <div>
            <h3>Order Total: ${totalPrice}</h3>
        </div>
    );
}

export default CalculateOrderTotal;
