"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ toLowerJsonProps)
/* harmony export */ });
/* unused harmony export splitToChunks */
function toLowerJsonProps(json) {
    const response = JSON.parse(json, function(prop, value) {
        var lower = prop.toLowerCase();
        if (prop === lower) return value;
        else this[lower] = value;
    });
    return response;
}
function splitToChunks(array, parts) {
    let result = [];
    for(let i = parts; i > 0; i--){
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}


/***/ }),

/***/ 1961:
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
/* harmony import */ var _src_landings_ServiceLanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3309);
/* harmony import */ var src_mock_data_services_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_landings_ServiceLanding__WEBPACK_IMPORTED_MODULE_2__]);
_src_landings_ServiceLanding__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const Services = ({ data  })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_landings_ServiceLanding__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
async function getServerSideProps() {
    // const { loading, error, data } = await Apollo.query({
    //     query: GET_SERVICE_LANDING,
    //     variables: { label: "service-landing" },
    // });
    return {
        props: {
            data: src_mock_data_services_data__WEBPACK_IMPORTED_MODULE_3__/* .SERVICE_DATA */ .h
        }
    };
}

});

/***/ }),

/***/ 6816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5722);



const ContactForm = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const onSubmit = (event)=>{
        event.preventDefault();
        const json = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_2__/* .toLowerJsonProps */ .V)(JSON.stringify(state));
        console.log(json);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex items-start justify-center flex-col px-36 py-14",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-raleway font-bold text-2xl mb-9",
                children: "Ready to get started?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center flex-row w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: onSubmit,
                    className: "flex items-center justify-between w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            placeholder: "Email address",
                            className: "bg-[#EDEDF1] rounded-full text-[#8E90A6] outline-none py-3 px-5 w-full md:w-10/12 mr-4 font-raleway font-medium text-base"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "submit",
                            value: "Contact us",
                            className: "bg-blue-700 text-white py-3 px-5 rounded-full w-full md:w-3/12 uppercase font-raleway font-bold text-base"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);


/***/ }),

/***/ 6909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6216);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





const BannerBox = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
    background-image: linear-gradient(
            to left,
            rgba(245, 245, 245, 0.1) 30%,
            rgba(31, 34, 52, 1) 45%
        ),
        url("${(p)=>p.image
}");
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;

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
const Banner = ({ name , label , title , subtitle , description , hero , background , isFloating , haveAction , actionLabel , actionRoute , centered , heroFirst  })=>{
    var ref, ref1, ref2;
    const { formats: heroFormats  } = (hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref1 = background.data) === null || ref1 === void 0 ? void 0 : ref1.attributes) ?? {};
    const hrRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.medium.url}`);
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref2 = bgFormats.large) === null || ref2 === void 0 ? void 0 : ref2.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    const heroClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()({
        ["order-[1]"]: heroFirst,
        ["order-[2]"]: !heroFirst
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerBox, {
        image: bgUri.current,
        className: "w-full px-14 py-12 overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid gap-3 grid-cols-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "pr-12 mb-9 font-raleway font-bold text-4xl text-[#45E4DB]",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-raleway font-medium text-xl text-white",
                            children: description
                        })
                    ]
                }),
                heroFormats ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_hero_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        styles: `relative bottom-[-4rem] right-[-4rem] ${heroClassName}`,
                        hrRef: hrRef.current,
                        width: heroFormats.large.width,
                        height: heroFormats.large.height,
                        alt: label,
                        priority: true
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${heroClassName} w-80 h-80 bg-green-500`
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_tabs_ServiceTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/general/info-card/InfoCard.tsx + 1 modules
var InfoCard = __webpack_require__(7582);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/services/service-tabs/styles.ts

const ServiceTabsBox = (external_styled_components_default()).div`
    background-image: url("${(p)=>p.image
}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

;// CONCATENATED MODULE: ./src/components/services/service-tabs/tabs/Tabs.tsx




const Tabs = ({ title: title1 , subtitle , background , info_cards , isUppercaseTitle  })=>{
    var ref, ref1;
    const { data  } = info_cards;
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref = background.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const bgUri = (0,external_react_.useRef)(`${""}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid gap-0 grid-cols-2 w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center flex-col bg-nt-bg-blue p-14",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-istok font-bold text-2xl text-center text-nt-orange mb-9 uppercase tracking-wider",
                        children: title1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-raleway font-medium text-xl text-center text-white mb-9",
                        children: subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid gap-3 grid-cols-3 w-full",
                        children: data.map(({ attributes: { title , subtitle , icon , isTransparent ,  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `#id-${title}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InfoCard/* default */.Z, {
                                    title,
                                    subtitle: "",
                                    icon,
                                    isTransparent,
                                    isHovered: true,
                                    isUppercaseTitle: isUppercaseTitle
                                })
                            }, title)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ServiceTabsBox, {
                image: bgUri.current,
                className: "flex items-center justify-center w-full h-full md:min-h-[640px]"
            })
        ]
    }));
};
/* harmony default export */ const tabs_Tabs = (Tabs);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/services/service-tabs/tabs/TabsContent.tsx




const TabsContent = ({ info_cards  })=>{
    const { data  } = info_cards;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map(({ attributes: { title , tabTitle , icon , tabBackground , bullets ,  }  }, index1)=>{
            var ref, ref1;
            const is = index1 % 2;
            const styles = external_clsx_default()({
                ["order-1"]: !is,
                ["order-0"]: is
            });
            const { formats  } = tabBackground === null || tabBackground === void 0 ? void 0 : (ref = tabBackground.data) === null || ref === void 0 ? void 0 : ref.attributes;
            const bgUri = `${""}${(formats === null || formats === void 0 ? void 0 : (ref1 = formats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (formats === null || formats === void 0 ? void 0 : formats.thumbnail.url)}`;
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: `id-${title}`,
                className: "grid gap-0 grid-cols-2 w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${styles} flex items-start justify-center flex-col p-14`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "min-w-[200px]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoCard/* default */.Z, {
                                            icon: icon,
                                            title: title,
                                            subtitle: "",
                                            isTransparent: false,
                                            isHovered: false,
                                            titleColor: "text-nt-aqua",
                                            isUppercaseTitle: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: `font-raleway font-bold text-[34px] text-nt-bg-blue pl-9`,
                                        children: tabTitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-disc mt-9 font-raleway font-medium text-xl pl-6",
                                children: bullets === null || bullets === void 0 ? void 0 : bullets.elements.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mb-6",
                                        children: item
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ServiceTabsBox, {
                        image: bgUri,
                        className: "flex items-center justify-center w-full h-full md:min-h-[640px]"
                    })
                ]
            }, index1));
        })
    }));
};
/* harmony default export */ const tabs_TabsContent = (TabsContent);

;// CONCATENATED MODULE: ./src/components/services/service-tabs/ServiceTabs.tsx




const ServiceTabs = ({ title , subtitle , bgColor , info_cards , haveAction , actionLabel , actionRoute , isUppercaseTitle , background  })=>{
    var ref, ref1;
    const { data  } = info_cards;
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref = background.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const bgUri = (0,external_react_.useRef)(`${""}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(tabs_Tabs, {
                title,
                subtitle,
                background,
                info_cards,
                isUppercaseTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(tabs_TabsContent, {
                info_cards
            })
        ]
    }));
};
/* harmony default export */ const service_tabs_ServiceTabs = (ServiceTabs);


/***/ }),

/***/ 2020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _swiper_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1011);
/* harmony import */ var src_components_home_tech_card_TechCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(636);
/* harmony import */ var _hooks_useTechs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const Techs = ({ title , teches  })=>{
    const { split_teches  } = (0,_hooks_useTechs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(teches);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const s_teches = split_teches(teches);
        setState(s_teches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[#1F2234] tracking-wider py-8 px-4 md:py-20 w-full overflow-hidden flex items-center justify-center mb-4 flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-istok uppercase text-2xl text-[#FF4C41] mb-14",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                ..._swiper_config__WEBPACK_IMPORTED_MODULE_4__/* .settings */ .X,
                className: "w-full py-10",
                children: Object.entries(state).map(([key, value])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-white text-center mb-5 font-raleway font-bold text-3xl",
                                children: key
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap items-center justify-center min-h-[500px] px-4",
                                children: value.map(({ label , name , logo  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[300px] m-2.5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_tech_card_TechCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            label,
                                            name,
                                            logo
                                        })
                                    }, label)
                                )
                            })
                        ]
                    }, key)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Techs);

});

/***/ }),

/***/ 1011:
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
    navigation: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
};


/***/ }),

/***/ 1162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useTechs = ({ teches: teches1  })=>{
    const split_teches = (teches)=>{
        const { data  } = teches;
        const groupByCategory = data.reduce((group, tech)=>{
            const { attributes: { Category  }  } = tech;
            group[Category] = group[Category] ?? [];
            group[Category].push(tech.attributes);
            return group;
        }, {});
        return groupByCategory;
    };
    return {
        split_teches
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTechs);


/***/ }),

/***/ 3309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_contact_form_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6816);
/* harmony import */ var _components_services_banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6909);
/* harmony import */ var _components_services_service_tabs_ServiceTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var src_components_services_techs_Techs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_services_techs_Techs__WEBPACK_IMPORTED_MODULE_4__]);
src_components_services_techs_Techs__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const ServiceLanding = ({ data  })=>{
    const { banners , info_card_boxes , tech_carousel , tabs  } = data.attributes;
    const tabsAttrs = tabs.data;
    const serviceAttrs = banners.data[0].attributes;
    const infoCardsAttrs = info_card_boxes.data[0].attributes;
    const techCarouselsAttrs = tech_carousel.data.attributes;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_banner_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...serviceAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_services_service_tabs_ServiceTabs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...infoCardsAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_services_techs_Techs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                ...techCarouselsAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_contact_form_ContactForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceLanding);

});

/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ SERVICE_DATA)
/* harmony export */ });
const SERVICE_DATA = {
    __typename: "LandingEntity",
    attributes: {
        __typename: "Landing",
        name: "Service Landing",
        label: "service-landing",
        banners: {
            __typename: "BannerRelationResponseCollection",
            data: [
                {
                    __typename: "BannerEntity",
                    attributes: {
                        __typename: "Banner",
                        name: "Services Page Banner",
                        label: "services-page-banner",
                        title: "We develop unique digital experiences",
                        subtitle: null,
                        description: "Our main objective is to provide our clients with the greatest experience possible by guiding them from the inception of an idea to the development of an innovative and user-friendly interface​.",
                        haveAction: false,
                        actionLabel: null,
                        actionRoute: null,
                        hero: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "fbb9f2572fd8e843c53a8758da333564.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_fbb9f2572fd8e843c53a8758da333564.png",
                                            hash: "thumbnail_fbb9f2572fd8e843c53a8758da333564_cb3023dff1",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 245,
                                            height: 141,
                                            size: 51.68,
                                            path: null,
                                            url: "/uploads/thumbnail_fbb9f2572fd8e843c53a8758da333564_cb3023dff1.png"
                                        },
                                        large: {
                                            name: "large_fbb9f2572fd8e843c53a8758da333564.png",
                                            hash: "large_fbb9f2572fd8e843c53a8758da333564_cb3023dff1",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 1000,
                                            height: 574,
                                            size: 554.49,
                                            path: null,
                                            url: "/uploads/large_fbb9f2572fd8e843c53a8758da333564_cb3023dff1.png"
                                        },
                                        medium: {
                                            name: "medium_fbb9f2572fd8e843c53a8758da333564.png",
                                            hash: "medium_fbb9f2572fd8e843c53a8758da333564_cb3023dff1",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 431,
                                            size: 334.71,
                                            path: null,
                                            url: "/uploads/medium_fbb9f2572fd8e843c53a8758da333564_cb3023dff1.png"
                                        },
                                        small: {
                                            name: "small_fbb9f2572fd8e843c53a8758da333564.png",
                                            hash: "small_fbb9f2572fd8e843c53a8758da333564_cb3023dff1",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 287,
                                            size: 166.09,
                                            path: null,
                                            url: "/uploads/small_fbb9f2572fd8e843c53a8758da333564_cb3023dff1.png"
                                        }
                                    }
                                }
                            }
                        },
                        background: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "service-banner-bg.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_service-banner-bg.png",
                                            hash: "thumbnail_service_banner_bg_cb58da9191",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 221,
                                            height: 156,
                                            size: 49.81,
                                            path: null,
                                            url: "/uploads/thumbnail_service_banner_bg_cb58da9191.png"
                                        },
                                        medium: {
                                            name: "medium_service-banner-bg.png",
                                            hash: "medium_service_banner_bg_cb58da9191",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 529,
                                            size: 495.49,
                                            path: null,
                                            url: "/uploads/medium_service_banner_bg_cb58da9191.png"
                                        },
                                        small: {
                                            name: "small_service-banner-bg.png",
                                            hash: "small_service_banner_bg_cb58da9191",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 352,
                                            size: 218.49,
                                            path: null,
                                            url: "/uploads/small_service_banner_bg_cb58da9191.png"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, 
            ]
        },
        info_card_boxes: {
            __typename: "InfoCardBoxRelationResponseCollection",
            data: [
                {
                    __typename: "InfoCardBoxEntity",
                    attributes: {
                        __typename: "InfoCardBox",
                        title: "Services",
                        subtitle: "We work under and agile methodology based on Staff Augmentation. Our service model includes 3 different options in order to provide the solution that best fits our client’s development needs.​",
                        bgColor: "#FFF",
                        haveAction: true,
                        actionLabel: "Read more",
                        actionRoute: "/services",
                        isUppercaseTitle: false,
                        background: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "coworkers-team-working-brainstorming-concept 1 (1).png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_coworkers-team-working-brainstorming-concept 1 (1).png",
                                            hash: "thumbnail_coworkers_team_working_brainstorming_concept_1_1_be9a0fd284",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 174,
                                            height: 156,
                                            size: 66.68,
                                            path: null,
                                            url: "/uploads/thumbnail_coworkers_team_working_brainstorming_concept_1_1_be9a0fd284.png"
                                        },
                                        small: {
                                            name: "small_coworkers-team-working-brainstorming-concept 1 (1).png",
                                            hash: "small_coworkers_team_working_brainstorming_concept_1_1_be9a0fd284",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 449,
                                            size: 476.12,
                                            path: null,
                                            url: "/uploads/small_coworkers_team_working_brainstorming_concept_1_1_be9a0fd284.png"
                                        }
                                    }
                                }
                            }
                        },
                        info_cards: {
                            __typename: "InfoCardRelationResponseCollection",
                            data: [
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Nova",
                                        tabTitle: "Projects developed  in-house, fully  managed by Novatech",
                                        subtitle: "Project and development team fully managed by Novatech (in-house-projects)",
                                        isTransparent: false,
                                        bullets: {
                                            elements: [
                                                "Novatech gathers the client’s technical requirements to prepare a personalized team for the project.",
                                                "The designated developers/resources are the client’s full team for one or various projects.",
                                                "The client’s solution is co-created between the client and Novatech through the use of a predetermined SOW.",
                                                "Novatech is responsible for managing the full team, but the project’s timing is defined by the client’s needs.", 
                                            ]
                                        },
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Nova.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Nova.png",
                                                            hash: "thumbnail_Nova_36c8914b44",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 19.95,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Nova_36c8914b44.png"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        tabBackground: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "section 1_serv.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_section 1_serv.png",
                                                            hash: "thumbnail_section_1_serv_f413ce95fc",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 174,
                                                            height: 156,
                                                            size: 69.83,
                                                            path: null,
                                                            url: "/uploads/thumbnail_section_1_serv_f413ce95fc.png"
                                                        },
                                                        small: {
                                                            name: "small_section 1_serv.png",
                                                            hash: "small_section_1_serv_f413ce95fc",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 500,
                                                            height: 449,
                                                            size: 503.53,
                                                            path: null,
                                                            url: "/uploads/small_section_1_serv_f413ce95fc.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Squad",
                                        tabTitle: "Outsourcing of a development team to be fully manged by client’s Product Owner​",
                                        subtitle: "Outsourcing of a development team to be fully manged by client's Product Owner",
                                        isTransparent: false,
                                        bullets: {
                                            elements: [
                                                "Novatech gathers the client’s technical requirements to outsource a personalized team for the project.",
                                                "The designated developers/resources are the client’s full team for one or various projects.",
                                                "The client’s Product Owner is responsible for managing the full team and timings of the project(s)", 
                                            ]
                                        },
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Corp.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Corp.png",
                                                            hash: "thumbnail_Corp_ce5f57a523",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 14.22,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Corp_ce5f57a523.png"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        tabBackground: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "section 2_serv.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_section 2_serv.png",
                                                            hash: "thumbnail_section_2_serv_d83f1a210b",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 174,
                                                            height: 156,
                                                            size: 46.08,
                                                            path: null,
                                                            url: "/uploads/thumbnail_section_2_serv_d83f1a210b.png"
                                                        },
                                                        small: {
                                                            name: "small_section 2_serv.png",
                                                            hash: "small_section_2_serv_d83f1a210b",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 500,
                                                            height: 449,
                                                            size: 309.26,
                                                            path: null,
                                                            url: "/uploads/small_section_2_serv_d83f1a210b.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Rocket",
                                        tabTitle: "Boost of client’s development capacity",
                                        subtitle: "Boost of client's development capacity",
                                        isTransparent: false,
                                        bullets: {
                                            elements: [
                                                "Novatech gathers the client’s technical requirements to outsource a personalized group of developers/resources.",
                                                "Novatech’s outsourced members become part of the client’s team and fully integrate into the business.",
                                                "The client is responsible for managing the resources for a pre-determined period of time.", 
                                            ]
                                        },
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "rocket.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_rocket.png",
                                                            hash: "thumbnail_rocket_4083710e56",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 12.23,
                                                            path: null,
                                                            url: "/uploads/thumbnail_rocket_4083710e56.png"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        tabBackground: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "section 3_serv.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_section 3_serv.png",
                                                            hash: "thumbnail_section_3_serv_49a5225fbc",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 174,
                                                            height: 156,
                                                            size: 80.45,
                                                            path: null,
                                                            url: "/uploads/thumbnail_section_3_serv_49a5225fbc.png"
                                                        },
                                                        small: {
                                                            name: "small_section 3_serv.png",
                                                            hash: "small_section_3_serv_49a5225fbc",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 500,
                                                            height: 449,
                                                            size: 563.48,
                                                            path: null,
                                                            url: "/uploads/small_section_3_serv_49a5225fbc.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, 
                            ]
                        }
                    }
                }, 
            ]
        },
        tech_carousel: {
            __typename: "TechCarouselEntityResponse",
            data: {
                __typename: "TechCarouselEntity",
                attributes: {
                    __typename: "TechCarousel",
                    title: "Our technologies",
                    teches: {
                        __typename: "TechRelationResponseCollection",
                        data: [
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "AWS",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_aws.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_aws.png",
                                                        hash: "thumbnail_ic_aws_dbc856fe11",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 8.14,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_aws_dbc856fe11.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "aws"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Sql",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_sql.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_sql.png",
                                                        hash: "thumbnail_ic_sql_6cdaee7f02",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 2.89,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_sql_6cdaee7f02.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "sql"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "React",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_react.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_react.png",
                                                        hash: "thumbnail_ic_react_943683d747",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 10.54,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_react_943683d747.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Frontend",
                                    label: "react"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Angular",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_angular.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_angular.png",
                                                        hash: "thumbnail_ic_angular_f5411ce3c6",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 4.86,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_angular_f5411ce3c6.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Frontend",
                                    label: "angular"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Laravel",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_laravel.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_laravel.png",
                                                        hash: "thumbnail_ic_laravel_9ab819fe8f",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.19,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_laravel_9ab819fe8f.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "laravel"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Docker",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_docker.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_docker.png",
                                                        hash: "thumbnail_ic_docker_dedc32aa15",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 5.81,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_docker_dedc32aa15.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "docker"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Node JS",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_Nodejs.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_Nodejs.png",
                                                        hash: "thumbnail_ic_Nodejs_e952784085",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.38,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_Nodejs_e952784085.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "node-js"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Ruby on Rails",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_ruby.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_ruby.png",
                                                        hash: "thumbnail_ic_ruby_e0a1c18d14",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.09,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_ruby_e0a1c18d14.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "ruby-on-rails"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Springboot",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_springbot.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_springbot.png",
                                                        hash: "thumbnail_ic_springbot_fd3299a10c",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.91,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_springbot_fd3299a10c.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "springboot"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Django",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_django.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_django.png",
                                                        hash: "thumbnail_ic_django_d12310d76f",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 4.32,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_django_d12310d76f.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "django"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "ASP.NET Core",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_asp.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_asp.png",
                                                        hash: "thumbnail_ic_asp_a6301c4d23",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 13.02,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_asp_a6301c4d23.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "asp-net-core"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "ASP.Net",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_asp.net.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_asp.net.png",
                                                        hash: "thumbnail_ic_asp_net_37193b7f36",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 7.6,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_asp_net_37193b7f36.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Backend",
                                    label: "asp-net"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Vue",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_vue.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_vue.png",
                                                        hash: "thumbnail_ic_vue_dafa4e3a15",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 5.77,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_vue_dafa4e3a15.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Frontend",
                                    label: "vue"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Azure",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_azure.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_azure.png",
                                                        hash: "thumbnail_ic_azure_b2e4829bef",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 3.96,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_azure_b2e4829bef.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "azure"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Google Cloud",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_google cloud.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_google cloud.png",
                                                        hash: "thumbnail_ic_google_cloud_5a28c619e9",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 4.64,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_google_cloud_5a28c619e9.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "google-cloud"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "DevOps",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_devops.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_devops.png",
                                                        hash: "thumbnail_ic_devops_b0f8c0e56b",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.96,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_devops_b0f8c0e56b.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "dev-ops"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Kubernets",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_kubernets.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_kubernets.png",
                                                        hash: "thumbnail_ic_kubernets_e22f75fad9",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 8.24,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_kubernets_e22f75fad9.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Platforms",
                                    label: "kubernets"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "MySQL",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_mysql.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_mysql.png",
                                                        hash: "thumbnail_ic_mysql_c2d5c95f76",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.3,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_mysql_c2d5c95f76.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "my-sql"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Redis",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_redis.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_redis.png",
                                                        hash: "thumbnail_ic_redis_038e37ad79",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 8.94,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_redis_038e37ad79.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "redis"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Oracle",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_oracle.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_oracle.png",
                                                        hash: "thumbnail_ic_oracle_b8a0afb1ad",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 4.1,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_oracle_b8a0afb1ad.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "oracle"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Mongo",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_mongo.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_mongo.png",
                                                        hash: "thumbnail_ic_mongo_d5a042a06a",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 3.47,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_mongo_d5a042a06a.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "mongo"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Cosmos",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_cosmos.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_cosmos.png",
                                                        hash: "thumbnail_ic_cosmos_145d4f4c08",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 9.04,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_cosmos_145d4f4c08.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "cosmos"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Postgres",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_postgres.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_postgres.png",
                                                        hash: "thumbnail_ic_postgres_a93463d25a",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 12.51,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_postgres_a93463d25a.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Database",
                                    label: "postgres"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "iOS",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_ios.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_ios.png",
                                                        hash: "thumbnail_ic_ios_cbbc8ae059",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 6.02,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_ios_cbbc8ae059.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Mobile",
                                    label: "i-os"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Android",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_android.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_android.png",
                                                        hash: "thumbnail_ic_android_fa6acf68a6",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 4.27,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_android_fa6acf68a6.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Mobile",
                                    label: "android"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "React Native",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_react_native.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_react_native.png",
                                                        hash: "thumbnail_ic_react_native_7f19642a7e",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 8.91,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_react_native_7f19642a7e.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Mobile",
                                    label: "react-native"
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Xamarin",
                                    logo: {
                                        __typename: "UploadFileEntityResponse",
                                        data: {
                                            __typename: "UploadFileEntity",
                                            attributes: {
                                                __typename: "UploadFile",
                                                name: "ic_Xamarin.png",
                                                formats: {
                                                    thumbnail: {
                                                        name: "thumbnail_ic_Xamarin.png",
                                                        hash: "thumbnail_ic_Xamarin_7529b2b2e6",
                                                        ext: ".png",
                                                        mime: "image/png",
                                                        width: 156,
                                                        height: 156,
                                                        size: 5,
                                                        path: null,
                                                        url: "/uploads/thumbnail_ic_Xamarin_7529b2b2e6.png"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Category: "Mobile",
                                    label: "xamarin"
                                }
                            }, 
                        ]
                    }
                }
            }
        },
        tabs: {
            __typename: "TabRelationResponseCollection",
            data: [
                {
                    __typename: "TabEntity",
                    attributes: {
                        __typename: "Tab",
                        title: "Oversight",
                        icon: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "Vector.svg",
                                    formats: null
                                }
                            }
                        },
                        label: "oversight",
                        content: null
                    }
                },
                {
                    __typename: "TabEntity",
                    attributes: {
                        __typename: "Tab",
                        title: "Ui/Ux",
                        icon: {
                            __typename: "UploadFileEntityResponse",
                            data: null
                        },
                        label: "ui-ux",
                        content: null
                    }
                },
                {
                    __typename: "TabEntity",
                    attributes: {
                        __typename: "Tab",
                        title: "Developer",
                        icon: {
                            __typename: "UploadFileEntityResponse",
                            data: null
                        },
                        label: "developer",
                        content: null
                    }
                },
                {
                    __typename: "TabEntity",
                    attributes: {
                        __typename: "Tab",
                        title: "QA",
                        icon: {
                            __typename: "UploadFileEntityResponse",
                            data: null
                        },
                        label: "qa",
                        content: null
                    }
                }, 
            ]
        }
    }
};


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
var __webpack_exports__ = __webpack_require__.X(0, [675,339], () => (__webpack_exec__(1961)));
module.exports = __webpack_exports__;

})();