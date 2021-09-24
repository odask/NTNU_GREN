import {React, Component} from "react";
import './Search.css'
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';

class Search extends Component{
    render(){
        return(
            <>
            <Grid container spacing={2} direction="column" justifyContent="space-around" alignItems="center">
            <div className="myDiv">
            <div className="bg"></div>
                SHIPSTER
            </div>
            <div className="text_front">
                Which ports will you be traveling?
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <TextField id="from" label="From" variant="outlined" />
                &nbsp;
                <TextField id="to" label="To" variant="outlined" />
            </Grid>
            &nbsp;
            <Button variant="outlined">Search</Button>
            </Grid>
            </>
        )
    }
}

export default Search