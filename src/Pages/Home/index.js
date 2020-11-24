import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Home = (props) => {
    // console.log(props.home.p1.p1)
    const [p1Title] = useState(props.home.p1.title);
    const [p1Subtitle] = useState(props.home.p1.subtitle);
    const [p1Text1] = useState(props.home.p1.p1);
    const [p1Text2] = useState(props.home.p1.p2);
    const [p1Text3] = useState(props.home.p1.p3);
    const [scroll] = useState(props.home.p1.scroll);

    const [p2Title1] = useState(props.home.p2.title1);
    const [p2Title2] = useState(props.home.p2.title2);
    const [p2Sub1] = useState(props.home.p2.subTitle1);
    const [p2Sub2] = useState(props.home.p2.subTitle2);
    const [p2Sub3] = useState(props.home.p2.subTitle3);
    const [chapters] = useState(props.home.p2.chapterTitles);

    useEffect(() => {
        function introAnimation(elememnt, direction) {
            direction = direction | 1;

            let x = 0;
            let y = direction * 100;

            gsap.fromTo(elememnt, { x: x, y: y, autoAlpha: 0 }, {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto"
            });

        }
        // gsap.from(".home_p1", {duration: 5, opacity: 0, ease: "elastic"}) 
        gsap.from(".home_p1", {
            scrollTrigger: {
                trigger: ".p1Trigger",
                onEnter: () => { introAnimation(".home_p1")},
                onEnterBack: () => { introAnimation(".home_p1", -1)},
            }
        })

        gsap.from(".home_p2", {
            opacity: 0, scrollTrigger: {
                trigger: ".p2Trigger",
                start: "top bottom-=250",
                scrub: true,
                markers: true,
            }
        })

        
    })

    return (
        <Box id="main" className="main-container">
            <Grid container direction="row" spacing={2} className="hpage">
                <Grid item container direction="column" xs={12} md={6} className="mainText">
                    <Grid item container direction="column" className="introText home_p1 lText" justify="center">
                        <Box className="title reveal">{p1Title}</Box>
                        <Box className="subTitle reveal">{p1Subtitle}</Box>
                        <Box className="introP reveal" my={1}>{p1Text1}</Box>
                        <Box className="introP reveal" my={1}>{p1Text2}</Box>
                        <Box className="introP reveal " my={1}>{p1Text3}</Box>
                        <Box className="scroll reveal p1Trigger" my={2}>{scroll}</Box>
                    </Grid>

                    <Grid item container direction="column" className="bookTitle home_p2 lText" justify="center">
                        <Grid className="p2title title1 reveal">{p2Title1}</Grid>
                        <Grid className="p2title title1 reveal p2Trigger">{p2Title2}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub1}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub2}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub3}</Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className="rContent"></Box>
                    <Grid item container direction="column" align="center" justify="center" className="rContent chapterList">
                        {chapters.map((chapter, index) => (
                            <Link to={`/${chapter}`}
                                className="homeChapterLinks reveal"
                                key={index.toString()}>
                                {chapter}.
                            </Link>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;