import React, { useState, useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

// Style Sheets
import "./style.css";
import "./style_812-1024.css";
import "./style_668-812.css";
import "./style_375-667.css";

// Image compnents
import Limb from "../../RightImages/Limb";
import Chair from "../../RightImages/Chair";
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
    let [p4Text, setp4Text] = useState(props.chapter.p4.text1);
    let [p4Text2, setp4Text2] = useState(page === "room" ? props.chapter.p4.text2 : '');
    let [p5Title, setp5Title] = useState(props.chapter.p5.title);
    let [p5Text, setp5Text] = useState(props.chapter.p5.text);
    let [p6Title, setp6Title] = useState(props.chapter.p6.title);
    let [p6Text, setp6Text] = useState(props.chapter.p6.text);

    const pageImages = () => {
        if (page === "limb") {
            return <Limb />
        }
        else if (page === "chair") {
            return <Chair />
        }
    }

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

    // Pin Animation
    function pinAnimation(element) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top-=25%",
                end: "bottom 50%",
                pin: true,
                scrub: true,
                // markers: true
            }
        });
    }

    useEffect(() => {
        // Animations of the first Page if page has changed
        gsap.from(".chreveal1", { delay: 0.5, duration: 2, opacity: 0 });
    }, [page])

    useEffect(() => {
        // Pin Animation for sections
        let bodyScrollBar = Scrollbar.init(document.body, {
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
        ScrollTrigger.defaults({ scroller: document.querySelector('.chapterPage')});

        pinAnimation(".p1")
        pinAnimation(".p2")
        pinAnimation(".p3")
        pinAnimation(".p4")
        pinAnimation(".p5")
        pinAnimation(".p6")
    })

    return (
        <Box key={page} className="chapterPage">
            <Grid container direction="row" >
                <Grid item container direction="column" xs={12} lg={6} className="chapterPageText">
                    {/* CHAPTER HEAD */}
                    <Grid item container direction="column" className="chapText" justify="center">
                        <Box item="true" container direction="column" className="chapterTextContainer p1" id="lp1-mobile">
                            <Box className="chapterTitle1 p1Title">{p1Title}</Box>
                            <Box className="chapterText1 chreveal1 p1Text" py={2} pr={3}>{p1Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P1 */}
                    <Grid item container direction="column" className="chapText" id="lp3-mobile" justify="center" >
                        <Box className="chapterTextContainer p2">
                            <Box className="chapterTitle p2Title">{p2Title}</Box>
                            <Box className="chapterText p2Text" py={3} >{p2Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P2 */}
                    <Grid item container direction="column" className="chapText" id="lp3-mobile" justify="center" >
                        <Box className="chapterTextContainer p3">
                            <Box className="chapterTitle p3Title">{p3Title}</Box>
                            <Box className="chapterText p3Text" py={3}>{p3Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P3 */}
                    <Grid item container direction="column" className="chapText" id="lp4-mobile" justify="center" >
                        <Box className="chapterTextContainer p4">
                            <Box className="chapterTitle p4Title">{p4Title}</Box>
                            <Box className="chapterText p4Text" py={3}>{p4Text}</Box>
                            <Box className="chapterText" py={3}>{p4Text2}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P4 */}
                    <Grid item container direction="column" className="chapText" id="lp5-mobile" justify="center" >
                        <Box className="chapterTextContainer p5">
                            <Box className="chapterTitle p5Title">{p5Title}</Box>
                            <Box className="chapterText p5Text" py={3}>{p5Text}</Box>
                        </Box>
                    </Grid>

                    {/* CHAPTER P5 */}
                    <Grid item container direction="column" className="chapText" id="lp6-mobile" justify="center">
                        <Box className="chapterTextContainer p6">
                            <Box className="chapterTitle p6Title">{p6Title}</Box>
                            <Box className="chapterText p6Text" py={3}>{p6Text}</Box>
                        </Box>
                    </Grid>
                </Grid>
                {/* Images go here */}
                {pageImages()}
            </Grid>
        </Box>
    )

}

export default Chapter