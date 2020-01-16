import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Container, Header} from 'semantic-ui-react'

export class LogoutComponent extends Component {
 constructor() {
        super()

        this.state = {
            redirect: false,
            time: 10
        }
    }

    componentDidMount() {
        this.id = setTimeout( () => this.setState({redirect: true}), 10000)
        this.interval = setInterval( () => this.setState({time: this.state.time-1}), 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
        clearInterval(this.interval)
    }

    render() {
        return (
            this.state.redirect ? <Redirect to='/know-your-protein-client/' /> :
            <div style={{height: '80vh'}}>
                <Container textAlign='center' style={{padding: '100px 0 100px'}}>
                    <Header>
                        <div>You have been logged out.</div> 
                        <div>You will be automatically moved to the home page after {this.state.time} seconds.</div> 
                        <div>Click <Link to='/know-your-protein-client/'>here</Link> to do it now.</div>
                    </Header>
                </Container>
            </div>
        )
    }
}

export default LogoutComponent
