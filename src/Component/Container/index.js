import React from "react";
import { Grid } from '@material-ui/core';

const Container = props => {
    return (
        <Grid container direction="row" id="container">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={10} md={11}>{props.children}</Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}

export default Container;