import React from 'react';
import CreateCustomerForm from '../components/Customer/CreateCustomerForm';
import CustomerDetails from '../components/Customer/CustomerDetails';
import UpdateCustomerForm from '../components/Customer/UpdateCustomerForm';
import DeleteCustomer from '../components/Customer/DeleteCustomer';

function CustomerPage() {
    return (
        <div>
            <h1>Customer Management</h1>
            <CreateCustomerForm />
            <CustomerDetails customerId="123" />
            <UpdateCustomerForm customerId="123" />
            <DeleteCustomer customerId="123" onDelete={() => {}} />
        </div>
    );
}

export default CustomerPage;
