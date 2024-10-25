import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div>
                <h1>Contact</h1>
                {/* { 5 - Nested routes} */}
                <p>
                    <Link to={"/contact/1"}>Form do contato 1</Link>
                </p>
                <p>
                    <Link to={"/contact/2"}>Form do contato 2</Link>
                </p>
                <p>
                    <Link to={"/contact/3"}>Form do contato 3</Link>
                </p>
            </div>
        </>
    );
};


export default Contact;