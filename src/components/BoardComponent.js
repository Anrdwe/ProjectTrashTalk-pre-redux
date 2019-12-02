import React from "react"
import "materialize-css"




function BoardComponent(props) {
    return(
    <div className="row">
        <div className="col s12 m12">
            <div className="card">
                <div className="card-image">
                    <img src={props.imageUrl} className="boardImage" alt="post Image"/>
                    <div className="card-content">
                        <p className="boardNameOrg">{props.username}, {props.organization}</p>
                        <p className="boardData">{props.date}</p>
                        <p className="boardMessage">{props.message}</p>
                        <p>Contact: {props.email}</p>
                    </div>
                </div>
                <div className="card-action">
                    <a href="#">Comment</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoardComponent