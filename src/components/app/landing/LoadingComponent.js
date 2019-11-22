import React, { Component } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export class LoadingComponent extends Component {
    render() {
        return (
            <>
            <Dimmer active inverted>
                <Loader indeterminate size='massive'>Calculating...</Loader>
            </Dimmer>
            </>
        )
    }
}

export default LoadingComponent
