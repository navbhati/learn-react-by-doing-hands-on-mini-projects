import React from 'react'
import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'
// import MemeGenerator from './components/MemeGenerator/MemeGenerator'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: true
        }
    }

    render() {
        return (
            <div style={{ display: this.state.loggedIn ? 'block' : 'none' }}>
                <Header />
                <MainContent />
                <Footer />
            </div >
        )
    }
}