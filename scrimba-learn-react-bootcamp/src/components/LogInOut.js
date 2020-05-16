import React from 'react';

export default class LogInOut extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            buttonText: 'Log In'
        }

        this.handelClick = this.handelClick.bind(this)
    }

    handelClick() {
        console.log('login clicked');
        this.setState((prevState) => {
            return {
                buttonText: prevState.isLoggedIn ? 'Log In' : 'Log Out',
                isLoggedIn: !prevState.isLoggedIn
            }

        })
    }

    render() {
        return (
            <div style={{ marginBottom: '2em', padding: '2em', backgroundColor: '#dfe0e1', border: '20px' }}>

                {this.state.isLoggedIn ? <h2>You are logged in. Click the button below to log out.</h2> : <h2>Please log in to proceed.</h2>}
                <button onClick={this.handelClick} style={{ marginBottom: '2em' }}>{this.state.buttonText}</button>
                
            </div>
        )
    }
}