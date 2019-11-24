import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import DropComponent from './DropComponent'
import LoadingComponent from './LoadingComponent'
import ResultsComponent from '../results/ResultsComponent'
import DataProcessingService from '../../../services/DataProcessingService'

export class ContentComponent extends Component {
    constructor() {
        super()

        this.state = {
            processing: false,
            results: false,
            data: null
        }

        this.retrieveResults = this.retrieveResults.bind(this)
    }

    retrieveResults(dataset) {
        this.setState({processing: true})
        DataProcessingService.analyzeSpectrum(dataset)
        .then( res => {
            this.setState({
                processing: false,
                results: true,
                data: res.data.body})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Segment placeholder style={{width: '60%', minHeight: '300px'}}>
                {!this.state.processing && !this.state.results && <DropComponent process={this.retrieveResults} />}
                {this.state.processing && <LoadingComponent />}
                {this.state.results && <ResultsComponent data={this.state.data} />}
            </Segment>
        )
    }
}

export default ContentComponent
