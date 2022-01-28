module.exports = {
    mode: "jit",
    // purge: [
    //     "./public/**/*.html",
    //     "./src/**/*.{js,jsx,ts,tsx,vue}",
    // ],
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        backgroundSize: {
            'contain': 'contain',
            "half-size": "50%",
        },
        fontFamily: {
            raleway: ["Raleway", "sans-serif"],
            istok: ["Istok Web", "sans-serif"],
        },
        extend: {
            lineHeight: {
                complete: "100%",
            },
            colors: {
                "nt-orange": "#FF4C41",
                "nt-bg-blue": "#1F2234",
                "nt-card-blue": "#2A2D3E",
                "nt-aqua": "#45E4DB",
                "nt-glass": "rgba(255, 255, 255, 0.15)",
            },
        },
    },
    plugins: [],
};
