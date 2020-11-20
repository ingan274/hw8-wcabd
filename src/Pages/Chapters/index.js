import "./style.css";
import React, { Component } from "react";
import { Grid, Box } from '@material-ui/core';


class Chapter extends Component {
    // Sets states depending on the product path it lands on
    constructor(props) {
        super(props);
        const { chapter } = this.props.match.params;
        switch (chapter) {
            case ("limb"):
                this.state = {
                    p1_title: props.limb.p1.title,
                    p1_text: props.limb.p1.text,
                    p2_title: props.limb.p2.title,
                    p2_text: props.limb.p2.text,
                    p3_title: props.limb.p3.title,
                    p3_text: props.limb.p3.text,
                    p4_title: props.limb.p4.title,
                    p4_text: props.limb.p4.text,
                    p5_title: props.limb.p5.title,
                    p5_text: props.limb.p5.text,
                    p6_title: props.limb.p6.title,
                    p6_text: props.limb.p6.text,
                }

                console.log(chapter)
                break;

            case ('chair'):
                this.state = {
                    p1_title: props.chair.p1.title,
                    p1_text: props.chair.p1.text,
                    p2_title: props.chair.p2.title,
                    p2_text: props.chair.p2.text,
                    p3_title: props.chair.p3.title,
                    p3_text: props.chair.p3.text,
                    p4_title: props.chair.p4.title,
                    p4_text: props.chair.p4.text,
                    p5_title: props.chair.p5.title,
                    p5_text: props.chair.p5.text,
                    p6_title: props.chair.p6.title,
                    p6_text: props.chair.p6.text,
                }
                break;

            case ('room'):
                this.state = {
                    p1_title: props.room.p1.title,
                    p1_text: props.room.p1.text,
                    p2_title: props.room.p2.title,
                    p2_text: props.room.p2.text,
                    p3_title: props.room.p3.title,
                    p3_text: props.room.p3.text,
                    p4_title: props.room.p4.title,
                    p4_text1: props.room.p4.text1,
                    p4_text2: props.room.p4.text2,
                    p5_title: props.room.p5.title,
                    p5_text: props.room.p5.text,
                    p6_title: props.room.p6.title,
                    p6_text: props.room.p6.text,
                }
                break;

            case ('street'):
                this.state = {
                    p1_title: props.street.p1.title,
                    p1_text: props.street.p1.text,
                    p2_title: props.street.p2.title,
                    p2_text: props.street.p2.text,
                    p3_title: props.street.p3.title,
                    p3_text: props.street.p3.text,
                    p4_title: props.street.p4.title,
                    p4_text1: props.street.p4.text1,
                    p4_text2: props.street.p4.text2,
                    p5_title: props.street.p5.title,
                    p5_text: props.street.p5.text,
                    p6_title: props.street.p6.title,
                    p6_text: props.street.p6.text,
                }
                break;

            case ('clock'):
                this.state = {
                    p1_title: props.clock.p1.title,
                    p1_text: props.clock.p1.text,
                    p2_title: props.clock.p2.title,
                    p2_text: props.clock.p2.text,
                    p3_title: props.clock.p3.title,
                    p3_text: props.clock.p3.text,
                    p4_title: props.clock.p4.title,
                    p4_text1: props.clock.p4.text1,
                    p4_text2: props.clock.p4.text2,
                    p5_title: props.clock.p5.title,
                    p5_text: props.clock.p5.text,
                    p6_title: props.clock.p6.title,
                    p6_text: props.clock.p6.text,
                }
                break;


            default:
                window.location.refresh()
        }
    };

    // Update when -> user switches to another product
    componentDidUpdate = () => {


    }

    roomChapter = () => {
        if (this.state.p1_title === "room") {
            return (
                <Box className="introText" justifyContent="center">
                    <Box className="chapterTitle ">{this.state.p4_title}</Box>
                    <Box className="chapterText" my={4}>{this.state.p4_text1}</Box>
                    <Box className="chapterText" my={4}>{this.state.p4_text2}</Box>
                </Box>
            )
        } else {
            return (
                <Box className="introText" justifyContent="center">
                    <Box className="chapterTitle">{this.state.p4_title}</Box>
                    <Box className="chapterText" my={4}>{this.state.p4_text}</Box>
                </Box>
            )
        }

    }



    render = () => {
        return (
            <Box>
                {/* Chapter Head */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle1">{this.state.p1_title}</Box>
                            <Box className="chapterText1" my={4}>{this.state.p1_text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p2 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.state.p2_title}</Box>
                            <Box className="chapterText" my={4}>{this.state.p2_text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p3 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.state.p2_title}</Box>
                            <Box className="chapterText" my={4}>{this.state.p2_text}</Box>
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
                            <Box className="chapterTitle">{this.state.p2_title}</Box>
                            <Box className="chapterText" my={4}>{this.state.p2_text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>

                {/* Chapter p6 */}
                <Grid container direction="row" spacing={2}>
                    <Grid item container direction="column" xs={12} md={6} >
                        <Box className="introText" justifyContent="center">
                            <Box className="chapterTitle">{this.state.p2_title}</Box>
                            <Box className="chapterText" my={4}>{this.state.p2_text}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} ></Grid>
                </Grid>
            </Box>
        )
    }
}

export default Chapter;