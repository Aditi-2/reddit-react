import React, { Component } from 'react';
import { Field, Form } from 'react-redux-form';
import './Login.css';

class Login extends Component {
    // login form with username and password
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-4">
                            <div className="card form-card">
                                <Form
                                    model="credentials"
                                    onSubmit={this.props.checkCredentials}
                                    className="login-form"
                                >
                                    <Field model="credentials.username" className="form-group">
                                        <label>Username: </label>
                                        <input className="form-control" type="text" />
                                    </Field>
                                    <Field model="credentials.password" className="form-group">
                                        <label>Password: </label>
                                        <input className="form-control" type="text" />
                                    </Field>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login