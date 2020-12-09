import React, { useEffect } from "react";
import { Grid, Box, CardMedia } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import "./style.css";
import Imagep1 from "../../Component/Limb_1";
import Imagep2 from "../../Component/LimbBody";
import p2limb1 from "../../images/limb2-1.1.png" //armL 4
import p2limb2 from "../../images/limb2-1.2.png" //leg 1
import p2limb3 from "../../images/limb2-1.3.png" //head 2
import p2limb4 from "../../images/limb2-1.png" //armR 3
import p3limb1 from "../../images/limb2-1_1.png";
import p3limb2 from "../../images/limb2-2.png";
import p3limb3 from "../../images/limb2-3.png";
import p4limb1 from "../../images/limb3-1.png";
import p4limb2 from "../../images/limb3-2.png";
import Page5Back from "../../Component/Limb_5";
import p6limb1 from "../../images/limb6-1.png";
import p6limb2 from "../../images/limb6-2.png";
import p6limb3 from "../../images/limb6-3.png";
gsap.registerPlugin(ScrollTrigger);

const Limb = (props) => {
    // Page 1 Animation Function
    function p1FadeOut(element) {
        gsap.fromTo(`${element}`, {
            opacity: 1
        }, {
            opacity: 0, scrollTrigger: {
                trigger: "#l1Hand",
                start: "top top+=5%",
                scrub: true,
                // markers: true,
            }
        })
    };

    // Page 2 Animation Functions
    function p2FadeInOut(element, distance) {
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
            trigger: ".p2Title",
            start: `top bottom-=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: ".p2Title",
            start: "top top-=14.3%",
            scrub: true,
            onEnter: () => tlFadeOut.play(),
            onLeaveBack: () => tlFadeOut.reverse(),
            // markers: true,
        })
    };

    function p2FadeInBody(element) {
        gsap.from(`${element}`, {
            opacity: 0, scrollTrigger: {
                trigger: ".p2Title",
                start: `top bottom+=20%`,
                scrub: true,
                // markers: true,
            }
        })
    };

    // Page 3 Animation 
    function p3FadeIn(element, distance) {
        let tlFadeIn = gsap.timeline({ paused: true });
        tlFadeIn.to(`${element}`, {
            opacity: 1,
            ease: 'power1',
        })

        ScrollTrigger.create({
            trigger: ".p3Title",
            start: `top bottom-=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

    };

    function p3FadeOut(element, distance) {
        let tlFadeOut = gsap.timeline({ paused: true });

        tlFadeOut.to(`${element}`, {
            opacity: 0,
            ease: 'power1',
        })

        ScrollTrigger.create({
            trigger: ".p3Text",
            start: `top top+=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeOut.play(),
            onLeaveBack: () => tlFadeOut.reverse(),
            // markers: true,
        })
    };

    // Page 4 Animation 
    function p4FadeInOut(element, distance) {
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
            trigger: ".p4Title",
            start: `top bottom-=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: ".p4Title",
            start: "top top-=60%",
            scrub: true,
            onEnter: () => tlFadeOut.play(),
            onLeaveBack: () => tlFadeOut.reverse(),
            // markers: true,
        })
    };

    // Implementing animations
    useEffect(() => {
        // On load animations
        gsap.from("#l1Top", { duration: 1.5, opacity: 0 });
        gsap.from("#l1Middle", { delay: 0.5, duration: 1, opacity: 0 });
        gsap.from("#l1Hand", { delay: 0.8, duration: 1, opacity: 0 });
        // Page 2 timeline

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


        // Page 1 animations
        gsap.to('.imagePin_limb3', {
            scrollTrigger: {
                trigger: ".imagePin_limb3",
                start: "top top",
                end: "bottom 10%",
                pin: true,
                scrub: true,
                // markers: true
            }
        });

        p1FadeOut("#limbp1-arm");
        p1FadeOut("#limbBody1");

        // Page 2 animations
        // Fade in animations!!
        p2FadeInBody('#limbBody2');
        p2FadeInOut('#army1', 20);
        p2FadeInOut('#army2', 10);
        p2FadeInOut('#army3', 5);
        p2FadeInOut('#army4', 15);

        // Page 3 Animations
        p3FadeIn('#evolution1', 10);
        p3FadeOut('#evolution1', 80);

        p3FadeIn('#evolution2', 40);
        p3FadeOut('#evolution2', 38);

        p3FadeIn('#evolution3', 90);

        // Page 4 Animations
        gsap.to('.limbPart4', {
            scrollTrigger: {
                trigger: ".limbPart4",
                start: "top top",
                end: "bottom 60%",
                pin: true,
                scrub: true,
                // markers: true
            }
        });

        p4FadeInOut('#cyborg1', 80);
        p4FadeInOut('#cyborg2', 100);

        // Page 5 and 6 Animations
        gsap.to('#limbPart56', {
            scrollTrigger: {
                trigger: "#limbPart56",
                start: "top top",
                end: "bottom -79.5%",
                pin: true,
                scrub: true,
                // markers: true
            }
        });

        gsap.from('#limb56', {
            opacity: 0, scrollTrigger: {
                trigger: ".p5Title",
                start: "top bottom-=50%",
                scrub: true,
                // markers: true,
            }
        })

        gsap.from('#limbp61', {
            opacity: 0, scrollTrigger: {
                trigger: ".p6Title",
                start: "top bottom-=40%",
                scrub: true,
                // markers: true,
            }
        })

        gsap.from('#limbp62', {
            opacity: 0, scrollTrigger: {
                trigger: ".p6Title",
                start: "top bottom-=60%",
                scrub: true,
                // markers: true,
            }
        })

        gsap.from('#limbp63', {
            opacity: 0, scrollTrigger: {
                trigger: ".p6Title",
                start: "top bottom-=70%",
                scrub: true,
                // markers: true,
            }
        })

    })

    return (
        <Grid item container direction="column" xs={12} md={6} className="chapterImages">
            <Box className="p3Top3">
                <Box className="chapImage">
                    {/* Page 1, 2, and 3 */}
                    <Box item="true" className="imagePin_limb3 p1_2_3">
                        {/* Page 1 */}
                        <Box id="limbBody1"><Imagep1 /></Box>
                        {/* Page 2 */}
                        <Box id="limbBody2"><Imagep2 /></Box>

                        <CardMedia className="limb2" id="army1" src={p2limb1} component="img" />
                        <CardMedia className="limb2" id="army2" src={p2limb2} component="img" />
                        <CardMedia className="limb2" id="army3" src={p2limb3} component="img" />
                        <CardMedia className="limb2" id="army4" src={p2limb4} component="img" />
                        {/* Page 3 */}
                        <CardMedia className="limb3" id="evolution1" src={p3limb1} component="img" />
                        <CardMedia className="limb3" id="evolution2" src={p3limb2} component="img" />
                        <CardMedia className="limb3" id="evolution3" src={p3limb3} component="img" />
                    </Box>
                </Box>
            </Box>
            {/* Page 4 */}
            <Box item="true" className="chapterImageContainer limbPart4">
                <CardMedia className="limb4" id="cyborg1" src={p4limb1} component="img" />
                <CardMedia className="limb4" id="cyborg2" src={p4limb2} component="img" />
            </Box>

            {/* Page 5 and 6 */}
            <Box item="true" className="chapterImageContainer lLast" id='limbPart56'>
                <Box id="limb56"><Page5Back /></Box>
                {/* Page 6 */}
                <CardMedia className="limb6" id="limbp61" src={p6limb1} component="img" />
                <CardMedia className="limb6" id="limbp62" src={p6limb2} component="img" />
                <CardMedia className="limb6" id="limbp63" src={p6limb3} component="img" />
            </Box>


        </Grid>
    )
}

export default Limb;

// hand middle top ids