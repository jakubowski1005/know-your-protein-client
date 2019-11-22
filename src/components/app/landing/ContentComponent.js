import React, { Component } from 'react'
import { Container, Segment, Grid } from 'semantic-ui-react'
import DropComponent from './DropComponent'
import LoadingComponent from './LoadingComponent'
import ResultsComponent from '../results/ResultsComponent'

export class ContentComponent extends Component {
    constructor() {
        super()

        this.state = {
            processing: false,
            results: false,
            data: null
        }

        this.turnOnLoading = this.turnOnLoading.bind(this)
        this.retrieveResults = this.retrieveResults.bind(this)
    }

    turnOnLoading() {
        this.setState({processing: true})
        console.log('loading')
    }

    retrieveResults(dataset) {
        this.setState({processing: true})
        console.log('api call with data: ' + dataset)
    }

    render() {
        return (
            <Segment placeholder style={{width: '60%', height: '300px', textAlign: 'center'}}>
                <Grid centered>
                <Grid.Column>
                {!this.state.processing && !this.state.results && <DropComponent process={this.retrieveResults} />}
                {this.state.processing && <LoadingComponent />}
                {this.state.results && <ResultsComponent />}
                </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default ContentComponent
