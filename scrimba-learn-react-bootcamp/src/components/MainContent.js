import React from 'react'
import TodoItem from './TodoItem';
import JokesList from '../testdata/JokesList';
import ProductList from '../testdata/ProductsList'
import Product from './Product'
import TodoList from '../testdata/TodoList';
import EventHandling from './EventsHandling'
import ChangeStates from './ChangeStates';
import { transformFromAst } from '@babel/core';
import LogInOut from './LogInOut';
import FetchApi from './FetchApi';
import Forms from './Forms/FormsComponent';
import MemeGenerator from './MemeGenerator/MemeGenerator'

export default class MainContent extends React.Component {

    constructor() {
        super()
        this.state = {
            TodoItemData: TodoList,
            isLoading: true
        }

        this.handleTodoItemChange = this.handleTodoItemChange.bind(this)
    }
    style() {
        return {}
    }

    timeOfDay() {

        const date = new Date()
        const hours = date.getHours();

        let timeOfDay;
        if (hours < 12) {
            timeOfDay = 'Good Morning!'
            this.style().color = '#66e8cc'
        } else if (hours >= 12 && hours <= 17) {
            timeOfDay = 'Good Afternoon!'
            this.style().color = '#f7d559'
        } else {
            timeOfDay = 'Good Night!'
            this.style().color = '#829afa'
        }

        return timeOfDay
    }

    handleTodoItemChange(id) {
        this.setState((prevState) => {
            const updatedtodos = prevState.TodoItemData.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                TodoItemData: updatedtodos
            }
        })
        // console.log(`Changed ${id}`)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {

        const ProductsComp = ProductList.map(p => <Product key={p.id} product={p} />)
        const TodoItemComp = this.state.TodoItemData.map(i => <TodoItem key={i.id} item={i} handleChange={this.handleTodoItemChange} />)

        return (
            <div className="mainContent">
                <h1 style={this.style()}>{`${this.timeOfDay()}`} Naveen Bhati</h1>
                <p>Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, dolor? Dignissimos odit consequatur harum alias. <br /> Itaque quae iusto commodi autem rerum assumenda eveniet error! Labore sint est tempore suscipit quis?</p>

                <MemeGenerator />
                
                <LogInOut />

                <FetchApi />

                <Forms />

                <div style={{ display: 'flex' }}>
                    {this.state.isLoading ? <h3>Loading...</h3> :
                        <EventHandling />}
                    <ChangeStates />
                </div>


                <div className='todo-list'>{TodoItemComp}</div>

                {/*             <div>
                <Joke jokes={JokesList} />
            </div>
            <div>
                {ProductsComp}
            </div> */}

            </div>
        )
    }
}