import {React, Component} from 'react'
import Grid from "@material-ui/core/Grid";
import './About.css'

class About extends Component {
    render() {
        return (
            <Grid container spacing={2} direction="column" justifyContent="space-around" alignItems="center">
                <div>
                    <div className="header">Shipster</div>
                    <div className="text"> Helping the cargo owner make an important decision</div>
                    <div className="info"> By using the Veracity emissions prediction calculator, and presenting the predicted CO2 emission in ton per cargo journey, we want to inform and help the cargo owners make a better and more sustainable choice. Through visualisation of data, we want to show and inform about CO2 emission, distance, cargo ship route and price. By simply typing the from and to port, and the cargo load and weight, a cargo owner will see which ship is most environmentally friendly.</div>
                </div>
            </Grid>
        )
    }
}

export default About