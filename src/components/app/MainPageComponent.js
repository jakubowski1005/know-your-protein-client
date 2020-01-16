import React, { Component } from 'react'
import IntroductionComponent from './landing/IntroductionComponent'
import ContentComponent from './landing/ContentComponent'
import { Divider, Grid } from 'semantic-ui-react'

export class MainPageComponent extends Component {
    render() {
        return (
            <Grid centered style={{minHeight: '80vh'}}>
                <Grid.Row>
                    <IntroductionComponent />
                    <Divider />
                </Grid.Row>
                <Grid.Row>
                    <ContentComponent />
                </Grid.Row>
            </Grid>
        )
    }
}

export default MainPageComponent
