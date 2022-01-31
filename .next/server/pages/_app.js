"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/mock-data/navBarItems.ts
const navBarItems = [
    {
        label: 'Services',
        route: '/services'
    },
    {
        label: 'Nearshore',
        route: '/nearshore'
    },
    {
        label: 'About Us',
        route: '/about-us'
    },
    {
        label: 'Contact Us',
        route: '/contact'
    }, 
];

;// CONCATENATED MODULE: ./src/layout/navBar/NavBar.tsx






const NavBar = ()=>{
    const { pathname , push  } = (0,router_namespaceObject.useRouter)();
    const hrRef = (0,external_react_.useRef)(`${""}/uploads/Novatech_logo_orange_86fed35a20.svg`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between px-10 py-7",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "brand cursor-pointer",
                onClick: ()=>push("/")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative h-14 w-52",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: hrRef.current,
                        layout: "fill",
                        objectFit: "contain",
                        alt: "Novatech, Logo",
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "items",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex",
                    children: navBarItems.map(({ label , route  })=>{
                        const styles = external_clsx_default()({
                            ["text-nt-orange"]: pathname === route,
                            ["text-black"]: pathname !== route
                        });
                        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>push(route)
                            ,
                            className: `${styles} font-raleway cursor-pointer px-3 text-[16px] text-center font-medium hover:text-[#FF4C41] transition-colors`,
                            children: label
                        }, label));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const navBar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/general/logos/NtWhiteLogo.tsx



const NtWhiteLogo = ()=>{
    const hrRef = (0,external_react_.useRef)(`${""}/uploads/Novatech_logo_white_9de520791f.svg`);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative h-14 w-52 mb-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: hrRef.current,
            layout: "fill",
            objectFit: "contain",
            alt: "Novatech, Logo",
            priority: true
        })
    }));
};
/* harmony default export */ const logos_NtWhiteLogo = (NtWhiteLogo);

;// CONCATENATED MODULE: ./src/layout/footer/FooterTitle.tsx


const FooterTitle = ({ label , upper  })=>{
    const styles = external_clsx_default()({
        ["uppercase"]: upper
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
            className: `${styles} font-raleway font-bold text-2xl text-white`,
            children: label
        })
    }));
};
/* harmony default export */ const footer_FooterTitle = (FooterTitle);

;// CONCATENATED MODULE: ./assets/images/mark.svg
/* harmony default export */ const mark = ({"src":"/_next/static/media/mark.7d483023.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./assets/images/phone.svg
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.2745b970.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./assets/images/envelop.svg
/* harmony default export */ const envelop = ({"src":"/_next/static/media/envelop.6c7a4858.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./assets/social-networks/LinkedIn.svg
/* harmony default export */ const LinkedIn = ({"src":"/_next/static/media/LinkedIn.57b373a7.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./assets/social-networks/FB.svg
/* harmony default export */ const FB = ({"src":"/_next/static/media/FB.246bc0b8.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./assets/social-networks/IG.svg
/* harmony default export */ const IG = ({"src":"/_next/static/media/IG.5fb85fce.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./assets/social-networks/YT.svg
/* harmony default export */ const YT = ({"src":"/_next/static/media/YT.9cb0616f.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./src/layout/footer/SocialNetworks.tsx






const links = [
    {
        name: "LinkedIn",
        src: LinkedIn,
        link: "#!,"
    },
    {
        name: "Facebook",
        src: FB,
        link: "#!,"
    },
    {
        name: "Instagram",
        src: IG,
        link: "#!,"
    },
    {
        name: "YouTube",
        src: YT,
        link: "#!,"
    }, 
];
const SocialNetworks = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex items-center justify-start",
        children: links.map(({ name , src , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "mr-4",
                    target: "_blank",
                    href: link,
                    rel: "noreferrer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: src,
                        width: 40,
                        height: 40,
                        alt: `NovaTech-${name}`
                    })
                })
            }, index)
        )
    }));
};
/* harmony default export */ const footer_SocialNetworks = (SocialNetworks);

;// CONCATENATED MODULE: ./src/layout/footer/Footer.tsx












const Footer = ()=>{
    const { pathname , push  } = (0,router_namespaceObject.useRouter)();
    const listStyleRef = (0,external_react_.useRef)("text-white font-raleway font-medium text-base pb-4 flex items-start justify-between md:justify-start");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "py-9 px-14 bg-[#1F2234]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 py-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-start justify-start flex-col mb-10 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(logos_NtWhiteLogo, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_SocialNetworks, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-10 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterTitle, {
                                label: "Site map",
                                upper: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-3 pt-5",
                                children: navBarItems.map(({ label , route  })=>{
                                    const styles = external_clsx_default()({
                                        ["text-nt-orange"]: pathname === route,
                                        ["text-white"]: pathname !== route
                                    });
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>push(route)
                                        ,
                                        className: `${styles} pb-4 cursor-pointer font-raleway font-medium text-base hover:text-nt-orange transition-colors`,
                                        children: label
                                    }, label));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-10 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterTitle, {
                                label: "Contact us",
                                upper: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "pt-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `${listStyleRef.current}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-[50px] md:w-[24px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: mark,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "Novatech"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-8",
                                                children: "Edificio Insigne, Av. Las Magnolias, Nivel 11-09, San Salvador"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: listStyleRef.current,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-[50px] md:w-[24px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: phone,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "Novatech"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "ml-8",
                                                children: [
                                                    "(503) 2130-0865 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " (503) 7780-6782"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: listStyleRef.current,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-[50px] md:w-[24px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: envelop,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "Novatech"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:contacto@novatechdev.com",
                                                className: "ml-8",
                                                children: "contacto@novatechdev.com"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full border-t border-white text-white text-center pt-8",
                children: "\xa9 Novatech. All rights reserved."
            })
        ]
    }));
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/layout/content-panel/ContentPanel.tsx



const ContentPanel = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navBar_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
        ]
    }));
};
/* harmony default export */ const content_panel_ContentPanel = (ContentPanel);

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(content_panel_ContentPanel, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(4291)));
module.exports = __webpack_exports__;

})();