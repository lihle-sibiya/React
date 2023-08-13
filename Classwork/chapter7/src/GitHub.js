import React, { Component } from 'react';
import axios from 'axios'; // npm install axios - in order to call our API endpoint
//7.2 Getting Data
// class GitHub extends Component {
//     constructor() {
//         super();
//         this.getGitHubData('greg'); //method that will return GitHub data from our API endpoint
//     }


//7.3 Life Cycle componentDidMount
// class GitHub extends Component {
//     constructor(){
//     super();
//     }
//     componentDidMount(){
//     this.getGitHubData('greg');
//     }


//7.4 Showing a Loader Icon
class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                //7.4 
                this.setState({
                    isLoading: false,
                })
                console.log(res.data.items);//get items array in Jason
            });
    }
    render() {
        return (
        // <div>
        //     <h2>Chapter 7</h2>
        // </div>

        //7.4
        <div>
        { this.state.isLoading &&
        <h4>Getting data...</h4>
        }
        </div>
        );
    }
}
export default GitHub;