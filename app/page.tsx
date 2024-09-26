import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Calculator from './calculator/page';



const Home = () => {
    return (
        
        //     <h1>welcome to the Home page</h1>
        //     <Link href="/components">View Todos</Link><br/>
        //     <Link href="/count">View Counter</Link>
        //     <Link href="/search">Products</Link>
        //     </div>
        <div className="container">
            <h1>Welcome to the Home page</h1>
            <Link href="/list">
            <button className="btn btn-primary">View  Todos</button>
            </Link>
            <br/><br/>
            <Link href="/contact">
            <button className="btn btn-secondary">Contact Us</button>
            </Link><br/><br/>
            <Link href="/about">
            <button className="btn btn-info">About Us</button>
            </Link>
            <Link href="/calculator">Calculator</Link>
        </div>
    );
    
};
export default Home;