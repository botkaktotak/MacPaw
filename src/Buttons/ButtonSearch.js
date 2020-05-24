import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
           inputSearch:'',  
        }
    }

    submit() {
        console.log("all data", this.state);
        
    }

    render() {
        const {getDdddata}=this.props;
        return (
            <div>
                
                <input className="input"
                    onChange={(e) => {this.setState({inputSearch:e.target.value})}} 
                        name="search_input" value={this.state.inputSearch} 
                        type="text"  placeholder="Free text search"/>
                <button className="button" 
                onClick={getDdddata}
                type="button">Get a joke</button>
            </div>
        )
    }
}
