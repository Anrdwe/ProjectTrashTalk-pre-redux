import React from 'react'
import PostComponent from '../components/PostComponent'
import Axios from 'axios'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "",
            imageUrl: "",
            loading: false,
            errors: {}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    //NOT DONE
    //TODO: header for authorization 
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
                console.log(res)
                postId = res.data.id
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
    }

    render() {
        return(
            <PostComponent handleChange={this.handleChange} state={this.state} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default Post