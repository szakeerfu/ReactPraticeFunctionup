import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
 

    useEffect(() => {
        dispatch(fetchProducts());
    
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">

            { products&&products.map((product,index )=> (
                <div className="card" key={index}>
                <img src={product.Poster} alt="Poster" srcset="" />
                <h4>{product.Title}</h4>
                <h5>{product.Year}</h5>
                <button onClick={() => handleAdd(product)} className="btn">
                    Add To favorite 
                </button>
            </div>

            ))}

        </div>
    );
};

export default Products;
