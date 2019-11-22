import React, { Component, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { Segment, Header, Icon, Button, Container } from 'semantic-ui-react'
import csvToJson from '../../../services/CSVtoJSONConverter'

export class DropComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            error: '',
            dataset: null
        }

        this.parseToJSON = this.parseToJSON.bind(this)
        this.processButtonClicked = this.processButtonClicked.bind(this)
    }

    parseToJSON(file) {
        let data;
        let self = this
        const reader = new FileReader();
        reader.readAsText(file[0])
        reader.addEventListener("loadend", function () {
            data = processData(reader.result)
            self.setState({dataset: data});
        })
    }

    processButtonClicked() {
        if(this.state.dataset !== null) {
            this.props.process(this.state.dataset)
        }
    }

    render() {
        return (
            <>
                <Header icon>
                {this.state.loaded ? <Icon name='check' /> : <Icon name='file alternate' />}
                <Dropzone onDrop={file => {
                    this.setState({loaded: true})
                    this.parseToJSON(file)}}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {this.state.loaded ? 
                        <p>File uploaded, click button to calculate</p> :
                        <p>Drag your CSV file here or click to upload</p>}
                      </div>
                    </section>
                  )}
                </Dropzone>
                </Header>
                <Button onClick={this.processButtonClicked} color='red' size='big'>Process</Button>
            </>
        )
    }
}

export default DropComponent

function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n/)
    let lines = []
    let x = []
    let y = []
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }

    for (let i = 0; i < lines.length; i++) {
        x.push(parseFloat(lines[i][0]))
        y.push(parseFloat(lines[i][1]))
    }
    let dataset = {
        x: x,
        y: y
    }
    return dataset;
}