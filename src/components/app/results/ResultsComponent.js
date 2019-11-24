import React, { Component } from 'react'
import { Header, Table, Divider, Segment, Container } from 'semantic-ui-react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryLegend, VictoryLabel } from 'victory'

export class ResultsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }


    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Header as='h2' style={{padding: '10px 0 20px'}}>Results</Header>
                <Divider />
                <Table color='red'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>L.p.</Table.HeaderCell>
                            <Table.HeaderCell>Structure</Table.HeaderCell>
                            <Table.HeaderCell>Percentage</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>{this.state.data.structures[1].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 1).part,2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>{this.state.data.structures[2].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 2).part,2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>{this.state.data.structures[3].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 3).part,2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>{this.state.data.structures[4].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 4).part,2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>{this.state.data.structures[5].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 5).part,2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>{this.state.data.structures[6].name}</Table.Cell>
                            <Table.Cell>{round(getTableData(this.state.data, 6).part,2)}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Divider />
                <VictoryChart>
                    <VictoryLine
                        style = {{data: {stroke: '#000000'}}}
                        data = {transforamteData(this.state.data.structures[0].data.x, this.state.data.structures[0].data.y)}
                        name={this.state.data.structures[0].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#00a60b'}}}
                        data = {transforamteData(this.state.data.structures[1].data.x, this.state.data.structures[1].data.y)}
                        name={this.state.data.structures[1].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#a66f00'}}}
                        data = {transforamteData(this.state.data.structures[2].data.x, this.state.data.structures[2].data.y)}
                        name={this.state.data.structures[2].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#008aa6'}}}
                        data = {transforamteData(this.state.data.structures[3].data.x, this.state.data.structures[3].data.y)}
                        name={this.state.data.structures[3].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#4200a6'}}}
                        data = {transforamteData(this.state.data.structures[4].data.x, this.state.data.structures[4].data.y)}
                        name={this.state.data.structures[4].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#8c0000'}}}
                        data = {transforamteData(this.state.data.structures[5].data.x, this.state.data.structures[5].data.y)}
                        name={this.state.data.structures[5].name}
                    />
                    <VictoryLine
                        style = {{data: {stroke: '#002f8c'}}}
                        data = {transforamteData(this.state.data.structures[6].data.x, this.state.data.structures[6].data.y)}
                        name={this.state.data.structures[6].name}
                    />
                <VictoryAxis
                    label = "Wavenumber [cm-1]"
                />
                <VictoryAxis dependentAxis
                    axisLabelComponent={<VictoryLabel dy={10} text="Absorbance [-]" />}
                />
                
                </VictoryChart>
                <VictoryLegend
                    x={50}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={10}
                    itemsPerRow={2}
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                    data={[
                        { name: this.state.data.structures[0].name, symbol: {fill: '#000000'} },
                        { name: this.state.data.structures[1].name, symbol: {fill: '#00a60b'} },
                        { name: this.state.data.structures[2].name, symbol: {fill: '#a66f00'} },
                        { name: this.state.data.structures[3].name, symbol: {fill: '#008aa6'} },
                        { name: this.state.data.structures[4].name, symbol: {fill: '#4200a6'} },
                        { name: this.state.data.structures[5].name, symbol: {fill: '#8c0000'} },
                        { name: this.state.data.structures[6].name, symbol: {fill: '#002f8c'} }
                    ]} />
                </>
        )
    }
}

export default ResultsComponent

function transforamteData(x, y) {
    const data = []
    for (let i = 0; i < x.length; i++) {
        data.push({x: x[i], y: y[i]})
    }
    return data;
}

function getTableData(data, index) {
    const structures = data.structures
    const table = [];

    for (let i = 0; i < structures.length; i++) {
        table.push({
            name: structures[i].name,
            part: (structures[i].absorbance / structures[0].absorbance)*100
        })
    }
    return table[index];
}

function round(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
}