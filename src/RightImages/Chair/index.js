import React, { useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-812.css";
import "./style_375-667.css";
import P1svg from "../../Component/Chair_1";
import P2svg from "../../Component/Chair_2";
import P3svg from "../../Component/Chair_3";
import P4svg from "../../Component/Chair_4";
import P5svg from "../../Component/Chair_5";
import P6svg from "../../Component/Chair_6";

gsap.registerPlugin(ScrollTrigger);

const Chair = (props) => {
    // Pin Animation
    function pinAnimation(element, top, bottom) {
        gsap.to(`${element}`, {
            scrollTrigger: {
                trigger: `${element}`,
                start: `top-=${top}%`,
                end: `bottom ${bottom}%`,
                pin: true,
                scrub: true,
                // markers: true
            }
        });
    }

    // Reusable Fade Out Function
    function fadeOut(element, trigger, distance) {
        gsap.fromTo(`${element}`, {
            opacity: 1
        }, {
            opacity: 0, scrollTrigger: {
                trigger: `${trigger}`,
                start: `top top-=${distance}%`,
                scrub: true,
                // markers: true,
            }
        })
    };

    // Reusable Fade In Function
    function fadeIn(element, trigger, distance) {
        let tlFadeIn = gsap.timeline({ paused: true });
        tlFadeIn.to(`${element}`, {
            opacity: 1,
            ease: 'power1',
        })

        ScrollTrigger.create({
            trigger: `${trigger}`,
            start: `top bottom-=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })
    };

    // Reusable Fade in and Out Function
    function fadeInOut(element, fadeInTrigger, distance1, fadeOutTrigger, distance2) {
        let tlFadeIn = gsap.timeline({ paused: true });
        let tlFadeOut = gsap.timeline({ paused: true });
        tlFadeIn.to(`${element}`, {
            opacity: 1,
            ease: 'power1',
        })

        tlFadeOut.to(`${element}`, {
            opacity: 0,
            ease: 'power1',
        })

        ScrollTrigger.create({
            trigger: `${fadeInTrigger}`,
            start: `top bottom-=${distance1}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: `${fadeOutTrigger}`,
            start: `top top-=${distance2}%`,
            scrub: true,
            onEnter: () => tlFadeOut.play(),
            onLeaveBack: () => tlFadeOut.reverse(),
            // markers: true,
        })
    };

    // Implementing animations
    useEffect(() => {
        // scroll bar standard code to start
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
        ScrollTrigger.defaults({ scroller: document.querySelector('.chapterPage') });


        // Pin All images
        pinAnimation(".chairp1", 0, 20);
        pinAnimation(".chairp2", 5, 10)
        pinAnimation(".chairp3", 3, 10)
        pinAnimation(".chairp4", .2, 35)
        pinAnimation(".chairp5", 1, 20)
        pinAnimation(".chairp6", 10, 0)

        // Page 1 Animations
        // #mid-chair #tall-chair #stool
        // On load animations
        gsap.from("#tall-chair", { duration: 1.5, opacity: 0 });
        gsap.from("#stool", { delay: 0.5, duration: 2, opacity: 0 });
        gsap.from("#mid-chair", { delay: 0.8, duration: 1.3, opacity: 0 });
        fadeOut('#tall-chair', ".p1Text", 2)
        fadeOut('#stool', ".p1Text", 15)
        fadeOut('#mid-chair', ".p1Text", 30)

        // Page 2 Animations
        fadeInOut('#throne', ".p2Text", 60, ".p2Text", 42)
        fadeInOut('#emp1', ".p2Text", 70, ".p2Text", 35)
        fadeInOut('#emp2', ".p2Text", 75, ".p2Text", 30)
        fadeInOut('#emp3', ".p2Text", 82, ".p2Text", 25)
        fadeInOut('#emp4', ".p2Text", 88, ".p2Text", 20)
        // Page 3 Animations
        fadeInOut('#face1', ".p3Text", 60, ".p3Text", 35)
        fadeInOut('#face2', ".p3Text", 72, ".p3Text", 30)
        fadeInOut('#face3', ".p3Text", 79, ".p3Text", 25)
        fadeInOut('#face4', ".p3Text", 84, ".p3Text", 20)
        // Page 4 Animations
        fadeIn('#weight', ".p4Title", 70)
        fadeIn('#falling_lines', ".p4Title", 70)

        let fallingWeight = gsap.fromTo("#weight", { y: 0 }, { y: 230 })
        ScrollTrigger.create({
            trigger: ".p4Title",
            start: "top top+=20%",
            // end: "+=500",
            animation: fallingWeight,
            // markers: true,
        });

        let fallingLines = gsap.fromTo("#falling_lines",  { y: 0 }, {y: 230, opacity: 0 })
        ScrollTrigger.create({
            trigger: ".p4Title",
            start: "top top+=20%",
            // end: "+=500",
            animation: fallingLines,
            // markers: true,
        });
        
        fadeInOut('#hitLines', ".p4Title", 80, ".p4Text", 20)

        // Page 5 Animations

        fadeInOut('#ada3-rocking', ".p5Text", 70, ".p5Text", 35)

        gsap.fromTo("#ada3-rocking", {rotation:-10, transformOrigin:"center center"}, {rotation: 5}).yoyo(true).repeat(100).timeScale(.1);

        fadeInOut('#ada2', ".p5Text", 75, ".p5Text", 30)
        fadeInOut('#ada1', ".p5Text", 79, ".p5Text", 25)
        
        // Page 6 Animations
        fadeIn('#cp6L', ".p6Text", 50)
        fadeIn('#cp6R', ".p6Text", 60)
        fadeIn('#cp6words', ".p6Text", 70)
        fadeIn('#cp6qL', ".p6Text", 75)
        fadeIn('#cp6qR', ".p6Text", 79)

        gsap.fromTo("#cp6qL", {rotation:-10, transformOrigin:"center center"}, {rotation: 10}).yoyo(true).repeat(100).timeScale(.2);
        gsap.fromTo("#cp6qR", {rotation:25, transformOrigin:"center center"}, {rotation: -15}).yoyo(true).repeat(100).timeScale(.1);

    })

    return (
        <Grid item container direction="column" xs={12} lg={6} className="chapterImages">
            {/* CHAPTER P0 */}
            <Grid item container direction="column" className="chapImage" justify="center">
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp1">
                    <Box id="chair1"><P1svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P1 */}
            <Grid item container direction="column" className="chapImage">
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp2">
                    <Box id="chair2"><P2svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P2 */}
            <Grid item container direction="column" className="chapImage">
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp3">
                    <Box id="chair3"><P3svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P3 */}
            <Grid item container direction="column" className="chapImage" >
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp4">
                    <Box id="chair4"><P4svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P4 */}
            <Grid item container direction="column" className="chapImage">
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp5">
                    <Box id="chair5"><P5svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P5 */}
            <Grid item container direction="column" className="chapImage" >
                <Box item="true" container="true" direction="column" className="chapterImageContainer chairp6">
                    <Box id="chair6"><P6svg /></Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Chair;
