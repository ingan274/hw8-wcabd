import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';


class Chapter extends Component {

    // Takes into account "room" chapter with an extra paragrpah on p4
    roomChapter = () => {
        if (this.props.chapter.page === "room") {
            return (
                <Box className="introText" justifyContent="center">
                    <Box className="chapterTitle ">{this.props.chapter.p4.title}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text1}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text2}</Box>
                </Box>
            )
        } else {
            return (
                <Box className="introText" justifyContent="center">
                    <Box className="chapterTitle">{this.props.chapter.p4.title}</Box>
                    <Box className="chapterText" my={4}>{this.props.chapter.p4.text1}</Box>
                </Box>
            )
        }
    }



    render = () => {
        return (
            <Box key={this.props.chapter.page}>
                {/* Chapter Head */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle1">{this.props.chapter.p1.title}</Box>
                            <Box className="chapterText1" my={4}>{this.props.chapter.p1.text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p2 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.props.chapter.p2.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p2.text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p3 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.props.chapter.p3.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p3.text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p4 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        {this.roomChapter()}
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>

                {/* Chapter p5 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.props.chapter.p5.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p5.text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p6 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.props.chapter.p6.title}</Box>
                            <Box className="chapterText" my={4}>{this.props.chapter.p6.text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>
            </Box>
        )
    }
}

export default Chapter;