import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';



function App() {

    return (
        <div>
            <NavigationBar />
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={Home} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App