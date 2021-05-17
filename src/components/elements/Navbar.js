import React from 'react';

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="abc navbar shadow fixed-top bg-primary navbar-dark  navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Contact Book
                    </Link>
                    <div>
                        <Link to="/contact/add" className="btn btn-primary">
                        Create Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
