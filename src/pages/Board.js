import React from 'react'
import '../styles/Style.css'
import BoardComponent from "../components/BoardComponent"
import Axios from 'axios'
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import BoardLoadingComponent from '../components/BoardLoadingComponent'

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
           posts: [],
           loading: true
        }
    }

    componentDidMount() {
        //only '/posts' because in the package.json, a proxy was set to the api url 
        Axios.get('/posts')
            //the data from the response comes as a json object
            .then(response => this.setState({
                posts: response.data,
                loading: false
            }))
            .catch(err => console.error(err))
    }
    //function to pass props to the BoardComponent
    renderBoard ({postId, email, username, organization,  message, date, imageUrl}) {
        return (
        <div className='board-box'>
            <BoardComponent postId={postId} email={email} username={username} organization={organization} message={message} date={dayjs(date).fromNow()} imageUrl={imageUrl}/>
        </div>
        )
    }
    
    render() {
        //dayjs used to get the time when the post was posted till now
        dayjs.extend(relativeTime)
        const { posts } = this.state;
        //map all posts in the state to renderBoard
        let postsDisplay = this.state.posts ? posts.map(this.renderBoard) : <p>loading...</p>
        return(
            <div>
                {this.state.loading ?  <BoardLoadingComponent className="boardLoading"/> : postsDisplay}
            </div>
        )
    }
}

export default Board


//spare loading <div class="progress"> <div class="indeterminate"></div></div>