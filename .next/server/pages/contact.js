"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
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

/***/ 5061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/queries/contact-us.ts

const GET_CONTACTUS_LANDING = client_.gql`
    query ($label: String) {
        landings(filters: { label: { eq: $label } }) {
            data {
                attributes {
                    contact_us {
                        data {
                            attributes {
                                title
                                fields
                                actionLabel
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

// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(5029);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useContactUs.ts
const useContactUs = ({ attributes  })=>{
    const { contact_us  } = attributes;
    const contactForm = contact_us.data.attributes;
    return {
        contactForm
    };
};
/* harmony default export */ const hooks_useContactUs = (useContactUs);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__(5722);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/contact-us/form-content/FormContent.tsx




const FormContent = ({ actionLabel , fields  })=>{
    const { form_fields  } = fields;
    const { 0: state , 1: setState  } = (0,external_react_.useState)({});
    const getIconUri = (icon)=>`${"http://localhost:1337"}${icon}`
    ;
    const onSubmit = (event)=>{
        event.preventDefault();
        const json = (0,helpers/* toLowerJsonProps */.V)(JSON.stringify(state));
        console.log(json);
    };
    const handleChange = (e)=>setState({
            ...state,
            [e.target.name]: e.target.value
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: onSubmit,
            className: "text-center",
            children: [
                form_fields.map(({ name , label , type , isTextArea , icon  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: !isTextArea ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                icon ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute z-10 top-[15px] left-[15px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: getIconUri(icon),
                                        width: 20,
                                        height: 20,
                                        alt: name,
                                        priority: true
                                    })
                                }) : null,
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    onChange: handleChange,
                                    name: name,
                                    type: type,
                                    className: "mb-7 w-full rounded-xl bg-[#31354A] text-white h-[50px] px-14 font-raleway drop-shadow-none outline-none",
                                    placeholder: label
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            onChange: handleChange,
                            name: name,
                            className: "mb-7 w-full rounded-xl bg-[#31354A] text-white pt-4 h-[150px] px-4 font-raleway drop-shadow-none outline-none",
                            placeholder: label
                        })
                    }, index)
                ),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: "bg-nt-orange py-4 px-20 mb-4 md:mb-0 mt-4 uppercase font-raleway text-white font-bold text-[12px] md:text-[16px] rounded-full",
                    children: actionLabel
                })
            ]
        })
    }));
};
/* harmony default export */ const form_content_FormContent = (FormContent);

;// CONCATENATED MODULE: ./src/components/contact-us/ContactForm.tsx




const FormBox = (external_styled_components_default()).div`
    background-image: url("${(p)=>p.image
}");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const ContactForm = ({ title , actionLabel , background , fields  })=>{
    var ref, ref1;
    const { formats: bgFormats  } = (background === null || background === void 0 ? void 0 : (ref = background.data) === null || ref === void 0 ? void 0 : ref.attributes) ?? {};
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    return(/*#__PURE__*/ jsx_runtime_.jsx(FormBox, {
        image: bgUri.current,
        className: "px-4 md:px-64 py-8 md:py-28",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-nt-bg-blue flex items-center justify-center flex-col py-8 md:py-12 px-4 md:px-24 rounded-xl max-w-[90vw] md:max-w-[900px] m-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "text-white font-bold font-raleway text-4xl mb-11",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(form_content_FormContent, {
                    actionLabel,
                    fields
                })
            ]
        })
    }));
};
/* harmony default export */ const contact_us_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./src/landings/ContactUsLanding.tsx




const ContactUsLanding = ({ data  })=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)(Object.assign({}, data));
    const { contactForm  } = hooks_useContactUs(state);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(contact_us_ContactForm, {
            ...contactForm
        })
    }));
};
/* harmony default export */ const landings_ContactUsLanding = (ContactUsLanding);

;// CONCATENATED MODULE: ./pages/contact.tsx





const ContactUs = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NovaTech - Contact Us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(landings_ContactUsLanding, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const contact = (ContactUs);
async function getServerSideProps() {
    const { loading , error , data  } = await apollo/* apolloCon.query */.Y.query({
        query: GET_CONTACTUS_LANDING,
        variables: {
            label: "contact-landing"
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
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(5061)));
module.exports = __webpack_exports__;

})();