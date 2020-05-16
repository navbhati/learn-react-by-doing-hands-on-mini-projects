import React from 'react';
import MemeHeader from './MemeHeader'

export default class MemeGenerator extends React.Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
        }

    }

    componentDidMount() {

        const url = 'https://api.imgflip.com/get_memes'
        fetch(url)
            .then(r => r.json())
            .then(r => {
                const { memes } = r.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit= (event) => {
        console.log('Gen button clicked');

        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(this.state.allMemeImgs.length);
        console.log(`Random img index ${randomNum}`);


        const url = this.state.allMemeImgs[randomNum].url
        console.log(url);

        this.setState({
            randomImg: url
        })
        event.preventDefault()
    }

    render() {
        return (
            <div style={{ marginBottom: '2em', padding: '2em', backgroundColor: '#dfe0e1', border: '20px' }}>
                <MemeHeader />
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input type="text"
                        name='topText'
                        placeholder='Top Text'
                        value={this.state.topText}
                        onChange={this.handleChange} />
                    <input type="text"
                        name='bottomText'
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                        onChange={this.handleChange} />
                    <button>Gen</button>
                </form>

                <div className='meme'>
                    <img src={this.state.randomImg} alt="Meme" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}