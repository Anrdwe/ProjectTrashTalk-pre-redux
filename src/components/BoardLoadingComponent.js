import React from 'react';

function BoardLoadingComponent(props) {
    return (
        <div className= {`preloader-wrapper big active ${props.className}`}>
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div> 
        </div>
    )
}

export default BoardLoadingComponent