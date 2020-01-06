import React from 'react'
import LoginComponent from '../components/LoginComponent'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            loading: false,
            errors: {}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        //send a request to the server. Show errors or if successful redirect to board page
        this.setState({
            loading: true
        })
        //userData object made to be sent to the server
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        //userData post request to the '/login'
        Axios.post('/login', userData)
            .then(res => {
                //login successful
                console.log(res)
                // if (localStorage.FBIdToken) {
                //     localStorage.deleteItem('FBIdToken')
                // }
                const FBIdToken = `Bearer ${res.data.token}`
                //authentication token saved to local storage
                localStorage.setItem('FBIdToken', FBIdToken)
                //authnetication token added to the header as the default
                Axios.defaults.headers.common['Authorization'] = FBIdToken
                this.setState({
                    loading: false
                })
                //push is a method to go to a path
                this.props.history.push('/board')
            })
            .catch(err => {
                //we want to keep track of the errors to return to the user interface
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        const checkAuth = () => {
            const token = localStorage.FBIdToken;
            if(token) {
                //we have token, we want to decode it with jwt-decode, inside there is a expiration date
                //the exp value is in seconds and can be passed into date() to get the exact time the token expires
                const decodedToken = jwtDecode(token);
                if(decodedToken.exp * 1000 > Date.now()) {
                    //if the token is not expired, we redirect them to the board page
                    return <Redirect to='/board'/>
                } else {
                    return <LoginComponent handleChange={this.handleChange} state={this.state} 
                    handleSubmit={this.handleSubmit} errors={this.errors} 
                    loading={this.loading}/>
                }
            }
            return <LoginComponent handleChange={this.handleChange} state={this.state} 
                handleSubmit={this.handleSubmit} errors={this.errors} 
                loading={this.loading}/>
        }
        return (
            checkAuth()
        )
    }
}

export default Login