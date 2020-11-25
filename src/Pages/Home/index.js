import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
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
        let bodyScrollBar = Scrollbar.init(document.body, {
            damping: 0.1,
            delegateTo: document,
        });

        ScrollTrigger.scrollerProxy(".hpage", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            },
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: document.querySelector('.hpage') });

        function p1_text() {
            gsap.from(".reveal1", { duration: 1.5, opacity: 0 });
            gsap.from(".reveal2", { delay: 0.5, duration: 2, opacity: 0 });
            gsap.from(".reveal3", { delay: 0.8, duration: 2, opacity: 0 });
            gsap.from(".reveal4", { delay: 1.1, duration: 2, opacity: 0 });
            gsap.from(".reveal5", { delay: 1.3, duration: 2, opacity: 0 });

        }
        p1_text();

        gsap.to('.home_p1', {
            scrollTrigger: {
                trigger: ".home_p1",
                start: "top top",
                end: "bottom 35%",
                pin: true,
                scrub: true,
                // onEnterBack: () => {p1_text()},
                // markers: true
            }
        });

        gsap.from('.home_p2', {
            opacity: 0, scrollTrigger: {
                trigger: ".p2Trigger",
                start: "top bottom-=100",
                scrub: true,
                markers: true,
            }
        })

    })

    return (
        <Box id="main" className="main-container">
            <Grid container direction="row" spacing={2} className="hpage">
                <Grid item container direction="column" xs={12} md={6} className="mainText">
                    <Box className="topPagePin">
                        <Grid item container direction="column" className="introText home_p1 lText" justify="center">
                            <Box className="title reveal1">{p1Title}</Box>
                            <Box className="subTitle reveal1">{p1Subtitle}</Box>
                            <Box className="introP reveal2" my={1}>{p1Text1}</Box>
                            <Box className="introP reveal3" my={1}>{p1Text2}</Box>
                            <Box className="introP reveal4 " my={1}>{p1Text3}</Box>
                            <Box className="scroll reveal5" my={2}>{scroll}</Box>
                        </Grid>
                    </Box>

                    <Grid item container direction="column" className="bookTitle home_p2 lText" justify="center">
                        <Grid className="p2title title1 reveal">{p2Title1}</Grid>
                        <Grid className="p2title title1 reveal p2Trigger">{p2Title2}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub1}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub2}</Grid>
                        <Grid className="p2title title2 reveal">{p2Sub3}</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className="topPagePin">
                        <Box className="rContent"></Box>
                    </Box>
                    <Grid item container direction="column" align="center" justify="center" className="rContent chapterList">
                        {chapters.map((chapter, index) => (
                            <Link to={`/${chapter}`}
                                className="homeChapterLinks reveal"
                                key={index.toString()}
                                onClick={() => props.changeChapter(`${chapter}`)}>
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