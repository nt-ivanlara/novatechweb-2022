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

/***/ 6497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ services),
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
;// CONCATENATED MODULE: ./src/queries/services.ts

const GET_SERVICE_LANDING = client_.gql`
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
                    info_card_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                bgColor
                                haveAction
                                actionLabel
                                actionRoute
                                isUppercaseTitle
                                background {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                info_cards(sort: "order") {
                                    data {
                                        attributes {
                                            title
                                            tabTitle
                                            subtitle
                                            isTransparent
                                            bullets
                                            icon {
                                                data {
                                                    attributes {
                                                        name
                                                        formats
                                                    }
                                                }
                                            }
                                            tabBackground {
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__(5722);
;// CONCATENATED MODULE: ./src/components/general/contact-form/ContactForm.tsx



const ContactForm = ()=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)({});
    const onSubmit = (event)=>{
        event.preventDefault();
        const json = (0,helpers/* toLowerJsonProps */.V)(JSON.stringify(state));
        console.log(json);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex items-start justify-center flex-col px-36 py-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-raleway font-bold text-2xl mb-9",
                children: "Ready to get started?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center flex-row w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: onSubmit,
                    className: "flex items-center justify-between w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            placeholder: "Email address",
                            className: "bg-[#EDEDF1] rounded-full text-[#8E90A6] outline-none py-3 px-5 w-full md:w-10/12 mr-4 font-raleway font-medium text-base"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
/* harmony default export */ const contact_form_ContactForm = (ContactForm);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/general/hero/Hero.tsx
var Hero = __webpack_require__(6216);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/services/banner/Banner.tsx





const BannerBox = (external_styled_components_default()).div`
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
    const hrRef = (0,external_react_.useRef)(`${"http://localhost:1337"}${heroFormats === null || heroFormats === void 0 ? void 0 : heroFormats.medium.url}`);
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref2 = bgFormats.large) === null || ref2 === void 0 ? void 0 : ref2.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    const heroClassName = external_clsx_default()({
        ["order-[1]"]: heroFirst,
        ["order-[2]"]: !heroFirst
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(BannerBox, {
        image: bgUri.current,
        className: "w-full px-14 py-12 overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid gap-3 grid-cols-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "pr-12 mb-9 font-raleway font-bold text-4xl text-[#45E4DB]",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-raleway font-medium text-xl text-white",
                            children: description
                        })
                    ]
                }),
                heroFormats ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                        styles: `relative bottom-[-4rem] right-[-4rem] ${heroClassName}`,
                        hrRef: hrRef.current,
                        width: heroFormats.large.width,
                        height: heroFormats.large.height,
                        alt: label,
                        priority: true
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${heroClassName} w-80 h-80 bg-green-500`
                })
            ]
        })
    }));
};
/* harmony default export */ const banner_Banner = (Banner);

// EXTERNAL MODULE: ./src/components/general/info-card/InfoCard.tsx + 1 modules
var InfoCard = __webpack_require__(7582);
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
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid gap-0 grid-cols-2 w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center flex-col bg-nt-bg-blue p-14",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-istok font-bold text-2xl text-center text-nt-orange mb-9",
                        children: title1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-raleway font-medium text-xl text-center text-white mb-9",
                        children: subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid gap-3 grid-cols-3 w-full",
                        children: data.map(({ attributes: { title , subtitle , icon , isTransparent ,  }  })=>/*#__PURE__*/ jsx_runtime_.jsx(InfoCard/* default */.Z, {
                                title,
                                subtitle: "",
                                icon,
                                isTransparent,
                                isHovered: true,
                                isUppercaseTitle: isUppercaseTitle
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

;// CONCATENATED MODULE: ./src/components/services/service-tabs/tabs/TabsContent.tsx




const TabsContent = ({ info_cards  })=>{
    const { data  } = info_cards;
    console.log("data", data);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map(({ attributes: { title , tabTitle , icon , tabBackground , bullets ,  }  }, index1)=>{
            var ref, ref1;
            const is = index1 % 2;
            const styles = external_clsx_default()({
                ["order-1"]: !is,
                ["order-0"]: is
            });
            const { formats  } = tabBackground === null || tabBackground === void 0 ? void 0 : (ref = tabBackground.data) === null || ref === void 0 ? void 0 : ref.attributes;
            const bgUri = `${"http://localhost:1337"}${(formats === null || formats === void 0 ? void 0 : (ref1 = formats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (formats === null || formats === void 0 ? void 0 : formats.thumbnail.url)}`;
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    const bgUri = (0,external_react_.useRef)(`${"http://localhost:1337"}${(bgFormats === null || bgFormats === void 0 ? void 0 : (ref1 = bgFormats.large) === null || ref1 === void 0 ? void 0 : ref1.url) ?? (bgFormats === null || bgFormats === void 0 ? void 0 : bgFormats.thumbnail.url)}`);
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

;// CONCATENATED MODULE: ./src/landings/ServiceLanding.tsx




const ServiceLanding = ({ data  })=>{
    const { banners , info_card_boxes  } = data.attributes;
    const serviceAttrs = banners.data[0].attributes;
    const infoCardsAttrs = info_card_boxes.data[0].attributes;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(banner_Banner, {
                ...serviceAttrs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(service_tabs_ServiceTabs, {
                ...infoCardsAttrs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(contact_form_ContactForm, {})
        ]
    }));
};
/* harmony default export */ const landings_ServiceLanding = (ServiceLanding);

;// CONCATENATED MODULE: ./pages/services.tsx





const Services = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NovaTech - Services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(landings_ServiceLanding, {
                data: data
            })
        ]
    }));
};
/* harmony default export */ const services = (Services);
async function getServerSideProps() {
    const { loading , error , data  } = await apollo/* apolloCon.query */.Y.query({
        query: GET_SERVICE_LANDING,
        variables: {
            label: "service-landing"
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
var __webpack_exports__ = __webpack_require__.X(0, [675,46,582], () => (__webpack_exec__(6497)));
module.exports = __webpack_exports__;

})();