import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color:'white'
            }}
        >
            <span className="logo"><span className='nethed'>NETflix </span> </span>
            <input
            placeholder='search movie'
            
             style={{backgroundColor:"white" ,  width:"50vw", padding:"12px",
              border:"none",
              fontSize:"20px",
              borderRadius:"22px"
              
              }}/>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                     Favorite Movie
                </Link>
                <span className="cartCount">Cart items:{items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
