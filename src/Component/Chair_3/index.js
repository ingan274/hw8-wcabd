import React from "react";
import img1 from "../../Images/chair3-1.png";
import img2 from "../../Images/chair3-2.png";
import img3 from "../../Images/chair3-3.png";
import img4 from "../../Images/chair3-4.png";

const Chair3 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 890 1000">
            <defs>
                <clipPath id="clip-path">
                    <polygon className="cls-1" points="1476.035 -1021.121 1599.479 -727.626 1654.949 -247.632 1947.555 -485.675 1963.179 -935.478 1476.035 -1021.121" />
                </clipPath>
                <clipPath id="clip-path-2">
                    <polygon className="cls-1" points="1522.5 -1150.632 1507.731 -693.159 2012.547 -657.249 1896.659 -1095.179 1522.5 -1150.632" />
                </clipPath>
            </defs>
            <g id="Chair">
                <g id="chair3">
                    <image className="cp3" id="face1" transform="translate(286.654 152.866)" href={img1} />
                    <image className="cp3" id="face2" transform="translate(157.995 87.071)" href={img2} />
                    <image className="cp3" id="face3" transform="translate(436.802 534.711)" href={img3} />
                    <image className="cp3" id="face4" transform="translate(320.815 18.429)" href={img4} />
                </g>
            </g>
        </svg>

    )
}

export default Chair3;