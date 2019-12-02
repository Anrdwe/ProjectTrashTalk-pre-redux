import React from 'react'
import PostComponent from '../components/PostComponent'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            username: "",
            org: "",
            message: "",
            imageUrl: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(p){
        console.log(p);
        fetch(`http://localhost:4000/posts/add?email=${p.state.email}&username=${p.state.username}&org=${p.state.org}&message=${p.state.message}`)
        .catch(err => console.error(err))
    }

    render() {
        return(
            <PostComponent handleChange={this.handleChange} state={this.state} handleSubmit={()=>{this.handleSubmit(this)}}/>
        )
    }
}

export default Post