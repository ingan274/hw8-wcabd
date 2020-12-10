import React, { useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import "./style.css";
import P1svg from "../../Component/Chair_1";
import P2svg from "../../Component/Chair_2";
import P4svg from "../../Component/Chair_4";
import P5svg from "../../Component/Chair_5";
import P6svg from "../../Component/Chair_6";
// import p2chair1 from "../../images/chair2-2.png" 
// import p2chair2 from "../../images/chair2-3.png" 
// import p2chair3 from "../../images/chair2-4.png" 
// import p2chair4 from "../../images/chair2-5.png"
// import p3chair1 from "../../images/chair3-1.png"
// import p3chair2 from "../../images/chair3-2.png"
// import p3chair3 from "../../images/chair3-3.png" 
// import p3chair4 from "../../images/chair3-4.png" 
// import p4chair1 from "../../images/chair4.png"

gsap.registerPlugin(ScrollTrigger);

const Chair = (props) => {
    // Pin Animation
    function pinAnimation(element,top, bottom) {
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
                start: `top top+=${distance}%`,
                end: `bottom top-=${distance}%`,
                scrub: true,
                // markers: true,
            }
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


        // Pin All images
        pinAnimation(".chairp1", 0, 30);
        pinAnimation(".chairp2", 5, 40)
        pinAnimation(".chairp3", 4, 50)
        pinAnimation(".chairp4", 15, 50)
        pinAnimation(".chairp5", .5, 40)
        pinAnimation(".chairp6", 0, 10)

        // Page 1 Animations
        // #mid-chair #tall-chair #stool
        // On load animations
        gsap.from("#tall-chair", { duration: 1.5, opacity: 0 });
        gsap.from("#stool", { delay: 0.5, duration: 1, opacity: 0 });
        gsap.from("#mid-chair", { delay: 0.8, duration: 1, opacity: 0 });
        fadeOut('#tall-chair', ".p1Text", 3)
        fadeOut('#stool', ".p1Text", 18)
        fadeOut('#mid-chair', ".p1Text", 40)


        // Page 2 Animations
        // Page 3 Animations
        // Page 4 Animations
        // Page 5 Animations
        // Page 6 Animations

    })

    return (
        <Grid item container direction="column" xs={12} md={6} className="chapterImages">
            {/* CHAPTER P0 */}
            <Grid item container direction="column" className="chapImage" justify="center">
                <Box item="true" container direction="column" className="chapterImageContainer chairp1">
                    <Box id="chair1"><P1svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P1 */}
            <Grid item container direction="column" className="chapImage">
                <Box item="true" container direction="column" className="chapterImageContainer chairp2">
                    <Box id="chair2"><P2svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P2 */}
            <Grid item container direction="column" className="chapImage" justify="center">
                <Box className="chapterImageContainer chairp3">

                </Box>
            </Grid>

            {/* CHAPTER P3 */}
            <Grid item container direction="column" className="chapImage" justify="center" >
                <Box className="chapterImageContainer chairp4">
                    <Box id="chair4"><P4svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P4 */}
            <Grid item container direction="column" className="chapImage" justify="center">
                <Box className="chapterImageContainer chairp5">
                    <Box id="chair5"><P5svg /></Box>
                </Box>
            </Grid>

            {/* CHAPTER P5 */}
            <Grid item container direction="column" className="chapImage" justify="center">
                <Box className="chapterImageContainer chairp6">
                    <Box id="chair6"><P6svg /></Box>
                </Box>


            </Grid>
        </Grid>
    )
}

export default Chair;
