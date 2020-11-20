import React, { Component } from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import { Grid, Box } from '@material-ui/core';

class Home extends Component {
    // console.log(props.home.p1.p1)
    constructor(props) {
        super(props);
        this.state = {
            p1_title: props.home.p1.title,
            p1_subtitle: props.home.p1.subtitle,
            p1_into1: props.home.p1.p1,
            p1_into2: props.home.p1.p2,
            p1_into3: props.home.p1.p3,
            scroll: props.home.p1.scroll,

            p2_title1: props.home.p2.title1,
            p2_title2: props.home.p2.title2,
            p2_sub1: props.home.p2.subTitle1,
            p2_sub2: props.home.p2.subTitle2,
            p2_sub3: props.home.p2.subTitle3,

            chapters: props.home.p2.chapterTitles
        }
    }

    chapterButtons = () => {
        return (
            this.state.chapters.map((chapter, index) => (
                <Link to={`/${chapter}`}
                    className="homeChapterLinks"
                    key={index.toString()}>
                    {chapter}.
                </Link>
            ))
        )
    }


    render() {
        return (
            <Box>
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="title">{this.state.p1_title}</Box>
                            <Box className="subTitle">{this.state.p1_subtitle}</Box>
                            <Box className="introP" my={3}>{this.state.p1_into1}</Box>
                            <Box className="introP" my={3}>{this.state.p1_into2}</Box>
                            <Box className="introP" my={3}>{this.state.p1_into3}</Box>
                            <Box className="scroll" my={4}>{this.state.scroll}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                <Grid container direction="row">
                    <Grid item container direction="column" xs={12} md={6} alignContent="center">
                        <Box>
                            <Box className="p2title title1">{this.state.p2_title1}</Box>
                            <Box className="p2title title1">{this.state.p2_title2}</Box>
                            <Box className="p2title title2">{this.state.p2_sub1}</Box>
                            <Box className="p2title title2">{this.state.p2_sub2}</Box>
                            <Box className="p2title title2">{this.state.p2_sub3}</Box>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} md={6} align="center" >
                        <Grid item container direction="column" alignItems="center" justify="center">
                            {this.chapterButtons()}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Home;