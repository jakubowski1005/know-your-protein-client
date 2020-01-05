import React, { Component } from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'
import DropComponent from './DropComponent'
import LoadingComponent from './LoadingComponent'
import ResultsComponent from '../results/ResultsComponent'
import DataProcessingService from '../../../services/DataProcessingService'
import html2canvas from 'html2canvas'
import pdfmake from 'pdfmake'

export class ContentComponent extends Component {
    constructor() {
        super()

        this.state = {
            processing: false,
            results: false,
            data: null
        }

        this.retrieveResults = this.retrieveResults.bind(this)
        this.download = this.download.bind(this)
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

    download() {
        const input = document.getElementById('download')

        html2canvas(input, {y: 350}).then(canvas => {
            const data = canvas.toDataURL();
            const docDefinition = {
                pageSize: 'A4',
                content: [{
                    image: data,
                    width: 500
                }]
            }
            pdfmake.createPdf(docDefinition).download("Protein_Details.pdf");
        })
    }


    render() {
        return (
            <Segment placeholder style={{width: '60%', minWidth: '220mm'}}>
                {!this.state.processing && !this.state.results && <DropComponent process={this.retrieveResults} />}
                {this.state.processing && <LoadingComponent />}
                {this.state.results && <div id='download' ><ResultsComponent data={this.state.data} /></div>}
                {this.state.results && <Button color='red' size='large' onClick={this.download}><Icon name='download' />Download as PDF</Button>}
            </Segment>
        )
    }
}

export default ContentComponent