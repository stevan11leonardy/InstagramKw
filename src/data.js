import React from 'react';
import LayoutIg from './layout';

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        };
        
    }

    componentDidMount(){
        fetch("http://localhost:3002/data")
        .then(resp => resp.json())
        .then((data => {
            let posts = data.map((element,key) => {
                return (
                    <div key={key}>
                        {element.username}
                        {element.status}
                        {element.alt}
                        {element.src}
                    </div>
                )
            })
            this.setState({posts:posts})
        }))
    }
    render(){
        return(
            <div>
                <LayoutIg data={this.state.posts}/>
                {this.state.posts}
            </div>
        )
    }
}

export default Data;