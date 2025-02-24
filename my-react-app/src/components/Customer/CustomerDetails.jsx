import React, { useState, useEffect } from 'react';

function CustomerDetails({ customerId }) {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
    }, [customerId]);

    if (!customer) return <div>Loading...</div>;

    return (
        <div>
            <h2>{customer.name}</h2>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
        </div>
    );
}

export default CustomerDetails;
