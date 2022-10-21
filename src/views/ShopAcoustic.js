import Concert from "../components/ConcertCard"
import React, { useState, useEffect } from 'react';


export default function Acoustic() {



    return (
        <>
            <div className='container'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light my-4 navbar-shop">

                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="/shop">Electric<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-acoustic">Acoustics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-ukulele">Ukulele</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-accessories">Accessories</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <h1 className="my-5 text-center">
                Acoustic Guitars Loading
            </h1>
     
            <Concert />

</>
    )
}