"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 9057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_us),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(5029);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/queries/about-us.ts

const GET_ABOUTUS_LANDING = client_.gql`
    query ($label: String) {
        landings(filters: { label: { eq: $label } }) {
            data {
                attributes {
                    name
                    label
                    banners {
                        data {
                            attributes {
                                name
                                label
                                title
                                subtitle
                                description
                                isFloating
                                top
                                left
                                right
                                bottom
                                haveAction
                                actionLabel
                                actionRoute
                                hero {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                background {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                            }
                        }
                    }
                    video_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                label
                                video
                            }
                        }
                    }
                    mission_and_vision_banner {
                        data {
                            attributes {
                                title
                                subtitle
                                mission
                                vision
                                missionIcon {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                visionIcon {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                background {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useAboutUs.ts
const useAboutUs = ({ attributes  })=>{
    const { name , banners , video_boxes , mission_and_vision_banner  } = attributes;
    const bannerAttrs = banners.data.filter((a)=>a.attributes.label === "about-us-banner"
    )[0].attributes;
    const briefAttrs = banners.data.filter((a)=>a.attributes.label === "about-us-brief-banner"
    )[0].attributes;
    const mAvfAttrs = mission_and_vision_banner.data.attributes;
    const videoBoxttrs = video_boxes.data.filter((a)=>a.attributes.label === "best-place-to-work"
    )[0].attributes;
    return {
        bannerAttrs,
        briefAttrs,
        mAvfAttrs,
        videoBoxttrs
    };
};
/* harmony default export */ const hooks_useAboutUs = (useAboutUs);

// EXTERNAL MODULE: ./src/components/general/simple-banner/SimpleBanner.tsx
var SimpleBanner = __webpack_require__(9811);
;// CONCATENATED MODULE: ./src/components/general/yt-embed/YoutubeEmbed.tsx


const YoutubeEmbed = ({ id  })=>{
    if (!id) return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: "Error on video load"
    }));
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center rounded-xl overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
            // width="1135"
            // height="575"
            className: "w-full min-w-[90vw] md:min-w-[80vw] h-60 md:h-[575px]",
            src: `https://www.youtube.com/embed/${id}`,
            title: "YouTube video player",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        })
    }));
};
/* harmony default export */ const yt_embed_YoutubeEmbed = (YoutubeEmbed);

;// CONCATENATED MODULE: ./src/components/general/video-box/VideoBox.tsx


const VideoBox = ({ title , video  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center flex-col px-4 md:px-14 py-4 md:py-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "mt-8 md:mt-0 mb-8 md:mb-20 font-istok font-bold text-2xl text-nt-orange uppercase",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(yt_embed_YoutubeEmbed, {
                id: video
            })
        ]
    }));
};
/* harmony default export */ const video_box_VideoBox = (VideoBox);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/general/hero/Hero.tsx
var Hero = __webpack_require__(6216);
;// CONCATENATED MODULE: ./src/components/about-us/banner/AboutUsBanner.tsx





const BannerBox = (external_styled_components_default()).div`
    background-image: url("${(p)=>p.image
}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
const AboutUsBanner = ({ title , subtitle , description , hero , background , isFloating , haveAction , actionLabel , actionRoute , centered , styles  })=>{
    var ref, ref1, ref2, ref3;
    const { formats: heroFormats  } = (hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref1 = background.data) === null || ref1 === void 0 ? void 0 : ref1.attributes) ?? {};
    const hrRef = (0,external_react_.useRef)(`${"http://localhost:1337"}${(heroFormats === null || heroFormats === void 0 ? void 0 : (ref2 = heroFormats.medium) === null || ref2 === void 0 ? void 0 : ref2.url) ?? (heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.thumbnail.url)}`);
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref3 = bgFormats.large) === null || ref3 === void 0 ? void 0 : ref3.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    const centerClassName = external_clsx_default()({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(BannerBox, {
        image: bgUri.current,
        className: `px-4 py-8 md:px-14 md:py-24 relative flex items-center ${centerClassName} min-h-[500px] ${styles} overflow-hidden`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `grid gap-3 grid-cols-1 md:grid-cols-2`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: heroFormats ? /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                        styles: `relative z-10`,
                        hrRef: hrRef.current,
                        width: heroFormats.large.width,
                        height: heroFormats.large.height,
                        alt: title,
                        priority: true
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `w-80 h-80 bg-green-500`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-4 px-4 md:px-24 py-8 md:py-12 text-center md:text-left border border-white rounded-2xl flex items-center justify-center flex-col",
                    children: [
                        subtitle ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: `font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`,
                            children: subtitle
                        }) : null,
                        title ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: `font-raleway font-bold leading-complete text-white text-[34px] pb-9`,
                            children: title
                        }) : null,
                        description ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-raleway text-white font-medium leading-complete text-[18px] pb-9",
                            children: description
                        }) : null
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const banner_AboutUsBanner = (AboutUsBanner);

;// CONCATENATED MODULE: ./assets/images/mission.png
/* harmony default export */ const images_mission = ({"src":"/_next/static/media/mission.64e3bf69.png","height":43,"width":51,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAq0lEQVR42mMAgX/eDsxQOhCIv/zzdrSFi4MZPkAGhLYE4ulABQZQBUwQBQVZMBN2ALE+mN3fDdUdHcQGpgPdI4CS///5OB7/x8DAAcIMMADkOP+zVL/5z8/5/z9Xy1//UmKP/utoboBJyvw7c/rnvzWr7v9TYHj9L8Dt/z9P2y//ejru/+tqtWD4F+E3+d/BfZ/+rV1145+O4Hqggo//nEzf/UuOufSvpmwVANeaWt1DvX02AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/images/vision.png
/* harmony default export */ const images_vision = ({"src":"/_next/static/media/vision.c4934e29.png","height":33,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAq0lEQVR4nBWOOw4BYRSFz/UqrIBGQsIGbGCmE6xCRCh0OhGdaIlkGjuRqFRTEPtQaEimmLnz/cXJd3PuuQ8rpvFC7iNJb3RFX5n95FRSxYpJdKJI0FGmHqzRfBBawywEupLdJW8SOBOo09jDFMaciBK5LWV+wBxgfmCDoRlDq7Chj5Gy8g8vmDS1Q09C4xCA6jDJg9ZW+EH+ghv8bQhUKXLO4KlFE2iOhvi3EgWmM1M6rOReAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/about-us/mission-vision/title/Title.tsx


const Title = ({ icon , title , subtitle , label , message  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-left flex items-center md:items-start justify-center md:justify-start flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `relative w-16 h-16 flex items-center justify-start`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: icon,
                            width: "48",
                            height: "40",
                            alt: `${title}, ${subtitle}`,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "uppercase font-istok text-nt-orange font-bold text-2xl",
                        children: label
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center md:text-left font-raleway font-medium text-xl mb-3",
                children: message
            })
        ]
    }));
};
/* harmony default export */ const title_Title = (Title);

;// CONCATENATED MODULE: ./src/components/about-us/mission-vision/MissionVission.tsx






const MissionVission_BannerBox = (external_styled_components_default()).div`
    background-image: linear-gradient(
            to left,
            rgba(245, 245, 245, 0.3) 45%,
            rgba(245, 245, 245, 1) 50%
        ),
        url("${(p)=>p.image
}");

    @media screen and (max-width: 700px) {
        background-image: linear-gradient(
                to top,
                rgba(245, 245, 245, 0.3) 0%,
                rgba(245, 245, 245, 1) 40%
            ),
            url("${(p)=>p.image
}");
        background-position: bottom;
    }
`;
const MissionVission = ({ title , subtitle , mission , vision , missionIcon , visionIcon , background  })=>{
    var ref, ref1;
    console.log({
        missionIcon,
        visionIcon
    });
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref = background.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MissionVission_BannerBox, {
        image: bgUri.current,
        className: `px-8 md:px-[153px] py-24 relative flex items-center justify-center flex-col overflow-hidden bg-no-repeat bg-contain bg-right`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "hidden md:flex font-istok font-bold text-2xl tracking-wider uppercase text-nt-orange mb-8 md:mb-16",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid gap-3 grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(title_Title, {
                                label: "Mission",
                                message: mission,
                                icon: images_mission,
                                title,
                                subtitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(title_Title, {
                                label: "Vision",
                                message: vision,
                                icon: images_vision,
                                title,
                                subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const mission_vision_MissionVission = (MissionVission);

;// CONCATENATED MODULE: ./src/components/about-us/flags/Flags.tsx



const FlagBox = (external_styled_components_default()).div`
    background-image: url("${(p)=>p.image
}");
`;
const Flags = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FlagBox, {
        image: `${"http://localhost:1337"}/uploads/flags_1d1a134a5e.png`,
        className: "bg-nt-bg-blue text-white h-20 md:h-52 bg-no-repeat bg-center bg-contain"
    }));
};
/* harmony default export */ const flags_Flags = (Flags);

;// CONCATENATED MODULE: ./src/landings/AboutUsLanding.tsx








const AboutUsLanding = ({ data  })=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)(Object.assign({}, data));
    const { bannerAttrs , briefAttrs , mAvfAttrs , videoBoxttrs  } = hooks_useAboutUs(state);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SimpleBanner/* default */.Z, {
                ...bannerAttrs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(banner_AboutUsBanner, {
                ...briefAttrs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mission_vision_MissionVission, {
                ...mAvfAttrs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(flags_Flags, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(video_box_VideoBox, {
                ...videoBoxttrs
            })
        ]
    }));
};
/* harmony default export */ const landings_AboutUsLanding = (AboutUsLanding);

;// CONCATENATED MODULE: ./pages/about-us.tsx





const AboutUs = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NovaTech - About Us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(landings_AboutUsLanding, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const about_us = (AboutUs);
async function getServerSideProps() {
    const { loading , error , data  } = await apollo/* apolloCon.query */.Y.query({
        query: GET_ABOUTUS_LANDING,
        variables: {
            label: "about-us-landing"
        }
    });
    return {
        props: {
            data: data.landings.data[0]
        }
    };
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,46,811], () => (__webpack_exec__(9057)));
module.exports = __webpack_exports__;

})();