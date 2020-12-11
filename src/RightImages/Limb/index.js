import React, { useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-812.css";
import "./style_375-667.css";
import "./style.css";
import Imagep1 from "../../Component/Limb_1";
import Imagep23 from "../../Component/Limb_2_3";
import Imagep4 from "../../Component/Limb_4";
import Imagep56 from "../../Component/Limb_5_6";
gsap.registerPlugin(ScrollTrigger);

const Limb = (props) => {

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

    // Page 1 Animation Function
    function p1FadeOut(element) {
        gsap.fromTo(`${element}`, {
            opacity: 1
        }, {
            opacity: 0, scrollTrigger: {
                trigger: "#l1Hand",
                start: "top+=120% top+=10%",
                end: "bottom+=250%",
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
            start: `top top+=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: ".p2Title",
            start: "bottom top-=60%",
            scrub: true,
            onEnter: () => tlFadeOut.play(),
            onLeaveBack: () => tlFadeOut.reverse(),
            // markers: true,
        })
    };

    function p2FadeInBody(element) {
        gsap.from(`${element}`, {
            opacity: 0, scrollTrigger: {
                trigger: "#limbBody1",
                start: "top+=80% bottom-=80%",
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
            start: `top top+=${distance}%`,
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
            trigger: ".p4",
            start: `top top+=${distance}%`,
            scrub: true,
            onEnter: () => tlFadeIn.play(),
            onLeaveBack: () => tlFadeIn.reverse(),
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: ".p4",
            start: "bottom 80%",
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


        //  Initial pinning
        pinAnimation(".imagePin_limb3", 1, 80)
        pinAnimation(".limbPart4", 5, 30)
        pinAnimation(".lLast", 1, 0)
        // Page 1 animations
        p1FadeOut("#limbp1-arm");
        p1FadeOut("#limbBody1");

        // Page 2 animations
        // Fade in animations!!
        p2FadeInBody('#limbBody2');
        p2FadeInOut('#army1', 60);
        p2FadeInOut('#army2', 15);
        p2FadeInOut('#army3', 30);
        p2FadeInOut('#army4', 80);

        // Page 3 Animations
        p3FadeIn('#prosth1', 60);
        p3FadeOut('#prosth1', 45);

        p3FadeIn('#prosth2', 40);
        p3FadeOut('#prosth2', 25);

        p3FadeIn('#prosth3', 20);

        p3FadeOut('#prosth3', .5);
        p3FadeOut('#limbBody2', .5);

        // Page 4 Animations
        p4FadeInOut('#lp41', 80)
        p4FadeInOut('#lp42', 30)

        // Page 5 and 6 Animations
        fadeIn("#blur-sides", ".lLast", 30)
        fadeIn("#blur-body", ".lLast", 10)
        fadeIn("#lp61", ".p6Title", 80)
        fadeIn("#lp62", ".p6Title", 70)
        fadeIn("#lp63", ".p6Title", 60)

    })

    return (
        <Grid item container direction="column" xs={12} lg={6} className="chapterImages">

            {/* Page 1, 2, and 3 */}
            <Box item="true" className="imagePin_limb3">
                {/* Page 1 */}
                <Box id="limbBody1"><Imagep1 /></Box>
                {/* Page 2 and 3 */}
                <Box id="limbBody23"><Imagep23 /></Box>
            </Box>
            {/* Page 4 */}
            <Grid item container direction="column" className="chapImage" >
                <Box item="true" className="chapterImageContainer limbPart4">
                    <Box id="limbBody4"><Imagep4 /></Box>
                </Box>
            </Grid>
            {/* Page 5 and 6 */}
            <Box item="true" className="lLast">
                <Box id="limbBody56"><Imagep56 /></Box>
            </Box>


        </Grid>
    )
}

export default Limb;

// hand middle top ids