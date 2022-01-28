"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




const BannerBox = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
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
const SimpleBanner = ({ title , subtitle , description , hero , background , isFloating , haveAction , actionLabel , actionRoute , centered , styles  })=>{
    var ref, ref1, ref2, ref3;
    const { formats: heroFormats  } = (hero === null || hero === void 0 ? void 0 : (ref = hero.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref1 = background.data) === null || ref1 === void 0 ? void 0 : ref1.attributes) ?? {};
    const hrRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${"http://localhost:1337"}${(heroFormats === null || heroFormats === void 0 ? void 0 : (ref2 = heroFormats.medium) === null || ref2 === void 0 ? void 0 : ref2.url) ?? (heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.thumbnail.url)}`);
    const bgUri = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref3 = bgFormats.large) === null || ref3 === void 0 ? void 0 : ref3.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    const centerClassName = clsx__WEBPACK_IMPORTED_MODULE_3___default()({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerBox, {
        image: bgUri.current,
        className: `px-14 py-24 relative flex items-center ${centerClassName} min-h-[500px] ${styles} overflow-hidden bg-no-repeat bg-contain bg-right`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `grid gap-3 grid-cols-1 md:grid-cols-2`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-4 text-center md:text-left",
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
                            className: "font-raleway font-medium leading-complete text-[18px] pb-9",
                            children: description
                        }) : null
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleBanner);


/***/ })

};
;