import React, { Component } from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'

export class IntroductionComponent extends Component {
    render() {
        return (
            <>
               <Segment>
                   <Grid centered>
                       <Grid.Column>
                         <Image src='../images/stats.svg' size='large' />
                       </Grid.Column>
                       <Grid.Column>
                         <p>drag the spectra</p>
                         <p>and simply analyze your protein</p>
                       </Grid.Column>
                   </Grid>
               </Segment> 
            </>
        )
    }
}

export default IntroductionComponent
