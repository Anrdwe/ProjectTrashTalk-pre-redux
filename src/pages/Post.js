import React from 'react'
import PostComponent from '../components/PostComponent'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Redirect } from 'react-router-dom'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "",
            loading: false,
            imageInput: "",
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
    }

    //handles the state change for imageInput. Adds the inputed image as formData.
    handleImageChange(event) {
        //PostComponent.js only has an input for 1 file. The inputed image is at index 0
        const image = event.target.files[0]
        console.log(image)
        //the image post request takes formdata as input
        const formData = new FormData()
        formData.append('image', image, image.name)
        this.setState({
            imageInput: formData
        })
    }
    //general handleChange
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            loading: true
        })
        //data to send to '/post' 
        const postData = {
            message: this.state.message
        }
        let postId
        Axios.post('/post', postData)
            .then(res => {
                postId = res.data.postId
                console.log(postId)
                console.log(res.data.message)
                this.setState({
                    loading: false
                })
                //redirect the user to '/board' after successful '/post' post request
                this.props.history.push('/board')
            })   
            .then(() => {
                //If no image is submitted, the api has a default image
                if (this.state.imageInput !== '') {  
                    //*** this post request is not working ***** Maybe i should async it like this
                    Axios.post(`/post/${postId}/image`, this.state.imageInput)
                        .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
                console.log(err)
            })
    }

    

    render() {
        const checkAuth = () => {
            const token = localStorage.FBIdToken;
            if(token) {
                //we have token, we want to decode it with jwt-decode, inside there is a expiration date
                //the exp value is in seconds and can be passed into date() to get the exact time the token expires
                const decodedToken = jwtDecode(token);
                if(decodedToken.exp * 1000 < Date.now()) {
                    //if the token is expired, we redirect them to the login page
                    return <Redirect to='/login'/>
                } else {
                    return <PostComponent handleChange={this.handleChange} state={this.state} handleSubmit={this.handleSubmit} handleImageChange={this.handleImageChange}/>
                }
            }
            return <Redirect to='/login'/>
        }
        return(
            checkAuth()
        )
    }
}

export default Post