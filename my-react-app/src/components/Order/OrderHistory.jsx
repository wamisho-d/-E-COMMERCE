import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function OrderHistory({ customerId }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
    }, [customerId]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Products</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.productIds.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default OrderHistory;
