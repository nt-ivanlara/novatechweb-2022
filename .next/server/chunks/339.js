"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 6216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);


const Hero = ({ styles , hrRef , width , height , alt , priority  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${styles}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: hrRef,
                width: width,
                height: height,
                alt: alt,
                priority: priority
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 7582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ info_card_InfoCard)
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
;// CONCATENATED MODULE: ./src/hooks/useInfoCard.ts

const useInfoCard = ({ title , subtitle , isTransparent , isUppercaseTitle , isHovered =false  })=>{
    const cardStyles = external_clsx_default()({
        ["bg-transparent"]: isTransparent,
        ["bg-nt-card-blue"]: !isTransparent,
        ["group hover:bg-white hover:text-nt-card-blue"]: isHovered && !isTransparent
    });
    const iconStyle = external_clsx_default()({
        ["w-[70px] mb-8"]: !isTransparent,
        ["w-[325px] h-[148px]"]: isTransparent
    });
    const infoCardStyle = external_clsx_default()({
        ["justify-items-start"]: !isTransparent,
        ["justify-center"]: isTransparent
    });
    const headingStyle = external_clsx_default()({
        ["uppercase"]: isUppercaseTitle,
        ["group-hover:text-nt-card-blue"]: isHovered
    });
    const titleMargin = external_clsx_default()({
        ["mb-5"]: subtitle,
        ["mb-0"]: !subtitle
    });
    return {
        titleMargin,
        headingStyle,
        infoCardStyle,
        iconStyle,
        cardStyles
    };
};
/* harmony default export */ const hooks_useInfoCard = (useInfoCard);

;// CONCATENATED MODULE: ./src/components/general/info-card/InfoCard.tsx





const InfoCardBox = (external_styled_components_default()).div`
    background-color: ${(p)=>p.bgColor
};
`;
const InfoCard = ({ title , subtitle , icon , isTransparent , isUppercaseTitle , isHovered =false , titleColor ="text-white"  })=>{
    var ref, ref1;
    const { titleMargin , headingStyle , infoCardStyle , iconStyle , cardStyles  } = hooks_useInfoCard({
        title,
        subtitle,
        isTransparent,
        isUppercaseTitle,
        isHovered
    });
    const { formats  } = icon === null || icon === void 0 ? void 0 : (ref = icon.data) === null || ref === void 0 ? void 0 : ref.attributes;
    const hrRef = (0,external_react_.useRef)(`${""}${formats === null || formats === void 0 ? void 0 : (ref1 = formats.thumbnail) === null || ref1 === void 0 ? void 0 : ref1.url}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full rounded-2xl flex items-center ${infoCardStyle} flex-col ${cardStyles} py-4 md:py-7 px-4`,
        children: [
            formats ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `relative ${iconStyle}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: hrRef.current,
                    width: formats.thumbnail.width,
                    height: formats.thumbnail.height,
                    alt: `${title}, ${subtitle}`,
                    priority: true
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[70px] h-[70px] bg-white rounded-2xl"
            }),
            !isTransparent ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: `${headingStyle} text-center ${titleColor} font-raleway text-xl font-bold ${titleMargin}`,
                        children: title
                    }),
                    subtitle ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `${headingStyle} text-center ${titleColor} font-raleway text-base font-medium leading-8`,
                        children: subtitle
                    }) : null
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const info_card_InfoCard = (InfoCard);


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const TechCard = ({ label , name , logo  })=>{
    var ref, ref1;
    // console.log(logo);
    const { formats  } = logo === null || logo === void 0 ? void 0 : (ref = logo.data) === null || ref === void 0 ? void 0 : ref.attributes;
    const hrRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${""}${formats === null || formats === void 0 ? void 0 : (ref1 = formats.thumbnail) === null || ref1 === void 0 ? void 0 : ref1.url}`);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[rgb(42,45,62)] w-full h-[230px] rounded-xl flex items-center justify-center flex-col",
        children: [
            formats ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-[70px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    src: hrRef.current,
                    width: formats.thumbnail.width,
                    height: formats.thumbnail.height,
                    alt: name,
                    priority: true
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[70px] h-[70px] bg-white rounded-2xl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-[#45E4DB] text-xl mt-2",
                children: name
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechCard);


/***/ })

};
;