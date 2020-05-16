import React from 'react';

// Basically a Jumbotron
export const Footer = () => (
    <div class="jumbotron jumbotron-fluid bg-warning mb-0 pb-1 pt-3" style={{bottom:0, width:'100%'}}>
        <div class="container">
            <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis.</p>
            <a href="#" type="button" class="btn btn-danger">Buy me a Coffee!</a>
            <hr />
            <p class="text-centre">&copy; {year()} All rights Reserved. By <a href="https://naveenbhati.com" target="blank">Naveen Bhati</a></p>
        </div>
    </div>
)

const year = () => {
    let y = new Date()
    return y.getFullYear()
}