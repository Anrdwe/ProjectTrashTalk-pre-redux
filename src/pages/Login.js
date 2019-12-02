import React from 'react'
import LoginComponent from '../components/LoginComponent'
import Axios from 'axios'

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
                //token saved to local storage
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
        return (
            <LoginComponent handleChange={this.handleChange} state={this.state} 
                handleSubmit={this.handleSubmit} errors={this.errors} 
                loading={this.loading}/>
        )
    }
}

export default Login