import React from 'react';
import Dispatcher from '../dispatchers/app.dispatcher.js'

class Photo extends React.Component {
    static like (event) {
        AppDispatcher.dispatch({
            eventName: 'like'
        });
    }

    render() {
        return <div>
            <img alt={this.props.caption} src={this.props.src}/>
            <button onClick="{this.like}">Like this</button>
        </div>
    }
}

export default Photo;