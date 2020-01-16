import React, { Component } from 'react'
import { Header, Table, Divider } from 'semantic-ui-react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend, VictoryLabel } from 'victory'

export class ResultsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data,
        }


    }

    render() {

        const tableData = getTableData(this.state.data)
        const colors = ['#002f8c', '#00a60b', '#a66f00', '#008aa6', '#4200a6', '#8c0000', '#000000']
        const legend = legendBuilder(this.state.data)

        return (
            <div>
                <Header as='h2' style={{padding: '10px 0 20px'}}>Results</Header>
                <Divider />
                <Table color='red'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>L.p.</Table.HeaderCell>
                            <Table.HeaderCell>Structure</Table.HeaderCell>
                            <Table.HeaderCell>Percentage</Table.HeaderCell>
                            <Table.HeaderCell>Peak Location [cm-1]</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {
                        this.state.data.structures.map(s => (
                                s.name === 'Amide I' ? 
                            <Table.Row key={s.clientId} negative>
                                <Table.Cell>{s.clientId}</Table.Cell>
                                <Table.Cell>{s.name}</Table.Cell>
                                <Table.Cell>{tableData[s.clientId-1].part}</Table.Cell>
                                <Table.Cell>{round(s.peakPosition, 1)}</Table.Cell>
                            </Table.Row> 
                                    : 
                            <Table.Row key={s.clientId}>
                                <Table.Cell>{s.clientId}</Table.Cell>
                                <Table.Cell>{s.name}</Table.Cell>
                                <Table.Cell>{tableData[s.clientId-1].part}</Table.Cell>
                                <Table.Cell>{round(s.peakPosition, 1)}</Table.Cell>
                            </Table.Row> 
                        ))
                    }
                    </Table.Body>
                </Table>
                <Divider />
                <VictoryChart>
                {
                    this.state.data.structures.map(s => (
                        <VictoryLine
                        key = {s.clientId}
                        style = {{data: {stroke: colors[s.clientId-1]}, labels: {fontSize: 10}}}
                        data = {transforamteData(s.data.x, s.data.y)}
                        name = {s.name}
                        labels = {({ datum }) => datum.x === s.peakPosition ? round(datum.x, 1) : null }
                    />
                    ))
                }
                <VictoryAxis
                    label = "Wavenumber [cm-1]"
                />
                <VictoryAxis dependentAxis
                    axisLabelComponent={<VictoryLabel dy={10} text="Absorbance [-]" />}
                />
                </VictoryChart>
                <div style={{maxHeight: '300px'}}>
                <VictoryLegend
                    x={100}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={10}
                    itemsPerRow={2}
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                    data={legend} />
                    </div>
                </div>
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

function getTableData(data) {
    const structures = data.structures
    const table = [];

    for (let i = 0; i < structures.length; i++) {
        table.push({
            name: structures[i].name,
            part: round((structures[i].absorbance / structures[structures.length-1].absorbance)*100, 2),
            maxLocation: structures[i].data.x[structures[i].bandMaxIndex]
        })
    }
    return table;
}

function round(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
}

function legendBuilder(data) {
    let legend = []
    let colors = ['#002f8c', '#00a60b', '#a66f00', '#008aa6', '#4200a6', '#8c0000', '#000000']
    for (let i = 0; i < data.structures.length; i++) {
        legend.push({ name: data.structures[i].name, symbol: {fill: colors[i]} })
    }
    return legend;
}