import React from 'react'
import "materialize-css"
import LoadingComponent from './LoadingComponent'

function PostComponent(props) {
    return(
        <div className="post-form">       
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea name="message" value={props.state.message} onChange={props.handleChange} id="message" className="materialize-textarea validate"></textarea>
                        <label for="message">Message</label>
                    </div>
                    <input type="file" id='imageInput' onChange={props.handleImageChange}/>
                    <label for="imageInput">Upload Image(optional)</label>
                </div>
            </form>
            </div>
            {props.state.loading ? <LoadingComponent className="loginLoading"/> :
            <a className="waves-effect waves-light btn submit-color postButton" href="/board" onClick={props.handleSubmit}>Submit</a>}
        </div>
    )
}

export default PostComponent