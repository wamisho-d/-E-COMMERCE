import React from 'react';
import ListProducts from '../components/Product/ListProducts';
import CreateProductForm from '../components/Product/CreateProductForm';
import ProductDetails from '../components/Product/ProductDetails';
import UpdateProductForm from '../components/Product/UpdateProductForm';
import DeleteProduct from '../components/Product/DeleteProduct';
import ProductConfirmationModal from '../components/Product/ProductConfirmationModal';

function ProductPage() {
    return (
        <div>
            <h1>Product Management</h1>
            <ListProducts />
            <CreateProductForm />
            <ProductDetails productId="456" />
            <UpdateProductForm productId="456" />
            <DeleteProduct productId="456" onDelete={() => {}} />
            <ProductConfirmationModal show={false} onHide={() => {}} onConfirm={() => {}} message="Are you sure?" />
        </div>
    );
}

export default ProductPage;
