import React from 'react';

export default class TodoItem extends React.Component {

    completedStyle() {
        return {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        }
    }
    render() {
        return (
            <div className='todo-item'>
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p style={this.props.item.completed ? this.completedStyle() : null}>{this.props.item.text}</p>

            </div>
        )
    }
}
