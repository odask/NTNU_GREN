import {React, Component} from 'react'
//import Progressbar from '../../components/Progressbar' <Progressbar />
import Treemap from '../../components/Treemap'
import data from '../../components/data'
import Grid from "@material-ui/core/Grid";

class Result extends Component {
    render() {
        return(
            <div>
                <Grid containter alignItems="left" style={{paddingLeft: 20}}>
                    <div>
                        <div style={{fontSize: 25, fontWeight:" bold", paddingTop: 20}}>
                            CARGO SHIPS from USMSY to CNTSN
                        </div>
                        <div style={{fontSize: 20, color: "gray", paddingBottom: 20}}>
                        Diagram illustrates the total amount of Co2 emission in ton based on a prediction
                        </div>
                    </div>
                </Grid> 
                <Grid container spacing={2} direction="column" justifyContent="space-around" alignItems="center">
                    <Treemap data={data} height={600} width={1400} />
                </Grid>
            </div>
        )
    }
}

export default Result;