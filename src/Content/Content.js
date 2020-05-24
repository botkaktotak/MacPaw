import React ,{Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.scss"
import Search from '../Buttons/ButtonSearch';
import ShowJoke from '../Scripts/ShowJoke';
import FavShowJoke from '../Scripts/FavShowJoke';

class  Content extends Component {

        state = {
             data:[],
        }
    
    
componentDidMount(){
    console.log(222)
    fetch('https://api.chucknorris.io/jokes/random')
    .then((resp) =>  resp.json())
    .then((res)=> {
           
        this.setState({data: res})
    })
}

    getData=()=> {
        fetch('https://api.chucknorris.io/jokes/random')
        .then((resp) =>  resp.json())
        .then((res)=> {
               
            this.setState({data: res})
        })
    }
     
    render(){

        const {data}=this.state
        console.log(data)

        return (
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h3>MSI 2020</h3>
                        <h1>Hey!</h1>
                        <h2>Let’s try to find a joke for you:</h2>
                    </div>
                    <div className="main">
                        <div className="radio_btn"></div>
                        <div className="radio_checked"></div>
                        <div className="random">Random</div> 

                        <div className="radio_btn2"></div>
                        <div className="radio_checked2"></div>
                        <div className="from_cat">From categories</div>  

                        <div className="radio_btn3"></div>
                        <div className="radio_checked3"></div>
                        <div className="search">Search</div>
                        
                        <Search getDdddata={this.getData}/>
            
                    </div>
                    <div className="jokes">
                    <ShowJoke data={data.value}/>
                    </div>
                </div>
                <div className="favourite">
                    <FavShowJoke data={data.value} />
                </div>
              </div>
              
            
        )
    }
}


export default Content;






 