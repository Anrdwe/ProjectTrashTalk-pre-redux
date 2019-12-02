import React from 'react'
import "materialize-css"


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
                </div>
            </form>
            </div>
            <a className="waves-effect waves-light btn submit-color postButton" href="/board" onClick={props.handleSubmit}>Submit</a>
        </div>
    )
}

export default PostComponent