import React, { useState, useEffect } from 'react';

function ProductDetails({ productId }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
      
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
        </div>
    );
}

export default ProductDetails;
