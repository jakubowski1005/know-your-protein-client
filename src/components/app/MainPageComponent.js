import React, { Component } from 'react'
import IntroductionComponent from './landing/IntroductionComponent'
import ContentComponent from './landing/ContentComponent'
import { Divider } from 'semantic-ui-react'

export class MainPageComponent extends Component {
    render() {
        return (
            <>
                <IntroductionComponent />
                <Divider />
                <ContentComponent />
            </>
        )
    }
}

export default MainPageComponent
