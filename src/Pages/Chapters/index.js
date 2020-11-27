import "./style.css";
import React, { useState, useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
gsap.registerPlugin(ScrollTrigger);


const Chapter = (props) => {
    let [page, setPage] = useState(props.chapter.page);
    let [p1Title, setp1Title] = useState(props.chapter.p1.title);
    let [p1Text, setp1Text] = useState(props.chapter.p1.text);
    let [p2Title, setp2Title] = useState(props.chapter.p2.title);
    let [p2Text, setp2Text] = useState(props.chapter.p2.text);
    let [p3Title, setp3Title] = useState(props.chapter.p3.title);
    let [p3Text, setp3Text] = useState(props.chapter.p3.text);
    let [p4Title, setp4Title] = useState(props.chapter.p4.title);
    let [p4Text, setp4Text] = useState(page === "room" ? props.chapter.p4.text1 : props.chapter.p4.text1);
    let [p4Text2, setp4Text2] = useState(page === "room" ? props.chapter.p4.text2 : '');
    let [p5Title, setp5Title] = useState(props.chapter.p5.title);
    let [p5Text, setp5Text] = useState(props.chapter.p5.text);
    let [p6Title, setp6Title] = useState(props.chapter.p6.title);
    let [p6Text, setp6Text] = useState(props.chapter.p6.text);

    useEffect(() => {
        // This allows for when the props change, the states will also change
        setPage(props.chapter.page);
        setp1Title(props.chapter.p1.title)
        setp1Text(props.chapter.p1.text)
        setp2Title(props.chapter.p2.title)
        setp2Text(props.chapter.p2.text)
        setp3Title(props.chapter.p3.title)
        setp4Title(props.chapter.p4.title)
        setp3Text(props.chapter.p3.text)
        setp5Title(props.chapter.p5.title)
        setp5Text(props.chapter.p5.text)
        setp6Title(props.chapter.p6.title)
        setp6Text(props.chapter.p6.text)

        let newpage = props.chapter.page
        setp4Text(newpage === "room" ? props.chapter.p4.text1 : props.chapter.p4.text1)
        setp4Text2(newpage === "room" ? props.chapter.p4.text2 : '')
    }, [props])

    function pinAnimation(element) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top-=25%",
                end: "bottom 50%",
                pin: true,
                scrub: true,
                // onEnterBack: () => {p1_text()},
                markers: true
            }
        });
    }

    useEffect(() => {
        // Animations of the first Page if page has changed
        gsap.from(".chreveal1", { delay: 0.5, duration: 2, opacity: 0 });
    }, [page])

    useEffect(() => {
        // Pin Animation for sections
        let bodyScrollBar = Scrollbar.init(document.querySelector('.chapterPage'), {
            damping: 0.1,
            delegateTo: document,
            // syncCallbacks: true,
        });
        ScrollTrigger.scrollerProxy(".chapterPage", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            },
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: document.querySelector('.chapterPage') });

        pinAnimation(".p1")
        pinAnimation(".p2")
        pinAnimation(".p3")
        pinAnimation(".p4")
        pinAnimation(".p5")
        pinAnimation(".p6")
    })

    return (
        <Box key={page} className="chapterPage">
            <Grid container direction="row" spacing={2} >
                <Grid item container direction="column" xs={9} md={6} className="chapterPageText">
                    {/* CHAPTER HEAD */}
                    <Grid item container direction="column" className="chapText" justify="center">
                        <Box item container direction="column" className="chapterTextContainerp1 p1">
                            <Box className="chapterTitle1">{p1Title}</Box>
                            <Box className="chapterText1 chreveal1" my={2}>{p1Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P1 */}
                    <Grid item container direction="column" className="chapText" justify="center" >
                        <Box className="chapterTextContainer p2">
                            <Box className="chapterTitle">{p2Title}</Box>
                            <Box className="chapterText" my={4}>{p2Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P2 */}
                    <Grid item container direction="column" className="chapText" justify="center" >
                        <Box className="chapterTextContainer p3">
                            <Box className="chapterTitle">{p3Title}</Box>
                            <Box className="chapterText" my={4}>{p3Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P3 */}
                    <Grid item container direction="column" className="chapText" justify="center" >
                        <Box className="chapterTextContainer p4">
                            <Box className="chapterTitle ">{p4Title}</Box>
                            <Box className="chapterText" my={4}>{p4Text}</Box>
                            <Box className="chapterText" my={4}>{p4Text2}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P4 */}
                    <Grid item container direction="column" className="chapText" justify="center" >
                        <Box className="chapterTextContainer p5">
                            <Box className="chapterTitle">{p5Title}</Box>
                            <Box className="chapterText" my={4}>{p5Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P5 */}
                    <Grid item container direction="column" className="chapText" justify="center">
                        <Box className="chapterTextContainer p6">
                            <Box className="chapterTitle">{p6Title}</Box>
                            <Box className="chapterText" my={4}>{p6Text}</Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={3} md={6} >

                </Grid>
            </Grid>

        </Box>
    )

}

export default Chapter