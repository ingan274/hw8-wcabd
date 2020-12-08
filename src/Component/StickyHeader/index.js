import React, { useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import {
    NavLink
} from "react-router-dom";
import "./style.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Scrollbar from 'smooth-scrollbar';
gsap.registerPlugin(ScrollTrigger);

const ChapterNav = (props) => {
    useEffect(() => {
        // ScrollTrigger.create({
        //     start: 'top -100',
        //     end: 99999,
        //     toggleClass: { className: 'stickyNav--scrolled', targets: '.stickyNav' }
        // });
    })

    return (
        <Box  pt={2} className="stickyNavContainer">
            <Grid container direction="row" spacing={3} justify="center" alignItems="center" className="stickyNav" >
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

