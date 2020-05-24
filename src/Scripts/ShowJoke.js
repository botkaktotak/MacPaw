import React, { Component } from 'react';


export default class ShowJoke extends Component {
 

    render() {
        const {data}=this.props
        return (
            
            <div>
                <div className="message"><i class='far fa-comment' id="message"></i></div>
                        <div className="link">
                           <p>ID: <a href="#">XNaAxUduSw6zANDaIEab7A</a></p> 
                        </div>
                        <div className="joke_itself">{data}</div>
                        <div className="heart"><i class='far fa-heart' id="heart"></i></div>
                        <div className="category"></div>
                        <div className="category_name">celebrity</div>
                        <div className="info">Last update: 1923 hours ago</div>
            </div>
        )
    }
}