"use strict";
(() => {
var exports = {};
exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 5029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ apolloCon)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const uri = `${"http://localhost:1337"}/graphql` || 0;
const apolloCon = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});


/***/ }),

/***/ 4528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5029);
/* harmony import */ var _queries_nearshore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4925);
/* harmony import */ var src_landings_NearshoreLanding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_landings_NearshoreLanding__WEBPACK_IMPORTED_MODULE_4__]);
src_landings_NearshoreLanding__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Nearshore = ({ data  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "NovaTech - Services"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_landings_NearshoreLanding__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nearshore);
async function getServerSideProps() {
    const { loading , error , data  } = await _lib_apollo__WEBPACK_IMPORTED_MODULE_2__/* .apolloCon.query */ .Y.query({
        query: _queries_nearshore__WEBPACK_IMPORTED_MODULE_3__/* .GET_NEARSHORE_LANDING */ .V,
        variables: {
            label: "nearshore-landing"
        }
    });
    return {
        props: {
            data: data.landings.data[0]
        }
    };
}

});

/***/ }),

/***/ 9838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ accordion_Accordion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/nearshore/accordion/helpers.ts
const getHeroUri = (hero)=>{
    var ref, ref1;
    const { formats  } = hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes;
    return `${"http://localhost:1337"}${formats === null || formats === void 0 ? void 0 : (ref1 = formats.small) === null || ref1 === void 0 ? void 0 : ref1.url}`;
};

;// CONCATENATED MODULE: ./src/components/nearshore/accordion/info/AccordionInfo.tsx



const AccordionInfo = ({ title , subtitle , icon , active  })=>{
    const isActive = active.title === title;
    const descriptionClassName = external_clsx_default()({
        ["text-white"]: isActive,
        ["hidden"]: !isActive
    });
    const iconClassName = external_clsx_default()({
        ["border-white text-white"]: isActive,
        ["border-nt-bg-blue text-nt-bg-blue"]: !isActive
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `absolute right-[-10px] flex justify-center items-center rounded-full w-[18px] h-[18px] border ${iconClassName}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-[13px]",
                    children: !isActive ? "+" : "-"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-bold font-istok text-xl pr-6",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `${descriptionClassName} font-raleway text-base text-white font-normal mt-3 pr-7 w-full`,
                children: subtitle
            })
        ]
    }));
};
/* harmony default export */ const info_AccordionInfo = (AccordionInfo);

;// CONCATENATED MODULE: ./src/components/nearshore/accordion/Accordion.tsx







const AccordionBox = (external_styled_components_default()).div``;
const Accordion = ({ title: title1 , subtitle: subtitle1 , info_cards  })=>{
    const { data  } = info_cards;
    const { 0: active , 1: setActive  } = (0,external_react_.useState)({
        ...data[0].attributes
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center flex-col py-8 px-4 md:py-20 md:px-40 w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "uppercase font-istok font-bold text-2xl text-center tracking-wider mb-14",
                children: title1
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid gap-3 grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "order-2 md:order-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `relative flex items-center justify-center w-[550-px] h-[550px]`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: getHeroUri(active.hero),
                                width: 550,
                                height: 550,
                                className: "transition-all",
                                alt: active.title,
                                draggable: false,
                                priority: true
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "order-1 md:order-2",
                        children: data.map(({ attributes: { title , subtitle , icon , hero  }  })=>{
                            const activeClassName = external_clsx_default()({
                                ["bg-nt-bg-blue text-white"]: active.title === title,
                                ["bg-gray-200"]: active.title !== title
                            });
                            return(/*#__PURE__*/ jsx_runtime_.jsx(AccordionBox, {
                                className: `w-full cursor-pointer ${activeClassName} mb-9 py-5 px-6 rounded-3xl transition-all`,
                                onClick: (e)=>setActive({
                                        title,
                                        subtitle,
                                        icon,
                                        hero
                                    })
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(info_AccordionInfo, {
                                    title,
                                    subtitle,
                                    icon,
                                    active
                                })
                            }, title));
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const accordion_Accordion = (Accordion);


/***/ }),

/***/ 9690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _swiper_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation
]);
const CarouselBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    margin-left: 15rem;
    background-color: ${(p)=>p.bgColor
};
    background-image: url("${(p)=>p.image
}");
    background-repeat: no-repeat;
    background-position: 0 1rem;
`;
const CarouselFooter = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().footer)`
    width: 100%;
    padding-left: 15rem;
`;
const data = [
    {
        title: "The problem",
        bgColor: "#1F2234",
        bg: `${"http://localhost:1337"}/uploads/The_Problem_4aad6be722.png`,
        cols: "grid-cols-3",
        hints: [
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "",
                icon: ""
            },
            {
                hint: "By 2022, 60% of the world’s GDP will be digitized",
                title: "",
                icon: ""
            },
            {
                hint: "It takes 50% longer to hire in tech than and other industry",
                title: "",
                icon: ""
            },
            {
                hint: "It takes 70 days on average to fill a tech position ",
                title: "",
                icon: ""
            },
            {
                hint: "US$110k: median programmer salary in the U.S.",
                title: "",
                icon: ""
            },
            {
                hint: "61% of recruiters cited finding qualified developers as their biggest challenge in 2021",
                title: "",
                icon: ""
            }, 
        ]
    },
    {
        title: "",
        bgColor: "#1F2234",
        bg: "",
        cols: "grid-cols-3",
        hints: [
            ,
            {
                hint: "61% of recruiters cited finding qualified developers as their biggest challenge in 2021",
                title: "",
                icon: ""
            },
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "",
                icon: ""
            },
            {
                hint: "It takes 50% longer to hire in tech than and other industry",
                title: "",
                icon: ""
            },
            {
                hint: "It takes 70 days on average to fill a tech position ",
                title: "",
                icon: ""
            },
            {
                hint: "US$110k: median programmer salary in the U.S.",
                title: "",
                icon: ""
            }, 
        ]
    },
    {
        title: "The solution",
        bgColor: "#FF4C41",
        bg: `${"http://localhost:1337"}/uploads/The_solution_6e6a0cdb35.png`,
        cols: "grid-cols-2",
        hints: [
            {
                hint: "Quickly fill tech team gaps or source a full tech team in weeks rather than months",
                title: "Speed and scalability",
                icon: ""
            },
            {
                hint: "Broaden skillset from core capabilities to specialized skills",
                title: "Skills",
                icon: ""
            },
            {
                hint: "Transfer of vast software development experience and best practices from multiple industry verticals",
                title: "Experience",
                icon: ""
            },
            {
                hint: "Outsource resources at rates that are a fraction of onshore costs",
                title: "Experience",
                icon: ""
            }, 
        ]
    },
    {
        title: "",
        bgColor: "#FF4C41",
        bg: "",
        cols: "grid-cols-2",
        hints: [
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "Speed and scalability",
                icon: ""
            }, 
        ]
    }, 
];
const TheProblemCarousel = ()=>{
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(`${"http://localhost:1337"}/uploads/image_20_489b090ca1.png?updated_at=2022-01-21T23:04:52.079Z`);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center flex-col bg-neutral-100 pt-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute z-10 left-[2rem] top-[4.3rem]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    src: bgUri.current,
                    width: 327,
                    height: 450,
                    alt: "The Problem",
                    priority: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                ..._swiper_config__WEBPACK_IMPORTED_MODULE_6__/* .settings */ .X,
                className: "w-full pt-10",
                children: data.map(({ title: title1 , bg , bgColor , cols , hints  }, index1)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CarouselBox, {
                            bgColor: bgColor,
                            image: bg,
                            className: "flex items-start justify-center flex-col pl-36 pr-6 pb-20 h-screen md:h-[500px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-raleway font-bold text-4xl text-white mb-6 pt-24",
                                    children: title1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `grid gap-5 ${cols}`,
                                    children: hints.map(({ title , hint  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-start justify-center px-5 pt-5 pb-8 rounded-3xl text-white bg-nt-glass flex-col md:min-h-[130px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "uppercase mb-3 font-bold",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-raleway font-medium text-xl",
                                                    children: hint
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            ]
                        })
                    }, index1)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarouselFooter, {
                className: "text-left py-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-[#797979] text-xs font-raleway",
                    children: "Source: Gartnet 2021 Challenge"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheProblemCarousel);

});

/***/ }),

/***/ 1454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ settings)
/* harmony export */ });
const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: false,
    pagination: {
        clickable: true
    },
    autoplay: {
        delay: 1000000,
        disableOnInteraction: false
    }
};


/***/ }),

/***/ 9053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ maps_Maps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/nearshore/maps/map/Map.tsx





const MapBoxTitle = (external_styled_components_default()).div`
    color: ${(p)=>p.color
};
`;
const Map = ({ title , subtitle , label , description , color , hero  })=>{
    var ref;
    const { formats  } = hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes;
    const { small: size  } = formats;
    const hrRef = (0,external_react_.useRef)(`${"http://localhost:1337"}${size === null || size === void 0 ? void 0 : size.url}`);
    const marginStyles = external_clsx_default()({
        ["mt-12"]: size.height < size.width
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-items-start flex-col py-16 px-9",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MapBoxTitle, {
                color: color,
                className: "uppercase text-center font-raleway text-2xl mb-3",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white font-raleway font-medium text-base text-center mb-7 min-h-[4rem]",
                children: description
            }),
            formats ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `relative text-center flex items-center justify-center ${marginStyles} px-14`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: hrRef.current,
                    width: size.width,
                    height: size.height,
                    draggable: false,
                    alt: `${title}, ${subtitle}`,
                    priority: true
                })
            }) : // <img className="min-w-[300px]" src={hrRef.current} alt={`${title}, ${subtitle}`} />
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[70px] h-[70px] bg-white rounded-2xl"
            })
        ]
    }));
};
/* harmony default export */ const map_Map = (Map);

;// CONCATENATED MODULE: ./src/components/nearshore/maps/Maps.tsx


const Maps = ({ maps  })=>{
    const { data  } = maps;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-between flex-col bg-nt-bg-blue",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid gap-3 grid-cols-1 md:grid-cols-3",
            children: data.map(({ attributes: { title , subtitle , label , description , color , hero ,  }  })=>/*#__PURE__*/ jsx_runtime_.jsx(map_Map, {
                    title,
                    subtitle,
                    label,
                    description,
                    color,
                    hero
                }, label)
            )
        })
    }));
};
/* harmony default export */ const maps_Maps = (Maps);


/***/ }),

/***/ 9221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useNearshore = ({ attributes  })=>{
    const { banners , map_boxes , info_card_boxes  } = attributes;
    const nearshoreAttrs = banners.data[0].attributes;
    const mapAttrs = map_boxes.data[0].attributes;
    const infoCardsAttrs = info_card_boxes.data[0].attributes;
    return {
        nearshoreAttrs,
        mapAttrs,
        infoCardsAttrs
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNearshore);


/***/ }),

/***/ 6937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general_simple_banner_SimpleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9811);
/* harmony import */ var _components_nearshore_maps_Maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9053);
/* harmony import */ var _components_nearshore_accordion_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9838);
/* harmony import */ var _components_nearshore_carousel_TheProblemCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9690);
/* harmony import */ var _hooks_useNearshore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_nearshore_carousel_TheProblemCarousel__WEBPACK_IMPORTED_MODULE_5__]);
_components_nearshore_carousel_TheProblemCarousel__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const NearshoreLanding = ({ data  })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object.assign({}, data));
    const { nearshoreAttrs , mapAttrs , infoCardsAttrs  } = (0,_hooks_useNearshore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(state);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_simple_banner_SimpleBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...nearshoreAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nearshore_maps_Maps__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...mapAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nearshore_carousel_TheProblemCarousel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nearshore_accordion_Accordion__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                ...infoCardsAttrs
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NearshoreLanding);

});

/***/ }),

/***/ 4925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ GET_NEARSHORE_LANDING)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_NEARSHORE_LANDING = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
                    map_boxes {
                        data {
                            attributes {
                                maps(sort: "order") {
                                    data {
                                        attributes {
                                            title
                                            subtitle
                                            label
                                            description
                                            color
                                            hero {
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
                    info_card_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                info_cards(filters:{ subtitle: { not: null } }) {
                                    data {
                                        attributes {
                                            title
                                            subtitle
                                            icon {
                                                data {
                                                    attributes {
                                                        name
                                                        formats
                                                    }
                                                }
                                            }
                                            hero {
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
            }
        }
    }
`;


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

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,811], () => (__webpack_exec__(4528)));
module.exports = __webpack_exports__;

})();