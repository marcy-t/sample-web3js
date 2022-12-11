import React from "react";
import LikeButton from "./LikeButton";

class App extends React.Component{
    /**/
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.getElementById("counter").addEventListener('click', () => this.setState({count: this.state.count + 1}))
    }

    componentDidUpdate() {
        if(this.state.count >= 5){
            this.setState({
                count: 0
            })
        }
    }

    componentWillUnmount(){
        document.getElementById('counter').removeEventListener(
            'click', 
            ()=>this.setState(
                {
                    count: this.state.count + 1
                }
            )
        )
    }

    render() {
        return (
            <div>
                <LikeButton count={this.state.count}/>
            </div>
        )
    }
}
export default App