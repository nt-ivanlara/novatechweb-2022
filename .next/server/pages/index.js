"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5075:
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
/* harmony import */ var _src_landings_HomeLanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2193);
/* harmony import */ var src_mock_data_home_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_landings_HomeLanding__WEBPACK_IMPORTED_MODULE_2__]);
_src_landings_HomeLanding__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const Home = ({ data  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "NovaTech - Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_landings_HomeLanding__WEBPACK_IMPORTED_MODULE_2__/* .HomeLanding */ .k, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function getServerSideProps() {
    // const { loading, error, data } = await Apollo.query({
    //     query: GET_HOME_LANDING,
    //     variables: { label: "home-landing" },
    // });
    return {
        props: {
            data: src_mock_data_home_data__WEBPACK_IMPORTED_MODULE_3__/* .HOME_DATA */ .X
        }
    };
}

});

/***/ }),

/***/ 4799:
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
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9966);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





const BannerBox = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
    background-image: linear-gradient(
            to top,
            rgba(245, 245, 245, 0.3),
            rgba(245, 245, 245, 1)
        ),
        url("${(p)=>p.image
}");
    background-size: cover;
`;
const BannerWtHero = ({ name , label , title , subtitle , description , hero , background , haveAction , actionLabel , actionRoute , centered , styles , titleFirst  })=>{
    var ref;
    const { formats  } = background === null || background === void 0 ? void 0 : (ref = background.data) === null || ref === void 0 ? void 0 : ref.attributes;
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${formats === null || formats === void 0 ? void 0 : formats.large.url}`);
    const centerClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerBox, {
        image: bgUri.current,
        className: `relative flex items-center ${centerClassName} md:min-h-[500px] bg-contain ${styles} relative overflow-hidden bg-center bg-cover`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col relative",
                children: [
                    title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `font-istok font-bold leading-complete uppercase text-[#FF4C41] text-[24px] pb-9`,
                        children: title
                    }) : null,
                    subtitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `font-raleway font-medium leading-complete text-black text-[20px]`,
                        children: subtitle
                    }) : null,
                    description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-raleway font-medium leading-complete text-[18px] pb-9",
                        children: description
                    }) : null,
                    haveAction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center pt-12 md:pt-56",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            label: actionLabel,
                            href: actionRoute,
                            bgColor: "#FF4C41",
                            rounded: true
                        })
                    }) : null
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWtHero);


/***/ }),

/***/ 9966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/general/button/styles.ts

const ButtonBox = (external_styled_components_default()).a`
    background-color: ${(p)=>p.bgColor
};
`;

;// CONCATENATED MODULE: ./src/components/general/button/Button.tsx




const Button = ({ label , href ="#" , bgColor ="#50d71e" , rounded =false  })=>{
    const btnStyles = external_clsx_default()({
        ["bg-inherit text-black"]: bgColor === null,
        ["rounded-full"]: rounded,
        ["text-black"]: (bgColor === null || bgColor === void 0 ? void 0 : bgColor.toUpperCase()) === "#FFF" || (bgColor === null || bgColor === void 0 ? void 0 : bgColor.toUpperCase()) === "#FFFFFF"
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(ButtonBox, {
        bgColor: bgColor,
        href: href,
        className: `py-4 px-14 mb-4 md:mb-0 mt-4 uppercase font-raleway text-white font-bold text-[12px] md:text-[16px] ${btnStyles}`,
        children: label
    }));
};
/* harmony default export */ const button_Button = (Button);


/***/ }),

/***/ 1930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const BannerBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    overflow: hidden;
    position: relative;
    background-image: url("${(p)=>p.image
}");
    background-repeat: no-repeat;

    ::before,
    ::after {
        content: "";
        width: 20rem;
        height: 20rem;
        background-color: #e2e2e2;
        border-radius: 50%;
        position: absolute;
    }

    ::before {
        bottom: -15rem;
        left: -10rem;
    }

    ::after {
        top: -15rem;
        right: -10rem;
    }
`;
const TextBanner = ({ title , subtitle  })=>{
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(`${""}/uploads/Group_7faea968db.png?updated_at=2022-01-22T18:48:02.504Z`);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BannerBox, {
        image: bgUri.current,
        className: "flex items-center justify-center flex-col py-16 px-14",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-istok uppercase font-bold text-xl md:text-5xl tracking-widest text-center text-[#1F2234]",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-istok uppercase font-medium text-base md:text-3xl tracking-widest text-center text-[#1F2234]",
                children: subtitle
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBanner);


/***/ }),

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_general_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9966);
/* harmony import */ var src_components_general_hero_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6216);






const BannerBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    background-image: url("${(p)=>p.image
}");
    background-image: linear-gradient(
            to top,
            rgba(250, 250, 250, 0) 45%,
            rgba(255, 255, 255, 1) 50%
        ),
        url("${(p)=>p.image
}");
    background-size: cover;
    background-position: center bottom;
`;
const Banner = ({ label , title , subtitle , description , hero , background , isFloating , haveAction , actionLabel , actionRoute , right , centered , styles , titleFirst , heroFirst  })=>{
    var ref, ref1;
    const { formats: heroFormats  } = (hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref1 = background.data) === null || ref1 === void 0 ? void 0 : ref1.attributes) ?? {};
    const hrRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(`${""}${heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.medium.url}`);
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(`${""}${bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.large.url}`);
    const bannerClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["right-0 top-0 md:right-[-12rem] md:top-[-2rem]"]: isFloating
    });
    const bgClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["relative"]: (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.medium.url) !== null
    });
    const centerClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered
    });
    const gridClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["grid-cols-1 md:grid-cols-2"]: heroFormats,
        ["grid-cols-1"]: !heroFormats
    });
    const heroClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["order-1 md:order-[1]"]: heroFirst,
        ["order-1 md:order-[2]"]: !heroFirst
    });
    const subHeadingClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()({
        ["order-[2]"]: titleFirst
    });
    const bgStyles = bgFormats ? {
        backgroundImage: `url(${bgUri.current})`
    } : {};
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerBox, {
        image: bgUri.current,
        className: `relative flex items-center ${centerClassName} min-h-[500px] bg-contain ${styles} ${bgClassName} overflow-hidden bg-center bg-cover`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `grid ${gridClassName}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex flex-col relative order-2`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${heroClassName} text-center md:text-left`,
                            children: [
                                subtitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${subHeadingClassName} font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`,
                                    children: subtitle
                                }) : null,
                                title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `${subHeadingClassName} font-raleway font-bold leading-complete text-black text-[34px] pb-9`,
                                    children: title
                                }) : null,
                                description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-raleway font-medium leading-complete text-[18px] pb-9",
                                    children: description
                                }) : null
                            ]
                        }),
                        haveAction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex order-3 justify-center md:justify-start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_general_button_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: actionLabel,
                                href: actionRoute,
                                bgColor: "#FF4C41",
                                rounded: true
                            })
                        }) : null
                    ]
                }),
                heroFormats ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_general_hero_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    styles: `relative ${bannerClassName} ${heroClassName}`,
                    hrRef: hrRef.current,
                    width: heroFormats.large.width,
                    height: heroFormats.large.height,
                    alt: label,
                    priority: true
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${heroClassName} w-80 h-80 bg-green-500`
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 5093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9966);


const ContactBanner = ({ title , subtitle , actionLabel , actionRoute  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full overflow-hidden flex items-center justify-center flex-col p-28",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-bold text-black uppercase text-2xl p-5 tracking-widest",
                children: title
            }),
            subtitle ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "block",
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_button_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: actionLabel,
                href: actionRoute,
                bgColor: "#FF4C41",
                rounded: true
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactBanner);


/***/ }),

/***/ 3709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ customers_Customers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/home/customers/customer/Customer.tsx



const Customer = ({ name , logo  })=>{
    var ref, ref1, ref2;
    const { attributes: { formats  } ,  } = logo.data;
    const hrRef = (0,external_react_.useRef)(`${""}${formats === null || formats === void 0 ? void 0 : (ref = formats.thumbnail) === null || ref === void 0 ? void 0 : ref.url}`);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative py-4 md:py-14 mx-4 md:mx-8 flex items-center justify-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: hrRef.current,
                width: formats === null || formats === void 0 ? void 0 : (ref1 = formats.thumbnail) === null || ref1 === void 0 ? void 0 : ref1.width,
                height: formats === null || formats === void 0 ? void 0 : (ref2 = formats.thumbnail) === null || ref2 === void 0 ? void 0 : ref2.height,
                draggable: false,
                alt: name,
                priority: true
            })
        })
    }));
};
/* harmony default export */ const customer_Customer = (Customer);

// EXTERNAL MODULE: ./src/components/general/button/Button.tsx + 1 modules
var Button = __webpack_require__(9966);
;// CONCATENATED MODULE: ./src/components/home/customers/Customers.tsx



const Customers = ({ title , haveAction , actionLabel , actionRoute , customers  })=>{
    const { data  } = customers;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center flex-col py-0 pb-4 md:pb-20 px-14 bg-[#F5F5F5]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "uppercase tracking-widest font-bold font-istok mt-12 mb-4 md:mt-0 md:mb-20 text-[24px] text-center text-black",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 md:flex md:items-center md:justify-between",
                children: data.map(({ attributes: { name , logo  }  })=>/*#__PURE__*/ jsx_runtime_.jsx(customer_Customer, {
                        name,
                        logo
                    }, name)
                )
            }),
            haveAction ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex mt-4 mb-4 md:mb-0 md:mt-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    label: actionLabel,
                    href: actionRoute,
                    bgColor: "#FF4C41",
                    rounded: true
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const customers_Customers = (Customers);


/***/ }),

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_info_card_InfoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7582);
/* harmony import */ var _general_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9966);




const InfoCardBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    background-color: ${(p)=>p.bgColor
};
`;
const InfoCardsBox = ({ title: title1 , subtitle: subtitle1 , bgColor , info_cards , haveAction , actionLabel , actionRoute , isUppercaseTitle , hideTitle , isHovered =false  })=>{
    const { data  } = info_cards;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoCardBox, {
        bgColor: bgColor,
        className: "w-full flex items-center justify-center flex-col",
        children: [
            (title1 != null || subtitle1 || null) && !hideTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "w-5/6 text-center pt-20 pb-3",
                children: [
                    title1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-bold font-istok text-[#FF4C41] text-2xl mb-7 uppercase tracking-widest",
                        children: title1
                    }) : null,
                    subtitle1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-medium font-raleway text-black text-xl tracking-widest",
                        children: subtitle1
                    }) : null
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid gap-3 md:gap-5 grid-cols-1 md:grid-cols-3 py-4 md:py-14 px-9",
                children: data.map(({ attributes: { title , subtitle , icon , isTransparent  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_info_card_InfoCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title,
                        subtitle,
                        icon,
                        isTransparent,
                        isUppercaseTitle: isUppercaseTitle,
                        isHovered: isHovered
                    }, title)
                )
            }),
            haveAction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mb-4 mt-4 md:mt-0 md:mb-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    label: actionLabel,
                    href: actionRoute,
                    bgColor: "#FF4C41",
                    rounded: true
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCardsBox);


/***/ }),

/***/ 564:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_general_hero_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6216);
/* harmony import */ var src_components_general_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9966);






const OurWorkBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    background-image: url("${(p)=>p.image
}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -5rem -5rem;

    ::after,
    ::before {
        content: "";
        width: 100%;
        background-color: #f5f5f5;
        position: absolute;
        left: 0;
    }
    ::after {
        bottom: 0;
        height: 9rem;
    }
    ::before {
        top: 0;
        height: 0rem;
    }

    @media screen and (max-width: 700px) {
        ::after,
        ::before {
            display: none;
        }
    }
`;
const OurWorkBanner = ({ label , title , subtitle , description , hero , background , haveAction , actionLabel , actionRoute , centered , styles  })=>{
    var ref, ref1;
    const { formats: heroFormats  } = (hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref1 = background.data) === null || ref1 === void 0 ? void 0 : ref1.attributes) ?? {};
    const hrRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.medium.url}`);
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.large.url}`);
    const centerClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OurWorkBox, {
        className: `relative px-14 flex items-center ${centerClassName} min-h-screen md:min-h-[500px] bg-contain ${styles} overflow-hidden bg-center bg-cover`,
        image: bgUri.current,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid gap-3 grid-cols-1 md:grid-cols-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: heroFormats ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_general_hero_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        styles: `relative z-10`,
                        hrRef: hrRef.current,
                        width: heroFormats.large.width,
                        height: heroFormats.large.height,
                        alt: label,
                        priority: true
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-80 h-80 bg-green-500`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center md:items-start text-center md:text-left justify-center flex-col",
                    children: [
                        subtitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`,
                            children: subtitle
                        }) : null,
                        title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: `font-raleway font-bold leading-complete text-black text-[34px] pb-9`,
                            children: title
                        }) : null,
                        description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-raleway font-medium leading-complete text-[18px] pb-2 pt-2 md:pt-0 md:pb-9",
                            children: description
                        }) : null,
                        haveAction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex mb-4 mt-4 md:mt-0 md:mb-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_general_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: actionLabel,
                                href: actionRoute,
                                bgColor: "#FF4C41",
                                rounded: true
                            })
                        }) : null
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurWorkBanner);


/***/ }),

/***/ 4237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _tech_card_TechCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(636);
/* harmony import */ var _swiper_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const TechCarousel = ({ title , teches  })=>{
    const { data  } = teches;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[#1F2234] tracking-wider py-20 px-14 w-full overflow-hidden flex items-center justify-center mb-4 flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-istok uppercase text-2xl text-[#FF4C41] mb-14",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                ..._swiper_config__WEBPACK_IMPORTED_MODULE_4__/* .settings */ .X,
                className: "w-full py-10",
                children: data.map(({ attributes: { label , name , logo  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tech_card_TechCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            label,
                            name,
                            logo
                        })
                    }, label)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechCarousel);

});

/***/ }),

/***/ 2600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ settings)
/* harmony export */ });
const settings = {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: false,
    pagination: {
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
};


/***/ }),

/***/ 2262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useHome = ({ attributes  })=>{
    const { name , banners , tech_carousel , info_card_boxes , customer_carousels ,  } = attributes;
    const bannerAttrs = banners.data.filter((a)=>a.attributes.label === "home-banner"
    )[0].attributes;
    const serviceAttrs = banners.data.filter((a)=>a.attributes.label === "services-banner"
    )[0].attributes;
    const ourWorkAttrs = banners.data.filter((a)=>a.attributes.label === "our-work-banner"
    )[0].attributes;
    const techsAttrs = tech_carousel.data.attributes;
    const customerAttrs = customer_carousels.data[0].attributes;
    // console.log('------------------------------------------------------------------------')
    // console.log("data", data);
    // console.log('------------------------------------------------------------------------')
    const infoCardsAttrs = info_card_boxes.data.filter((a)=>a.attributes.label === "nearshore-box"
    )[0].attributes;
    const serviceCardsAttrs = info_card_boxes.data.filter((a)=>a.attributes.label === "services-box"
    )[0].attributes;
    return {
        bannerAttrs,
        serviceAttrs,
        ourWorkAttrs,
        techsAttrs,
        customerAttrs,
        infoCardsAttrs,
        serviceCardsAttrs
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHome);


/***/ }),

/***/ 2193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ HomeLanding)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4499);
/* harmony import */ var _components_home_contact_form_ContactBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5093);
/* harmony import */ var _components_home_tech_carousel_TechCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4237);
/* harmony import */ var _components_home_info_card_box_InfoCardsBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8686);
/* harmony import */ var _components_general_banner_BannerWtHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4799);
/* harmony import */ var _components_home_customers_Customers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3709);
/* harmony import */ var _components_home_our_work_OurWorkBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(564);
/* harmony import */ var _components_general_text_banner_TextBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1930);
/* harmony import */ var _hooks_useHome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_tech_carousel_TechCarousel__WEBPACK_IMPORTED_MODULE_4__]);
_components_home_tech_carousel_TechCarousel__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];












const NearshoreBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_home_info_card_box_InfoCardsBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)`
    background-image: url("${(p)=>p.image
}");
    text-align: center;
`;
const HomeLanding = ({ data  })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(Object.assign({}, data));
    const { bannerAttrs , serviceAttrs , ourWorkAttrs , techsAttrs , customerAttrs , infoCardsAttrs , serviceCardsAttrs ,  } = (0,_hooks_useHome__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(state);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_banner_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...bannerAttrs,
                styles: "p-14"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NearshoreBox, {
                image: `${""}}$/uploads/bg_map_eef5879bfd.png`,
                ...infoCardsAttrs,
                hideTitle: true,
                isHovered: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_info_card_box_InfoCardsBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...serviceCardsAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_banner_BannerWtHero__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ...serviceAttrs,
                styles: "py-12 pt-12 px-12 md:py-80 md:pt-20 md:px-72",
                centered: true,
                titleFirst: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_our_work_OurWorkBanner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                ...ourWorkAttrs,
                styles: "py-0",
                heroFirst: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_customers_Customers__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                ...customerAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_text_banner_TextBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: "Innovation and Tech",
                subtitle: "The future is here with us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_tech_carousel_TechCarousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                ...techsAttrs
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_contact_form_ContactBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "Ready to transform your business?",
                subtitle: "",
                actionLabel: "Contact Us",
                actionRoute: "/contact"
            })
        ]
    }));
};

});

/***/ }),

/***/ 4527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ HOME_DATA)
/* harmony export */ });
const HOME_DATA = {
    __typename: "LandingEntity",
    attributes: {
        __typename: "Landing",
        name: "Home Landing",
        label: "home-landing",
        banners: {
            __typename: "BannerRelationResponseCollection",
            data: [
                {
                    __typename: "BannerEntity",
                    attributes: {
                        __typename: "Banner",
                        name: "Home Banner",
                        label: "home-banner",
                        title: "We build digital solutions to achieve your most ambitious goals",
                        subtitle: "Nearshore Software Development Company in Latin America​",
                        description: "At Novatech we become your strategic, technological partner. We help you stand out from the competition with innovative, creative and outside the box software development solutions.",
                        isFloating: true,
                        top: "0",
                        left: "0",
                        right: "-13rem",
                        bottom: "0",
                        haveAction: true,
                        actionLabel: "Get a Quote",
                        actionRoute: "/services",
                        hero: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "homebannerhero.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_homebannerhero.png",
                                            hash: "thumbnail_homebannerhero_a306162f84",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 243,
                                            height: 156,
                                            size: 27.56,
                                            path: null,
                                            url: "/uploads/thumbnail_homebannerhero_a306162f84.png"
                                        },
                                        large: {
                                            name: "large_homebannerhero.png",
                                            hash: "large_homebannerhero_a306162f84",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 1000,
                                            height: 643,
                                            size: 179.67,
                                            path: null,
                                            url: "/uploads/large_homebannerhero_a306162f84.png"
                                        },
                                        medium: {
                                            name: "medium_homebannerhero.png",
                                            hash: "medium_homebannerhero_a306162f84",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 482,
                                            size: 117.45,
                                            path: null,
                                            url: "/uploads/medium_homebannerhero_a306162f84.png"
                                        },
                                        small: {
                                            name: "small_homebannerhero.png",
                                            hash: "small_homebannerhero_a306162f84",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 321,
                                            size: 67.69,
                                            path: null,
                                            url: "/uploads/small_homebannerhero_a306162f84.png"
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
                                    name: "homebannerbg.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_homebannerbg.png",
                                            hash: "thumbnail_homebannerbg_4ae40ba030",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 245,
                                            height: 131,
                                            size: 27.38,
                                            path: null,
                                            url: "/uploads/thumbnail_homebannerbg_4ae40ba030.png"
                                        },
                                        large: {
                                            name: "large_homebannerbg.png",
                                            hash: "large_homebannerbg_4ae40ba030",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 1000,
                                            height: 533,
                                            size: 272.47,
                                            path: null,
                                            url: "/uploads/large_homebannerbg_4ae40ba030.png"
                                        },
                                        medium: {
                                            name: "medium_homebannerbg.png",
                                            hash: "medium_homebannerbg_4ae40ba030",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 400,
                                            size: 171.94,
                                            path: null,
                                            url: "/uploads/medium_homebannerbg_4ae40ba030.png"
                                        },
                                        small: {
                                            name: "small_homebannerbg.png",
                                            hash: "small_homebannerbg_4ae40ba030",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 267,
                                            size: 88.83,
                                            path: null,
                                            url: "/uploads/small_homebannerbg_4ae40ba030.png"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    __typename: "BannerEntity",
                    attributes: {
                        __typename: "Banner",
                        name: "Our work banner",
                        label: "our-work-banner",
                        title: "We develop unique digital experiences​",
                        subtitle: "Our work",
                        description: "Novatech continues to be trusted by leading multinational companies in the U.S. and Latin America to assist in the digital transformation of their businesses.",
                        isFloating: false,
                        top: null,
                        left: null,
                        right: null,
                        bottom: null,
                        haveAction: true,
                        actionLabel: "Read Case Studies​",
                        actionRoute: "/services",
                        hero: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "phone.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_phone.png",
                                            hash: "thumbnail_phone_6d0f7fb783",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 146,
                                            height: 156,
                                            size: 30.7,
                                            path: null,
                                            url: "/uploads/thumbnail_phone_6d0f7fb783.png"
                                        },
                                        large: {
                                            name: "large_phone.png",
                                            hash: "large_phone_6d0f7fb783",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 938,
                                            height: 1000,
                                            size: 623.86,
                                            path: null,
                                            url: "/uploads/large_phone_6d0f7fb783.png"
                                        },
                                        medium: {
                                            name: "medium_phone.png",
                                            hash: "medium_phone_6d0f7fb783",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 703,
                                            height: 750,
                                            size: 378.65,
                                            path: null,
                                            url: "/uploads/medium_phone_6d0f7fb783.png"
                                        },
                                        small: {
                                            name: "small_phone.png",
                                            hash: "small_phone_6d0f7fb783",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 469,
                                            height: 500,
                                            size: 189.97,
                                            path: null,
                                            url: "/uploads/small_phone_6d0f7fb783.png"
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
                                    name: "bg_our work.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_bg_our work.png",
                                            hash: "thumbnail_bg_our_work_d6e85f3964",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 183,
                                            height: 156,
                                            size: 9.4,
                                            path: null,
                                            url: "/uploads/thumbnail_bg_our_work_d6e85f3964.png"
                                        },
                                        large: {
                                            name: "large_bg_our work.png",
                                            hash: "large_bg_our_work_d6e85f3964",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 1000,
                                            height: 854,
                                            size: 82.04,
                                            path: null,
                                            url: "/uploads/large_bg_our_work_d6e85f3964.png"
                                        },
                                        medium: {
                                            name: "medium_bg_our work.png",
                                            hash: "medium_bg_our_work_d6e85f3964",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 640,
                                            size: 55.87,
                                            path: null,
                                            url: "/uploads/medium_bg_our_work_d6e85f3964.png"
                                        },
                                        small: {
                                            name: "small_bg_our work.png",
                                            hash: "small_bg_our_work_d6e85f3964",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 427,
                                            size: 33.21,
                                            path: null,
                                            url: "/uploads/small_bg_our_work_d6e85f3964.png"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    __typename: "BannerEntity",
                    attributes: {
                        __typename: "Banner",
                        name: "Services Banner",
                        label: "services-banner",
                        title: "Careers",
                        subtitle: "At Novatech, we look to attract and retain the brightest minds in the business, hiring professionals and students in every area of the firm. Our people are the core of our business​!",
                        description: "",
                        isFloating: false,
                        top: null,
                        left: null,
                        right: null,
                        bottom: null,
                        haveAction: true,
                        actionLabel: "Explore Your Opportunities​",
                        actionRoute: "/services",
                        hero: {
                            __typename: "UploadFileEntityResponse",
                            data: null
                        },
                        background: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    name: "coworkers-team-working-brainstorming-concept 2.png",
                                    formats: {
                                        thumbnail: {
                                            name: "thumbnail_coworkers-team-working-brainstorming-concept 2.png",
                                            hash: "thumbnail_coworkers_team_working_brainstorming_concept_2_e057871f4b",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 245,
                                            height: 99,
                                            size: 64.59,
                                            path: null,
                                            url: "/uploads/thumbnail_coworkers_team_working_brainstorming_concept_2_e057871f4b.png"
                                        },
                                        large: {
                                            name: "large_coworkers-team-working-brainstorming-concept 2.png",
                                            hash: "large_coworkers_team_working_brainstorming_concept_2_e057871f4b",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 1000,
                                            height: 404,
                                            size: 897.18,
                                            path: null,
                                            url: "/uploads/large_coworkers_team_working_brainstorming_concept_2_e057871f4b.png"
                                        },
                                        medium: {
                                            name: "medium_coworkers-team-working-brainstorming-concept 2.png",
                                            hash: "medium_coworkers_team_working_brainstorming_concept_2_e057871f4b",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 750,
                                            height: 303,
                                            size: 520.47,
                                            path: null,
                                            url: "/uploads/medium_coworkers_team_working_brainstorming_concept_2_e057871f4b.png"
                                        },
                                        small: {
                                            name: "small_coworkers-team-working-brainstorming-concept 2.png",
                                            hash: "small_coworkers_team_working_brainstorming_concept_2_e057871f4b",
                                            ext: ".png",
                                            mime: "image/png",
                                            width: 500,
                                            height: 202,
                                            size: 243.59,
                                            path: null,
                                            url: "/uploads/small_coworkers_team_working_brainstorming_concept_2_e057871f4b.png"
                                        }
                                    }
                                }
                            }
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
                                    label: "aws",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Sql",
                                    label: "sql",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "React",
                                    label: "react",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Angular",
                                    label: "angular",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Laravel",
                                    label: "laravel",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Docker",
                                    label: "docker",
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
                                    }
                                }
                            },
                            {
                                __typename: "TechEntity",
                                attributes: {
                                    __typename: "Tech",
                                    name: "Node JS",
                                    label: "node-js",
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
                                    }
                                }
                            }, 
                        ]
                    }
                }
            }
        },
        info_card_boxes: {
            __typename: "InfoCardBoxRelationResponseCollection",
            data: [
                {
                    __typename: "InfoCardBoxEntity",
                    attributes: {
                        __typename: "InfoCardBox",
                        title: "Nearshore Software development",
                        subtitle: null,
                        label: "nearshore-box",
                        bgColor: "#1F2234",
                        haveAction: null,
                        actionLabel: null,
                        actionRoute: null,
                        isUppercaseTitle: null,
                        info_cards: {
                            __typename: "InfoCardRelationResponseCollection",
                            data: [
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Nearshore software development",
                                        subtitle: null,
                                        isTransparent: true,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Nearshore software development.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Nearshore software development.png",
                                                            hash: "thumbnail_Nearshore_software_development_6a7131f56f",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 245,
                                                            height: 107,
                                                            size: 16.58,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Nearshore_software_development_6a7131f56f.png"
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
                                        title: "Location. Location. Location",
                                        subtitle: "Minimize travel time for on-site meetings.",
                                        isTransparent: false,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "location-outline 2.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_location-outline 2.png",
                                                            hash: "thumbnail_location_outline_2_23b54e977d",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 11.55,
                                                            path: null,
                                                            url: "/uploads/thumbnail_location_outline_2_23b54e977d.png"
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
                                        title: "Cost benefits",
                                        subtitle: "Skilled, affordable talent. Rates are ~50% of a U.S. engineer with similar level of expertise, without compromising effectiveness or job quality.",
                                        isTransparent: false,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "cash-outline 2.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_cash-outline 2.png",
                                                            hash: "thumbnail_cash_outline_2_1cc136375c",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 10.34,
                                                            path: null,
                                                            url: "/uploads/thumbnail_cash_outline_2_1cc136375c.png"
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
                                        title: "Same time zone enables real time collaboration",
                                        subtitle: "Working on the same time zone allows for increased collaboration between LatAm and U.S. employees.",
                                        isTransparent: false,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "new_earth-outline.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_new_earth-outline.png",
                                                            hash: "thumbnail_new_earth_outline_20c75c4848",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 18.78,
                                                            path: null,
                                                            url: "/uploads/thumbnail_new_earth_outline_20c75c4848.png"
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
                                        title: "Seamless cultural integration",
                                        subtitle: "Strong English proficiency, good communication skills and cultural alignment (due to an Americanized economy) enables fast integration into onshore operations.",
                                        isTransparent: false,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Puzzle-outline.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Puzzle-outline.png",
                                                            hash: "thumbnail_Puzzle_outline_bd260184e8",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 12.05,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Puzzle_outline_bd260184e8.png"
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
                                        title: "Large talent pool of developers in LatAm",
                                        subtitle: "Access to a vast selection of well-prepared individuals across multiple technologies.",
                                        isTransparent: false,
                                        icon: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "new_talent-outline.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_new_talent-outline.png",
                                                            hash: "thumbnail_new_talent_outline_2d761d1399",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 156,
                                                            height: 156,
                                                            size: 15.03,
                                                            path: null,
                                                            url: "/uploads/thumbnail_new_talent_outline_2d761d1399.png"
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
                {
                    __typename: "InfoCardBoxEntity",
                    attributes: {
                        __typename: "InfoCardBox",
                        title: "Services",
                        subtitle: "We work under and agile methodology based on Staff Augmentation. Our service model includes 3 different options in order to provide the solution that best fits our client’s development needs.​",
                        label: "services-box",
                        bgColor: "#FFF",
                        haveAction: true,
                        actionLabel: "Read more",
                        actionRoute: "/services",
                        isUppercaseTitle: false,
                        info_cards: {
                            __typename: "InfoCardRelationResponseCollection",
                            data: [
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Nova",
                                        subtitle: "Project and development team fully managed by Novatech (in-house-projects)",
                                        isTransparent: false,
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
                                        }
                                    }
                                },
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Squad",
                                        subtitle: "Outsourcing of a development team to be fully manged by client's Product Owner",
                                        isTransparent: false,
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
                                        }
                                    }
                                },
                                {
                                    __typename: "InfoCardEntity",
                                    attributes: {
                                        __typename: "InfoCard",
                                        title: "Rocket",
                                        subtitle: "Boost of client's development capacity",
                                        isTransparent: false,
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
                                        }
                                    }
                                }, 
                            ]
                        }
                    }
                }, 
            ]
        },
        customer_carousels: {
            __typename: "CustomerCarouselRelationResponseCollection",
            data: [
                {
                    __typename: "CustomerCarouselEntity",
                    attributes: {
                        __typename: "CustomerCarousel",
                        title: "Our customers",
                        haveAction: true,
                        actionLabel: "Check our work",
                        actionRoute: "/our-work",
                        customers: {
                            __typename: "CustomerRelationResponseCollection",
                            data: [
                                {
                                    __typename: "CustomerEntity",
                                    attributes: {
                                        __typename: "Customer",
                                        name: "Cuscatlan",
                                        logo: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Cuscatlan.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Cuscatlan.png",
                                                            hash: "thumbnail_Cuscatlan_ad43b516ea",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 245,
                                                            height: 92,
                                                            size: 18.8,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Cuscatlan_ad43b516ea.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "CustomerEntity",
                                    attributes: {
                                        __typename: "Customer",
                                        name: "Banco Atlantida",
                                        logo: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "banco-atlantida-logo-red.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_banco-atlantida-logo-red.png",
                                                            hash: "thumbnail_banco_atlantida_logo_red_46250995ed",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 245,
                                                            height: 60,
                                                            size: 13.99,
                                                            path: null,
                                                            url: "/uploads/thumbnail_banco_atlantida_logo_red_46250995ed.png"
                                                        },
                                                        small: {
                                                            name: "small_banco-atlantida-logo-red.png",
                                                            hash: "small_banco_atlantida_logo_red_46250995ed",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 500,
                                                            height: 123,
                                                            size: 38.15,
                                                            path: null,
                                                            url: "/uploads/small_banco_atlantida_logo_red_46250995ed.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "CustomerEntity",
                                    attributes: {
                                        __typename: "Customer",
                                        name: "Hugo",
                                        logo: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Hugo.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Hugo.png",
                                                            hash: "thumbnail_Hugo_7d5081a737",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 168,
                                                            height: 156,
                                                            size: 15.31,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Hugo_7d5081a737.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "CustomerEntity",
                                    attributes: {
                                        __typename: "Customer",
                                        name: "Bancolombia",
                                        logo: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "Logo_Bancolombia.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_Logo_Bancolombia.png",
                                                            hash: "thumbnail_Logo_Bancolombia_a40a630ecd",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 245,
                                                            height: 58,
                                                            size: 14.89,
                                                            path: null,
                                                            url: "/uploads/thumbnail_Logo_Bancolombia_a40a630ecd.png"
                                                        },
                                                        medium: {
                                                            name: "medium_Logo_Bancolombia.png",
                                                            hash: "medium_Logo_Bancolombia_a40a630ecd",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 750,
                                                            height: 176,
                                                            size: 61.35,
                                                            path: null,
                                                            url: "/uploads/medium_Logo_Bancolombia_a40a630ecd.png"
                                                        },
                                                        small: {
                                                            name: "small_Logo_Bancolombia.png",
                                                            hash: "small_Logo_Bancolombia_a40a630ecd",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 500,
                                                            height: 118,
                                                            size: 37.45,
                                                            path: null,
                                                            url: "/uploads/small_Logo_Bancolombia_a40a630ecd.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    __typename: "CustomerEntity",
                                    attributes: {
                                        __typename: "Customer",
                                        name: "Unicomer",
                                        logo: {
                                            __typename: "UploadFileEntityResponse",
                                            data: {
                                                __typename: "UploadFileEntity",
                                                attributes: {
                                                    __typename: "UploadFile",
                                                    name: "grupo-unicomer.png",
                                                    formats: {
                                                        thumbnail: {
                                                            name: "thumbnail_grupo-unicomer.png",
                                                            hash: "thumbnail_grupo_unicomer_94bb8a1934",
                                                            ext: ".png",
                                                            mime: "image/png",
                                                            width: 245,
                                                            height: 110,
                                                            size: 27.87,
                                                            path: null,
                                                            url: "/uploads/thumbnail_grupo_unicomer_94bb8a1934.png"
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
var __webpack_exports__ = __webpack_require__.X(0, [675,339], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();