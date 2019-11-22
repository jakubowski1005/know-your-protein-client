import React, { Component } from 'react'
import IntroductionComponent from './landing/IntroductionComponent'
import ContentComponent from './landing/ContentComponent'

export class MainPageComponent extends Component {
    render() {
        return (
            <>
                <IntroductionComponent />
                <ContentComponent />
            </>
        )
    }
}

export default MainPageComponent
