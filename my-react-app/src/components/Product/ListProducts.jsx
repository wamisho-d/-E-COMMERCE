import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
  
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ListProducts;
