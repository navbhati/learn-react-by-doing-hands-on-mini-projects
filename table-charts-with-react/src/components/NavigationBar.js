import React from 'react';
import { Logo } from '../logo.svg';
export const NavigationBar = () => (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src={Logo} width="30" height="30" class="d-inline-block align-top mr-2 ml-2" alt="" />COVID-19 <small>Tracker</small></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home  <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/charts">Charts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/news">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>

                <li class="nav-item">
                    <a type="button" class="btn btn-danger ml-2 text-white" href="#">Buy me a coffee!</a>
                </li>
            </ul>
        </div>
    </nav>
)