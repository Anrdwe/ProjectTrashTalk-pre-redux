import React from 'react'
import PostComponent from '../components/PostComponent'
import Axios from 'axios'
import { timingSafeEqual } from 'crypto'

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
    handleImageChange(event) {
        const image = event.target.files[0]
        console.log(image)
        //the API for an image post request takes formdata as input
        const formData = new FormData()
        formData.append('image', image, image.name)
        this.setState({
            imageInput: formData
        })
    }

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
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
            .then(() => {
                if (this.state.imageInput != '') {  
                    Axios.post(`/post/${postId}/image`, this.state.imageInput)
                        .then(res => {
                        console.log(res)
                    })
                }
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    render() {
        return(
            <PostComponent handleChange={this.handleChange} state={this.state} handleSubmit={this.handleSubmit} handleImageChange={this.handleImageChange}/>
        )
    }
}

export default Post