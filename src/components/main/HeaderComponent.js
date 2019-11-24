import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react'
//import AuthService from '../../services/AuthService'

export class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {
            activeItem: 'home',
            userLoggedIn: false
        }

        this.handleItemClick = this.handleItemClick.bind(this)
        // this.handleLogout = this.handleLogout.bind(this)
        // this.isUserLoggedIn = this.isUserLoggedIn.bind(this)
    }

    handleItemClick(event, {name}) {
        this.setState({activeItem: name})
    }

    // handleLogout(event) {
    //     this.setState({activeItem: 'home', userLoggedIn: false})
    //     AuthService.logout()
    //     return <Redirect to='/logout' />
    // }

    // isUserLoggedIn() {
    //     return AuthService.isUserLoggedIn();
    // }

    render() {
        const { activeItem } = this.state;

        return (
            <Container fluid>
                 <Menu pointing secondary inverted color={'red'} size={'massive'}>

                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to='/'
                        ><Icon name='flask' /> Know your protein
                        </Menu.Item>

                     {!this.state.userLoggedIn && <Menu.Menu position="right" width={6}>
                         <Menu.Item
                         name='signin'
                         active={activeItem === 'signin'}
                         onClick={this.handleItemClick}
                         as={Link} to='/login'
                         >Sign In
                         </Menu.Item>
                         <Menu.Item
                         name='signup'
                         active={activeItem === 'signup'}
                         onClick={this.handleItemClick}
                         as={Link} to='/register'>Sign up
                         </Menu.Item>
                     </Menu.Menu>}

                     {this.state.userLoggedIn && <Menu.Menu position="right" width={6}>
                        <Dropdown item trigger={<span><Icon name='user' /> Profile</span>}>
                            <Dropdown.Menu>
                                {/* <Dropdown.Item as={Link} to='/lists'><Icon name='list ul' /> Lists</Dropdown.Item> */}
                                <Dropdown.Item> Spectrum 1 </Dropdown.Item>
                                <Dropdown.Item> Spectrum 2 </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                         <Menu.Item
                         name='logout'
                         active={activeItem === 'logout'}
                         onClick={this.handleLogout}
                         as={Link} to='/logout'>Logout
                         </Menu.Item>
                     </Menu.Menu>}
                 </Menu>
             </Container>
        )
    }
}

export default HeaderComponent
