import React from "react";
import { Grid } from '@material-ui/core';

const Container = props => {
    return (
        <Grid container direction="row" id="container">
            <Grid item  lg={1}></Grid>
            <Grid item xs={12} lg={11}>{props.children}</Grid>
            <Grid item  ></Grid>
        </Grid>
    )
}

export default Container;