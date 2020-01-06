import React from 'react'
import SignupComponent from '../components/SignupComponent'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Redirect } from 'react-router-dom'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
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
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        //userData post request to the '/login'
        Axios.post('/signup', userData)
            .then(res => {
                //login successful
                console.log(res)
                //the token is stored in the localStorage, so if someone refreshes the page or closes it and opens it again,
                //we still have access the token and they are still logged in.
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
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
                    return <SignupComponent handleChange={this.handleChange} state={this.state} 
                        handleSubmit={this.handleSubmit} errors={this.errors} 
                        loading={this.loading}/>
                }
            }
            return <Redirect to='/board'/>
        }
        return (
            checkAuth()
        )
    }
}

export default Login