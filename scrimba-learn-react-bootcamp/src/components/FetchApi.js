import React from 'react';

export default class FetchApi extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            user: {}
        }
    }

    componentDidMount() {
        const url = 'https://randomuser.me/api'

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0]);
                this.setState({
                    user: data.results[0],
                    isLoading: false
                })
            })


    }

    render() {

        return (
            <div style={{ marginBottom: '2em', padding: '.2em 2em', backgroundColor: '#f59d9d' }}>
                <h3>Fetching data from an API</h3>
                {this.state.isLoading ? <h4>Loading...</h4> : <h4>{this.state.user.email}</h4>}
            </div>
        )
    }
}