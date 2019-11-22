import React, { Component } from 'react'
import { Segment, Grid, Image, Container } from 'semantic-ui-react'
import logo from '../../../resources/images/genetic.svg'

export class IntroductionComponent extends Component {
    render() {
        return (
            <>
               <Container style={{padding: '40px'}}>
                   <Grid centered>
                       <Grid.Column width={4}>
                         <Image src={logo} size='massive' />
                       </Grid.Column>
                       <Grid.Column width={8} style={styling}>
                         <p>drag the spectra and simply analyze your protein</p>
                       </Grid.Column>
                   </Grid>
               </Container> 
            </>
        )
    }
}

export default IntroductionComponent

const styling = {
    padding: '30px 0 30px',
    fontSize: '2rem',
    color: 'grey',
    fontStyle: 'Lato, sans-serif'
}
