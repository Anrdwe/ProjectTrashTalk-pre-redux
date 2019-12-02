import React from 'react'
import "materialize-css"
import loginIcon from '../styles/loginIcon.svg'
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent'

function SignupComponent(props) {
    return(
        <div className="post-form">       
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <img src={loginIcon} alt='login' className='loginIcon'/>
                    <div className='loginTitle'>Sign Up</div>
                    <div className="input-field col s12">
                        <input name="email" value={props.state.email} onChange={props.handleChange} id="email" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.email && <p>{props.state.errors.email}</p>}</span>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="username" value={props.state.username} onChange={props.handleChange} id="username" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.username && <p>{props.state.errors.username}</p>}</span>
                        <label for="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="password" value={props.state.password} onChange={props.handleChange} id="password" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.password && <p>{props.state.errors.password}</p>}</span>
                        <label for="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="confirmPassword" value={props.state.confirmPassword} onChange={props.handleChange} id="confirmPassword" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.confirmPassword && <p>{props.state.errors.confirmPassword}</p>}</span>
                        <label for="confirmPassword">Confirm Password</label>
                    </div>
                </div>
            </form>
            </div>
            {props.state.errors.general && <p className="wrongCredentialsError">{props.state.errors.general}</p>}
            {props.state.loading ? <LoadingComponent className="loginLoading"/> :
                <a className="waves-effect waves-light btn submit-color loginButton" type='submit' onClick={props.handleSubmit} href="/board">Sign Up</a>}
            <div className="signupTextUnderLoginButton">Already have an account?Login <Link to='/login'>here</Link></div>
        </div>
    )
}

export default SignupComponent