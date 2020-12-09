import React from "react";
import { Grid } from '@material-ui/core';

const Container = props => {
    return (
        <Grid container direction="row" id="container">
            <Grid item  md={1}></Grid>
            <Grid item xs={12} md={11}>{props.children}</Grid>
            <Grid item  ></Grid>
        </Grid>
    )
}

export default Container;