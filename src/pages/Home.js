import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the  <span>NETflix Movie List</span></h2>
            <section>
                <h3>Movies</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
