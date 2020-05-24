import React, { Component } from 'react';

export default class FavShowJoke extends Component {
    render() {

        const {data}=this.props
        
        return (
            <div>
                    <div className="favtxt">Favourite</div>
                    <div className="favourite_jokes">
                    <div className="fav_message"><i class='far fa-comment' id="fav_message"></i></div>
                    <div className="fav_link">
                        <p>ID: <a href="#">XNaAxUduSw6zANDaIEab7A</a></p> 
                    </div>
                    <div className="fav_joke_itself">{data}/></div>
                    <div className="fav_heart"><i class='fas fa-heart' id="fav_heart"></i></div>
                    <div className="fav_info">Last update: 1923 hours ago</div>
                </div>


            </div>
        )
    }
}
