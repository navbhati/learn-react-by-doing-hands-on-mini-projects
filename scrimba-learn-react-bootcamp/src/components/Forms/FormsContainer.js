import React from 'react';
import FormsComponent from './FormsComponent';

export default class Forms extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isChecked: false,
            gender: '',
            favColor: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value, type, checked } = e.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit() {
        console.log('submitted ')
    }

    render() {
        return (
            <FormsComponent {...this.handleChange} {...this.handleSubmit} {...this.state} />
        )
    }
}