import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';


class Chapter extends Component {

    // Takes into account "room" chapter with an extra paragrpah on p4
    roomChapter = () => {
        if (this.props.chapter.page === "room") {
            return (
                <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                    <Box className="chapterTitle ">{this.props.chapter.p4.title}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text1}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text2}</Box>
                </Grid>
            )
        } else {
            return (
                <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                    <Box className="chapterTitle">{this.props.chapter.p4.title}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text1}</Box>
                </Grid>
            )
        }
    }



    render = () => {
        return (
            <Box key={this.props.chapter.page}>
                <Grid container direction="row" spacing={2}>

                    <Grid item container direction="column" xs={12} md={6} >

                        {/* CHAPTER HEAD */}
                        <Grid item container direction="column" className="chapText1" justify="center">
                            <Box className="chapterTitle1">{this.props.chapter.p1.title}</Box>
                            <Box className="chapterText1" my={2}>{this.props.chapter.p1.text}</Box>
                        </Grid>

                        {/* CHAPTER P1 */}
                        <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                            <Box className="chapterTitle">{this.props.chapter.p2.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p2.text}</Box>
                        </Grid>

                        {/* CHAPTER P2 */}
                        <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                            <Box className="chapterTitle">{this.props.chapter.p3.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p3.text}</Box>
                        </Grid>

                        {/* CHAPTER P3 */}
                        {this.roomChapter()}

                        {/* CHAPTER P4 */}
                        <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                            <Box className="chapterTitle">{this.props.chapter.p5.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p5.text}</Box>
                        </Grid>

                        {/* CHAPTER P5 */}
                        <Grid item container direction="column" className="chapText" justify="center" spacing={10}>
                            <Box className="chapterTitle">{this.props.chapter.p6.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p6.text}</Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} >

                    </Grid>
                </Grid>

            </Box>
        )
    }
}

export default Chapter