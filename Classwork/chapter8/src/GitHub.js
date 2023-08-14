import React, { Component } from 'react';
import axios from 'axios'; // npm install axios - in order to call our API endpoint
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';
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
            //7.5 Implementing a GitHub Results Display Page
            data: [],
            //7.6 Adding an Input to GitHub Results Display Page

            //isLoading: true
            //7.6
            searchTerm: '',
            isLoading: false
        }; //7.6
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //7.6 remove this component
   componentDidMount(){
    //this.getGitHubData('greg');
    }

   

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                //7.4 
                this.setState({
                    isLoading: false,
                    // 7.5
                    data: res.data.items
                })
                console.log(res.data.items);//get items array in Jason
            });
    }
    render() {
        //7.5
        //use map to repeat the media object for each user data we get from GitHub
        const listUsers = this.state.data.map((user) =>
            //add Javascript JSX expressions wrapped in {} inside the template.
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            // <div>
            //     <h2>Chapter 7</h2>
            // </div>

            //7.4
            // <div>
            //     {this.state.isLoading &&
            //         //<h4>Getting data...</h4>
            //         <ReactLoading type="spinningBubbles" color="#444" />
            //     }
            // </div>

            //7.5
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub Users Results</h3>
                {this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
     //7.6
     handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    //7.6
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
        }
}
export default GitHub;