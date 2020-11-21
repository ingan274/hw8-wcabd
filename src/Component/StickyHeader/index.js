import React from "react";
import { Grid, Box } from '@material-ui/core';
import {
    NavLink
} from "react-router-dom";
import "./style.css"

const ChapterNav = (props) => {
    return (
        <Box mt={5}>
            <Grid container display="row" spacing={3} justify="center" >
                <Grid item >
                    <NavLink to="/limb" activeClassName='selectedChap' className='chapterNav' onClick={() => props.changeChapter('limb')}>Limb.</NavLink>
                </Grid>
                <Grid item >
                    <NavLink to="/chair" activeClassName='selectedChap' className='chapterNav' onClick={() => props.changeChapter('chair')}>Chair.</NavLink>
                </Grid>
                <Grid item >
                    <NavLink to="/room" activeClassName='selectedChap' className='chapterNav' onClick={() => props.changeChapter('room')}>Room.</NavLink>
                </Grid>
                <Grid item >
                    <NavLink to="/street" activeClassName='selectedChap' className='chapterNav' onClick={() => props.changeChapter('street')}>Street.</NavLink>
                </Grid>
                <Grid item >
                    <NavLink to="/clock" activeClassName='selectedChap' className='chapterNav' onClick={() => props.changeChapter('clock')}>Clock.</NavLink>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChapterNav;