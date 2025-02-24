import React from 'react';
import PlaceOrderForm from '../components/Order/PlaceOrderForm';
import OrderHistory from '../components/Order/OrderHistory';
import CancelOrder from '../components/Order/CancelOrder';
import CalculateOrderTotal from '../components/Order/CalculateOrderTotal';

function OrderPage() {
    return (
        <div>
            <h1>Order Management</h1>
            <PlaceOrderForm />
            <OrderHistory customerId="789" />
            <CancelOrder orderId="101112" onCancel={() => {}} />
            <CalculateOrderTotal orderId="101112" />
        </div>
    );
}

export default OrderPage;
