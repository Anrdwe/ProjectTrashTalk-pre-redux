import React from 'react';
import "materialize-css";
import loginIcon from '../styles/loginIcon.svg';
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

function LoginComponent(props) {
    return(
        <div className="post-form">       
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <img src={loginIcon} alt='login' className='loginIcon'/>
                    <div className='loginTitle'>Login</div>
                    <div className="input-field col s12">
                        <input name="email" value={props.state.email} onChange={props.handleChange} id="email" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.email && <p>{props.state.errors.email}</p>}</span>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="password" value={props.state.password} onChange={props.handleChange} id="password" type="text" className="validate"/>
                        <span className='helper-text'>{props.state.errors.password && <p>{props.state.errors.password}</p>}</span>
                        <label for="password">Password</label>
                    </div>
                </div>
            </form>
            </div>
            {props.state.errors.general && <p className="wrongCredentialsError">{props.state.errors.general}</p>}
            {props.state.loading ? <LoadingComponent className="loginLoading"/> :
                <a className="waves-effect waves-light btn submit-color loginButton" type='submit' onClick={props.handleSubmit} href="/board">Login</a>}
            <div className="signupTextUnderLoginButton">Sign up <Link to='/signup'>here</Link></div>
        </div>
    )
}

export default LoginComponent