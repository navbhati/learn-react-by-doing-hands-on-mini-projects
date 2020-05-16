import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { About } from './components/About'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { NoMatch } from './components/NoMatch'
import { Container } from 'react-bootstrap'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

function App() {

    return (
        <React.Fragment>
            <NavigationBar />
            <Jumbotron />
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Container>
        </React.Fragment>
    )
}

export default App