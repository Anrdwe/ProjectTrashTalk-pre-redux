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
                        <span className='helper-text'>{props.state.errors.message && <p>{props.state.errors.message}</p>}</span>
                        <label htmlFor="message">Message</label>
                    </div>
                    <input type="file" id='imageInput' onChange={props.handleImageChange}/>
                    <label htmlFor="imageInput">Upload Image(optional)(does not work right now)</label>
                </div>
            </form>
            </div>
            <span className='helper-text'>{props.state.errors.error && <p className='pleaseLoginError'>Please login to post</p>}</span>
            {props.state.loading ? <LoadingComponent className="loginLoading"/> :
            <button className="waves-effect waves-light btn submit-color postButton" href="/board" onClick={props.handleSubmit}>Submit</button>}
        </div>
    )
}

export default PostComponent