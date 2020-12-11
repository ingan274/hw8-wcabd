import React from "react";
import { Grid } from '@material-ui/core';

const Container = props => {
    return (
        <Grid container direction="row" id="container">
            
            <Grid item xs={12} lg={12} >{props.children}</Grid>
        </Grid>
    )
}

export default Container;