import React, { Component } from 'react'
import { Container, List, Icon, Divider } from 'semantic-ui-react'

export class FooterComponent extends Component {
    constructor() {
        super()

        this.mail = this.mail.bind(this)
    }

    mail() {
        const url = `mailto:${'jakubowski1005@gmail.com'}`
        window.location.assign(url)
    }

    render() {
        return (
            <div style={{backgroundColor: '#db2828', marginTop: '100px'}}>
                <Container textAlign='center' fluid>
                    <List divided horizontal size='massive' relaxed='very' verticalAlign='bottom'>
                        <List.Item onClick={this.mail}>
                            <Icon link name='mail' size='big' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                        <List.Item href='http://linkedin.com/in/artur-jakubowski/'>
                            <Icon link name='linkedin' size='big' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                        <List.Item href='http://github.com/jakubowski1005'>
                            <Icon link name='github' size='big' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                    </List>
                    <Divider />
                    <p style={{paddingBottom: '14px', fontSize: '1.5rem', color: 'white'}}>Copyright &copy; {new Date().getFullYear()} Artur Jakubowski. All rights reserved.</p>
                </Container>
            </div>
        )
    }
}

export default FooterComponent