import ReactDOM from 'react-dom';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Layout from './Layout/layout';
import SeeAll from './SeeAll/layoutseeall';
import Home from './Home/Home';
import Header from './Header/Header';

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }
    componentDidMount(){
        fetch("http://localhost:3002/data")
        .then(resp => {
            return resp.json()
        })
        .then((data => {
            this.setState({posts:data})
        }));
    }
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/seeall' render={(props) => <SeeAll data={this.state.posts}/>}/>
                        <Route path='/layout' render={(props) => <Layout data={this.state.posts}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
    
}

ReactDOM.render(<Data />, document.getElementById('root'));