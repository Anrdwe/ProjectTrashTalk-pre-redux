import React from 'react'
import "materialize-css"


function PostComponent(props) {
    return(
        <div className="post-form">       
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input name="email" value={props.state.email} onChange={props.handleChange} id="email" type="text" className="validate" />
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="username" value={props.state.username} onChange={props.handleChange} id="username" type="text" className="validate" />
                        <label for="username">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="org" value={props.state.org} onChange={props.handleChange} id="org" type="text" className="validate" />
                        <label for="org">Organization</label>
                    </div>
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