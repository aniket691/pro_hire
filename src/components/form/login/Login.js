// src/LoginForm.js
import React from 'react';
import '../login/Login.css';

function LoginForm() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <h2 className="text-primary mb-4">Welcome back!</h2>
                    <h1 className="h4 mb-3">Member Login</h1>
                    <p className="mb-4">Access to all features. No credit card required.</p>
                    <button className="btn btn-primary btn-block mb-3">
                        <i className="fab fa-google mr-2"></i> Sign in with Google
                    </button>
                    <div className="separator mb-3">
                        <hr className="flex-fill" />
                        <span className="mx-2 text-muted">Or continue with</span>
                        <hr className="flex-fill" />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Username or Email address *</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="email" placeholder="Steven Job" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="password" placeholder="**********" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                    <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                            </div>
                            <div className="col text-right">
                                <a href="#" className="text-primary">Forgot Password</a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="text-center mt-4">
                        <span className="text-muted">Don't have an Account? </span>
                        <a href="#" className="text-primary">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
