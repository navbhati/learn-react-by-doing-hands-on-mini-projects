import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NewStories } from './pages/NewStories';



function App() {

    return (
        <div>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={NewStories} />
                        <Route component={NewStories} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App