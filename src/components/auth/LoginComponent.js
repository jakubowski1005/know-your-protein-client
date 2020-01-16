import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Segment, Form, Loader, Header, Icon, Message } from 'semantic-ui-react'

export class LoginComponent extends Component {
        constructor() {
        super()

        this.state = {
            usernameOrEmail: '',
            password: '',
            hasFailed: false,
            message: '',
            loading: false
        }

        this.loginClicked = this.loginClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    loginClicked() {
        this.setState({loading: true})

        if(this.state.usernameOrEmail === '' && this.state.password === '') {
            this.setState({message: 'Fields cannot be empty', hasFailed: true, loading: false})
            return
        }

        console.log(`User {username: ${this.state.usernameOrEmail} ,password: ${this.state.password} has been logged.}`)

        // AuthService.loginUser(this.state.usernameOrEmail, this.state.password)
        //     .then( (res) => {
        //         AuthService.registerSuccessfulLoginForJwt(this.state.usernameOrEmail, res.data.accessToken);
        //         window.location.assign('/');
        //     })
        //     .catch( (err) => {
        //         this.setState({hasFailed: true, message: 'Invalid credentials', loading: false})
        //     })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <>
                <Grid centered style={{height: '80vh'}}>
                    <Segment textAlign='center' style={{backgroundColor: '#e6e6e6', maxWidth: '40vw', width: '40vw', maxHeight: '400px', paddingTop: '50px', marginTop: '20vh'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign in</Header>
                        {this.state.hasFailed && <Message error header={this.state.message} />}
                        <Form>
                            <Form.Input placeholder='Username or E-mail' name='usernameOrEmail' value={this.state.usernameOrEmail} onChange={this.handleChange} color={'red'} />
                            <Form.Input placeholder='Password' name='password' type='password' value={this.state.password} onChange={this.handleChange} />
                            <Form.Checkbox label='Remember me' />
                            <Form.Button color='red' size='huge' onClick={this.loginClicked} style={{minWidth: '140px'}}>
                                {this.state.loading && <Loader active inline size='tiny' />}
                                {!this.state.loading && 'Submit'}
                            </Form.Button>
                        </Form>
                        <div>
                            <Link to={'/know-your-protein-client/forgetpass'} style={{padding: '40px 20px 0', color: 'grey'}}>Forget password</Link>
                        </div>
                    </Segment>
                </Grid>
            </>
        )
    }
}

export default LoginComponent
