import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory'

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
            <div>
                <Header as='h2'>Results</Header>

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
                            <Table.Cell>{this.state.data.structures[0].name}</Table.Cell>
                            <Table.Cell>{this.</Table.Cell>
                        </Table.Row>


                    </Table.Body>
                </Table>

                <VictoryChart theme={VictoryTheme.material}>
                    {this.state.data.structures.map( s => <VictoryLine
                        data={transforamteData(s.data.x, s.data.y)}
                        name={s.name}
                    />)}
                <VictoryAxis
                    label="Wavenumber [cm-1]"
                />
                <VictoryAxis dependentAxis
                    label="         Absorbance [-]" />
                </VictoryChart>
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
    const structures = data.data.structures
    const table = [];

    let sum = 0;
    for (let i = 0; i < structures.length; i++) {
        sum += structures[i].absorbance
    }

    for (let i = 0; i < structures.length; i++) {
        table.push({
            name: structures[i].name,
            part: (structures[i].absorbance / sum)*100
        })
    }
    return table;
}